/**
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

var generatorUtils = require('../../../util/generatorUtils');
var tagUtils = require('../tag/tagUtils');
var util = require('util');
var validation = require('../../../util/validation');

var profile = require('../../../util/profile');
var utils = require('../../../util/utils');

var $ = utils.getLocaleString;

exports.init = function (cli) {
  var network = cli.category('network')
    .description($('Commands to manage network resources'));
  var trafficManager = network.category('traffic-manager')
    .description($('Commands to manage Traffic Manager'));
  var profiles = trafficManager.category('profile')
    .description($('Commands to manage profiles'));

  var defaultProfileStatus = 'Enabled';
  var defaultTrafficRoutingMethod = 'Performance';
  var defaultTtl = '300';
  var defaultProtocol = 'HTTP';
  var defaultPort = '80';
  var defaultIntervalInSeconds = '30';
  var defaultTimeoutInSeconds = '10';
  var defaultToleratedNumberOfFailures = '3';
  var defaultType = 'Microsoft.Network/trafficManagerProfiles';

  profiles.command('create [resource-group] [name] [relative-dns-name]')
    .description($('Create a profile'))
    .usage('[options] <resource-group> <name> <relative-dns-name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-n, --name <name>', $('the name of the profile'))
    .option('-u, --profile-status [profile-status]', $('the status of the Traffic Manager' +
      '\n     profile'))
    .option('-m, --traffic-routing-method [traffic-routing-method]', $('the traffic routing method of the' +
      '\n     Traffic Manager profile'))
    .option('-r, --relative-dns-name <relative-dns-name>', $('the relative DNS name provided by this' +
      '\n     Traffic Manager profile. This value is combined with the DNS domain name used' +
      '\n     by Azure Traffic Manager to form the fully-qualified domain name (FQDN) of the' +
      '\n     profile'))
    .option('-l, --ttl [ttl]', $('the DNS Time-To-Live (TTL), in seconds.' +
      '\n     This informs the local DNS resolvers and DNS clients how long to cache DNS' +
      '\n     responses provided by this Traffic Manager profile'))
    .option('-p, --monitor-protocol [monitor-protocol]', $('the protocol (HTTP, HTTPS or TCP) used' +
      '\n     to probe for endpoint health'))
    .option('-o, --monitor-port [monitor-port]', $('the TCP port used to probe for endpoint' +
      '\n     health'))
    .option('-a, --monitor-path [monitor-path]', $('the path relative to the endpoint' +
      '\n     domain name used to probe for endpoint health'))
    .option('-e, --interval-in-seconds [interval-in-seconds]', $('the monitor interval for endpoints in' +
      '\n     this profile. This is the interval at which Traffic Manager will check the' +
      '\n     health of each endpoint in this profile'))
    .option('-i, --timeout-in-seconds [timeout-in-seconds]', $('the monitor timeout for endpoints in' +
      '\n     this profile. This is the time that Traffic Manager allows endpoints in this' +
      '\n     profile to response to the health check'))
    .option('-f, --tolerated-number-of-failures [tolerated-number-of-failures]', $('the number of consecutive failed health' +
      '\n     check that Traffic Manager tolerates before declaring an endpoint in this' +
      '\n     profile Degraded after the next failed health check'))
    .option('-t, --tags [tags]', $('the list of tags.\n     Can be multiple. In the format of "name=value".\n     Name is required and value is optional.\n     For example, -t "tag1=value1;tag2"'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, name, relativeDnsName, options, _) {
      var useDefaults = true;
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);
      options.relativeDnsName = cli.interaction.promptIfNotGiven($('relative dns name : '), relativeDnsName, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var trafficManagerManagementClient = utils.createTrafficManagerManagementClient(subscription);

      var profileResultVar;
      var progress = cli.interaction.progress(util.format($('Looking up the profile "%s"'), name));
      try {
        profileResultVar = trafficManagerManagementClient.profiles.get(resourceGroup, name, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          profileResultVar = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (profileResultVar) {
        throw new Error(util.format($('profile with name "%s" already exists in the resource group "%s"'), name, resourceGroup));
      }

      var parameters = {};
      parameters.location = 'global';

      if(options.profileStatus) {
        parameters.profileStatus = validation.isIn(options.profileStatus, ['Enabled', 'Disabled'], '--profile-status');
      } else if(useDefaults) {
        parameters.profileStatus = defaultProfileStatus;
      }

      if(options.trafficRoutingMethod) {
        parameters.trafficRoutingMethod = validation.isIn(options.trafficRoutingMethod, ['Performance', 'Priority', 'Weighted', 'Geographic'], '--traffic-routing-method');
      } else if(useDefaults) {
        parameters.trafficRoutingMethod = defaultTrafficRoutingMethod;
      }

      if(!parameters.dnsConfig) {
        parameters.dnsConfig = {};
      }
      if(options.relativeDnsName) {
        parameters.dnsConfig.relativeName = options.relativeDnsName;
      }

      if(options.ttl) {
        parameters.dnsConfig.ttl = parseInt(options.ttl, 10);
      } else if(useDefaults) {
        parameters.dnsConfig.ttl = parseInt(defaultTtl, 10);
      }

      if(!parameters.monitorConfig) {
        parameters.monitorConfig = {};
      }
      if(options.monitorProtocol) {
        parameters.monitorConfig.protocol = validation.isIn(options.monitorProtocol, ['HTTP', 'HTTPS', 'TCP'], '--monitor-protocol');
      } else if(useDefaults) {
        parameters.monitorConfig.protocol = defaultProtocol;
      }

      if(options.monitorPort) {
        parameters.monitorConfig.port = parseInt(options.monitorPort, 10);
      } else if(useDefaults) {
        parameters.monitorConfig.port = parseInt(defaultPort, 10);
      }

      if(options.monitorPath) {
        parameters.monitorConfig.path = options.monitorPath;
      }

      if(options.intervalInSeconds) {
        parameters.monitorConfig.intervalInSeconds = parseInt(options.intervalInSeconds, 10);
      } else if(useDefaults) {
        parameters.monitorConfig.intervalInSeconds = parseInt(defaultIntervalInSeconds, 10);
      }

      if(options.timeoutInSeconds) {
        parameters.monitorConfig.timeoutInSeconds = parseInt(options.timeoutInSeconds, 10);
      } else if(useDefaults) {
        parameters.monitorConfig.timeoutInSeconds = parseInt(defaultTimeoutInSeconds, 10);
      }

      if(options.toleratedNumberOfFailures) {
        parameters.monitorConfig.toleratedNumberOfFailures = parseInt(options.toleratedNumberOfFailures, 10);
      } else if(useDefaults) {
        parameters.monitorConfig.toleratedNumberOfFailures = parseInt(defaultToleratedNumberOfFailures, 10);
      }

      if(options.tags && utils.argHasValue(options.tags)) {
        tagUtils.appendTags(parameters, options);
      }

      generatorUtils.removeEmptyObjects(parameters);
      progress = cli.interaction.progress(util.format($('Creating profile "%s"'), name));
      try {
        profileResultVar = trafficManagerManagementClient.profiles.createOrUpdate(resourceGroup, name, parameters, _);
      } finally {
        progress.end();
      }

      cli.interaction.formatOutput(profileResultVar, generatorUtils.traverse);
    });

  profiles.command('set [resource-group] [name]')
    .description($('Update a profile'))
    .usage('[options] <resource-group> <name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-n, --name <name>', $('the name of the profile'))
    .option('-u, --profile-status [profile-status]', $('the status of the Traffic Manager' +
      '\n     profile'))
    .option('-m, --traffic-routing-method [traffic-routing-method]', $('the traffic routing method of the' +
      '\n     Traffic Manager profile'))
    .option('-r, --relative-dns-name [relative-dns-name]', $('the relative DNS name provided by this' +
      '\n     Traffic Manager profile. This value is combined with the DNS domain name used' +
      '\n     by Azure Traffic Manager to form the fully-qualified domain name (FQDN) of the' +
      '\n     profile'))
    .option('-l, --ttl [ttl]', $('the DNS Time-To-Live (TTL), in seconds.' +
      '\n     This informs the local DNS resolvers and DNS clients how long to cache DNS' +
      '\n     responses provided by this Traffic Manager profile'))
    .option('-p, --monitor-protocol [monitor-protocol]', $('the protocol (HTTP, HTTPS or TCP) used' +
      '\n     to probe for endpoint health'))
    .option('-o, --monitor-port [monitor-port]', $('the TCP port used to probe for endpoint' +
      '\n     health'))
    .option('-a, --monitor-path [monitor-path]', $('the path relative to the endpoint' +
      '\n     domain name used to probe for endpoint health'))
    .option('-e, --interval-in-seconds [interval-in-seconds]', $('the monitor interval for endpoints in' +
      '\n     this profile. This is the interval at which Traffic Manager will check the' +
      '\n     health of each endpoint in this profile'))
    .option('-i, --timeout-in-seconds [timeout-in-seconds]', $('the monitor timeout for endpoints in' +
      '\n     this profile. This is the time that Traffic Manager allows endpoints in this' +
      '\n     profile to response to the health check'))
    .option('-f, --tolerated-number-of-failures [tolerated-number-of-failures]', $('the number of consecutive failed health' +
      '\n     check that Traffic Manager tolerates before declaring an endpoint in this' +
      '\n     profile Degraded after the next failed health check'))
    .option('-t, --tags [tags]', $('the list of tags.\n     Can be multiple. In the format of "name=value".\n     Name is required and value is optional.\n     For example, -t "tag1=value1;tag2"'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, name, options, _) {
      var useDefaults = false;
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var trafficManagerManagementClient = utils.createTrafficManagerManagementClient(subscription);

      var profileResultVar;
      var progress = cli.interaction.progress(util.format($('Looking up the profile "%s"'), name));
      try {
        profileResultVar = trafficManagerManagementClient.profiles.get(resourceGroup, name, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          profileResultVar = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (!profileResultVar) {
        throw new Error(util.format($('profile with name "%s" not found in the resource group "%s"'), name, resourceGroup));
      }

      var parameters = profileResultVar;
      if(options.profileStatus) {
        parameters.profileStatus = validation.isIn(options.profileStatus, ['Enabled', 'Disabled'], '--profile-status');
      } else if(useDefaults) {
        parameters.profileStatus = defaultProfileStatus;
      }

      if(options.trafficRoutingMethod) {
        parameters.trafficRoutingMethod = validation.isIn(options.trafficRoutingMethod, ['Performance', 'Priority', 'Weighted', 'Geographic'], '--traffic-routing-method');
      } else if(useDefaults) {
        parameters.trafficRoutingMethod = defaultTrafficRoutingMethod;
      }

      if(!parameters.dnsConfig) {
        parameters.dnsConfig = {};
      }
      if(options.relativeDnsName) {
        parameters.dnsConfig.relativeName = options.relativeDnsName;
      }

      if(options.ttl) {
        parameters.dnsConfig.ttl = parseInt(options.ttl, 10);
      } else if(useDefaults) {
        parameters.dnsConfig.ttl = parseInt(defaultTtl, 10);
      }

      if(!parameters.monitorConfig) {
        parameters.monitorConfig = {};
      }
      if(options.monitorProtocol) {
        parameters.monitorConfig.protocol = validation.isIn(options.monitorProtocol, ['HTTP', 'HTTPS', 'TCP'], '--monitor-protocol');
      } else if(useDefaults) {
        parameters.monitorConfig.protocol = defaultProtocol;
      }

      if(options.monitorPort) {
        parameters.monitorConfig.port = parseInt(options.monitorPort, 10);
      } else if(useDefaults) {
        parameters.monitorConfig.port = parseInt(defaultPort, 10);
      }

      if(options.monitorPath) {
        parameters.monitorConfig.path = options.monitorPath;
      }

      if(options.intervalInSeconds) {
        parameters.monitorConfig.intervalInSeconds = parseInt(options.intervalInSeconds, 10);
      } else if(useDefaults) {
        parameters.monitorConfig.intervalInSeconds = parseInt(defaultIntervalInSeconds, 10);
      }

      if(options.timeoutInSeconds) {
        parameters.monitorConfig.timeoutInSeconds = parseInt(options.timeoutInSeconds, 10);
      } else if(useDefaults) {
        parameters.monitorConfig.timeoutInSeconds = parseInt(defaultTimeoutInSeconds, 10);
      }

      if(options.toleratedNumberOfFailures) {
        parameters.monitorConfig.toleratedNumberOfFailures = parseInt(options.toleratedNumberOfFailures, 10);
      } else if(useDefaults) {
        parameters.monitorConfig.toleratedNumberOfFailures = parseInt(defaultToleratedNumberOfFailures, 10);
      }

      if(options.tags && utils.argHasValue(options.tags)) {
        tagUtils.appendTags(parameters, options);
      }

      generatorUtils.removeEmptyObjects(parameters);
      progress = cli.interaction.progress(util.format($('Updating profile "%s"'), name));
      try {
        profileResultVar = trafficManagerManagementClient.profiles.createOrUpdate(resourceGroup, name, parameters, _);
      } finally {
        progress.end();
      }

      cli.interaction.formatOutput(profileResultVar, generatorUtils.traverse);
    });

  profiles.command('delete [resource-group] [name]')
    .description($('Delete a profile'))
    .usage('[options] <resource-group> <name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-n, --name <name>', $('the name of the profile'))
    .option('-q, --quiet', $('quiet mode, do not ask for delete confirmation'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, name, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var trafficManagerManagementClient = utils.createTrafficManagerManagementClient(subscription);

      var profileResultVar;
      var progress = cli.interaction.progress(util.format($('Looking up the profile "%s"'), name));
      try {
        profileResultVar = trafficManagerManagementClient.profiles.get(resourceGroup, name, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          profileResultVar = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (!profileResultVar) {
        throw new Error(util.format($('profile with name "%s" not found in the resource group "%s"'), name, resourceGroup));
      }

      if (!options.quiet && !cli.interaction.confirm(util.format($('Delete profile "%s"? [y/n] '), name), _)) {
        cli.output.info(util.format($('profile "%s" was not deleted and still exists in the resource group "%s"'), name, resourceGroup));
        return;
      }

      progress = cli.interaction.progress(util.format($('Deleting profile "%s"'), name));
      try {
        profileResultVar = trafficManagerManagementClient.profiles.deleteMethod(resourceGroup, name, _);
        cli.output.info(util.format($('profile "%s" was successfully deleted from resource group "%s"'), name, resourceGroup));
      } finally {
        progress.end();
      }
    });

  profiles.command('show [resource-group] [name]')
    .description($('Show a profile'))
    .usage('[options] <resource-group> <name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-n, --name <name>', $('the name of the profile'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, name, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var trafficManagerManagementClient = utils.createTrafficManagerManagementClient(subscription);

      var profileResultVar;
      var progress = cli.interaction.progress(util.format($('Looking up the profile "%s"'), name));
      try {
        profileResultVar = trafficManagerManagementClient.profiles.get(resourceGroup, name, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          profileResultVar = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (!profileResultVar) {
        cli.output.warn(util.format($('profile with name "%s" not found in the resource group "%s"'), name, resourceGroup));
      }

      cli.interaction.formatOutput(profileResultVar, generatorUtils.traverse);
    });

  profiles.command('list [resource-group]')
    .description($('List profile'))
    .usage('[options] <resource-group>')
    .option('-g, --resource-group [resource-group]', $('the name of the resource group'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, options, _) {
      options.resourceGroup = resourceGroup;
      var subscription = profile.current.getSubscription(options.subscription);
      var trafficManagerManagementClient = utils.createTrafficManagerManagementClient(subscription);

      var profileResultVar = null;
      var progress;
      try {
        if(typeof trafficManagerManagementClient.profiles.listAll != 'function') {
          resourceGroup = cli.interaction.promptIfNotGiven($('resource-group : '), resourceGroup, _);
          progress = cli.interaction.progress($('Getting the profile'));
          profileResultVar = trafficManagerManagementClient.profiles.listAllInResourceGroup(resourceGroup,  _);
        } else {
          if(options.resourceGroup) {
            progress = cli.interaction.progress($('Getting the profile'));
            profileResultVar = trafficManagerManagementClient.profiles.listAllInResourceGroup(resourceGroup,  _);
          } else {
            progress = cli.interaction.progress($('Getting the profile'));
            profileResultVar = trafficManagerManagementClient.profiles.listAll(_);
          }
        }
      } finally {
        progress.end();
      }

      cli.interaction.formatOutput(profileResultVar, function(profileResultVar) {
        if (!profileResultVar || profileResultVar.length === 0) {
          cli.output.warn($('No profile found'));
        } else {
          cli.output.table(profileResultVar, function (row, item) {
            generatorUtils.showTableRow(row, item);
          });
        }
      });
    });

  profiles.command('is-dns-available [relative-dns-name]')
    .description($('Perform check traffic manager relative dns name availability operation on a profile'))
    .usage('[options] <relative-dns-name>')
    .option('-r, --relative-dns-name <relative-dns-name>', $('The name of profile.'))
    .option('-y, --type [type]', $('the type of the resource'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(relativeDnsName, options, _) {
      var useDefaults = true;
      options.relativeDnsName = cli.interaction.promptIfNotGiven($('relative dns name : '), relativeDnsName, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var trafficManagerManagementClient = utils.createTrafficManagerManagementClient(subscription);

      var profileResultVar;

      var parameters = {};
      if(options.relativeDnsName) {
        parameters.name = options.relativeDnsName;
      }

      if(options.type) {
        parameters.type = options.type;
      } else if(useDefaults) {
        parameters.type = defaultType;
      }

      generatorUtils.removeEmptyObjects(parameters);
      var progress = cli.interaction.progress($('Performing check traffic manager relative dns name availability operation'));
      try {
        profileResultVar = trafficManagerManagementClient.profiles.checkTrafficManagerRelativeDnsNameAvailability(parameters, _);
      } finally {
        progress.end();
      }

      cli.interaction.formatOutput(profileResultVar, generatorUtils.traverse);
    });
};
