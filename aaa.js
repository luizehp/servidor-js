const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://free-nba.p.rapidapi.com/teams',
  params: {page: '0'},
  headers: {
    'X-RapidAPI-Key': '7e477d4165mshacff0309ab49449p10f621jsnec892342174b',
    'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
  }
};

try {
	axios
    .request(options)
    .then(async (response) => {
        async function print(response){
            console.log(await response.data)
        }
    print(response)
})
} catch (error) {
	console.error(error);
}