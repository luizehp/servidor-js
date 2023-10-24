const axios = require('axios');

/* const teams = {
  method: 'GET',
  url: 'https://basketball-data.p.rapidapi.com/tournament/info',
  params: {tournamentId: '10'},
  headers: {
    'X-RapidAPI-Key': '7e477d4165mshacff0309ab49449p10f621jsnec892342174b',
    'X-RapidAPI-Host': 'basketball-data.p.rapidapi.com'
  }
}; */

const games = {
    method: 'GET',
    url: 'https://free-nba.p.rapidapi.com/games',
    params: {
      page: '0',
      per_page: '25'
    },
    headers: {
      'X-RapidAPI-Key': '7e477d4165mshacff0309ab49449p10f621jsnec892342174b',
      'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
    }
  };

try {
	axios
    .request(games)
    .then(async (response) => {
        async function print(response){
            console.log(await response.data)
        }
    print(response)
})
} catch (error) {
	console.error(error);
}