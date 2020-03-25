// Copyright 2020 Google LLC
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

import * as gax from 'google-gax';
import {APICallback, Callback, CallOptions, Descriptors, ClientOptions, LROperation} from 'google-gax';
import * as path from 'path';

import * as protosTypes from '../../protos/protos';
import * as gapicConfig from './asset_service_client_config.json';

const version = require('../../../package.json').version;

/**
 *  Asset service definition.
 * @class
 * @memberof v1p4beta1
 */
export class AssetServiceClient {
  private _descriptors: Descriptors = {page: {}, stream: {}, longrunning: {}, batching: {}};
  private _innerApiCalls: {[name: string]: Function};
  private _terminated = false;
  private _opts: ClientOptions;
  private _gaxModule: typeof gax | typeof gax.fallback;
  private _gaxGrpc: gax.GrpcClient | gax.fallback.GrpcClient;
  private _protos: {};
  private _defaults: {[method: string]: gax.CallSettings};
  auth: gax.GoogleAuth;
  operationsClient: gax.OperationsClient;
  assetServiceStub?: Promise<{[name: string]: Function}>;

  /**
   * Construct an instance of AssetServiceClient.
   *
   * @param {object} [options] - The configuration object. See the subsequent
   *   parameters for more details.
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
   */

  constructor(opts?: ClientOptions) {
    // Ensure that options include the service address and port.
    const staticMembers = this.constructor as typeof AssetServiceClient;
    const servicePath = opts && opts.servicePath ?
        opts.servicePath :
        ((opts && opts.apiEndpoint) ? opts.apiEndpoint :
                                      staticMembers.servicePath);
    const port = opts && opts.port ? opts.port : staticMembers.port;

    if (!opts) {
      opts = {servicePath, port};
    }
    opts.servicePath = opts.servicePath || servicePath;
    opts.port = opts.port || port;
    opts.clientConfig = opts.clientConfig || {};

    const isBrowser = (typeof window !== 'undefined');
    if (isBrowser){
      opts.fallback = true;
    }
    // If we are in browser, we are already using fallback because of the
    // "browser" field in package.json.
    // But if we were explicitly requested to use fallback, let's do it now.
    this._gaxModule = !isBrowser && opts.fallback ? gax.fallback : gax;

    // Create a `gaxGrpc` object, with any grpc-specific options
    // sent to the client.
    opts.scopes = (this.constructor as typeof AssetServiceClient).scopes;
    this._gaxGrpc = new this._gaxModule.GrpcClient(opts);

    // Save options to use in initialize() method.
    this._opts = opts;

    // Save the auth object to the client, for use by other methods.
    this.auth = (this._gaxGrpc.auth as gax.GoogleAuth);

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
    }
    if (opts.libName && opts.libVersion) {
      clientHeader.push(`${opts.libName}/${opts.libVersion}`);
    }
    // Load the applicable protos.
    // For Node.js, pass the path to JSON proto file.
    // For browsers, pass the JSON content.

    const nodejsProtoPath = path.join(__dirname, '..', '..', 'protos', 'protos.json');
    this._protos = this._gaxGrpc.loadProto(
      opts.fallback ?
        require("../../protos/protos.json") :
        nodejsProtoPath
    );

    // This API contains "long-running operations", which return a
    // an Operation object that allows for tracking of the operation,
    // rather than holding a request open.
    const protoFilesRoot = opts.fallback?
      this._gaxModule.protobuf.Root.fromJSON(require("../../protos/protos.json")) :
      this._gaxModule.protobuf.loadSync(nodejsProtoPath);

    this.operationsClient = this._gaxModule.lro({
      auth: this.auth,
      grpc: 'grpc' in this._gaxGrpc ? this._gaxGrpc.grpc : undefined
    }).operationsClient(opts);
    const exportIamPolicyAnalysisResponse = protoFilesRoot.lookup(
      '.google.cloud.asset.v1p4beta1.ExportIamPolicyAnalysisResponse') as gax.protobuf.Type;
    const exportIamPolicyAnalysisMetadata = protoFilesRoot.lookup(
      '.google.cloud.asset.v1p4beta1.ExportIamPolicyAnalysisRequest') as gax.protobuf.Type;

    this._descriptors.longrunning = {
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
    this._innerApiCalls = {};
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
          // tslint:disable-next-line no-any
          (this._protos as any).google.cloud.asset.v1p4beta1.AssetService,
        this._opts) as Promise<{[method: string]: Function}>;

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const assetServiceStubMethods =
        ['analyzeIamPolicy', 'exportIamPolicyAnalysis'];

    for (const methodName of assetServiceStubMethods) {
      const innerCallPromise = this.assetServiceStub.then(
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

      const apiCall = this._gaxModule.createApiCall(
        innerCallPromise,
        this._defaults[methodName],
        this._descriptors.page[methodName] ||
            this._descriptors.stream[methodName] ||
            this._descriptors.longrunning[methodName]
      );

      this._innerApiCalls[methodName] = (
        argument: {},
        callOptions?: CallOptions,
        callback?: APICallback
      ) => {
        return apiCall(argument, callOptions, callback);
      };
    }

    return this.assetServiceStub;
  }

  /**
   * The DNS address for this API service.
   */
  static get servicePath() {
    return 'cloudasset.googleapis.com';
  }

