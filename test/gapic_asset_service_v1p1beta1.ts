// Copyright 2022 Google LLC
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
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

import * as protos from '../protos/protos';
import * as assert from 'assert';
import * as sinon from 'sinon';
import {SinonStub} from 'sinon';
import {describe, it} from 'mocha';
import * as assetserviceModule from '../src';

import {PassThrough} from 'stream';

import {protobuf} from 'google-gax';

// Dynamically loaded proto JSON is needed to get the type information
// to fill in default values for request objects
const root = protobuf.Root.fromJSON(
  require('../protos/protos.json')
).resolveAll();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getTypeDefaultValue(typeName: string, fields: string[]) {
  let type = root.lookupType(typeName) as protobuf.Type;
  for (const field of fields.slice(0, -1)) {
    type = type.fields[field]?.resolvedType as protobuf.Type;
  }
  return type.fields[fields[fields.length - 1]]?.defaultValue;
}

function generateSampleMessage<T extends object>(instance: T) {
  const filledObject = (
    instance.constructor as typeof protobuf.Message
  ).toObject(instance as protobuf.Message<T>, {defaults: true});
  return (instance.constructor as typeof protobuf.Message).fromObject(
    filledObject
  ) as T;
}

function stubSimpleCall<ResponseType>(response?: ResponseType, error?: Error) {
  return error
    ? sinon.stub().rejects(error)
    : sinon.stub().resolves([response]);
}

function stubSimpleCallWithCallback<ResponseType>(
  response?: ResponseType,
  error?: Error
) {
  return error
    ? sinon.stub().callsArgWith(2, error)
    : sinon.stub().callsArgWith(2, null, response);
}

function stubPageStreamingCall<ResponseType>(
  responses?: ResponseType[],
  error?: Error
) {
  const pagingStub = sinon.stub();
  if (responses) {
    for (let i = 0; i < responses.length; ++i) {
      pagingStub.onCall(i).callsArgWith(2, null, responses[i]);
    }
  }
  const transformStub = error
    ? sinon.stub().callsArgWith(2, error)
    : pagingStub;
  const mockStream = new PassThrough({
    objectMode: true,
    transform: transformStub,
  });
  // trigger as many responses as needed
  if (responses) {
    for (let i = 0; i < responses.length; ++i) {
      setImmediate(() => {
        mockStream.write({});
      });
    }
    setImmediate(() => {
      mockStream.end();
    });
  } else {
    setImmediate(() => {
      mockStream.write({});
    });
    setImmediate(() => {
      mockStream.end();
    });
  }
  return sinon.stub().returns(mockStream);
}

function stubAsyncIterationCall<ResponseType>(
  responses?: ResponseType[],
  error?: Error
) {
  let counter = 0;
  const asyncIterable = {
    [Symbol.asyncIterator]() {
      return {
        async next() {
          if (error) {
            return Promise.reject(error);
          }
          if (counter >= responses!.length) {
            return Promise.resolve({done: true, value: undefined});
          }
          return Promise.resolve({done: false, value: responses![counter++]});
        },
      };
    },
  };
  return sinon.stub().returns(asyncIterable);
}

