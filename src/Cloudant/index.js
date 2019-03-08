require('dotenv').load();

const Cloudant = require('@cloudant/cloudant');

const username = process.env.cloudant_username || "nodejs";
const password = process.env.cloudant_password;
const cloudant = Cloudant({ account:username, password:password }, (err, cloudant, pong) => {
    if (err) {
        return console.log('Failed to initialize Cloudant: ' + err.message);
    }
});

export default cloudant;

/*

{
  "apikey": "HAr6rvlc-LoyQHRtaX3M-xeC1HzAIfYlNU1cOQwVYeA6",
  "host": "b189c750-2b71-4e29-80ba-6e6805ff5cec-bluemix.cloudant.com",
  "iam_apikey_description": "Auto generated apikey during resource-key operation for Instance - crn:v1:bluemix:public:cloudantnosqldb:us-south:a/0d6f8e0db0a1523f2ca61c2cb52ae169:37d70085-3a92-4992-832d-b375da84f03d::",
  "iam_apikey_name": "auto-generated-apikey-c68ac867-ba56-49ea-abec-ed60484983de",
  "iam_role_crn": "crn:v1:bluemix:public:iam::::serviceRole:Manager",
  "iam_serviceid_crn": "crn:v1:bluemix:public:iam-identity::a/0d6f8e0db0a1523f2ca61c2cb52ae169::serviceid:ServiceId-b2c2ad89-d509-40ce-81ff-2b20c8c3a277",
  "password": "828da90de1a9b84f02b52c2be7750a8b5cd5da0ad6af22722276052b45752ca6",
  "port": 443,
  "url": "https://b189c750-2b71-4e29-80ba-6e6805ff5cec-bluemix:828da90de1a9b84f02b52c2be7750a8b5cd5da0ad6af22722276052b45752ca6@b189c750-2b71-4e29-80ba-6e6805ff5cec-bluemix.cloudant.com",
  "username": "b189c750-2b71-4e29-80ba-6e6805ff5cec-bluemix"
}

*/