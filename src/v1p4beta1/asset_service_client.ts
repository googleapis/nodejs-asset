// Copyright 2021 Google LLC
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

/* global window */
import * as gax from 'google-gax';
import {Callback, CallOptions, Descriptors, ClientOptions, LROperation} from 'google-gax';

import * as protos from '../../protos/protos';
import jsonProtos = require('../../protos/protos.json');
/**
 * Client JSON configuration object, loaded from
 * `src/v1p4beta1/asset_service_client_config.json`.
 * This file defines retry strategy and timeouts for all API methods in this library.
 */
import * as gapicConfig from './asset_service_client_config.json';
import { operationsProtos } from 'google-gax';
const version = require('../../../package.json').version;

/**
 *  Asset service definition.
 * @class
 * @memberof v1p4beta1
 */
export class AssetServiceClient {
  private _terminated = false;
  private _opts: ClientOptions;
  private _gaxModule: typeof gax | typeof gax.fallback;
  private _gaxGrpc: gax.GrpcClient | gax.fallback.GrpcClient;
  private _protos: {};
  private _defaults: {[method: string]: gax.CallSettings};
  auth: gax.GoogleAuth;
  descriptors: Descriptors = {
    page: {},
    stream: {},
    longrunning: {},
    batching: {},
  };
  innerApiCalls: {[name: string]: Function};
  operationsClient: gax.OperationsClient;
  assetServiceStub?: Promise<{[name: string]: Function}>;

  /**
   * Construct an instance of AssetServiceClient.
   *
   * @param {object} [options] - The configuration object.
   * The options accepted by the constructor are described in detail
   * in [this document](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#creating-the-client-instance).
   * The common options are:
   * @param {object} [options.credentials] - Credentials object.
   * @param {string} [options.credentials.client_email]
   * @param {string} [options.credentials.private_key]
   * @param {string} [options.email] - Account email address. Required when
   *     using a .pem or .p12 keyFilename.
   * @param {string} [options.keyFilename] - Full path to the a .json, .pem, or
   *     .p12 key downloaded from the Google Developers Console. If you provide
   *     a path to a JSON file, the projectId option below is not necessary.
   *     NOTE: .pem and .p12 require you to specify options.email as well.
   * @param {number} [options.port] - The port on which to connect to
   *     the remote host.
   * @param {string} [options.projectId] - The project ID from the Google
   *     Developer's Console, e.g. 'grape-spaceship-123'. We will also check
   *     the environment variable GCLOUD_PROJECT for your project ID. If your
   *     app is running in an environment which supports
   *     {@link https://developers.google.com/identity/protocols/application-default-credentials Application Default Credentials},
   *     your project ID will be detected automatically.
   * @param {string} [options.apiEndpoint] - The domain name of the
   *     API remote host.
   * @param {gax.ClientConfig} [options.clientConfig] - Client configuration override.
   *     Follows the structure of {@link gapicConfig}.
   * @param {boolean} [options.fallback] - Use HTTP fallback mode.
   *     In fallback mode, a special browser-compatible transport implementation is used
   *     instead of gRPC transport. In browser context (if the `window` object is defined)
   *     the fallback mode is enabled automatically; set `options.fallback` to `false`
   *     if you need to override this behavior.
   */
  constructor(opts?: ClientOptions) {
    // Ensure that options include all the required fields.
    const staticMembers = this.constructor as typeof AssetServiceClient;
    const servicePath = opts?.servicePath || opts?.apiEndpoint || staticMembers.servicePath;
    const port = opts?.port || staticMembers.port;
    const clientConfig = opts?.clientConfig ?? {};
    const fallback = opts?.fallback ?? (typeof window !== 'undefined' && typeof window?.fetch === 'function');
    opts = Object.assign({servicePath, port, clientConfig, fallback}, opts);

    // If scopes are unset in options and we're connecting to a non-default endpoint, set scopes just in case.
    if (servicePath !== staticMembers.servicePath && !('scopes' in opts)) {
      opts['scopes'] = staticMembers.scopes;
    }

    // Choose either gRPC or proto-over-HTTP implementation of google-gax.
    this._gaxModule = opts.fallback ? gax.fallback : gax;

    // Create a `gaxGrpc` object, with any grpc-specific options sent to the client.
    this._gaxGrpc = new this._gaxModule.GrpcClient(opts);

    // Save options to use in initialize() method.
    this._opts = opts;

    // Save the auth object to the client, for use by other methods.
    this.auth = (this._gaxGrpc.auth as gax.GoogleAuth);

    // Set the default scopes in auth client if needed.
    if (servicePath === staticMembers.servicePath) {
      this.auth.defaultScopes = staticMembers.scopes;
    }

    // Determine the client header string.
    const clientHeader = [
      `gax/${this._gaxModule.version}`,
      `gapic/${version}`,
    ];
    if (typeof process !== 'undefined' && 'versions' in process) {
      clientHeader.push(`gl-node/${process.versions.node}`);
    } else {
      clientHeader.push(`gl-web/${this._gaxModule.version}`);
    }
    if (!opts.fallback) {
      clientHeader.push(`grpc/${this._gaxGrpc.grpcVersion}`);
    } else if (opts.fallback === 'rest' ) {
      clientHeader.push(`rest/${this._gaxGrpc.grpcVersion}`);
    }
    if (opts.libName && opts.libVersion) {
      clientHeader.push(`${opts.libName}/${opts.libVersion}`);
    }
    // Load the applicable protos.
    this._protos = this._gaxGrpc.loadProtoJSON(jsonProtos);

    const protoFilesRoot = this._gaxModule.protobuf.Root.fromJSON(jsonProtos);

    // This API contains "long-running operations", which return a
    // an Operation object that allows for tracking of the operation,
    // rather than holding a request open.

    this.operationsClient = this._gaxModule.lro({
      auth: this.auth,
      grpc: 'grpc' in this._gaxGrpc ? this._gaxGrpc.grpc : undefined
    }).operationsClient(opts);
    const exportIamPolicyAnalysisResponse = protoFilesRoot.lookup(
      '.google.cloud.asset.v1p4beta1.ExportIamPolicyAnalysisResponse') as gax.protobuf.Type;
    const exportIamPolicyAnalysisMetadata = protoFilesRoot.lookup(
      '.google.cloud.asset.v1p4beta1.ExportIamPolicyAnalysisRequest') as gax.protobuf.Type;

    this.descriptors.longrunning = {
      exportIamPolicyAnalysis: new this._gaxModule.LongrunningDescriptor(
        this.operationsClient,
        exportIamPolicyAnalysisResponse.decode.bind(exportIamPolicyAnalysisResponse),
        exportIamPolicyAnalysisMetadata.decode.bind(exportIamPolicyAnalysisMetadata))
    };

    // Put together the default options sent with requests.
    this._defaults = this._gaxGrpc.constructSettings(
        'google.cloud.asset.v1p4beta1.AssetService', gapicConfig as gax.ClientConfig,
        opts.clientConfig || {}, {'x-goog-api-client': clientHeader.join(' ')});

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this.innerApiCalls = {};
  }

