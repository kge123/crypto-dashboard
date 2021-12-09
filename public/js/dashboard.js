const getPrices = async () => {
  let prices = await fetch("/api/price/feed").then((response) => {
    return response.json();
  });
  createTable(prices);
};
var indexStart = 1;
function createTable(prices) {
  console.log(prices);
  var table = document.createElement("table");
  for (var i = 0; i < prices.length; i++) {
    //
    var tr = document.createElement("tr");
    var td0 = document.createElement("td");

    td0.textContent = indexStart++;
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");

    var td3 = document.createElement("td");

    var td4 = document.createElement("td");

    if (prices[i].name != null) {
      td1.textContent = prices[i].name;
      td2.textContent = prices[i].price;
      td3.textContent = prices[i].circulatingSupply;
      td4.textContent = prices[i].volume;
    } else {
      td1.textContent = prices[i].rank;
      td2.textContent = "";
      td3.textContent = "";
      td4.textContent = "";
    }

    tr.appendChild(td0);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    table.appendChild(tr);
    // }
  }
  document.getElementById("APIDATA").appendChild(table);
}

window.onload = function () {
  getPrices();
};
