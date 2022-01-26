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
import { describe, it } from 'mocha';
import * as assetserviceModule from '../src';

import {protobuf, LROperation, operationsProtos} from 'google-gax';

function generateSampleMessage<T extends object>(instance: T) {
    const filledObject = (instance.constructor as typeof protobuf.Message)
        .toObject(instance as protobuf.Message<T>, {defaults: true});
    return (instance.constructor as typeof protobuf.Message).fromObject(filledObject) as T;
}

function stubSimpleCall<ResponseType>(response?: ResponseType, error?: Error) {
    return error ? sinon.stub().rejects(error) : sinon.stub().resolves([response]);
}

function stubSimpleCallWithCallback<ResponseType>(response?: ResponseType, error?: Error) {
    return error ? sinon.stub().callsArgWith(2, error) : sinon.stub().callsArgWith(2, null, response);
}

function stubLongRunningCall<ResponseType>(response?: ResponseType, callError?: Error, lroError?: Error) {
    const innerStub = lroError ? sinon.stub().rejects(lroError) : sinon.stub().resolves([response]);
    const mockOperation = {
        promise: innerStub,
    };
    return callError ? sinon.stub().rejects(callError) : sinon.stub().resolves([mockOperation]);
}

function stubLongRunningCallWithCallback<ResponseType>(response?: ResponseType, callError?: Error, lroError?: Error) {
    const innerStub = lroError ? sinon.stub().rejects(lroError) : sinon.stub().resolves([response]);
    const mockOperation = {
        promise: innerStub,
    };
    return callError ? sinon.stub().callsArgWith(2, callError) : sinon.stub().callsArgWith(2, null, mockOperation);
}