  /**
   * Initialize the client.
   * Performs asynchronous operations (such as authentication) and prepares the client.
   * This function will be called automatically when any class method is called for the
   * first time, but if you need to initialize it before calling an actual method,
   * feel free to call initialize() directly.
   *
   * You can await on this method if you want to make sure the client is initialized.
   *
   * @returns {Promise} A promise that resolves to an authenticated service stub.
   */
  initialize() {
    // If the client stub promise is already initialized, return immediately.
    if (this.assetServiceStub) {
      return this.assetServiceStub;
    }

    // Put together the "service stub" for
    // google.cloud.asset.v1p4beta1.AssetService.
    this.assetServiceStub = this._gaxGrpc.createStub(
        this._opts.fallback ?
          (this._protos as protobuf.Root).lookupService('google.cloud.asset.v1p4beta1.AssetService') :
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (this._protos as any).google.cloud.asset.v1p4beta1.AssetService,
        this._opts) as Promise<{[method: string]: Function}>;

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const assetServiceStubMethods =
        ['analyzeIamPolicy', 'exportIamPolicyAnalysis'];
    for (const methodName of assetServiceStubMethods) {
      const callPromise = this.assetServiceStub.then(
        stub => (...args: Array<{}>) => {
          if (this._terminated) {
            return Promise.reject('The client has already been closed.');
          }
          const func = stub[methodName];
          return func.apply(stub, args);
        },
        (err: Error|null|undefined) => () => {
          throw err;
        });

      const descriptor =
        this.descriptors.longrunning[methodName] ||
        undefined;
      const apiCall = this._gaxModule.createApiCall(
        callPromise,
        this._defaults[methodName],
        descriptor
      );

      this.innerApiCalls[methodName] = apiCall;
    }

    return this.assetServiceStub;
  }

  /**
   * The DNS address for this API service.
   * @returns {string} The DNS address for this service.
   */
  static get servicePath() {
    return 'cloudasset.googleapis.com';
  }

  /**
   * The DNS address for this API service - same as servicePath(),
   * exists for compatibility reasons.
   * @returns {string} The DNS address for this service.
   */
  static get apiEndpoint() {
    return 'cloudasset.googleapis.com';
  }

  /**
   * The port for this API service.
   * @returns {number} The default port for this service.
   */
  static get port() {
    return 443;
  }

