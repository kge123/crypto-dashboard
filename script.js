// const rp = require('request-promise');
// const requestOptions = {
//   method: 'GET',
//   uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
    
//   qs: {
//     'start': '1',
//     'limit': '5000',
//     'convert': 'USD'
//   },
//   headers: { 
//     'X-CMC_PRO_API_KEY': 'c94fbe3f-5b90-4820-8e7e-f8792db7d915'
//   },
//   json: true,
//   gzip: true
// };

// rp(requestOptions).then(response => {
//   console.log('API call response:', response);
// }).catch((err) => {
//   console.log('API call error:', err.message);
// });