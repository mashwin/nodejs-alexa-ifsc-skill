let request = require('request');

// method to retrieve lat and lng for city
const getBankDetails = (bank, branch) => {
    return new Promise((resolve, reject) => {
        request({
            uri:`http://nodejs-express-async-await-ifsc-dev.us-west-2.elasticbeanstalk.com/api/banks?bank=${bank}&branch=${branch}`,
            method: 'GET',
            json: true
        }, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                resolve(body);
            } else {
                reject(error);
            }
        });
    });
}

module.exports = {
    getBankDetails
}