  /**
   * The scopes needed to make gRPC calls for every method defined
   * in this service.
   * @returns {string[]} List of default scopes.
   */
  static get scopes() {
    return [
      'https://www.googleapis.com/auth/cloud-platform'
    ];
  }

  getProjectId(): Promise<string>;
  getProjectId(callback: Callback<string, undefined, undefined>): void;
  /**
   * Return the project ID used by this class.
   * @returns {Promise} A promise that resolves to string containing the project ID.
   */
  getProjectId(callback?: Callback<string, undefined, undefined>):
      Promise<string>|void {
    if (callback) {
      this.auth.getProjectId(callback);
      return;
    }
    return this.auth.getProjectId();
  }

  // -------------------
  // -- Service calls --
  // -------------------
  analyzeIamPolicy(
      request: protos.google.cloud.asset.v1p4beta1.IAnalyzeIamPolicyRequest,
      options?: CallOptions):
      Promise<[
        protos.google.cloud.asset.v1p4beta1.IAnalyzeIamPolicyResponse,
        protos.google.cloud.asset.v1p4beta1.IAnalyzeIamPolicyRequest|undefined, {}|undefined
      ]>;
  analyzeIamPolicy(
      request: protos.google.cloud.asset.v1p4beta1.IAnalyzeIamPolicyRequest,
      options: CallOptions,
      callback: Callback<
          protos.google.cloud.asset.v1p4beta1.IAnalyzeIamPolicyResponse,
          protos.google.cloud.asset.v1p4beta1.IAnalyzeIamPolicyRequest|null|undefined,
          {}|null|undefined>): void;
  analyzeIamPolicy(
      request: protos.google.cloud.asset.v1p4beta1.IAnalyzeIamPolicyRequest,
      callback: Callback<
          protos.google.cloud.asset.v1p4beta1.IAnalyzeIamPolicyResponse,
          protos.google.cloud.asset.v1p4beta1.IAnalyzeIamPolicyRequest|null|undefined,
          {}|null|undefined>): void;
/**
 * Analyzes IAM policies based on the specified request. Returns
 * a list of {@link google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult|IamPolicyAnalysisResult} matching the request.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {google.cloud.asset.v1p4beta1.IamPolicyAnalysisQuery} request.analysisQuery
 *   Required. The request query.
 * @param {google.cloud.asset.v1p4beta1.AnalyzeIamPolicyRequest.Options} [request.options]
 *   Optional. The request options.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [AnalyzeIamPolicyResponse]{@link google.cloud.asset.v1p4beta1.AnalyzeIamPolicyResponse}.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods)
 *   for more details and examples.
 * @example
 * const [response] = await client.analyzeIamPolicy(request);
 */
  analyzeIamPolicy(
      request: protos.google.cloud.asset.v1p4beta1.IAnalyzeIamPolicyRequest,
      optionsOrCallback?: CallOptions|Callback<
          protos.google.cloud.asset.v1p4beta1.IAnalyzeIamPolicyResponse,
          protos.google.cloud.asset.v1p4beta1.IAnalyzeIamPolicyRequest|null|undefined,
          {}|null|undefined>,
      callback?: Callback<
          protos.google.cloud.asset.v1p4beta1.IAnalyzeIamPolicyResponse,
          protos.google.cloud.asset.v1p4beta1.IAnalyzeIamPolicyRequest|null|undefined,
          {}|null|undefined>):
      Promise<[
        protos.google.cloud.asset.v1p4beta1.IAnalyzeIamPolicyResponse,
        protos.google.cloud.asset.v1p4beta1.IAnalyzeIamPolicyRequest|undefined, {}|undefined
      ]>|void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    }
    else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      gax.routingHeader.fromParams({
        'analysis_query.parent': request.analysisQuery!.parent || '',
      });
    this.initialize();
    return this.innerApiCalls.analyzeIamPolicy(request, options, callback);
  }

  exportIamPolicyAnalysis(
      request: protos.google.cloud.asset.v1p4beta1.IExportIamPolicyAnalysisRequest,
      options?: CallOptions):
      Promise<[
        LROperation<protos.google.cloud.asset.v1p4beta1.IExportIamPolicyAnalysisResponse, protos.google.cloud.asset.v1p4beta1.IExportIamPolicyAnalysisRequest>,
        protos.google.longrunning.IOperation|undefined, {}|undefined
      ]>;
  exportIamPolicyAnalysis(
      request: protos.google.cloud.asset.v1p4beta1.IExportIamPolicyAnalysisRequest,
      options: CallOptions,
      callback: Callback<
          LROperation<protos.google.cloud.asset.v1p4beta1.IExportIamPolicyAnalysisResponse, protos.google.cloud.asset.v1p4beta1.IExportIamPolicyAnalysisRequest>,
          protos.google.longrunning.IOperation|null|undefined,
          {}|null|undefined>): void;
  exportIamPolicyAnalysis(
      request: protos.google.cloud.asset.v1p4beta1.IExportIamPolicyAnalysisRequest,
      callback: Callback<
          LROperation<protos.google.cloud.asset.v1p4beta1.IExportIamPolicyAnalysisResponse, protos.google.cloud.asset.v1p4beta1.IExportIamPolicyAnalysisRequest>,
          protos.google.longrunning.IOperation|null|undefined,
          {}|null|undefined>): void;
