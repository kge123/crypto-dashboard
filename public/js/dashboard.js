const getPrices = async () => {
    let prices = await fetch('/api/price/feed')
        .then(response => {
            return response.json()
        })
    createTable(prices)
  };

function createTable(prices) {
    console.log(prices)
    var table = document.createElement('table')
    for (var i = 0; i < prices.length; i++) {
        if (prices[i].name != null) {
        var tr = document.createElement('tr')
        var td0 =document.createElement('td')
        var text0= document.createTextNode(prices[i].rank)
        var td1 = document.createElement('td')
        var text1 = document.createTextNode(prices[i].name)
        var td2 = document.createElement('td')
        var text2 = document.createTextNode(prices[i].price)
        var td3= document.createElement('td')
        var text3= document.createTextNode(prices[i].circulatingSupply)
        var td4= document.createElement('td')
        var text4= document.createTextNode(prices[i].volume)
        td0.appendChild(text0)
        td1.appendChild(text1)
        td2.appendChild(text2)
        td3.appendChild(text3)
        td4.appendChild(text4)
        tr.appendChild(td0)
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        table.appendChild(tr)
        }
    }
    document.getElementById('APIDATA').appendChild(table)
}

window.onload = function() {
    getPrices()
}