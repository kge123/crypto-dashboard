
const axios= require('axios')
const cheerio = require('cheerio')
const router = require('express').Router();
const definitions = require('../../seeds/coinDefinitions.json')
async function pricefeed(){
    try{
        const URL= 'https://coinmarketcap.com/'

        const {data}= await axios({
            method: 'GET',
            url: URL,

        })

        const $ = cheerio.load(data)
        const elemselector= '#__next > div > div.main-content > div.sc-57oli2-0.comDeo.cmc-body-wrapper > div > div > div.h7vnx2-1.bFzXgL > table > tbody > tr'

        const key=[
            'rank',
            'name',
            'price',
            '24h',
            '7d',
            'marketcap',
            'circulatingSupply',
            'volume'
            
        ]

        const coinArr =[]

        $(elemselector).each((parentIdx, parentElem)=>{
            let keyidx = 0
            const coinobj = {}
            
            if(parentIdx <= 20){
                $(parentElem).children().each((childIdx, childElem)=>{
                let textvalue = $(childElem).text()

                if (keyidx === 1 || keyidx ===  6){
                    textvalue= $('p:first-child', $(childElem).html()).text()
                }
                if (textvalue){
                    coinobj[key[keyidx]]=textvalue
                    

                keyidx++
                   
                }
            })
            coinArr.push(coinobj)
        
        }
        })
        // console.log(coinArr)
    return coinArr
    } catch(err){
        console.log(err)
    }
}


router.get('/feed', async (req,res)=>{
    try{
        const pricefeedval= await pricefeed()
        res.json(200, pricefeedval)
        // res.status(200).json(pricefeedval)
        // return res.status(200).json({
        //     result:pricefeedval,
        // })
    }
    catch(err){
        return res.status(500).json({
            err: err.toString(),
        })
    }
})

router.get('/definitions', async (req,res)=>{
    try{
        res.json(200, definitions)
    }
    catch(err){
        return res.status(500).json({
            err: err.toString(),
        })
    }
})
module.exports = router;






 













