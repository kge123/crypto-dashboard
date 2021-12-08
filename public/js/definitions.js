const getdefinitions = async () => {
    let definiciones = await fetch("/api/price/definitions")
        .then(response => {
            return response.json()
        })
    createTable(definiciones)
  }; 

  function createTable(definiciones) {
    console.log(definiciones)
    var table = document.createElement('table')
    for (var i = 0; i < definiciones.length; i++) {
        if (definiciones[i].name != null) {
        var tr = document.createElement('tr')
        var td0 =document.createElement('td')
        var text0= document.createTextNode(definiciones[i].name)
        var td1 = document.createElement('td')
        var text1 = document.createTextNode(definiciones[i].coin_ticker)
        var td2 = document.createElement('td')
        var text2 = document.createTextNode(definiciones[i].definition)
        
        
        td0.appendChild(text0)
        td1.appendChild(text1)
        td2.appendChild(text2)
        
        
        tr.appendChild(td0)
        tr.appendChild(td1)
        tr.appendChild(td2)
       
        
        table.appendChild(tr)
        }
    }
    document.getElementById('DEF').appendChild(table)
}

window.onload = function() {
    getdefinitions()
}