/**
 * Exports IAM policy analysis based on the specified request. This API
 * implements the {@link google.longrunning.Operation|google.longrunning.Operation} API allowing you to keep
 * track of the export. The metadata contains the request to help callers to
 * map responses to requests.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {google.cloud.asset.v1p4beta1.IamPolicyAnalysisQuery} request.analysisQuery
 *   Required. The request query.
 * @param {google.cloud.asset.v1p4beta1.ExportIamPolicyAnalysisRequest.Options} [request.options]
 *   Optional. The request options.
 * @param {google.cloud.asset.v1p4beta1.IamPolicyAnalysisOutputConfig} request.outputConfig
 *   Required. Output configuration indicating where the results will be output to.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing
 *   a long running operation. Its `promise()` method returns a promise
 *   you can `await` for.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations)
 *   for more details and examples.
 * @example
 * const [operation] = await client.exportIamPolicyAnalysis(request);
 * const [response] = await operation.promise();
 */
  exportIamPolicyAnalysis(
      request: protos.google.cloud.asset.v1p4beta1.IExportIamPolicyAnalysisRequest,
      optionsOrCallback?: CallOptions|Callback<
          LROperation<protos.google.cloud.asset.v1p4beta1.IExportIamPolicyAnalysisResponse, protos.google.cloud.asset.v1p4beta1.IExportIamPolicyAnalysisRequest>,
          protos.google.longrunning.IOperation|null|undefined,
          {}|null|undefined>,
      callback?: Callback<
          LROperation<protos.google.cloud.asset.v1p4beta1.IExportIamPolicyAnalysisResponse, protos.google.cloud.asset.v1p4beta1.IExportIamPolicyAnalysisRequest>,
          protos.google.longrunning.IOperation|null|undefined,
          {}|null|undefined>):
      Promise<[
        LROperation<protos.google.cloud.asset.v1p4beta1.IExportIamPolicyAnalysisResponse, protos.google.cloud.asset.v1p4beta1.IExportIamPolicyAnalysisRequest>,
        protos.google.longrunning.IOperation|undefined, {}|undefined
      ]>|void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    }
    else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      gax.routingHeader.fromParams({
        'analysis_query.parent': request.analysisQuery!.parent || '',
      });
    this.initialize();
    return this.innerApiCalls.exportIamPolicyAnalysis(request, options, callback);
  }
/**
 * Check the status of the long running operation returned by `exportIamPolicyAnalysis()`.
 * @param {String} name
 *   The operation name that will be passed.
 * @returns {Promise} - The promise which resolves to an object.
 *   The decoded operation object has result and metadata field to get information from.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations)
 *   for more details and examples.
 * @example
 * const decodedOperation = await checkExportIamPolicyAnalysisProgress(name);
 * console.log(decodedOperation.result);
 * console.log(decodedOperation.done);
 * console.log(decodedOperation.metadata);
 */
  async checkExportIamPolicyAnalysisProgress(name: string): Promise<LROperation<protos.google.cloud.asset.v1p4beta1.ExportIamPolicyAnalysisResponse, protos.google.cloud.asset.v1p4beta1.ExportIamPolicyAnalysisRequest>>{
    const request = new operationsProtos.google.longrunning.GetOperationRequest({name});
    const [operation] = await this.operationsClient.getOperation(request);
    const decodeOperation = new gax.Operation(operation, this.descriptors.longrunning.exportIamPolicyAnalysis, gax.createDefaultBackoffSettings());
    return decodeOperation as LROperation<protos.google.cloud.asset.v1p4beta1.ExportIamPolicyAnalysisResponse, protos.google.cloud.asset.v1p4beta1.ExportIamPolicyAnalysisRequest>;
  }

  /**
   * Terminate the gRPC channel and close the client.
   *
   * The client will no longer be usable and all future behavior is undefined.
   * @returns {Promise} A promise that resolves when the client is closed.
   */
  close(): Promise<void> {
    this.initialize();
    if (!this._terminated) {
      return this.assetServiceStub!.then(stub => {
        this._terminated = true;
        stub.close();
      });
    }
    return Promise.resolve();
  }
}
