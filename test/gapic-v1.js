// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const assert = require('assert');

const assetModule = require('../src');

const FAKE_STATUS_CODE = 1;
const error = new Error();
error.code = FAKE_STATUS_CODE;

describe('AssetServiceClient', () => {
  it('has servicePath', () => {
    const servicePath = assetModule.v1.AssetServiceClient.servicePath;
    assert(servicePath);
  });

  it('has apiEndpoint', () => {
    const apiEndpoint = assetModule.v1.AssetServiceClient.apiEndpoint;
    assert(apiEndpoint);
  });

  it('has port', () => {
    const port = assetModule.v1.AssetServiceClient.port;
    assert(port);
    assert(typeof port === 'number');
  });

  it('should create a client with no options', () => {
    const client = new assetModule.v1.AssetServiceClient();
    assert(client);
  });

  describe('exportAssets', function() {
    it('invokes exportAssets without error', done => {
      const client = new assetModule.v1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const parent = 'parent-995424086';
      const outputConfig = {};
      const request = {
        parent: parent,
        outputConfig: outputConfig,
      };

      // Mock response
      const expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.exportAssets = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );

      client
        .exportAssets(request)
        .then(responses => {
          const operation = responses[0];
          return operation.promise();
        })
        .then(responses => {
          assert.deepStrictEqual(responses[0], expectedResponse);
          done();
        })
        .catch(err => {
          done(err);
        });
    });

    it('invokes exportAssets with error', done => {
      const client = new assetModule.v1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const parent = 'parent-995424086';
      const outputConfig = {};
      const request = {
        parent: parent,
        outputConfig: outputConfig,
      };

      // Mock Grpc layer
      client._innerApiCalls.exportAssets = mockLongRunningGrpcMethod(
        request,
        null,
        error
      );

      client
        .exportAssets(request)
        .then(responses => {
          const operation = responses[0];
          return operation.promise();
        })
        .then(() => {
          assert.fail();
        })
        .catch(err => {
          assert(err instanceof Error);
          assert.strictEqual(err.code, FAKE_STATUS_CODE);
          done();
        });
    });

    it('has longrunning decoder functions', () => {
      const client = new assetModule.v1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert(
        client._descriptors.longrunning.exportAssets.responseDecoder instanceof
          Function
      );
      assert(
        client._descriptors.longrunning.exportAssets.metadataDecoder instanceof
          Function
      );
    });
  });

  describe('batchGetAssetsHistory', () => {
    it('invokes batchGetAssetsHistory without error', done => {
      const client = new assetModule.v1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const parent = 'parent-995424086';
      const contentType = 'CONTENT_TYPE_UNSPECIFIED';
      const readTimeWindow = {};
      const request = {
        parent: parent,
        contentType: contentType,
        readTimeWindow: readTimeWindow,
      };

      // Mock response
      const expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.batchGetAssetsHistory = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.batchGetAssetsHistory(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes batchGetAssetsHistory with error', done => {
      const client = new assetModule.v1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const parent = 'parent-995424086';
      const contentType = 'CONTENT_TYPE_UNSPECIFIED';
      const readTimeWindow = {};
      const request = {
        parent: parent,
        contentType: contentType,
        readTimeWindow: readTimeWindow,
      };

      // Mock Grpc layer
      client._innerApiCalls.batchGetAssetsHistory = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.batchGetAssetsHistory(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
});

function mockSimpleGrpcMethod(expectedRequest, response, error) {
  return function(actualRequest, options, callback) {
    assert.deepStrictEqual(actualRequest, expectedRequest);
    if (error) {
      callback(error);
    } else if (response) {
      callback(null, response);
    } else {
      callback(null);
    }
  };
}

function mockLongRunningGrpcMethod(expectedRequest, response, error) {
  return request => {
    assert.deepStrictEqual(request, expectedRequest);
    const mockOperation = {
      promise: function() {
        return new Promise((resolve, reject) => {
          if (error) {
            reject(error);
          } else {
            resolve([response]);
          }
        });
      },
    };
    return Promise.resolve([mockOperation]);
  };
}
