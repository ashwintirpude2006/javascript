'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOperation = getOperation;
exports.validateParams = validateParams;
exports.getURL = getURL;
exports.prepareParams = prepareParams;
exports.handleResponse = handleResponse;

var _flow_interfaces = require('../../flow_interfaces');

function getOperation() {
  return 'PNChannelsForGroupOperation';
}

function validateParams(modules, incomingParams) {
  var channelGroup = incomingParams.channelGroup;
  var config = modules.config;


  if (!channelGroup) return 'Missing Channel Group';
  if (!config.subscribeKey) return 'Missing Subscribe Key';
}

function getURL(modules, incomingParams) {
  var channelGroup = incomingParams.channelGroup;
  var config = modules.config;

  return '/v1/channel-registration/sub-key/' + config.subscribeKey + '/channel-group/' + channelGroup;
}

function prepareParams() {
  return {};
}

function handleResponse(modules, payload) {
  return {
    channels: payload.payload.channels
  };
}
//# sourceMappingURL=list_channels.js.map