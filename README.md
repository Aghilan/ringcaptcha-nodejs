# ringcaptcha-nodejs

## Install

```
$ npm install ringcaptcha-nodejs --save 
```

### Config Ringcaptcha
```js
var ringcaptcha = require('ringcaptcha-nodejs');
ringcaptcha.app_key = '';//Add Your App Key
ringcaptcha.api_key = ''; //Add Your API Key
ringcaptcha.secret_key = ''; //Add Your Secret Key
```

### Sending a PIN Code 
- `mobile :- REQUIRED - Phone number in international format as described in E.123. It also accepts a comma-separated list of phones for multiple verifications.`
- `country :- REQUIRED - Country Code`
- `service :- REQUIRED - Service to use when sending the PIN code. Availables are: SMS, Voice`

```js
data = {mobile: 'XXXXX', country_code: '+91',service:'SMS'}
ringcaptcha.sendingPINCode(data, function (response) {
console.log(response);
});
```


### Resend a PIN Code 
- `mobile :- REQUIRED - Phone number in international format as described in E.123. It also accepts a comma-separated list of phones for multiple verifications.`
- `country :- REQUIRED - Country Code`
- `service :- REQUIRED - Service to use when sending the PIN code. Availables are: SMS, Voice`

```js
data = {mobile: 'XXXXX', country_code: '+91',service:'SMS'}
ringcaptcha.sendingPINCode(data, function (response) {
console.log(response);
});
```


### Verifying the PIN code 
- `mobile :- REQUIRED - Phone number in international format as described in E.123. It also accepts a comma-separated list of phones for multiple verifications.`
- `code :- REQUIRED - The 4 digit PIN code to verify with the one sent in the code endpoint`
- `token :- REQUIRED - The token received by the code endpoint when requesting a PIN code to be sent. Either this parameter or phone must be sent.`

```js
data = {mobile: 'XXXXX', country_code: '+91',token:'XXXXX',code:'XXXXXX'}
ringcaptcha.verifyingPin(data, function (response) {
console.log(response);
});
```





###Thanks
