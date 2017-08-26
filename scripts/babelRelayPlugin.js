const getBabelRelayPlugin = require('babel-relay-plugin');
const introspectionQuery = require('graphql/utilities').introspectionQuery;
const request = require('sync-request');
const url = require('../conf/constants.json').backendUrl;


const response = request('POST', url, {
  qs: {
    query: introspectionQuery
  }
});

const schema = JSON.parse(response.body.toString('utf-8'));

module.exports = getBabelRelayPlugin(schema.data, { abortOnError: true });
