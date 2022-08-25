const express = require("express");
const history = require("../dummy/history.json")
const { User,Comment } = require("../models");
const router = express.Router();

const TYPE = ["","제작","유통","공식판매","중고거래"];
const PLATFORM = ["","자체유통","쿠팡","옥션","번개장터","당근마켓","크림","중고나라","네이버"]

router.post("/", async (req, res, next) => {
      const response = await Promise.all(history.map( async (el)=>{
            const seller = await User.findOne({
            where: { id : el.sellerId },
            });

            const buyer = await User.findOne({
            where: { id : el.buyerId },
            });
            
            console.log(el.comments.buyersComments)
            const buyersComment = await Comment.findOne({
            where: { id : el.comments.buyersComments.commentId },
            });
            
            const sellersComment = await Comment.findOne({
            where: { id : el.comments.sellersComment.commentId },
            });

            const result = {
                  tradeCode:el.tradeCode,
                  itemCode:el.itemCode,
                  platform: PLATFORM[el.platform],
                  traded:el.traded,
                  type: TYPE[el.type],
                  seller: seller.name,
                  buyer :buyer.name,
                  comments:{
                        sellersComment:{
                        owner:seller.name,
                        content:sellersComment.content,
                        imgSrc:sellersComment.imageSrc,
                        },
                        buyersComment:{
                        owner:buyer.name,
                        content:buyersComment.content,
                        imgSrc:buyersComment.imageSrc,
                        }
                  }
            }
            return result;

      }))

      return res.status(200).json(response);
});
module.exports = router;
