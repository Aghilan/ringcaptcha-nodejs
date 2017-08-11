var request = require("request");

var Ringcaptcha = {
    app_key: "",
    api_key: "",
    secret_key: "",
    check: function (req, res) {
        console.log("Welcome to ringcaptcha-nodejs");
    },
    /**
     * Sending a PIN Code.
     *
     */

    sendingPINCode: function (data, res) {

        var mobile = data.country_code + data.mobile;
        var options = {method: 'POST',
            url: 'https://api.ringcaptcha.com/' + this.api_key + '/code/' + data.service,
            headers:
                    {
                        'cache-control': 'no-cache',
                        'content-type': 'application/x-www-form-urlencoded'},
            form: {app_key: this.app_key, phone: mobile, api_key: this.api_key}};

        request(options, function (error, response, body) {
            if (error)
                throw new Error(error);
            res(body);
        });

    },
    /**
     * Join meating on BBB.
     *
     */
    join: function (data, res) {

        var apiName = 'join';
        var api = 'api/' + apiName + '?';
        var counter = 0, getData = '';
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                //console.log(key + data[key]);
                var symbl = '&';
                if (counter == 0) {
                    var symbl = '';
                }
                getData += symbl + key + '=' + data[key];
                counter++;
            }
        }
        var shData = sha1(apiName + getData + this.salt);
        var finalUrl = this.url + api + getData + '&checksum=' + shData;
        console.log(finalUrl);
        unirest.get(finalUrl)
                .end(function (response) {
                    try {
                        //var json = parser.toJson(response.body);
                        res({status: true, msg: '', data: finalUrl});
                    } catch (err) {
                        res({status: false, msg: err, data: []});
                    }
                });
    },
    /**
     * Check meating is running on BBB.
     *
     */
    running: function (data, res) {

        var apiName = 'isMeetingRunning';
        var api = 'api/' + apiName + '?';

        var getData = this.dataToUrl(data);
        var shData = sha1(apiName + getData + this.salt);
        var finalUrl = this.url + api + getData + '&checksum=' + shData;
        unirest.get(finalUrl)
                .end(function (response) {
                    try {
                        //console.log(response);
                        var json = parser.toJson(response.body);
                        //res.send({status: true, msg: '', data: json});
                        json = JSON.parse(json);
                        //console.log(typeof json);

                        res({status: json["response"]["running"], msg: '', data: json});
                    } catch (err) {
                        //res.send({status: false, msg: err, data: []});
                        res({status: false, msg: err, data: []});
                    }
                });
    },
    /**
     * get meeting info on BBB.
     *
     */
    getMeetingInfo: function (data, res) {

        var apiName = 'getMeetingInfo';
        var api = 'api/' + apiName + '?';

        var getData = this.dataToUrl(data);
        var shData = sha1(apiName + getData + this.salt);
        var finalUrl = this.url + api + getData + '&checksum=' + shData;
        unirest.get(finalUrl)
                .end(function (response) {
                    try {
                        //console.log(response);
                        var json = parser.toJson(response.body);
                        //res.send({status: true, msg: '', data: json});
                        json = JSON.parse(json);
                        //console.log(typeof json);

                        res({status: true, msg: '', data: json});
                    } catch (err) {
                        //res.send({status: false, msg: err, data: []});
                        res({status: false, msg: err, data: []});
                    }
                });
    },
    /**
     * get meeting Recordings on BBB.
     *
     */
    getRecordings: function (data, res) {

        var apiName = 'getRecordings';
        var api = 'api/' + apiName + '?';

        var getData = this.dataToUrl(data);
        var shData = sha1(apiName + getData + this.salt);
        var finalUrl = this.url + api + getData + '&checksum=' + shData;
        unirest.get(finalUrl)
                .end(function (response) {
                    try {
                        //console.log(response);
                        var json = parser.toJson(response.body);
                        //res.send({status: true, msg: '', data: json});
                        json = JSON.parse(json);
                        //console.log(typeof json);

                        res({status: true, msg: '', data: json});
                    } catch (err) {
                        //res.send({status: false, msg: err, data: []});
                        res({status: false, msg: err, data: []});
                    }
                });
    },
    /**
     * get publish Recordings on BBB.
     *
     */
    publishRecordings: function (data, res) {

        var apiName = 'publishRecordings';
        var api = 'api/' + apiName + '?';

        var getData = this.dataToUrl(data);
        var shData = sha1(apiName + getData + this.salt);
        var finalUrl = this.url + api + getData + '&checksum=' + shData;
        unirest.get(finalUrl)
                .end(function (response) {
                    try {
                        //console.log(response);
                        var json = parser.toJson(response.body);
                        //res.send({status: true, msg: '', data: json});
                        json = JSON.parse(json);
                        //console.log(typeof json);

                        res({status: true, msg: '', data: json});
                    } catch (err) {
                        //res.send({status: false, msg: err, data: []});
                        res({status: false, msg: 'Recordings not found', data: err});
                    }
                });
    },
    /**
     * delete Recordings on BBB.
     *
     */
    deleteRecordings: function (data, res) {

        var apiName = 'deleteRecordings';
        var api = 'api/' + apiName + '?';

        var getData = this.dataToUrl(data);
        var shData = sha1(apiName + getData + this.salt);
        var finalUrl = this.url + api + getData + '&checksum=' + shData;
        unirest.get(finalUrl)
                .end(function (response) {
                    try {
                        //console.log(response);
                        var json = parser.toJson(response.body);
                        //res.send({status: true, msg: '', data: json});
                        json = JSON.parse(json);
                        //console.log(typeof json);

                        res({status: true, msg: '', data: json});
                    } catch (err) {
                        //res.send({status: false, msg: err, data: []});
                        res({status: false, msg: 'Recordings not found', data: err});
                    }
                });
    },
    /**
     * update Recordings on BBB.
     *
     */
    updateRecordings: function (data, res) {

        var apiName = 'updateRecordings';
        var api = 'api/' + apiName + '?';

        var getData = this.dataToUrl(data);
        var shData = sha1(apiName + getData + this.salt);
        var finalUrl = this.url + api + getData + '&checksum=' + shData;
        unirest.get(finalUrl)
                .end(function (response) {
                    try {
                        //console.log(response);
                        var json = parser.toJson(response.body);
                        //res.send({status: true, msg: '', data: json});
                        json = JSON.parse(json);
                        //console.log(typeof json);

                        res({status: true, msg: '', data: json});
                    } catch (err) {
                        //res.send({status: false, msg: err, data: []});
                        res({status: false, msg: 'Recordings not found', data: err});
                    }
                });
    },
    /**
     * update Recordings on BBB.
     *
     */
    end: function (data, res) {

        var apiName = 'end';
        var api = 'api/' + apiName + '?';

        var getData = this.dataToUrl(data);
        var shData = sha1(apiName + getData + this.salt);
        var finalUrl = this.url + api + getData + '&checksum=' + shData;
        unirest.get(finalUrl)
                .end(function (response) {
                    try {
                        //console.log(response);
                        var json = parser.toJson(response.body);
                        //res.send({status: true, msg: '', data: json});
                        json = JSON.parse(json);
                        //console.log(typeof json);

                        res({status: true, msg: '', data: json});
                    } catch (err) {
                        //res.send({status: false, msg: err, data: []});
                        res({status: false, msg: 'Recordings not found', data: err});
                    }
                });
    },
    dataToUrl: function (data) {
        var counter = 0, getData = '';
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                var symbl = '&';
                if (counter == 0) {
                    var symbl = '';
                }
                getData += symbl + key + '=' + data[key];
                counter++;
            }
        }

        return getData;
    }
}

module.exports = BigBlueButton;