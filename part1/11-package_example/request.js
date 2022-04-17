const axios = require('axios');

// test axios to handle promise 
axios.get('https://wwww.google.com')
    .then((response) => {
        console.log(response);
    }).catch((err) => {
        console.log(err);
    }).then(()=>{
        console.log("All done!");
    });
