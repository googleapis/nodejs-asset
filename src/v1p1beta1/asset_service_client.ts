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

/* global window */
import * as gax from 'google-gax';
import {
  Callback,
  CallOptions,
  Descriptors,
  ClientOptions,
  PaginationCallback,
  GaxCall,
} from 'google-gax';
import * as path from 'path';

import {Transform} from 'stream';
import {RequestType} from 'google-gax/build/src/apitypes';
import * as protos from '../../protos/protos';
/**
 * Client JSON configuration object, loaded from
 * `src/v1p1beta1/asset_service_client_config.json`.
 * This file defines retry strategy and timeouts for all API methods in this library.
 */
import * as gapicConfig from './asset_service_client_config.json';

const version = require('../../../package.json').version;

/**
 *  Asset service definition.
 * @class
 * @memberof v1p1beta1
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
    const servicePath =
      opts?.servicePath || opts?.apiEndpoint || staticMembers.servicePath;
    const port = opts?.port || staticMembers.port;
    const clientConfig = opts?.clientConfig ?? {};
    const fallback =
      opts?.fallback ??
      (typeof window !== 'undefined' && typeof window?.fetch === 'function');
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
    this.auth = this._gaxGrpc.auth as gax.GoogleAuth;

    // Set the default scopes in auth client if needed.
    if (servicePath === staticMembers.servicePath) {
      this.auth.defaultScopes = staticMembers.scopes;
    }

    // Determine the client header string.
    const clientHeader = [`gax/${this._gaxModule.version}`, `gapic/${version}`];
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

    const nodejsProtoPath = path.join(
      __dirname,
      '..',
      '..',
      'protos',
      'protos.json'
    );
    this._protos = this._gaxGrpc.loadProto(
      opts.fallback
        ? // eslint-disable-next-line @typescript-eslint/no-var-requires
          require('../../protos/protos.json')
        : nodejsProtoPath
    );

    // Some of the methods on this service return "paged" results,
    // (e.g. 50 results at a time, with tokens to get subsequent
    // pages). Denote the keys used for pagination and results.
    this.descriptors.page = {
      searchAllResources: new this._gaxModule.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'results'
      ),
      searchAllIamPolicies: new this._gaxModule.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'results'
      ),
    };

    // Put together the default options sent with requests.
    this._defaults = this._gaxGrpc.constructSettings(
      'google.cloud.asset.v1p1beta1.AssetService',
      gapicConfig as gax.ClientConfig,
      opts.clientConfig || {},
      {'x-goog-api-client': clientHeader.join(' ')}
    );

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
    // google.cloud.asset.v1p1beta1.AssetService.
    this.assetServiceStub = this._gaxGrpc.createStub(
      this._opts.fallback
        ? (this._protos as protobuf.Root).lookupService(
            'google.cloud.asset.v1p1beta1.AssetService'
          )
        : // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (this._protos as any).google.cloud.asset.v1p1beta1.AssetService,
      this._opts
    ) as Promise<{[method: string]: Function}>;

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const assetServiceStubMethods = [
      'searchAllResources',
      'searchAllIamPolicies',
    ];
    for (const methodName of assetServiceStubMethods) {
      const callPromise = this.assetServiceStub.then(
        stub => (...args: Array<{}>) => {
          if (this._terminated) {
            return Promise.reject('The client has already been closed.');
          }
          const func = stub[methodName];
          return func.apply(stub, args);
        },
        (err: Error | null | undefined) => () => {
          throw err;
        }
      );

      const descriptor = this.descriptors.page[methodName] || undefined;
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
    return ['https://www.googleapis.com/auth/cloud-platform'];
  }

  getProjectId(): Promise<string>;
  getProjectId(callback: Callback<string, undefined, undefined>): void;
  /**
   * Return the project ID used by this class.
   * @returns {Promise} A promise that resolves to string containing the project ID.
   */
  getProjectId(
    callback?: Callback<string, undefined, undefined>
  ): Promise<string> | void {
    if (callback) {
      this.auth.getProjectId(callback);
      return;
    }
    return this.auth.getProjectId();
  }

  // -------------------
  // -- Service calls --
  // -------------------

  searchAllResources(
    request: protos.google.cloud.asset.v1p1beta1.ISearchAllResourcesRequest,
    options?: CallOptions
  ): Promise<
    [
      protos.google.cloud.asset.v1p1beta1.IStandardResourceMetadata[],
      protos.google.cloud.asset.v1p1beta1.ISearchAllResourcesRequest | null,
      protos.google.cloud.asset.v1p1beta1.ISearchAllResourcesResponse
    ]
  >;
  searchAllResources(
    request: protos.google.cloud.asset.v1p1beta1.ISearchAllResourcesRequest,
    options: CallOptions,
    callback: PaginationCallback<
      protos.google.cloud.asset.v1p1beta1.ISearchAllResourcesRequest,
      | protos.google.cloud.asset.v1p1beta1.ISearchAllResourcesResponse
      | null
      | undefined,
      protos.google.cloud.asset.v1p1beta1.IStandardResourceMetadata
    >
  ): void;
  searchAllResources(
    request: protos.google.cloud.asset.v1p1beta1.ISearchAllResourcesRequest,
    callback: PaginationCallback<
      protos.google.cloud.asset.v1p1beta1.ISearchAllResourcesRequest,
      | protos.google.cloud.asset.v1p1beta1.ISearchAllResourcesResponse
      | null
      | undefined,
      protos.google.cloud.asset.v1p1beta1.IStandardResourceMetadata
    >
  ): void;
  /**
   * Searches all the resources under a given accessible CRM scope
   * (project/folder/organization). This RPC gives callers
   * especially admins the ability to search all the resources under a scope,
   * even if they don't have .get permission of all the resources. Callers
   * should have cloud.assets.SearchAllResources permission on the requested
   * scope, otherwise it will be rejected.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.scope
   *   Required. The relative name of an asset. The search is limited to the resources
   *   within the `scope`. The allowed value must be:
   *   * Organization number (such as "organizations/123")
   *   * Folder number(such as "folders/1234")
   *   * Project number (such as "projects/12345")
   *   * Project id (such as "projects/abc")
   * @param {string} [request.query]
   *   Optional. The query statement.
   * @param {string[]} [request.assetTypes]
   *   Optional. A list of asset types that this request searches for. If empty, it will
   *   search all the supported asset types.
   * @param {number} [request.pageSize]
   *   Optional. The page size for search result pagination. Page size is capped at 500 even
   *   if a larger value is given. If set to zero, server will pick an appropriate
   *   default. Returned results may be fewer than requested. When this happens,
   *   there could be more results as long as `next_page_token` is returned.
   * @param {string} [request.pageToken]
   *   Optional. If present, then retrieve the next batch of results from the preceding call
   *   to this method.  `page_token` must be the value of `next_page_token` from
   *   the previous response. The values of all other method parameters, must be
   *   identical to those in the previous call.
   * @param {string} [request.orderBy]
   *   Optional. A comma separated list of fields specifying the sorting order of the
   *   results. The default order is ascending. Add " desc" after the field name
   *   to indicate descending order. Redundant space characters are ignored. For
   *   example, "  foo ,  bar  desc  ".
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [StandardResourceMetadata]{@link google.cloud.asset.v1p1beta1.StandardResourceMetadata}.
   *   The client library will perform auto-pagination by default: it will call the API as many
   *   times as needed and will merge results from all the pages into this array.
   *   Note that it can affect your quota.
   *   We recommend using `searchAllResourcesAsync()`
   *   method described below for async iteration which you can stop as needed.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination)
   *   for more details and examples.
   */
  searchAllResources(
    request: protos.google.cloud.asset.v1p1beta1.ISearchAllResourcesRequest,
    optionsOrCallback?:
      | CallOptions
      | PaginationCallback<
          protos.google.cloud.asset.v1p1beta1.ISearchAllResourcesRequest,
          | protos.google.cloud.asset.v1p1beta1.ISearchAllResourcesResponse
          | null
          | undefined,
          protos.google.cloud.asset.v1p1beta1.IStandardResourceMetadata
        >,
    callback?: PaginationCallback<
      protos.google.cloud.asset.v1p1beta1.ISearchAllResourcesRequest,
      | protos.google.cloud.asset.v1p1beta1.ISearchAllResourcesResponse
      | null
      | undefined,
      protos.google.cloud.asset.v1p1beta1.IStandardResourceMetadata
    >
  ): Promise<
    [
      protos.google.cloud.asset.v1p1beta1.IStandardResourceMetadata[],
      protos.google.cloud.asset.v1p1beta1.ISearchAllResourcesRequest | null,
      protos.google.cloud.asset.v1p1beta1.ISearchAllResourcesResponse
    ]
  > | void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    } else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      scope: request.scope || '',
    });
    this.initialize();
    return this.innerApiCalls.searchAllResources(request, options, callback);
  }

  /**
   * Equivalent to `method.name.toCamelCase()`, but returns a NodeJS Stream object.
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.scope
   *   Required. The relative name of an asset. The search is limited to the resources
   *   within the `scope`. The allowed value must be:
   *   * Organization number (such as "organizations/123")
   *   * Folder number(such as "folders/1234")
   *   * Project number (such as "projects/12345")
   *   * Project id (such as "projects/abc")
   * @param {string} [request.query]
   *   Optional. The query statement.
   * @param {string[]} [request.assetTypes]
   *   Optional. A list of asset types that this request searches for. If empty, it will
   *   search all the supported asset types.
   * @param {number} [request.pageSize]
   *   Optional. The page size for search result pagination. Page size is capped at 500 even
   *   if a larger value is given. If set to zero, server will pick an appropriate
   *   default. Returned results may be fewer than requested. When this happens,
   *   there could be more results as long as `next_page_token` is returned.
   * @param {string} [request.pageToken]
   *   Optional. If present, then retrieve the next batch of results from the preceding call
   *   to this method.  `page_token` must be the value of `next_page_token` from
   *   the previous response. The values of all other method parameters, must be
   *   identical to those in the previous call.
   * @param {string} [request.orderBy]
   *   Optional. A comma separated list of fields specifying the sorting order of the
   *   results. The default order is ascending. Add " desc" after the field name
   *   to indicate descending order. Redundant space characters are ignored. For
   *   example, "  foo ,  bar  desc  ".
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Stream}
   *   An object stream which emits an object representing [StandardResourceMetadata]{@link google.cloud.asset.v1p1beta1.StandardResourceMetadata} on 'data' event.
   *   The client library will perform auto-pagination by default: it will call the API as many
   *   times as needed. Note that it can affect your quota.
   *   We recommend using `searchAllResourcesAsync()`
   *   method described below for async iteration which you can stop as needed.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination)
   *   for more details and examples.
   */
  searchAllResourcesStream(
    request?: protos.google.cloud.asset.v1p1beta1.ISearchAllResourcesRequest,
    options?: CallOptions
  ): Transform {
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      scope: request.scope || '',
    });
    const callSettings = new gax.CallSettings(options);
    this.initialize();
    return this.descriptors.page.searchAllResources.createStream(
      this.innerApiCalls.searchAllResources as gax.GaxCall,
      request,
      callSettings
    );
  }

  /**
   * Equivalent to `searchAllResources`, but returns an iterable object.
   *
   * `for`-`await`-`of` syntax is used with the iterable to get response elements on-demand.
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.scope
   *   Required. The relative name of an asset. The search is limited to the resources
   *   within the `scope`. The allowed value must be:
   *   * Organization number (such as "organizations/123")
   *   * Folder number(such as "folders/1234")
   *   * Project number (such as "projects/12345")
   *   * Project id (such as "projects/abc")
   * @param {string} [request.query]
   *   Optional. The query statement.
   * @param {string[]} [request.assetTypes]
   *   Optional. A list of asset types that this request searches for. If empty, it will
   *   search all the supported asset types.
   * @param {number} [request.pageSize]
   *   Optional. The page size for search result pagination. Page size is capped at 500 even
   *   if a larger value is given. If set to zero, server will pick an appropriate
   *   default. Returned results may be fewer than requested. When this happens,
   *   there could be more results as long as `next_page_token` is returned.
   * @param {string} [request.pageToken]
   *   Optional. If present, then retrieve the next batch of results from the preceding call
   *   to this method.  `page_token` must be the value of `next_page_token` from
   *   the previous response. The values of all other method parameters, must be
   *   identical to those in the previous call.
   * @param {string} [request.orderBy]
   *   Optional. A comma separated list of fields specifying the sorting order of the
   *   results. The default order is ascending. Add " desc" after the field name
   *   to indicate descending order. Redundant space characters are ignored. For
   *   example, "  foo ,  bar  desc  ".
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Object}
   *   An iterable Object that allows [async iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols).
   *   When you iterate the returned iterable, each element will be an object representing
   *   [StandardResourceMetadata]{@link google.cloud.asset.v1p1beta1.StandardResourceMetadata}. The API will be called under the hood as needed, once per the page,
   *   so you can stop the iteration when you don't need more results.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination)
   *   for more details and examples.
   * @example
   * const iterable = client.searchAllResourcesAsync(request);
   * for await (const response of iterable) {
   *   // process response
   * }
   */
  searchAllResourcesAsync(
    request?: protos.google.cloud.asset.v1p1beta1.ISearchAllResourcesRequest,
    options?: CallOptions
  ): AsyncIterable<protos.google.cloud.asset.v1p1beta1.IStandardResourceMetadata> {
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      scope: request.scope || '',
    });
    options = options || {};
    const callSettings = new gax.CallSettings(options);
    this.initialize();
    return this.descriptors.page.searchAllResources.asyncIterate(
      this.innerApiCalls['searchAllResources'] as GaxCall,
      (request as unknown) as RequestType,
      callSettings
    ) as AsyncIterable<protos.google.cloud.asset.v1p1beta1.IStandardResourceMetadata>;
  }
  searchAllIamPolicies(
    request: protos.google.cloud.asset.v1p1beta1.ISearchAllIamPoliciesRequest,
    options?: CallOptions
  ): Promise<
    [
      protos.google.cloud.asset.v1p1beta1.IIamPolicySearchResult[],
      protos.google.cloud.asset.v1p1beta1.ISearchAllIamPoliciesRequest | null,
      protos.google.cloud.asset.v1p1beta1.ISearchAllIamPoliciesResponse
    ]
  >;
  searchAllIamPolicies(
    request: protos.google.cloud.asset.v1p1beta1.ISearchAllIamPoliciesRequest,
    options: CallOptions,
    callback: PaginationCallback<
      protos.google.cloud.asset.v1p1beta1.ISearchAllIamPoliciesRequest,
      | protos.google.cloud.asset.v1p1beta1.ISearchAllIamPoliciesResponse
      | null
      | undefined,
      protos.google.cloud.asset.v1p1beta1.IIamPolicySearchResult
    >
  ): void;
  searchAllIamPolicies(
    request: protos.google.cloud.asset.v1p1beta1.ISearchAllIamPoliciesRequest,
    callback: PaginationCallback<
      protos.google.cloud.asset.v1p1beta1.ISearchAllIamPoliciesRequest,
      | protos.google.cloud.asset.v1p1beta1.ISearchAllIamPoliciesResponse
      | null
      | undefined,
      protos.google.cloud.asset.v1p1beta1.IIamPolicySearchResult
    >
  ): void;
  /**
   * Searches all the IAM policies under a given accessible CRM scope
   * (project/folder/organization). This RPC gives callers
   * especially admins the ability to search all the IAM policies under a scope,
   * even if they don't have .getIamPolicy permission of all the IAM policies.
   * Callers should have cloud.assets.SearchAllIamPolicies permission on the
   * requested scope, otherwise it will be rejected.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.scope
   *   Required. The relative name of an asset. The search is limited to the resources
   *   within the `scope`. The allowed value must be:
   *   * Organization number (such as "organizations/123")
   *   * Folder number(such as "folders/1234")
   *   * Project number (such as "projects/12345")
   *   * Project id (such as "projects/abc")
   * @param {string} [request.query]
   *   Optional. The query statement.
   *   Examples:
   *   * "policy:myuser@mydomain.com"
   *   * "policy:(myuser@mydomain.com viewer)"
   * @param {number} [request.pageSize]
   *   Optional. The page size for search result pagination. Page size is capped at 500 even
   *   if a larger value is given. If set to zero, server will pick an appropriate
   *   default. Returned results may be fewer than requested. When this happens,
   *   there could be more results as long as `next_page_token` is returned.
   * @param {string} [request.pageToken]
   *   Optional. If present, retrieve the next batch of results from the preceding call to
   *   this method. `page_token` must be the value of `next_page_token` from the
   *   previous response. The values of all other method parameters must be
   *   identical to those in the previous call.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [IamPolicySearchResult]{@link google.cloud.asset.v1p1beta1.IamPolicySearchResult}.
   *   The client library will perform auto-pagination by default: it will call the API as many
   *   times as needed and will merge results from all the pages into this array.
   *   Note that it can affect your quota.
   *   We recommend using `searchAllIamPoliciesAsync()`
   *   method described below for async iteration which you can stop as needed.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination)
   *   for more details and examples.
   */
  searchAllIamPolicies(
    request: protos.google.cloud.asset.v1p1beta1.ISearchAllIamPoliciesRequest,
    optionsOrCallback?:
      | CallOptions
      | PaginationCallback<
          protos.google.cloud.asset.v1p1beta1.ISearchAllIamPoliciesRequest,
          | protos.google.cloud.asset.v1p1beta1.ISearchAllIamPoliciesResponse
          | null
          | undefined,
          protos.google.cloud.asset.v1p1beta1.IIamPolicySearchResult
        >,
    callback?: PaginationCallback<
      protos.google.cloud.asset.v1p1beta1.ISearchAllIamPoliciesRequest,
      | protos.google.cloud.asset.v1p1beta1.ISearchAllIamPoliciesResponse
      | null
      | undefined,
      protos.google.cloud.asset.v1p1beta1.IIamPolicySearchResult
    >
  ): Promise<
    [
      protos.google.cloud.asset.v1p1beta1.IIamPolicySearchResult[],
      protos.google.cloud.asset.v1p1beta1.ISearchAllIamPoliciesRequest | null,
      protos.google.cloud.asset.v1p1beta1.ISearchAllIamPoliciesResponse
    ]
  > | void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    } else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      scope: request.scope || '',
    });
    this.initialize();
    return this.innerApiCalls.searchAllIamPolicies(request, options, callback);
  }

  /**
   * Equivalent to `method.name.toCamelCase()`, but returns a NodeJS Stream object.
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.scope
   *   Required. The relative name of an asset. The search is limited to the resources
   *   within the `scope`. The allowed value must be:
   *   * Organization number (such as "organizations/123")
   *   * Folder number(such as "folders/1234")
   *   * Project number (such as "projects/12345")
   *   * Project id (such as "projects/abc")
   * @param {string} [request.query]
   *   Optional. The query statement.
   *   Examples:
   *   * "policy:myuser@mydomain.com"
   *   * "policy:(myuser@mydomain.com viewer)"
   * @param {number} [request.pageSize]
   *   Optional. The page size for search result pagination. Page size is capped at 500 even
   *   if a larger value is given. If set to zero, server will pick an appropriate
   *   default. Returned results may be fewer than requested. When this happens,
   *   there could be more results as long as `next_page_token` is returned.
   * @param {string} [request.pageToken]
   *   Optional. If present, retrieve the next batch of results from the preceding call to
   *   this method. `page_token` must be the value of `next_page_token` from the
   *   previous response. The values of all other method parameters must be
   *   identical to those in the previous call.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Stream}
   *   An object stream which emits an object representing [IamPolicySearchResult]{@link google.cloud.asset.v1p1beta1.IamPolicySearchResult} on 'data' event.
   *   The client library will perform auto-pagination by default: it will call the API as many
   *   times as needed. Note that it can affect your quota.
   *   We recommend using `searchAllIamPoliciesAsync()`
   *   method described below for async iteration which you can stop as needed.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination)
   *   for more details and examples.
   */
  searchAllIamPoliciesStream(
    request?: protos.google.cloud.asset.v1p1beta1.ISearchAllIamPoliciesRequest,
    options?: CallOptions
  ): Transform {
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      scope: request.scope || '',
    });
    const callSettings = new gax.CallSettings(options);
    this.initialize();
    return this.descriptors.page.searchAllIamPolicies.createStream(
      this.innerApiCalls.searchAllIamPolicies as gax.GaxCall,
      request,
      callSettings
    );
  }

  /**
   * Equivalent to `searchAllIamPolicies`, but returns an iterable object.
   *
   * `for`-`await`-`of` syntax is used with the iterable to get response elements on-demand.
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.scope
   *   Required. The relative name of an asset. The search is limited to the resources
   *   within the `scope`. The allowed value must be:
   *   * Organization number (such as "organizations/123")
   *   * Folder number(such as "folders/1234")
   *   * Project number (such as "projects/12345")
   *   * Project id (such as "projects/abc")
   * @param {string} [request.query]
   *   Optional. The query statement.
   *   Examples:
   *   * "policy:myuser@mydomain.com"
   *   * "policy:(myuser@mydomain.com viewer)"
   * @param {number} [request.pageSize]
   *   Optional. The page size for search result pagination. Page size is capped at 500 even
   *   if a larger value is given. If set to zero, server will pick an appropriate
   *   default. Returned results may be fewer than requested. When this happens,
   *   there could be more results as long as `next_page_token` is returned.
   * @param {string} [request.pageToken]
   *   Optional. If present, retrieve the next batch of results from the preceding call to
   *   this method. `page_token` must be the value of `next_page_token` from the
   *   previous response. The values of all other method parameters must be
   *   identical to those in the previous call.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Object}
   *   An iterable Object that allows [async iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols).
   *   When you iterate the returned iterable, each element will be an object representing
   *   [IamPolicySearchResult]{@link google.cloud.asset.v1p1beta1.IamPolicySearchResult}. The API will be called under the hood as needed, once per the page,
   *   so you can stop the iteration when you don't need more results.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination)
   *   for more details and examples.
   * @example
   * const iterable = client.searchAllIamPoliciesAsync(request);
   * for await (const response of iterable) {
   *   // process response
   * }
   */
  searchAllIamPoliciesAsync(
    request?: protos.google.cloud.asset.v1p1beta1.ISearchAllIamPoliciesRequest,
    options?: CallOptions
  ): AsyncIterable<protos.google.cloud.asset.v1p1beta1.IIamPolicySearchResult> {
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      scope: request.scope || '',
    });
    options = options || {};
    const callSettings = new gax.CallSettings(options);
    this.initialize();
    return this.descriptors.page.searchAllIamPolicies.asyncIterate(
      this.innerApiCalls['searchAllIamPolicies'] as GaxCall,
      (request as unknown) as RequestType,
      callSettings
    ) as AsyncIterable<protos.google.cloud.asset.v1p1beta1.IIamPolicySearchResult>;
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