describe('v1p1beta1.AssetServiceClient', () => {
  describe('Common methods', () => {
    it('has servicePath', () => {
      const servicePath =
        assetserviceModule.v1p1beta1.AssetServiceClient.servicePath;
      assert(servicePath);
    });

    it('has apiEndpoint', () => {
      const apiEndpoint =
        assetserviceModule.v1p1beta1.AssetServiceClient.apiEndpoint;
      assert(apiEndpoint);
    });

    it('has port', () => {
      const port = assetserviceModule.v1p1beta1.AssetServiceClient.port;
      assert(port);
      assert(typeof port === 'number');
    });

    it('should create a client with no option', () => {
      const client = new assetserviceModule.v1p1beta1.AssetServiceClient();
      assert(client);
    });

    it('should create a client with gRPC fallback', () => {
      const client = new assetserviceModule.v1p1beta1.AssetServiceClient({
        fallback: true,
      });
      assert(client);
    });

    it('has initialize method and supports deferred initialization', async () => {
      const client = new assetserviceModule.v1p1beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert.strictEqual(client.assetServiceStub, undefined);
      await client.initialize();
      assert(client.assetServiceStub);
    });

    it('has close method for the initialized client', done => {
      const client = new assetserviceModule.v1p1beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      assert(client.assetServiceStub);
      client.close().then(() => {
        done();
      });
    });

    it('has close method for the non-initialized client', done => {
      const client = new assetserviceModule.v1p1beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert.strictEqual(client.assetServiceStub, undefined);
      client.close().then(() => {
        done();
      });
    });

    it('has getProjectId method', async () => {
      const fakeProjectId = 'fake-project-id';
      const client = new assetserviceModule.v1p1beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.auth.getProjectId = sinon.stub().resolves(fakeProjectId);
      const result = await client.getProjectId();
      assert.strictEqual(result, fakeProjectId);
      assert((client.auth.getProjectId as SinonStub).calledWithExactly());
    });

    it('has getProjectId method with callback', async () => {
      const fakeProjectId = 'fake-project-id';
      const client = new assetserviceModule.v1p1beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.auth.getProjectId = sinon
        .stub()
        .callsArgWith(0, null, fakeProjectId);
      const promise = new Promise((resolve, reject) => {
        client.getProjectId((err?: Error | null, projectId?: string | null) => {
          if (err) {
            reject(err);
          } else {
            resolve(projectId);
          }
        });
      });
      const result = await promise;
      assert.strictEqual(result, fakeProjectId);
    });
  });

  describe('searchAllResources', () => {
    it('invokes searchAllResources without error', async () => {
      const client = new assetserviceModule.v1p1beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.asset.v1p1beta1.SearchAllResourcesRequest()
      );
      const defaultValue1 = getTypeDefaultValue('SearchAllResourcesRequest', [
        'scope',
      ]);
      request.scope = defaultValue1;
      const expectedHeaderRequestParams = `scope=${defaultValue1}`;
      const expectedResponse = [
        generateSampleMessage(
          new protos.google.cloud.asset.v1p1beta1.StandardResourceMetadata()
        ),
        generateSampleMessage(
          new protos.google.cloud.asset.v1p1beta1.StandardResourceMetadata()
        ),
        generateSampleMessage(
          new protos.google.cloud.asset.v1p1beta1.StandardResourceMetadata()
        ),
      ];
      client.innerApiCalls.searchAllResources =
        stubSimpleCall(expectedResponse);
      const [response] = await client.searchAllResources(request);
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (
        client.innerApiCalls.searchAllResources as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.searchAllResources as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes searchAllResources without error using callback', async () => {
      const client = new assetserviceModule.v1p1beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.asset.v1p1beta1.SearchAllResourcesRequest()
      );
      const defaultValue1 = getTypeDefaultValue('SearchAllResourcesRequest', [
        'scope',
      ]);
      request.scope = defaultValue1;
      const expectedHeaderRequestParams = `scope=${defaultValue1}`;
      const expectedResponse = [
        generateSampleMessage(
          new protos.google.cloud.asset.v1p1beta1.StandardResourceMetadata()
        ),
        generateSampleMessage(
          new protos.google.cloud.asset.v1p1beta1.StandardResourceMetadata()
        ),
        generateSampleMessage(
          new protos.google.cloud.asset.v1p1beta1.StandardResourceMetadata()
        ),
      ];
      client.innerApiCalls.searchAllResources =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.searchAllResources(
          request,
          (
            err?: Error | null,
            result?:
              | protos.google.cloud.asset.v1p1beta1.IStandardResourceMetadata[]
              | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (
        client.innerApiCalls.searchAllResources as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.searchAllResources as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes searchAllResources with error', async () => {
      const client = new assetserviceModule.v1p1beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.asset.v1p1beta1.SearchAllResourcesRequest()
      );
      const defaultValue1 = getTypeDefaultValue('SearchAllResourcesRequest', [
        'scope',
      ]);
      request.scope = defaultValue1;
      const expectedHeaderRequestParams = `scope=${defaultValue1}`;
      const expectedError = new Error('expected');
      client.innerApiCalls.searchAllResources = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.searchAllResources(request), expectedError);
      const actualRequest = (
        client.innerApiCalls.searchAllResources as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.searchAllResources as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes searchAllResourcesStream without error', async () => {
      const client = new assetserviceModule.v1p1beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.asset.v1p1beta1.SearchAllResourcesRequest()
      );
      const defaultValue1 = getTypeDefaultValue('SearchAllResourcesRequest', [
        'scope',
      ]);
      request.scope = defaultValue1;
      const expectedHeaderRequestParams = `scope=${defaultValue1}`;
      const expectedResponse = [
        generateSampleMessage(
          new protos.google.cloud.asset.v1p1beta1.StandardResourceMetadata()
        ),
        generateSampleMessage(
          new protos.google.cloud.asset.v1p1beta1.StandardResourceMetadata()
        ),
        generateSampleMessage(
          new protos.google.cloud.asset.v1p1beta1.StandardResourceMetadata()
        ),
      ];
      client.descriptors.page.searchAllResources.createStream =
        stubPageStreamingCall(expectedResponse);
      const stream = client.searchAllResourcesStream(request);
      const promise = new Promise((resolve, reject) => {
        const responses: protos.google.cloud.asset.v1p1beta1.StandardResourceMetadata[] =
          [];
        stream.on(
          'data',
          (
            response: protos.google.cloud.asset.v1p1beta1.StandardResourceMetadata
          ) => {
            responses.push(response);
          }
        );
        stream.on('end', () => {
          resolve(responses);
        });
        stream.on('error', (err: Error) => {
          reject(err);
        });
      });
      const responses = await promise;
      assert.deepStrictEqual(responses, expectedResponse);
      assert(
        (client.descriptors.page.searchAllResources.createStream as SinonStub)
          .getCall(0)
          .calledWith(client.innerApiCalls.searchAllResources, request)
      );
      assert(
        (client.descriptors.page.searchAllResources.createStream as SinonStub)
          .getCall(0)
          .args[2].otherArgs.headers['x-goog-request-params'].includes(
            expectedHeaderRequestParams
          )
      );
    });

    it('invokes searchAllResourcesStream with error', async () => {
      const client = new assetserviceModule.v1p1beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.asset.v1p1beta1.SearchAllResourcesRequest()
      );
      const defaultValue1 = getTypeDefaultValue('SearchAllResourcesRequest', [
        'scope',
      ]);
      request.scope = defaultValue1;
      const expectedHeaderRequestParams = `scope=${defaultValue1}`;
      const expectedError = new Error('expected');
      client.descriptors.page.searchAllResources.createStream =
        stubPageStreamingCall(undefined, expectedError);
      const stream = client.searchAllResourcesStream(request);
      const promise = new Promise((resolve, reject) => {
        const responses: protos.google.cloud.asset.v1p1beta1.StandardResourceMetadata[] =
          [];
        stream.on(
          'data',
          (
            response: protos.google.cloud.asset.v1p1beta1.StandardResourceMetadata
          ) => {
            responses.push(response);
          }
        );
        stream.on('end', () => {
          resolve(responses);
        });
        stream.on('error', (err: Error) => {
          reject(err);
        });
      });
      await assert.rejects(promise, expectedError);
      assert(
        (client.descriptors.page.searchAllResources.createStream as SinonStub)
          .getCall(0)
          .calledWith(client.innerApiCalls.searchAllResources, request)
      );
      assert(
        (client.descriptors.page.searchAllResources.createStream as SinonStub)
          .getCall(0)
          .args[2].otherArgs.headers['x-goog-request-params'].includes(
            expectedHeaderRequestParams
          )
      );
    });

    it('uses async iteration with searchAllResources without error', async () => {
      const client = new assetserviceModule.v1p1beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.asset.v1p1beta1.SearchAllResourcesRequest()
      );
      const defaultValue1 = getTypeDefaultValue('SearchAllResourcesRequest', [
        'scope',
      ]);
      request.scope = defaultValue1;
      const expectedHeaderRequestParams = `scope=${defaultValue1}`;
      const expectedResponse = [
        generateSampleMessage(
          new protos.google.cloud.asset.v1p1beta1.StandardResourceMetadata()
        ),
        generateSampleMessage(
          new protos.google.cloud.asset.v1p1beta1.StandardResourceMetadata()
        ),
        generateSampleMessage(
          new protos.google.cloud.asset.v1p1beta1.StandardResourceMetadata()
        ),
      ];
      client.descriptors.page.searchAllResources.asyncIterate =
        stubAsyncIterationCall(expectedResponse);
      const responses: protos.google.cloud.asset.v1p1beta1.IStandardResourceMetadata[] =
        [];
      const iterable = client.searchAllResourcesAsync(request);
      for await (const resource of iterable) {
        responses.push(resource!);
      }
      assert.deepStrictEqual(responses, expectedResponse);
      assert.deepStrictEqual(
        (
          client.descriptors.page.searchAllResources.asyncIterate as SinonStub
        ).getCall(0).args[1],
        request
      );
      assert(
        (client.descriptors.page.searchAllResources.asyncIterate as SinonStub)
          .getCall(0)
          .args[2].otherArgs.headers['x-goog-request-params'].includes(
            expectedHeaderRequestParams
          )
      );
    });

    it('uses async iteration with searchAllResources with error', async () => {
      const client = new assetserviceModule.v1p1beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.asset.v1p1beta1.SearchAllResourcesRequest()
      );
      const defaultValue1 = getTypeDefaultValue('SearchAllResourcesRequest', [
        'scope',
      ]);
      request.scope = defaultValue1;
      const expectedHeaderRequestParams = `scope=${defaultValue1}`;
      const expectedError = new Error('expected');
      client.descriptors.page.searchAllResources.asyncIterate =
        stubAsyncIterationCall(undefined, expectedError);
      const iterable = client.searchAllResourcesAsync(request);
      await assert.rejects(async () => {
        const responses: protos.google.cloud.asset.v1p1beta1.IStandardResourceMetadata[] =
          [];
        for await (const resource of iterable) {
          responses.push(resource!);
        }
      });
      assert.deepStrictEqual(
        (
          client.descriptors.page.searchAllResources.asyncIterate as SinonStub
        ).getCall(0).args[1],
        request
      );
      assert(
        (client.descriptors.page.searchAllResources.asyncIterate as SinonStub)
          .getCall(0)
          .args[2].otherArgs.headers['x-goog-request-params'].includes(
            expectedHeaderRequestParams
          )
      );
    });
  });

  describe('searchAllIamPolicies', () => {
    it('invokes searchAllIamPolicies without error', async () => {
      const client = new assetserviceModule.v1p1beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.asset.v1p1beta1.SearchAllIamPoliciesRequest()
      );
      const defaultValue1 = getTypeDefaultValue('SearchAllIamPoliciesRequest', [
        'scope',
      ]);
      request.scope = defaultValue1;
      const expectedHeaderRequestParams = `scope=${defaultValue1}`;
      const expectedResponse = [
        generateSampleMessage(
          new protos.google.cloud.asset.v1p1beta1.IamPolicySearchResult()
        ),
        generateSampleMessage(
          new protos.google.cloud.asset.v1p1beta1.IamPolicySearchResult()
        ),
        generateSampleMessage(
          new protos.google.cloud.asset.v1p1beta1.IamPolicySearchResult()
        ),
      ];
      client.innerApiCalls.searchAllIamPolicies =
        stubSimpleCall(expectedResponse);
      const [response] = await client.searchAllIamPolicies(request);
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (
        client.innerApiCalls.searchAllIamPolicies as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.searchAllIamPolicies as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes searchAllIamPolicies without error using callback', async () => {
      const client = new assetserviceModule.v1p1beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.asset.v1p1beta1.SearchAllIamPoliciesRequest()
      );
      const defaultValue1 = getTypeDefaultValue('SearchAllIamPoliciesRequest', [
        'scope',
      ]);
      request.scope = defaultValue1;
      const expectedHeaderRequestParams = `scope=${defaultValue1}`;
      const expectedResponse = [
        generateSampleMessage(
          new protos.google.cloud.asset.v1p1beta1.IamPolicySearchResult()
        ),
        generateSampleMessage(
          new protos.google.cloud.asset.v1p1beta1.IamPolicySearchResult()
        ),
        generateSampleMessage(
          new protos.google.cloud.asset.v1p1beta1.IamPolicySearchResult()
        ),
      ];
      client.innerApiCalls.searchAllIamPolicies =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.searchAllIamPolicies(
          request,
          (
            err?: Error | null,
            result?:
              | protos.google.cloud.asset.v1p1beta1.IIamPolicySearchResult[]
              | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (
        client.innerApiCalls.searchAllIamPolicies as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.searchAllIamPolicies as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes searchAllIamPolicies with error', async () => {
      const client = new assetserviceModule.v1p1beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.asset.v1p1beta1.SearchAllIamPoliciesRequest()
      );
      const defaultValue1 = getTypeDefaultValue('SearchAllIamPoliciesRequest', [
        'scope',
      ]);
      request.scope = defaultValue1;
      const expectedHeaderRequestParams = `scope=${defaultValue1}`;
      const expectedError = new Error('expected');
      client.innerApiCalls.searchAllIamPolicies = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.searchAllIamPolicies(request), expectedError);
      const actualRequest = (
        client.innerApiCalls.searchAllIamPolicies as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.searchAllIamPolicies as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes searchAllIamPoliciesStream without error', async () => {
      const client = new assetserviceModule.v1p1beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.asset.v1p1beta1.SearchAllIamPoliciesRequest()
      );
      const defaultValue1 = getTypeDefaultValue('SearchAllIamPoliciesRequest', [
        'scope',
      ]);
      request.scope = defaultValue1;
      const expectedHeaderRequestParams = `scope=${defaultValue1}`;
      const expectedResponse = [
        generateSampleMessage(
          new protos.google.cloud.asset.v1p1beta1.IamPolicySearchResult()
        ),
        generateSampleMessage(
          new protos.google.cloud.asset.v1p1beta1.IamPolicySearchResult()
        ),
        generateSampleMessage(
          new protos.google.cloud.asset.v1p1beta1.IamPolicySearchResult()
        ),
      ];
      client.descriptors.page.searchAllIamPolicies.createStream =
        stubPageStreamingCall(expectedResponse);
      const stream = client.searchAllIamPoliciesStream(request);
      const promise = new Promise((resolve, reject) => {
        const responses: protos.google.cloud.asset.v1p1beta1.IamPolicySearchResult[] =
          [];
        stream.on(
          'data',
          (
            response: protos.google.cloud.asset.v1p1beta1.IamPolicySearchResult
          ) => {
            responses.push(response);
          }
        );
        stream.on('end', () => {
          resolve(responses);
        });
        stream.on('error', (err: Error) => {
          reject(err);
        });
      });
      const responses = await promise;
      assert.deepStrictEqual(responses, expectedResponse);
      assert(
        (client.descriptors.page.searchAllIamPolicies.createStream as SinonStub)
          .getCall(0)
          .calledWith(client.innerApiCalls.searchAllIamPolicies, request)
      );
      assert(
        (client.descriptors.page.searchAllIamPolicies.createStream as SinonStub)
          .getCall(0)
          .args[2].otherArgs.headers['x-goog-request-params'].includes(
            expectedHeaderRequestParams
          )
      );
    });

    it('invokes searchAllIamPoliciesStream with error', async () => {
      const client = new assetserviceModule.v1p1beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.asset.v1p1beta1.SearchAllIamPoliciesRequest()
      );
      const defaultValue1 = getTypeDefaultValue('SearchAllIamPoliciesRequest', [
        'scope',
      ]);
      request.scope = defaultValue1;
      const expectedHeaderRequestParams = `scope=${defaultValue1}`;
      const expectedError = new Error('expected');
      client.descriptors.page.searchAllIamPolicies.createStream =
        stubPageStreamingCall(undefined, expectedError);
      const stream = client.searchAllIamPoliciesStream(request);
      const promise = new Promise((resolve, reject) => {
        const responses: protos.google.cloud.asset.v1p1beta1.IamPolicySearchResult[] =
          [];
        stream.on(
          'data',
          (
            response: protos.google.cloud.asset.v1p1beta1.IamPolicySearchResult
          ) => {
            responses.push(response);
          }
        );
        stream.on('end', () => {
          resolve(responses);
        });
        stream.on('error', (err: Error) => {
          reject(err);
        });
      });
      await assert.rejects(promise, expectedError);
      assert(
        (client.descriptors.page.searchAllIamPolicies.createStream as SinonStub)
          .getCall(0)
          .calledWith(client.innerApiCalls.searchAllIamPolicies, request)
      );
      assert(
        (client.descriptors.page.searchAllIamPolicies.createStream as SinonStub)
          .getCall(0)
          .args[2].otherArgs.headers['x-goog-request-params'].includes(
            expectedHeaderRequestParams
          )
      );
    });

    it('uses async iteration with searchAllIamPolicies without error', async () => {
      const client = new assetserviceModule.v1p1beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.asset.v1p1beta1.SearchAllIamPoliciesRequest()
      );
      const defaultValue1 = getTypeDefaultValue('SearchAllIamPoliciesRequest', [
        'scope',
      ]);
      request.scope = defaultValue1;
      const expectedHeaderRequestParams = `scope=${defaultValue1}`;
      const expectedResponse = [
        generateSampleMessage(
          new protos.google.cloud.asset.v1p1beta1.IamPolicySearchResult()
        ),
        generateSampleMessage(
          new protos.google.cloud.asset.v1p1beta1.IamPolicySearchResult()
        ),
        generateSampleMessage(
          new protos.google.cloud.asset.v1p1beta1.IamPolicySearchResult()
        ),
      ];
      client.descriptors.page.searchAllIamPolicies.asyncIterate =
        stubAsyncIterationCall(expectedResponse);
      const responses: protos.google.cloud.asset.v1p1beta1.IIamPolicySearchResult[] =
        [];
      const iterable = client.searchAllIamPoliciesAsync(request);
      for await (const resource of iterable) {
        responses.push(resource!);
      }
      assert.deepStrictEqual(responses, expectedResponse);
      assert.deepStrictEqual(
        (
          client.descriptors.page.searchAllIamPolicies.asyncIterate as SinonStub
        ).getCall(0).args[1],
        request
      );
      assert(
        (client.descriptors.page.searchAllIamPolicies.asyncIterate as SinonStub)
          .getCall(0)
          .args[2].otherArgs.headers['x-goog-request-params'].includes(
            expectedHeaderRequestParams
          )
      );
    });

    it('uses async iteration with searchAllIamPolicies with error', async () => {
      const client = new assetserviceModule.v1p1beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.asset.v1p1beta1.SearchAllIamPoliciesRequest()
      );
      const defaultValue1 = getTypeDefaultValue('SearchAllIamPoliciesRequest', [
        'scope',
      ]);
      request.scope = defaultValue1;
      const expectedHeaderRequestParams = `scope=${defaultValue1}`;
      const expectedError = new Error('expected');
      client.descriptors.page.searchAllIamPolicies.asyncIterate =
        stubAsyncIterationCall(undefined, expectedError);
      const iterable = client.searchAllIamPoliciesAsync(request);
      await assert.rejects(async () => {
        const responses: protos.google.cloud.asset.v1p1beta1.IIamPolicySearchResult[] =
          [];
        for await (const resource of iterable) {
          responses.push(resource!);
        }
      });
      assert.deepStrictEqual(
        (
          client.descriptors.page.searchAllIamPolicies.asyncIterate as SinonStub
        ).getCall(0).args[1],
        request
      );
      assert(
        (client.descriptors.page.searchAllIamPolicies.asyncIterate as SinonStub)
          .getCall(0)
          .args[2].otherArgs.headers['x-goog-request-params'].includes(
            expectedHeaderRequestParams
          )
      );
    });
  });
});