  /**
   * The DNS address for this API service - same as servicePath(),
   * exists for compatibility reasons.
   */
  static get apiEndpoint() {
    return 'cloudasset.googleapis.com';
  }

  /**
   * The port for this API service.
   */
  static get port() {
    return 443;
  }

  /**
   * The scopes needed to make gRPC calls for every method defined
   * in this service.
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
   * @param {function(Error, string)} callback - the callback to
   *   be called with the current project Id.
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
      request: protosTypes.google.cloud.asset.v1p4beta1.IAnalyzeIamPolicyRequest,
      options?: gax.CallOptions):
      Promise<[
        protosTypes.google.cloud.asset.v1p4beta1.IAnalyzeIamPolicyResponse,
        protosTypes.google.cloud.asset.v1p4beta1.IAnalyzeIamPolicyRequest|undefined, {}|undefined
      ]>;
  analyzeIamPolicy(
      request: protosTypes.google.cloud.asset.v1p4beta1.IAnalyzeIamPolicyRequest,
      options: gax.CallOptions,
      callback: Callback<
          protosTypes.google.cloud.asset.v1p4beta1.IAnalyzeIamPolicyResponse,
          protosTypes.google.cloud.asset.v1p4beta1.IAnalyzeIamPolicyRequest|undefined,
          {}|undefined>): void;
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
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 */
  analyzeIamPolicy(
      request: protosTypes.google.cloud.asset.v1p4beta1.IAnalyzeIamPolicyRequest,
      optionsOrCallback?: gax.CallOptions|Callback<
          protosTypes.google.cloud.asset.v1p4beta1.IAnalyzeIamPolicyResponse,
          protosTypes.google.cloud.asset.v1p4beta1.IAnalyzeIamPolicyRequest|undefined, {}|undefined>,
      callback?: Callback<
          protosTypes.google.cloud.asset.v1p4beta1.IAnalyzeIamPolicyResponse,
          protosTypes.google.cloud.asset.v1p4beta1.IAnalyzeIamPolicyRequest|undefined,
          {}|undefined>):
      Promise<[
        protosTypes.google.cloud.asset.v1p4beta1.IAnalyzeIamPolicyResponse,
        protosTypes.google.cloud.asset.v1p4beta1.IAnalyzeIamPolicyRequest|undefined, {}|undefined
      ]>|void {
    request = request || {};
    let options: gax.CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    }
    else {
      options = optionsOrCallback as gax.CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      'analysis_query.parent': request.analysisQuery!.parent || '',
    });
    this.initialize();
    return this._innerApiCalls.analyzeIamPolicy(request, options, callback);
  }

  exportIamPolicyAnalysis(
      request: protosTypes.google.cloud.asset.v1p4beta1.IExportIamPolicyAnalysisRequest,
      options?: gax.CallOptions):
      Promise<[
        LROperation<protosTypes.google.cloud.asset.v1p4beta1.IExportIamPolicyAnalysisResponse, protosTypes.google.cloud.asset.v1p4beta1.IExportIamPolicyAnalysisRequest>,
        protosTypes.google.longrunning.IOperation|undefined, {}|undefined
      ]>;
  exportIamPolicyAnalysis(
      request: protosTypes.google.cloud.asset.v1p4beta1.IExportIamPolicyAnalysisRequest,
      options: gax.CallOptions,
      callback: Callback<
          LROperation<protosTypes.google.cloud.asset.v1p4beta1.IExportIamPolicyAnalysisResponse, protosTypes.google.cloud.asset.v1p4beta1.IExportIamPolicyAnalysisRequest>,
          protosTypes.google.longrunning.IOperation|undefined,
          {}|undefined>): void;
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
 *   The first element of the array is an object representing [Operation]{@link google.longrunning.Operation}.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 */
  exportIamPolicyAnalysis(
      request: protosTypes.google.cloud.asset.v1p4beta1.IExportIamPolicyAnalysisRequest,
      optionsOrCallback?: gax.CallOptions|Callback<
          LROperation<protosTypes.google.cloud.asset.v1p4beta1.IExportIamPolicyAnalysisResponse, protosTypes.google.cloud.asset.v1p4beta1.IExportIamPolicyAnalysisRequest>,
          protosTypes.google.longrunning.IOperation|undefined, {}|undefined>,
      callback?: Callback<
          LROperation<protosTypes.google.cloud.asset.v1p4beta1.IExportIamPolicyAnalysisResponse, protosTypes.google.cloud.asset.v1p4beta1.IExportIamPolicyAnalysisRequest>,
          protosTypes.google.longrunning.IOperation|undefined,
          {}|undefined>):
      Promise<[
        LROperation<protosTypes.google.cloud.asset.v1p4beta1.IExportIamPolicyAnalysisResponse, protosTypes.google.cloud.asset.v1p4beta1.IExportIamPolicyAnalysisRequest>,
        protosTypes.google.longrunning.IOperation|undefined, {}|undefined
      ]>|void {
    request = request || {};
    let options: gax.CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    }
    else {
      options = optionsOrCallback as gax.CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      'analysis_query.parent': request.analysisQuery!.parent || '',
    });
    this.initialize();
    return this._innerApiCalls.exportIamPolicyAnalysis(request, options, callback);
  }

  /**
   * Terminate the GRPC channel and close the client.
   *
   * The client will no longer be usable and all future behavior is undefined.
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
