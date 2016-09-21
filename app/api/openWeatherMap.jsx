var axios = require('axios');
import WEATHER_API_KEY from '../../apiKey.js'

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=' + WEATHER_API_KEY.key + '&units=imperial';

console.log(WEATHER_API_KEY.key);

module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var url = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(url).then(function(res){
      console.log("here is the data", res);
      if (res.data.cod && res.data.message){
        throw new Error(res.data.message)
      } else {
        return res.data.main.temp;
      }
    }, function(res){
      throw new Error(res.data.message);
    })
  }
}
