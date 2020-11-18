const express = require ('express');

const axios = require('axios');

// Create the app
const app = express();

// create a PORT:
const PORT = process.env.PORT || 3000;

// create a route
app.get('/', (req, res) => {
  // access API endpoint from Github:
  axios.get('https://api.github.com/users/andrewemcmanus')
  .then(response => {
    const andrewInfo = {
      login: response.data.login,
      url: response.data.html_url,
      name: response.data.name
    };
    console.log(andrewInfo);
    res.send(andrewInfo);
  })
})

app.get('/nitish', (req, res) => {
  // access API endpoint from Github:
  axios.get('https://api.github.com/users/nitishdayal')
  .then(response => {
    const nitishInfo = {
      login: response.data.login,
      url: response.data.html_url,
      name: response.data.name
    };
    console.log(nitishInfo);
    res.send(nitishInfo);
  })
})

app.get('/alan', (req, res) => {
  // access API endpoint from Github:
  axios.get('https://api.github.com/users/delayedaa')
  .then(response => {
    const alanInfo = {
      login: response.data.login,
      url: response.data.html_url,
      name: response.data.name
    };
    console.log(alanInfo);
    res.send(alanInfo);
  })
})

app.get('/pete', (req, res) => {
  // access API endpoint from Github:
  axios.get('https://api.github.com/users/pmacaluso3')
  .then(response => {
    const peteInfo = {
      login: response.data.login,
      url: response.data.html_url,
      name: response.data.name
    };
    console.log(peteInfo);
    res.send(peteInfo);
  })
})

app.get('/jackson', (req, res) => {
  // access API endpoint from Github:
  axios.get('https://api.github.com/users/jtreeves')
  .then(response => {
    const jacksonInfo = {
      login: response.data.login,
      url: response.data.html_url,
      name: response.data.name
    };
    console.log(jacksonInfo);
    res.send(jacksonInfo);
  })
})

// Listen on a port:
app.listen(PORT, () => {
  console.log(`You're vibing to the sounds on PORT ${PORT}`);
})

// this is what axios is doing:
// function myAxios(apiEndpoint) {
//   fetch('api endpoint')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data); // sends you back one object
//   })
// }
