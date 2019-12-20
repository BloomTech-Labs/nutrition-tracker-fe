// sets default backend URL to `master` backend environment URL

// to set a custom backendURL, set the .env variable, `REACT_APP_backendURL`

// do not make changes to this URL unless you are updating the master
// backend URL address

const backendURL =
  process.env.REACT_APP_backendURL || `https://nutri-journal.herokuapp.com`;

module.exports = { backendURL };
