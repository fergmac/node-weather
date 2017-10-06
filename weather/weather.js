const request = require('request');

var getWeather = (lat, lng, callback) => {

    request({
        url: `https://api.darksky.net/forecast/708e2cd76b199d4b357da3aa9b66b36a/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        } else {
            callback('Unable to fetch weather');
        }
    });
}

module.exports.getWeather = getWeather;