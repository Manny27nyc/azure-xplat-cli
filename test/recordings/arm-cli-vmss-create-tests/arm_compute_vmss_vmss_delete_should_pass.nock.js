// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e33f361b-53c2-4cc7-b829-78906708387b',
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'servicePrincipal'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMSSCreate8490/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss?api-version=2017-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/40e178b0-4484-48fd-8721-a095e6efe748?monitor=true&api-version=2017-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/40e178b0-4484-48fd-8721-a095e6efe748?api-version=2017-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': '40e178b0-4484-48fd-8721-a095e6efe748',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1192',
  'x-ms-correlation-request-id': '3a449b28-e7ae-426c-a907-93a49374f1d9',
  'x-ms-routing-request-id': 'WESTUS:20170602T134309Z:3a449b28-e7ae-426c-a907-93a49374f1d9',
  date: 'Fri, 02 Jun 2017 13:43:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMSSCreate8490/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss?api-version=2017-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/40e178b0-4484-48fd-8721-a095e6efe748?monitor=true&api-version=2017-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/40e178b0-4484-48fd-8721-a095e6efe748?api-version=2017-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': '40e178b0-4484-48fd-8721-a095e6efe748',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1192',
  'x-ms-correlation-request-id': '3a449b28-e7ae-426c-a907-93a49374f1d9',
  'x-ms-routing-request-id': 'WESTUS:20170602T134309Z:3a449b28-e7ae-426c-a907-93a49374f1d9',
  date: 'Fri, 02 Jun 2017 13:43:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/40e178b0-4484-48fd-8721-a095e6efe748?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T13:43:11.4487156+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"40e178b0-4484-48fd-8721-a095e6efe748\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': '5d3dcadb-2cfd-4d38-ab99-4162b757984e',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14902',
  'x-ms-correlation-request-id': 'aaf419d8-db3f-44df-9f3a-a36f0545abc2',
  'x-ms-routing-request-id': 'WESTUS:20170602T134340Z:aaf419d8-db3f-44df-9f3a-a36f0545abc2',
  date: 'Fri, 02 Jun 2017 13:43:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/40e178b0-4484-48fd-8721-a095e6efe748?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T13:43:11.4487156+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"40e178b0-4484-48fd-8721-a095e6efe748\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': '5d3dcadb-2cfd-4d38-ab99-4162b757984e',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14902',
  'x-ms-correlation-request-id': 'aaf419d8-db3f-44df-9f3a-a36f0545abc2',
  'x-ms-routing-request-id': 'WESTUS:20170602T134340Z:aaf419d8-db3f-44df-9f3a-a36f0545abc2',
  date: 'Fri, 02 Jun 2017 13:43:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/40e178b0-4484-48fd-8721-a095e6efe748?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T13:43:11.4487156+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"40e178b0-4484-48fd-8721-a095e6efe748\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': '37e3dd03-4eb2-48e8-b4bf-9e30c8eccad3',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '0cc9a105-1100-462b-ac32-77fa78e5bc2a',
  'x-ms-routing-request-id': 'WESTUS2:20170602T134411Z:0cc9a105-1100-462b-ac32-77fa78e5bc2a',
  date: 'Fri, 02 Jun 2017 13:44:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/40e178b0-4484-48fd-8721-a095e6efe748?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T13:43:11.4487156+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"40e178b0-4484-48fd-8721-a095e6efe748\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': '37e3dd03-4eb2-48e8-b4bf-9e30c8eccad3',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '0cc9a105-1100-462b-ac32-77fa78e5bc2a',
  'x-ms-routing-request-id': 'WESTUS2:20170602T134411Z:0cc9a105-1100-462b-ac32-77fa78e5bc2a',
  date: 'Fri, 02 Jun 2017 13:44:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/40e178b0-4484-48fd-8721-a095e6efe748?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T13:43:11.4487156+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"40e178b0-4484-48fd-8721-a095e6efe748\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': '58fd0628-8969-4876-a5c3-fdbbfae2190c',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': 'a9dc920b-45e5-44a0-9fc3-34c7a655f534',
  'x-ms-routing-request-id': 'WESTUS2:20170602T134442Z:a9dc920b-45e5-44a0-9fc3-34c7a655f534',
  date: 'Fri, 02 Jun 2017 13:44:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/40e178b0-4484-48fd-8721-a095e6efe748?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T13:43:11.4487156+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"40e178b0-4484-48fd-8721-a095e6efe748\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': '58fd0628-8969-4876-a5c3-fdbbfae2190c',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': 'a9dc920b-45e5-44a0-9fc3-34c7a655f534',
  'x-ms-routing-request-id': 'WESTUS2:20170602T134442Z:a9dc920b-45e5-44a0-9fc3-34c7a655f534',
  date: 'Fri, 02 Jun 2017 13:44:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/40e178b0-4484-48fd-8721-a095e6efe748?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T13:43:11.4487156+00:00\",\r\n  \"endTime\": \"2017-06-02T13:45:00.2800808+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"40e178b0-4484-48fd-8721-a095e6efe748\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': 'fbb9dfa9-c4fe-45a8-b54d-599288c32571',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '519cf594-7a1b-4416-a579-1bd43780e7be',
  'x-ms-routing-request-id': 'WESTUS2:20170602T134513Z:519cf594-7a1b-4416-a579-1bd43780e7be',
  date: 'Fri, 02 Jun 2017 13:45:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/40e178b0-4484-48fd-8721-a095e6efe748?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T13:43:11.4487156+00:00\",\r\n  \"endTime\": \"2017-06-02T13:45:00.2800808+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"40e178b0-4484-48fd-8721-a095e6efe748\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': 'fbb9dfa9-c4fe-45a8-b54d-599288c32571',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '519cf594-7a1b-4416-a579-1bd43780e7be',
  'x-ms-routing-request-id': 'WESTUS2:20170602T134513Z:519cf594-7a1b-4416-a579-1bd43780e7be',
  date: 'Fri, 02 Jun 2017 13:45:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMSSCreate8490/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss1?api-version=2017-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/c0cbe4b0-af93-437f-b238-e28df2fd6458?monitor=true&api-version=2017-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/c0cbe4b0-af93-437f-b238-e28df2fd6458?api-version=2017-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': 'c0cbe4b0-af93-437f-b238-e28df2fd6458',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '0a39be04-5592-4ceb-b284-5a31026c67e1',
  'x-ms-routing-request-id': 'WESTUS2:20170602T134515Z:0a39be04-5592-4ceb-b284-5a31026c67e1',
  date: 'Fri, 02 Jun 2017 13:45:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMSSCreate8490/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss1?api-version=2017-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/c0cbe4b0-af93-437f-b238-e28df2fd6458?monitor=true&api-version=2017-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/c0cbe4b0-af93-437f-b238-e28df2fd6458?api-version=2017-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': 'c0cbe4b0-af93-437f-b238-e28df2fd6458',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '0a39be04-5592-4ceb-b284-5a31026c67e1',
  'x-ms-routing-request-id': 'WESTUS2:20170602T134515Z:0a39be04-5592-4ceb-b284-5a31026c67e1',
  date: 'Fri, 02 Jun 2017 13:45:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/c0cbe4b0-af93-437f-b238-e28df2fd6458?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T13:45:15.3657314+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"c0cbe4b0-af93-437f-b238-e28df2fd6458\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': '344b4cc6-b04d-4333-9d4b-53dff7a4731d',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '59aac2b1-8a66-4a02-92ab-99a52bf8ac60',
  'x-ms-routing-request-id': 'WESTUS2:20170602T134546Z:59aac2b1-8a66-4a02-92ab-99a52bf8ac60',
  date: 'Fri, 02 Jun 2017 13:45:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/c0cbe4b0-af93-437f-b238-e28df2fd6458?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T13:45:15.3657314+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"c0cbe4b0-af93-437f-b238-e28df2fd6458\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': '344b4cc6-b04d-4333-9d4b-53dff7a4731d',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '59aac2b1-8a66-4a02-92ab-99a52bf8ac60',
  'x-ms-routing-request-id': 'WESTUS2:20170602T134546Z:59aac2b1-8a66-4a02-92ab-99a52bf8ac60',
  date: 'Fri, 02 Jun 2017 13:45:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/c0cbe4b0-af93-437f-b238-e28df2fd6458?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T13:45:15.3657314+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"c0cbe4b0-af93-437f-b238-e28df2fd6458\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': '2244d254-6a05-482d-839a-0a04dc8e06dd',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14915',
  'x-ms-correlation-request-id': 'fd7ae19b-06f5-439a-8ab5-5334c9c48bfe',
  'x-ms-routing-request-id': 'WESTUS:20170602T134617Z:fd7ae19b-06f5-439a-8ab5-5334c9c48bfe',
  date: 'Fri, 02 Jun 2017 13:46:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/c0cbe4b0-af93-437f-b238-e28df2fd6458?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T13:45:15.3657314+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"c0cbe4b0-af93-437f-b238-e28df2fd6458\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': '2244d254-6a05-482d-839a-0a04dc8e06dd',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14915',
  'x-ms-correlation-request-id': 'fd7ae19b-06f5-439a-8ab5-5334c9c48bfe',
  'x-ms-routing-request-id': 'WESTUS:20170602T134617Z:fd7ae19b-06f5-439a-8ab5-5334c9c48bfe',
  date: 'Fri, 02 Jun 2017 13:46:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/c0cbe4b0-af93-437f-b238-e28df2fd6458?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T13:45:15.3657314+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"c0cbe4b0-af93-437f-b238-e28df2fd6458\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': '5685d9d2-5e59-4d7b-b475-0e8822a2b633',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14905',
  'x-ms-correlation-request-id': '8e48e949-a748-4cfa-aeec-5601f9e2eb6e',
  'x-ms-routing-request-id': 'WESTUS:20170602T134648Z:8e48e949-a748-4cfa-aeec-5601f9e2eb6e',
  date: 'Fri, 02 Jun 2017 13:46:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/c0cbe4b0-af93-437f-b238-e28df2fd6458?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T13:45:15.3657314+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"c0cbe4b0-af93-437f-b238-e28df2fd6458\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': '5685d9d2-5e59-4d7b-b475-0e8822a2b633',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14905',
  'x-ms-correlation-request-id': '8e48e949-a748-4cfa-aeec-5601f9e2eb6e',
  'x-ms-routing-request-id': 'WESTUS:20170602T134648Z:8e48e949-a748-4cfa-aeec-5601f9e2eb6e',
  date: 'Fri, 02 Jun 2017 13:46:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/c0cbe4b0-af93-437f-b238-e28df2fd6458?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T13:45:15.3657314+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"c0cbe4b0-af93-437f-b238-e28df2fd6458\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': '290cf9e1-ca34-4668-95a8-4f263640499f',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14902',
  'x-ms-correlation-request-id': '33d09a55-b0ae-42f8-9199-8372604a2127',
  'x-ms-routing-request-id': 'WESTUS:20170602T134719Z:33d09a55-b0ae-42f8-9199-8372604a2127',
  date: 'Fri, 02 Jun 2017 13:47:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/c0cbe4b0-af93-437f-b238-e28df2fd6458?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T13:45:15.3657314+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"c0cbe4b0-af93-437f-b238-e28df2fd6458\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': '290cf9e1-ca34-4668-95a8-4f263640499f',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14902',
  'x-ms-correlation-request-id': '33d09a55-b0ae-42f8-9199-8372604a2127',
  'x-ms-routing-request-id': 'WESTUS:20170602T134719Z:33d09a55-b0ae-42f8-9199-8372604a2127',
  date: 'Fri, 02 Jun 2017 13:47:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/c0cbe4b0-af93-437f-b238-e28df2fd6458?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T13:45:15.3657314+00:00\",\r\n  \"endTime\": \"2017-06-02T13:47:46.4403787+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"c0cbe4b0-af93-437f-b238-e28df2fd6458\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': '745acc6c-4dc0-4020-ada3-37feb1852a2e',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14914',
  'x-ms-correlation-request-id': '528c6f5c-cfcf-4822-8ebd-8e2f88ea9049',
  'x-ms-routing-request-id': 'WESTUS:20170602T134749Z:528c6f5c-cfcf-4822-8ebd-8e2f88ea9049',
  date: 'Fri, 02 Jun 2017 13:47:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/c0cbe4b0-af93-437f-b238-e28df2fd6458?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T13:45:15.3657314+00:00\",\r\n  \"endTime\": \"2017-06-02T13:47:46.4403787+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"c0cbe4b0-af93-437f-b238-e28df2fd6458\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': '745acc6c-4dc0-4020-ada3-37feb1852a2e',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14914',
  'x-ms-correlation-request-id': '528c6f5c-cfcf-4822-8ebd-8e2f88ea9049',
  'x-ms-routing-request-id': 'WESTUS:20170602T134749Z:528c6f5c-cfcf-4822-8ebd-8e2f88ea9049',
  date: 'Fri, 02 Jun 2017 13:47:49 GMT',
  connection: 'close' });
 return result; }]];