describe('v1p4beta1.AssetServiceClient', () => {
    it('has servicePath', () => {
        const servicePath = assetserviceModule.v1p4beta1.AssetServiceClient.servicePath;
        assert(servicePath);
    });

    it('has apiEndpoint', () => {
        const apiEndpoint = assetserviceModule.v1p4beta1.AssetServiceClient.apiEndpoint;
        assert(apiEndpoint);
    });

    it('has port', () => {
        const port = assetserviceModule.v1p4beta1.AssetServiceClient.port;
        assert(port);
        assert(typeof port === 'number');
    });

    it('should create a client with no option', () => {
        const client = new assetserviceModule.v1p4beta1.AssetServiceClient();
        assert(client);
    });

    it('should create a client with gRPC fallback', () => {
        const client = new assetserviceModule.v1p4beta1.AssetServiceClient({
            fallback: true,
        });
        assert(client);
    });

    it('has initialize method and supports deferred initialization', async () => {
        const client = new assetserviceModule.v1p4beta1.AssetServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
        assert.strictEqual(client.assetServiceStub, undefined);
        await client.initialize();
        assert(client.assetServiceStub);
    });

    it('has close method', () => {
        const client = new assetserviceModule.v1p4beta1.AssetServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
        client.close();
    });

    it('has getProjectId method', async () => {
        const fakeProjectId = 'fake-project-id';
        const client = new assetserviceModule.v1p4beta1.AssetServiceClient({
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
        const client = new assetserviceModule.v1p4beta1.AssetServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
        client.auth.getProjectId = sinon.stub().callsArgWith(0, null, fakeProjectId);
        const promise = new Promise((resolve, reject) => {
            client.getProjectId((err?: Error|null, projectId?: string|null) => {
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

    describe('analyzeIamPolicy', () => {
        it('invokes analyzeIamPolicy without error', async () => {
            const client = new assetserviceModule.v1p4beta1.AssetServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.asset.v1p4beta1.AnalyzeIamPolicyRequest());
            request.analysisQuery = {};
            request.analysisQuery.parent = '';
            const expectedHeaderRequestParams = "analysis_query.parent=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(new protos.google.cloud.asset.v1p4beta1.AnalyzeIamPolicyResponse());
            client.innerApiCalls.analyzeIamPolicy = stubSimpleCall(expectedResponse);
            const [response] = await client.analyzeIamPolicy(request);
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.analyzeIamPolicy as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes analyzeIamPolicy without error using callback', async () => {
            const client = new assetserviceModule.v1p4beta1.AssetServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.asset.v1p4beta1.AnalyzeIamPolicyRequest());
            request.analysisQuery = {};
            request.analysisQuery.parent = '';
            const expectedHeaderRequestParams = "analysis_query.parent=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(new protos.google.cloud.asset.v1p4beta1.AnalyzeIamPolicyResponse());
            client.innerApiCalls.analyzeIamPolicy = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.analyzeIamPolicy(
                    request,
                    (err?: Error|null, result?: protos.google.cloud.asset.v1p4beta1.IAnalyzeIamPolicyResponse|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.analyzeIamPolicy as SinonStub)
                .getCall(0).calledWith(request, expectedOptions /*, callback defined above */));
        });

        it('invokes analyzeIamPolicy with error', async () => {
            const client = new assetserviceModule.v1p4beta1.AssetServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.asset.v1p4beta1.AnalyzeIamPolicyRequest());
            request.analysisQuery = {};
            request.analysisQuery.parent = '';
            const expectedHeaderRequestParams = "analysis_query.parent=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedError = new Error('expected');
            client.innerApiCalls.analyzeIamPolicy = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.analyzeIamPolicy(request), expectedError);
            assert((client.innerApiCalls.analyzeIamPolicy as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });
    });

    describe('exportIamPolicyAnalysis', () => {
        it('invokes exportIamPolicyAnalysis without error', async () => {
            const client = new assetserviceModule.v1p4beta1.AssetServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.asset.v1p4beta1.ExportIamPolicyAnalysisRequest());
            request.analysisQuery = {};
            request.analysisQuery.parent = '';
            const expectedHeaderRequestParams = "analysis_query.parent=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(new protos.google.longrunning.Operation());
            client.innerApiCalls.exportIamPolicyAnalysis = stubLongRunningCall(expectedResponse);
            const [operation] = await client.exportIamPolicyAnalysis(request);
            const [response] = await operation.promise();
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.exportIamPolicyAnalysis as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes exportIamPolicyAnalysis without error using callback', async () => {
            const client = new assetserviceModule.v1p4beta1.AssetServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.asset.v1p4beta1.ExportIamPolicyAnalysisRequest());
            request.analysisQuery = {};
            request.analysisQuery.parent = '';
            const expectedHeaderRequestParams = "analysis_query.parent=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(new protos.google.longrunning.Operation());
            client.innerApiCalls.exportIamPolicyAnalysis = stubLongRunningCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.exportIamPolicyAnalysis(
                    request,
                    (err?: Error|null,
                     result?: LROperation<protos.google.cloud.asset.v1p4beta1.IExportIamPolicyAnalysisResponse, protos.google.cloud.asset.v1p4beta1.IExportIamPolicyAnalysisRequest>|null
                    ) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const operation = await promise as LROperation<protos.google.cloud.asset.v1p4beta1.IExportIamPolicyAnalysisResponse, protos.google.cloud.asset.v1p4beta1.IExportIamPolicyAnalysisRequest>;
            const [response] = await operation.promise();
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.exportIamPolicyAnalysis as SinonStub)
                .getCall(0).calledWith(request, expectedOptions /*, callback defined above */));
        });

        it('invokes exportIamPolicyAnalysis with call error', async () => {
            const client = new assetserviceModule.v1p4beta1.AssetServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.asset.v1p4beta1.ExportIamPolicyAnalysisRequest());
            request.analysisQuery = {};
            request.analysisQuery.parent = '';
            const expectedHeaderRequestParams = "analysis_query.parent=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedError = new Error('expected');
            client.innerApiCalls.exportIamPolicyAnalysis = stubLongRunningCall(undefined, expectedError);
            await assert.rejects(client.exportIamPolicyAnalysis(request), expectedError);
            assert((client.innerApiCalls.exportIamPolicyAnalysis as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes exportIamPolicyAnalysis with LRO error', async () => {
            const client = new assetserviceModule.v1p4beta1.AssetServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.asset.v1p4beta1.ExportIamPolicyAnalysisRequest());
            request.analysisQuery = {};
            request.analysisQuery.parent = '';
            const expectedHeaderRequestParams = "analysis_query.parent=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedError = new Error('expected');
            client.innerApiCalls.exportIamPolicyAnalysis = stubLongRunningCall(undefined, undefined, expectedError);
            const [operation] = await client.exportIamPolicyAnalysis(request);
            await assert.rejects(operation.promise(), expectedError);
            assert((client.innerApiCalls.exportIamPolicyAnalysis as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes checkExportIamPolicyAnalysisProgress without error', async () => {
            const client = new assetserviceModule.v1p4beta1.AssetServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const expectedResponse = generateSampleMessage(new operationsProtos.google.longrunning.Operation());
            expectedResponse.name = 'test';
            expectedResponse.response = {type_url: 'url', value: Buffer.from('')};
            expectedResponse.metadata = {type_url: 'url', value: Buffer.from('')}

            client.operationsClient.getOperation = stubSimpleCall(expectedResponse);
            const decodedOperation = await client.checkExportIamPolicyAnalysisProgress(expectedResponse.name);
            assert.deepStrictEqual(decodedOperation.name, expectedResponse.name);
            assert(decodedOperation.metadata);
            assert((client.operationsClient.getOperation as SinonStub).getCall(0));
        });

        it('invokes checkExportIamPolicyAnalysisProgress with error', async () => {
            const client = new assetserviceModule.v1p4beta1.AssetServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const expectedError = new Error('expected');

            client.operationsClient.getOperation = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.checkExportIamPolicyAnalysisProgress(''), expectedError);
            assert((client.operationsClient.getOperation as SinonStub)
                .getCall(0));
        });
    });
});
