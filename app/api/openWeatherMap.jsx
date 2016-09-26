var axios = require('axios');
import WEATHER_API_KEY from '../../apiKey.js';

// const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=' + WEATHER_API_KEY.key + '&units=imperial';
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/forecast/daily?appid=' + WEATHER_API_KEY.key + '&units=imperial&cnt=7';
// console.log(WEATHER_API_KEY.key);

module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location); // encodes string location properly.  Avoids %20
    var url = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`; //template literal to add location

    return axios.get(url).then(function(res){ //promise for success.  Axios is the promise
      console.log("here is the data", res);

      if (res.data.cod !== "200"){ //http status code & error message
        throw new Error(res.data.message)
      } else {
        return res.data;
        console.log(res.data);
      }
    }, function(res){
      throw new Error(res.data.message);
    })
  }
}
