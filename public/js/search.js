async function searchFormHandler(e) {
    e.preventDefault()
    //make sure that the search input ID matches the ID on line 3
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
   const prices = await fetch('/api/price/feed')
   .then(response => {
       return response.json()
   })
    //console.log of input
    let x = document.getElementsByClassName('coin');
     console.log({prices}) 
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }


}
document
    .querySelector('.search-form')
    .addEventListener('submit', searchFormHandler);