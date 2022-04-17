const axios = require('axios');

// test axios to handle promise 
axios.get('https://www.wikipedia.org')
    .then((response) => {
        console.log(response);
    }).catch((err) => {
        console.log(err);
    }).then(()=>{
        console.log("All done!");
    });
