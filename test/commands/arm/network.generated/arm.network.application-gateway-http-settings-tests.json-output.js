﻿/**
 * Copyright (c) Microsoft.  All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Warning: This code was generated by a tool.
// 
// Changes to this file may cause incorrect behavior and will be lost if the
// code is regenerated.

'use strict';

var should = require('should');
var util = require('util');
var _ = require('underscore');

var CLITest = require('../../../framework/arm-cli-test');
var utils = require('../../../../lib/util/utils');
var tagUtils = require('../../../../lib/commands/arm/tag/tagUtils');
var testUtils = require('../../../util/util');

var networkTestUtil = new (require('../../../util/networkTestUtil'))();

var generatorUtils = require('../../../../lib/util/generatorUtils');
var profile = require('../../../../lib/util/profile');

var testPrefix = 'arm-network-application-gateway-http-settings-tests-generated',
  groupName = 'xplat-test-http-settings',
  location;
var index = 0;

var backendHttpSettingsCollection = {
  port: '1313',
  portNew: '4242',
  protocol: 'Http',
  cookieBasedAffinity: 'Enabled',
  cookieBasedAffinityNew: 'Disabled',
  hostName: 'header',
  hostNameNew: '',
  pickHostNameFromBackendAddress: 'false',
  pickHostNameFromBackendAddressNew: 'true',
  affinityCookieName: 'cookie-name',
  affinityCookieNameNew: 'name-cookie',
  probeEnabled: 'true',
  probeEnabledNew: 'false',
  path: '/test/prefix',
  pathNew: '',
  name: 'backendHttpSettingsCollectionName'
};

backendHttpSettingsCollection.virtualNetworkName = 'virtualNetworkName';
backendHttpSettingsCollection.subnetName = 'subnetName';
backendHttpSettingsCollection.publicIPAddressName = 'publicIPAddressName';
backendHttpSettingsCollection.applicationGatewayName = 'applicationGatewayName';
backendHttpSettingsCollection.probeName = 'probeName';

var subnet = {
  addressPrefix: '10.0.0.0/16',
  virtualNetworkName: 'virtualNetworkName',
  name: 'subnetName'
};

var publicIPAddress = {
  location: 'westus',
  name: 'publicIPAddressName'
};

var virtualNetwork = {
  location: 'westus',
  name: 'virtualNetworkName'
};

var applicationGateway = {
  backendAddresses: '10.0.0.0',
  location: 'westus',
  virtualNetworkName: 'virtualNetworkName',
  subnetName: 'subnetName',
  publicIPAddressName: 'publicIPAddressName',
  name: 'applicationGatewayName'
};

var probe = {
  host: 'create',
  path: '/createpath',
  timeout: '86400',
  applicationGatewayName: 'applicationGatewayName',
  name: 'probeName'
};

var requiredEnvironment = [{
  name: 'AZURE_VM_TEST_LOCATION',
  defaultValue: 'westus'
}];

describe('arm', function () {
  describe('network', function () {
    var suite, retry = 5;
    var hour = 60 * 60000;
    var testTimeout = 3 * hour;

    before(function (done) {
      this.timeout(testTimeout);
      suite = new CLITest(this, testPrefix, requiredEnvironment);
      suite.setupSuite(function () {
        location = backendHttpSettingsCollection.location || process.env.AZURE_VM_TEST_LOCATION;
        groupName = suite.isMocked ? groupName : suite.generateId(groupName, null);
        backendHttpSettingsCollection.location = location;
        backendHttpSettingsCollection.name = suite.isMocked ? backendHttpSettingsCollection.name : suite.generateId(backendHttpSettingsCollection.name, null);
        backendHttpSettingsCollection.group = groupName;
        if (!suite.isPlayback()) {
          networkTestUtil.createGroup(groupName, location, suite, function () {
            var cmd = 'network vnet create -g {1} -n {name} --location {location} --json'.formatArgs(virtualNetwork, groupName);
            generatorUtils.executeCommand(suite, retry, cmd, function (result) {
              if (!testUtils.assertExitStatus(result, done)) return;
              var cmd = 'network vnet subnet create -g {1} -n {name} --address-prefix {addressPrefix} --vnet-name {virtualNetworkName} --json'.formatArgs(subnet, groupName);
              generatorUtils.executeCommand(suite, retry, cmd, function (result) {
                if (!testUtils.assertExitStatus(result, done)) return;
                var cmd = 'network public-ip create -g {1} -n {name} --location {location} --json'.formatArgs(publicIPAddress, groupName);
                generatorUtils.executeCommand(suite, retry, cmd, function (result) {
                  if (!testUtils.assertExitStatus(result, done)) return;
                  var cmd = 'network application-gateway create -g {1} -n {name} --servers {backendAddresses} --location {location} --vnet-name {virtualNetworkName} --subnet-name {subnetName} --public-ip-name {publicIPAddressName} --json'.formatArgs(applicationGateway, groupName);
                  generatorUtils.executeCommand(suite, retry, cmd, function (result) {
                    if (!testUtils.assertExitStatus(result, done)) return;
                    var cmd = 'network application-gateway probe create -g {1} -n {name} --host-name {host} --path {path} --timeout {timeout} --gateway-name {applicationGatewayName} --json'.formatArgs(probe, groupName);
                    generatorUtils.executeCommand(suite, retry, cmd, function (result) {
                      if (!testUtils.assertExitStatus(result, done)) return;
                      done();
                    });
                  });
                });
              });
            });
          });
        } else {
          done();
        }
      });
    });
    after(function (done) {
      this.timeout(testTimeout);
      networkTestUtil.deleteGroup(groupName, suite, function () {
        suite.teardownSuite(done);
      });
    });
    beforeEach(function (done) {
      suite.setupTest(done);
    });
    afterEach(function (done) {
      suite.teardownTest(done);
    });

    describe('backend http settings collection', function () {
      this.timeout(testTimeout);
      it('create should create backend http settings collection', function (done) {
        var cmd = 'network application-gateway http-settings create -g {group} -n {name} --port {port} --protocol {protocol} --cookie-based-affinity {cookieBasedAffinity} --host-name {hostName} --pick-host-name {pickHostNameFromBackendAddress} --affinity-cookie-name {affinityCookieName} --probe-enabled {probeEnabled} --path {path} --gateway-name {applicationGatewayName} --probe-name {probeName} --json'.formatArgs(backendHttpSettingsCollection);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var parentOutput = JSON.parse(result.text);
          parentOutput.name.should.equal('applicationGatewayName');
          var output = utils.findFirstCaseIgnore(parentOutput.backendHttpSettingsCollection, {name: 'backendHttpSettingsCollectionName'});
          output.name.should.equal(backendHttpSettingsCollection.name);
          output.port.should.equal(parseInt(backendHttpSettingsCollection.port, 10));
          output.protocol.toLowerCase().should.equal(backendHttpSettingsCollection.protocol.toLowerCase());
          output.cookieBasedAffinity.toLowerCase().should.equal(backendHttpSettingsCollection.cookieBasedAffinity.toLowerCase());
          output.hostName.toLowerCase().should.equal(backendHttpSettingsCollection.hostName.toLowerCase());
          output.pickHostNameFromBackendAddress.should.equal(utils.parseBool(backendHttpSettingsCollection.pickHostNameFromBackendAddress));
          output.affinityCookieName.toLowerCase().should.equal(backendHttpSettingsCollection.affinityCookieName.toLowerCase());
          output.path.toLowerCase().should.equal(backendHttpSettingsCollection.path.toLowerCase());
          done();
        });
      });
      it('show should display backend http settings collection details', function (done) {
        var cmd = 'network application-gateway http-settings show -g {group} -n {name} --gateway-name {applicationGatewayName} --json'.formatArgs(backendHttpSettingsCollection);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);
          output.name.should.equal(backendHttpSettingsCollection.name);
          output.port.should.equal(parseInt(backendHttpSettingsCollection.port, 10));
          output.protocol.toLowerCase().should.equal(backendHttpSettingsCollection.protocol.toLowerCase());
          output.cookieBasedAffinity.toLowerCase().should.equal(backendHttpSettingsCollection.cookieBasedAffinity.toLowerCase());
          output.hostName.toLowerCase().should.equal(backendHttpSettingsCollection.hostName.toLowerCase());
          output.pickHostNameFromBackendAddress.should.equal(utils.parseBool(backendHttpSettingsCollection.pickHostNameFromBackendAddress));
          output.affinityCookieName.toLowerCase().should.equal(backendHttpSettingsCollection.affinityCookieName.toLowerCase());
          output.path.toLowerCase().should.equal(backendHttpSettingsCollection.path.toLowerCase());
          done();
        });
      });
      it('set should update backend http settings collection', function (done) {
        var cmd = 'network application-gateway http-settings set -g {group} -n {name} --port {portNew} --cookie-based-affinity {cookieBasedAffinityNew} --host-name {hostNameNew} --pick-host-name {pickHostNameFromBackendAddressNew} --affinity-cookie-name {affinityCookieNameNew} --probe-enabled {probeEnabledNew} --path {pathNew} --gateway-name {applicationGatewayName} --json'.formatArgs(backendHttpSettingsCollection);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var parentOutput = JSON.parse(result.text);
          parentOutput.name.should.equal('applicationGatewayName');
          var output = utils.findFirstCaseIgnore(parentOutput.backendHttpSettingsCollection, {name: 'backendHttpSettingsCollectionName'});
          output.name.should.equal(backendHttpSettingsCollection.name);
          output.port.should.equal(parseInt(backendHttpSettingsCollection.portNew, 10));
          output.cookieBasedAffinity.toLowerCase().should.equal(backendHttpSettingsCollection.cookieBasedAffinityNew.toLowerCase());
          should.not.exist(output.hostName);
          output.pickHostNameFromBackendAddress.should.equal(utils.parseBool(backendHttpSettingsCollection.pickHostNameFromBackendAddressNew));
          output.affinityCookieName.toLowerCase().should.equal(backendHttpSettingsCollection.affinityCookieNameNew.toLowerCase());
          should.not.exist(output.path);
          done();
        });
      });
      it('list should display all backend http settings collection in resource group', function (done) {
        var cmd = 'network application-gateway http-settings list -g {group} --gateway-name {applicationGatewayName} --json'.formatArgs(backendHttpSettingsCollection);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var outputs = JSON.parse(result.text);
          _.some(outputs, function (output) {
            return output.name === backendHttpSettingsCollection.name;
          }).should.be.true;
          done();
        });
      });
      it('delete should delete backend http settings collection', function (done) {
        var cmd = 'network application-gateway http-settings delete -g {group} -n {name} --gateway-name {applicationGatewayName} --quiet --json'.formatArgs(backendHttpSettingsCollection);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);

          cmd = 'network application-gateway http-settings show -g {group} -n {name} --gateway-name {applicationGatewayName} --json'.formatArgs(backendHttpSettingsCollection);
          generatorUtils.executeCommand(suite, retry, cmd, function (result) {
            result.exitStatus.should.equal(0);
            var output = JSON.parse(result.text || '{}');
            output.should.be.empty;

            cmd = 'network application-gateway http-settings list -g {group} --gateway-name {applicationGatewayName} --json'.formatArgs(backendHttpSettingsCollection);
            generatorUtils.executeCommand(suite, retry, cmd, function (result) {
              result.exitStatus.should.equal(0);
              var outputs = JSON.parse(result.text);
              _.some(outputs, function (output) {
                return output.name === backendHttpSettingsCollection.name;
              }).should.be.false;
              done();
            });
          });
        });
      });
    });
  });
});
