const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=ec8092c5e8888945d0a198a0225e5999&query=${latitude},${longitude}&units=f`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. The current temperature is '
                + body.current.temperature +
                ' degrees. It feels like ' + body.current.feelslike + 
                ' degrees.')
        }
    })
}

module.exports = forecast