let request = require('request');
require('dotenv').config();
const { arrBanks } = require('./banks');

// method to retrieve lat and lng for city
const getBankDetails = (bank, branch) => {
    return new Promise((resolve, reject) => {
        request({
            uri: `http://nodejs-express-async-await-ifsc-dev.us-west-2.elasticbeanstalk.com/api/banks?bank=${bank}&branch=${branch}`,
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

const getLocation = (branch) => {
    return new Promise((resolve, reject) => {
        request({
            uri: 'https://maps.googleapis.com/maps/api/geocode/json?',
            method: 'POST',
            json: true,
            qs: {
                address: branch,
                key: process.env.GOOGLE_MAPS_API_KEY
            }
        }, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                resolve(body.status);
            } else {
                reject(error);
            }
        });
    });
}

// check if bank is valid
isValidBank = (bankName) => {
    let flg = false;
    for (let i = 0; i < arrBanks.length; i++) {
        let str = arrBanks[i];
        if (str.includes(bankName.toUpperCase())) {
            flg = true;
        }
    }

    return flg;
}

module.exports = {
    getBankDetails,
    getLocation,
    isValidBank
}