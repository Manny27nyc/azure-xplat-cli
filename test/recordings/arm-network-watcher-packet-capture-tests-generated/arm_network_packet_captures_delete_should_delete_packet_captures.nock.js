// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '947d47b4-7883-4bb9-9d85-c5e8e2f572ce',
    name: 'nrptest58.westus.validation.partner',
    user: {
      name: 'user@domain.example',
      type: 'user'
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'westcentralus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-packet-capture/providers/Microsoft.Network/networkWatchers/networkWatcherName/packetCaptures/packetCaptureName?api-version=2017-10-01')
  .reply(200, "{\r\n  \"name\": \"packetCaptureName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-packet-capture/providers/Microsoft.Network/networkWatchers/networkWatcherName/packetCaptures/packetCaptureName\",\r\n  \"etag\": \"W/\\\"5be12d75-f6f2-420a-b165-6d789b65eff5\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"target\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-packet-capture/providers/Microsoft.Compute/virtualMachines/TestVMForCap\",\r\n    \"bytesToCapturePerPacket\": 123456,\r\n    \"totalBytesPerSession\": 1234567,\r\n    \"timeLimitInSeconds\": 17000,\r\n    \"storageLocation\": {\r\n      \"storagePath\": \"\",\r\n      \"filePath\": \"D:\\\\test.cap\"\r\n    },\r\n    \"filters\": [\r\n      {\r\n        \"protocol\": \"TCP\",\r\n        \"localIPAddress\": \"10.0.0.11\",\r\n        \"localPort\": \"8080\",\r\n        \"remoteIPAddress\": \"\",\r\n        \"remotePort\": \"\"\r\n      },\r\n      {\r\n        \"protocol\": \"UDP\",\r\n        \"localIPAddress\": \"\",\r\n        \"localPort\": \"\",\r\n        \"remoteIPAddress\": \"\",\r\n        \"remotePort\": \"\"\r\n      }\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1092',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"5be12d75-f6f2-420a-b165-6d789b65eff5"',
  'x-ms-request-id': '1596e552-7a5b-487c-b5fe-5658c42e037f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14974',
  'x-ms-correlation-request-id': 'afe3b1d2-5202-4f81-a5b5-3933abb53faa',
  'x-ms-routing-request-id': 'WESTEUROPE:20171002T085701Z:afe3b1d2-5202-4f81-a5b5-3933abb53faa',
  date: 'Mon, 02 Oct 2017 08:57:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-packet-capture/providers/Microsoft.Network/networkWatchers/networkWatcherName/packetCaptures/packetCaptureName?api-version=2017-10-01')
  .reply(200, "{\r\n  \"name\": \"packetCaptureName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-packet-capture/providers/Microsoft.Network/networkWatchers/networkWatcherName/packetCaptures/packetCaptureName\",\r\n  \"etag\": \"W/\\\"5be12d75-f6f2-420a-b165-6d789b65eff5\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"target\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-packet-capture/providers/Microsoft.Compute/virtualMachines/TestVMForCap\",\r\n    \"bytesToCapturePerPacket\": 123456,\r\n    \"totalBytesPerSession\": 1234567,\r\n    \"timeLimitInSeconds\": 17000,\r\n    \"storageLocation\": {\r\n      \"storagePath\": \"\",\r\n      \"filePath\": \"D:\\\\test.cap\"\r\n    },\r\n    \"filters\": [\r\n      {\r\n        \"protocol\": \"TCP\",\r\n        \"localIPAddress\": \"10.0.0.11\",\r\n        \"localPort\": \"8080\",\r\n        \"remoteIPAddress\": \"\",\r\n        \"remotePort\": \"\"\r\n      },\r\n      {\r\n        \"protocol\": \"UDP\",\r\n        \"localIPAddress\": \"\",\r\n        \"localPort\": \"\",\r\n        \"remoteIPAddress\": \"\",\r\n        \"remotePort\": \"\"\r\n      }\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1092',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"5be12d75-f6f2-420a-b165-6d789b65eff5"',
  'x-ms-request-id': '1596e552-7a5b-487c-b5fe-5658c42e037f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14974',
  'x-ms-correlation-request-id': 'afe3b1d2-5202-4f81-a5b5-3933abb53faa',
  'x-ms-routing-request-id': 'WESTEUROPE:20171002T085701Z:afe3b1d2-5202-4f81-a5b5-3933abb53faa',
  date: 'Mon, 02 Oct 2017 08:57:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-packet-capture/providers/Microsoft.Network/networkWatchers/networkWatcherName/packetCaptures/packetCaptureName?api-version=2017-10-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westcentralus/operationResults/34537728-f49e-42b5-b35b-d5a0e58791a4?api-version=2017-10-01',
  'retry-after': '10',
  'x-ms-request-id': '34537728-f49e-42b5-b35b-d5a0e58791a4',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westcentralus/operations/34537728-f49e-42b5-b35b-d5a0e58791a4?api-version=2017-10-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '3d775c01-ab0c-48a8-acdf-47a544ee7191',
  'x-ms-routing-request-id': 'WESTEUROPE:20171002T085702Z:3d775c01-ab0c-48a8-acdf-47a544ee7191',
  date: 'Mon, 02 Oct 2017 08:57:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-packet-capture/providers/Microsoft.Network/networkWatchers/networkWatcherName/packetCaptures/packetCaptureName?api-version=2017-10-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westcentralus/operationResults/34537728-f49e-42b5-b35b-d5a0e58791a4?api-version=2017-10-01',
  'retry-after': '10',
  'x-ms-request-id': '34537728-f49e-42b5-b35b-d5a0e58791a4',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westcentralus/operations/34537728-f49e-42b5-b35b-d5a0e58791a4?api-version=2017-10-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '3d775c01-ab0c-48a8-acdf-47a544ee7191',
  'x-ms-routing-request-id': 'WESTEUROPE:20171002T085702Z:3d775c01-ab0c-48a8-acdf-47a544ee7191',
  date: 'Mon, 02 Oct 2017 08:57:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westcentralus/operations/34537728-f49e-42b5-b35b-d5a0e58791a4?api-version=2017-10-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f87303d3-b2cc-4e4c-8d90-c4019e9bad02',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': '3518e2ff-333a-459a-b384-cb39a44f9bb8',
  'x-ms-routing-request-id': 'WESTEUROPE:20171002T085733Z:3518e2ff-333a-459a-b384-cb39a44f9bb8',
  date: 'Mon, 02 Oct 2017 08:57:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westcentralus/operations/34537728-f49e-42b5-b35b-d5a0e58791a4?api-version=2017-10-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f87303d3-b2cc-4e4c-8d90-c4019e9bad02',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': '3518e2ff-333a-459a-b384-cb39a44f9bb8',
  'x-ms-routing-request-id': 'WESTEUROPE:20171002T085733Z:3518e2ff-333a-459a-b384-cb39a44f9bb8',
  date: 'Mon, 02 Oct 2017 08:57:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-packet-capture/providers/Microsoft.Network/networkWatchers/networkWatcherName/packetCaptures/packetCaptureName?api-version=2017-10-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-packet-capture/providers/Microsoft.Network/networkWatchers/networkWatcherName/packetCaptures/packetCaptureName not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '295',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e8a5ff6a-4b2a-42ad-9623-404a2a117b2d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '49d16faf-6ee3-4663-910b-e3e1df874449',
  'x-ms-routing-request-id': 'WESTEUROPE:20171002T085734Z:49d16faf-6ee3-4663-910b-e3e1df874449',
  date: 'Mon, 02 Oct 2017 08:57:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-packet-capture/providers/Microsoft.Network/networkWatchers/networkWatcherName/packetCaptures/packetCaptureName?api-version=2017-10-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-packet-capture/providers/Microsoft.Network/networkWatchers/networkWatcherName/packetCaptures/packetCaptureName not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '295',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e8a5ff6a-4b2a-42ad-9623-404a2a117b2d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '49d16faf-6ee3-4663-910b-e3e1df874449',
  'x-ms-routing-request-id': 'WESTEUROPE:20171002T085734Z:49d16faf-6ee3-4663-910b-e3e1df874449',
  date: 'Mon, 02 Oct 2017 08:57:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-packet-capture/providers/Microsoft.Network/networkWatchers/networkWatcherName/packetCaptures?api-version=2017-10-01')
  .reply(200, "{\r\n  \"value\": []\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '19',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '75656e41-68bf-4fb6-9633-2e7aa35f16d9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': '13a093e9-b73f-4ebe-a527-18608c54eb85',
  'x-ms-routing-request-id': 'WESTEUROPE:20171002T085735Z:13a093e9-b73f-4ebe-a527-18608c54eb85',
  date: 'Mon, 02 Oct 2017 08:57:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-packet-capture/providers/Microsoft.Network/networkWatchers/networkWatcherName/packetCaptures?api-version=2017-10-01')
  .reply(200, "{\r\n  \"value\": []\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '19',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '75656e41-68bf-4fb6-9633-2e7aa35f16d9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': '13a093e9-b73f-4ebe-a527-18608c54eb85',
  'x-ms-routing-request-id': 'WESTEUROPE:20171002T085735Z:13a093e9-b73f-4ebe-a527-18608c54eb85',
  date: 'Mon, 02 Oct 2017 08:57:35 GMT',
  connection: 'close' });
 return result; }]];
