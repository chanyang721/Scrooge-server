const { category, money } = require('../../models');
const { isAuthorized } = require("../functions");
const sequelize = require("sequelize");
const Op = sequelize.Op;

module.exports = async (req, res) => {
    const { id, message, memo } = req.body
    const data = isAuthorized(req);
    if (id) {
        try{
            if(data){
                let bottom = [];
                const categoryInfo = await category.findAll({
                    attributes:["id", "emoji"],
                    include: [{ model: money, attributes: ["id", "cost", "date", "memo"] }],
                    where: { id, userId: data.id },
                    raw: true
                })
                for(let i = 0; i < categoryInfo.length; i++){
                    bottom.push({
                        id: categoryInfo[i].id,
                        emoji: categoryInfo[i].emoji,
                        moneyId: categoryInfo[i]['money.id'],
                        cost: categoryInfo[i]['money.cost'],
                        date: categoryInfo[i]['money.date'],
                        memo: categoryInfo[i]['money.memo']
                    })
                }
                return res.status(200).send({ data: bottom, message: "카테고리 정렬" })
            }
            else{
                console.log(err);
                return res.status(500).send({ message: "We Don't Know" });
            }
        }
        catch(err){
            console.log(err)
        }
    }
    else if (message === "날짜순 정렬") {
        try{
            if(data){
                let bottom = [];
                const categoryInfo = await category.findAll({
                    attributes:["id", "emoji"],
                    include: [{ model: money, attributes: ["id", "cost", "date", "memo"] }],
                    order: [[ sequelize.col("date"), "DESC" ]],
                    where: { userId: data.id },
                    raw: true
                })
                for(let i = 0; i < categoryInfo.length; i++){
                    bottom.push({
                        id: categoryInfo[i].id,
                        emoji: categoryInfo[i].emoji,
                        moneyId: categoryInfo[i]['money.id'],
                        cost: categoryInfo[i]['money.cost'],
                        date: categoryInfo[i]['money.date'],
                        memo: categoryInfo[i]['money.memo']
                    })
                }
                return res.status(200).send({ data: bottom, message: "날짜순 정렬" })
            }
            else{
                console.log(err);
                return res.status(500).send({ message: "We Don't Know" });
            }
        }
        catch (err) {
            console.log(err)
        }
    }
    else if (memo) {
        try{
            if(data){
                let bottom = [];
                const categoryInfo = await category.findAll({
                    attributes:["id", "emoji"],
                    include: [{ model: money, attributes: ["id", "cost", "date", "memo"], where: { memo: { [Op.like]: `%${memo}%` }}}],
                    where: { userId: data.id },
                    raw: true
                })

                for(let i = 0; i < categoryInfo.length; i++){
                    bottom.push({
                        id: categoryInfo[i].id,
                        emoji: categoryInfo[i].emoji,
                        moneyId: categoryInfo[i]['money.id'],
                        cost: categoryInfo[i]['money.cost'],
                        date: categoryInfo[i]['money.date'],
                        memo: categoryInfo[i]['money.memo']
                    })
                }
                return res.status(200).send({ data: bottom, message: "메모 정렬" })
            }
            else{
                console.log(err);
                return res.status(500).send({ message: "We Don't Know" });
            }
        }
        catch (err) {
            console.log(err)
        }
    }
}