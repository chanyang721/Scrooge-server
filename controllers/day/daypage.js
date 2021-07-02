const { money, category } = require('../../models');
const { isAuthorized } = require("../functions");

module.exports = async (req, res) => {

        const data = isAuthorized(req);
    
        if(data){
            let month = new Date().getMonth()
            const categoryInfos = await category.findAll({ // 해당 유저의 카테고리 & 머니 정보를 가져옴
                attributes: ["emoji", "id", "categoryname"],
                include: [{ model: money, attributes: ["id", "cost", "date", "memo", "createdAt"] }],
                where: { userId: data.id }, raw: true }
            );

            console.log(categoryInfos)
            const bottom = await category.findAll({ // 해당 유저의 머니 테이블 정보를 가져옴 
                include: [{ model: money, attributes: ["id", "cost", "date", "memo"] }],
                where: { userId: data.id }, raw: true });
            
            const categoryList = await category.findAll({
                attributes: ["id", "categoryname"],
                where: { userId: data.id }});
    
            let monthlyUsed = 0;
            let exMonthlyUsed = 0;
            let monthlyBudget = 0;
    
            if(!categoryInfos){
                return res.status(200).send({ 
                    data: { 
                        top: [],
                        bottom: [],
                        categoryList
                    }});
            }
            if(!categoryInfos[0]["money.cost"]){
                return res.status(200).send({ 
                    data: { 
                        top: [],
                        bottom: [],
                        categoryList
                    }});
            }
            else{
            const categorymonth = categoryInfos.filter(el => el["money.createdAt"].getMonth() === month);
            const categoryexmonth = categoryInfos.filter(el => el["money.createdAt"].getMonth() === month - 1);

                if(categorymonth.length !== 0){ // 이번 달 지출 정보가 하나라도 있으면
                    if(categorymonth[0]["money.cost"] === undefined){
                        monthlyUsed = 0;
                        monthlyBudget = 0;
                    }
                    else{ // 지출 정보가 없으면
                        const costs = categorymonth.map(el => el["money.cost"])
                        for(let i = 0; i < costs.length; i++){
                            monthlyUsed = monthlyUsed + costs[i]
                        }

                        const budgets = categorymonth.map(el => el.budget)
                        for(let i = 0; i < budgets.length; i++){
                            monthlyBudget = monthlyBudget + budgets[i]
                        }
                    }
                }

                if(categoryexmonth.length !== 0){ // 이전 달 지출 정보가 하나라도 있으면
                    if(categoryexmonth[0]["money.cost"] === undefined){
                        exMonthlyUsed = 0;
                    }
                    else{
                        const exCosts = categoryexmonth.map(el => el["money.cost"])
                        for(let i = 0; i < exCosts.length; i++){
                            exMonthlyUsed = exMonthlyUsed + exCosts[i]
                        }
                    }
                }

                if(categorymonth.length !== 0 && categoryexmonth.length !== 0){
                    if(categorymonth[0].money.length === 0 && categoryexmonth[0].money.length === 0){
                        monthlyBudget = 0;
                        monthlyUsed = 0;
                        exMonthlyUsed = 0;
                    }
                    else{
                        const costs = categorymonth.map(el => el["money.cost"])
                        for(let i = 0; i < costs.length; i++){
                            monthlyUsed = monthlyUsed + costs[i]
                        }
    
                        const budgets = categorymonth.map(el => el.budget)
                        for(let i = 0; i < budgets.length; i++){
                            monthlyBudget = monthlyBudget + budgets[i]
                        }
                        
                        const exCosts = categoryexmonth.map(el => el["money.cost"])
                        for(let i = 0; i < exCosts.length; i++){
                            exMonthlyUsed = exMonthlyUsed + exCosts[i]
                        }
                    }
                }
            }
            
            res.status(200).send({ 
                data: { 
                    top: { monthlyBudget, monthlyUsed, exMonthlyUsed },
                    bottom,
                    categoryList
                }});
        }
    
        else{
            console.log(err);
            return res.status(500).send({ message: "We Don't Know" });
        }
    
}