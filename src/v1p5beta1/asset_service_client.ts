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
import {
  Callback,
  CallOptions,
  Descriptors,
  ClientOptions,
  PaginationCallback,
  GaxCall,
} from 'google-gax';

import {Transform} from 'stream';
import {RequestType} from 'google-gax/build/src/apitypes';
import * as protos from '../../protos/protos';
import jsonProtos = require('../../protos/protos.json');
/**
 * Client JSON configuration object, loaded from
 * `src/v1p5beta1/asset_service_client_config.json`.
 * This file defines retry strategy and timeouts for all API methods in this library.
 */
import * as gapicConfig from './asset_service_client_config.json';

const version = require('../../../package.json').version;

/**
 *  Asset service definition.
 * @class
 * @memberof v1p5beta1
 */
export class AssetServiceClient {
  private _terminated = false;
  private _opts: ClientOptions;
  private _providedCustomServicePath: boolean;
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
  warn: (code: string, message: string, warnType?: string) => void;
  innerApiCalls: {[name: string]: Function};
  pathTemplates: {[name: string]: gax.PathTemplate};
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
    this._providedCustomServicePath = !!(
      opts?.servicePath || opts?.apiEndpoint
    );
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

    // Set useJWTAccessWithScope on the auth object.
    this.auth.useJWTAccessWithScope = true;

    // Set defaultServicePath on the auth object.
    this.auth.defaultServicePath = staticMembers.servicePath;

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
    } else if (opts.fallback === 'rest') {
      clientHeader.push(`rest/${this._gaxGrpc.grpcVersion}`);
    }
    if (opts.libName && opts.libVersion) {
      clientHeader.push(`${opts.libName}/${opts.libVersion}`);
    }
    // Load the applicable protos.
    this._protos = this._gaxGrpc.loadProtoJSON(jsonProtos);

    // This API contains "path templates"; forward-slash-separated
    // identifiers to uniquely identify resources within the API.
    // Create useful helper objects for these.
    this.pathTemplates = {
      accessLevelPathTemplate: new this._gaxModule.PathTemplate(
        'accessPolicies/{access_policy}/accessLevels/{access_level}'
      ),
      accessPolicyPathTemplate: new this._gaxModule.PathTemplate(
        'accessPolicies/{access_policy}'
      ),
      servicePerimeterPathTemplate: new this._gaxModule.PathTemplate(
        'accessPolicies/{access_policy}/servicePerimeters/{service_perimeter}'
      ),
    };

    // Some of the methods on this service return "paged" results,
    // (e.g. 50 results at a time, with tokens to get subsequent
    // pages). Denote the keys used for pagination and results.
    this.descriptors.page = {
      listAssets: new this._gaxModule.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'assets'
      ),
    };

    // Put together the default options sent with requests.
    this._defaults = this._gaxGrpc.constructSettings(
      'google.cloud.asset.v1p5beta1.AssetService',
      gapicConfig as gax.ClientConfig,
      opts.clientConfig || {},
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this.innerApiCalls = {};

    // Add a warn function to the client constructor so it can be easily tested.
    this.warn = gax.warn;
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
    // google.cloud.asset.v1p5beta1.AssetService.
    this.assetServiceStub = this._gaxGrpc.createStub(
      this._opts.fallback
        ? (this._protos as protobuf.Root).lookupService(
            'google.cloud.asset.v1p5beta1.AssetService'
          )
        : // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (this._protos as any).google.cloud.asset.v1p5beta1.AssetService,
      this._opts,
      this._providedCustomServicePath
    ) as Promise<{[method: string]: Function}>;

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const assetServiceStubMethods = ['listAssets'];
    for (const methodName of assetServiceStubMethods) {
      const callPromise = this.assetServiceStub.then(
        stub =>
          (...args: Array<{}>) => {
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

  listAssets(
    request?: protos.google.cloud.asset.v1p5beta1.IListAssetsRequest,
    options?: CallOptions
  ): Promise<
    [
      protos.google.cloud.asset.v1p5beta1.IAsset[],
      protos.google.cloud.asset.v1p5beta1.IListAssetsRequest | null,
      protos.google.cloud.asset.v1p5beta1.IListAssetsResponse
    ]
  >;
  listAssets(
    request: protos.google.cloud.asset.v1p5beta1.IListAssetsRequest,
    options: CallOptions,
    callback: PaginationCallback<
      protos.google.cloud.asset.v1p5beta1.IListAssetsRequest,
      | protos.google.cloud.asset.v1p5beta1.IListAssetsResponse
      | null
      | undefined,
      protos.google.cloud.asset.v1p5beta1.IAsset
    >
  ): void;
  listAssets(
    request: protos.google.cloud.asset.v1p5beta1.IListAssetsRequest,
    callback: PaginationCallback<
      protos.google.cloud.asset.v1p5beta1.IListAssetsRequest,
      | protos.google.cloud.asset.v1p5beta1.IListAssetsResponse
      | null
      | undefined,
      protos.google.cloud.asset.v1p5beta1.IAsset
    >
  ): void;
  /**
   * Lists assets with time and resource types and returns paged results in
   * response.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. Name of the organization or project the assets belong to. Format:
   *   "organizations/[organization-number]" (such as "organizations/123"),
   *   "projects/[project-number]" (such as "projects/my-project-id"), or
   *   "projects/[project-id]" (such as "projects/12345").
   * @param {google.protobuf.Timestamp} request.readTime
   *   Timestamp to take an asset snapshot. This can only be set to a timestamp
   *   between 2018-10-02 UTC (inclusive) and the current time. If not specified,
   *   the current time will be used. Due to delays in resource data collection
   *   and indexing, there is a volatile window during which running the same
   *   query may get different results.
   * @param {string[]} request.assetTypes
   *   A list of asset types of which to take a snapshot for. For  example:
   *   "compute.googleapis.com/Disk". If specified, only matching assets will be
   *   returned. See [Introduction to Cloud Asset
   *   Inventory](https://cloud.google.com/resource-manager/docs/cloud-asset-inventory/overview)
   *   for all supported asset types.
   * @param {google.cloud.asset.v1p5beta1.ContentType} request.contentType
   *   Asset content type. If not specified, no content but the asset name will
   *   be returned.
   * @param {number} request.pageSize
   *   The maximum number of assets to be returned in a single response. Default
   *   is 100, minimum is 1, and maximum is 1000.
   * @param {string} request.pageToken
   *   The `next_page_token` returned from the previous `ListAssetsResponse`, or
   *   unspecified for the first `ListAssetsRequest`. It is a continuation of a
   *   prior `ListAssets` call, and the API should return the next page of assets.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [Asset]{@link google.cloud.asset.v1p5beta1.Asset}.
   *   The client library will perform auto-pagination by default: it will call the API as many
   *   times as needed and will merge results from all the pages into this array.
   *   Note that it can affect your quota.
   *   We recommend using `listAssetsAsync()`
   *   method described below for async iteration which you can stop as needed.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination)
   *   for more details and examples.
   */
  listAssets(
    request?: protos.google.cloud.asset.v1p5beta1.IListAssetsRequest,
    optionsOrCallback?:
      | CallOptions
      | PaginationCallback<
          protos.google.cloud.asset.v1p5beta1.IListAssetsRequest,
          | protos.google.cloud.asset.v1p5beta1.IListAssetsResponse
          | null
          | undefined,
          protos.google.cloud.asset.v1p5beta1.IAsset
        >,
    callback?: PaginationCallback<
      protos.google.cloud.asset.v1p5beta1.IListAssetsRequest,
      | protos.google.cloud.asset.v1p5beta1.IListAssetsResponse
      | null
      | undefined,
      protos.google.cloud.asset.v1p5beta1.IAsset
    >
  ): Promise<
    [
      protos.google.cloud.asset.v1p5beta1.IAsset[],
      protos.google.cloud.asset.v1p5beta1.IListAssetsRequest | null,
      protos.google.cloud.asset.v1p5beta1.IListAssetsResponse
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
    options.otherArgs.headers['x-goog-request-params'] =
      gax.routingHeader.fromParams({
        parent: request.parent || '',
      });
    this.initialize();
    return this.innerApiCalls.listAssets(request, options, callback);
  }

  /**
   * Equivalent to `method.name.toCamelCase()`, but returns a NodeJS Stream object.
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. Name of the organization or project the assets belong to. Format:
   *   "organizations/[organization-number]" (such as "organizations/123"),
   *   "projects/[project-number]" (such as "projects/my-project-id"), or
   *   "projects/[project-id]" (such as "projects/12345").
   * @param {google.protobuf.Timestamp} request.readTime
   *   Timestamp to take an asset snapshot. This can only be set to a timestamp
   *   between 2018-10-02 UTC (inclusive) and the current time. If not specified,
   *   the current time will be used. Due to delays in resource data collection
   *   and indexing, there is a volatile window during which running the same
   *   query may get different results.
   * @param {string[]} request.assetTypes
   *   A list of asset types of which to take a snapshot for. For  example:
   *   "compute.googleapis.com/Disk". If specified, only matching assets will be
   *   returned. See [Introduction to Cloud Asset
   *   Inventory](https://cloud.google.com/resource-manager/docs/cloud-asset-inventory/overview)
   *   for all supported asset types.
   * @param {google.cloud.asset.v1p5beta1.ContentType} request.contentType
   *   Asset content type. If not specified, no content but the asset name will
   *   be returned.
   * @param {number} request.pageSize
   *   The maximum number of assets to be returned in a single response. Default
   *   is 100, minimum is 1, and maximum is 1000.
   * @param {string} request.pageToken
   *   The `next_page_token` returned from the previous `ListAssetsResponse`, or
   *   unspecified for the first `ListAssetsRequest`. It is a continuation of a
   *   prior `ListAssets` call, and the API should return the next page of assets.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Stream}
   *   An object stream which emits an object representing [Asset]{@link google.cloud.asset.v1p5beta1.Asset} on 'data' event.
   *   The client library will perform auto-pagination by default: it will call the API as many
   *   times as needed. Note that it can affect your quota.
   *   We recommend using `listAssetsAsync()`
   *   method described below for async iteration which you can stop as needed.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination)
   *   for more details and examples.
   */
  listAssetsStream(
    request?: protos.google.cloud.asset.v1p5beta1.IListAssetsRequest,
    options?: CallOptions
  ): Transform {
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      gax.routingHeader.fromParams({
        parent: request.parent || '',
      });
    const defaultCallSettings = this._defaults['listAssets'];
    const callSettings = defaultCallSettings.merge(options);
    this.initialize();
    return this.descriptors.page.listAssets.createStream(
      this.innerApiCalls.listAssets as gax.GaxCall,
      request,
      callSettings
    );
  }

  /**
   * Equivalent to `listAssets`, but returns an iterable object.
   *
   * `for`-`await`-`of` syntax is used with the iterable to get response elements on-demand.
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. Name of the organization or project the assets belong to. Format:
   *   "organizations/[organization-number]" (such as "organizations/123"),
   *   "projects/[project-number]" (such as "projects/my-project-id"), or
   *   "projects/[project-id]" (such as "projects/12345").
   * @param {google.protobuf.Timestamp} request.readTime
   *   Timestamp to take an asset snapshot. This can only be set to a timestamp
   *   between 2018-10-02 UTC (inclusive) and the current time. If not specified,
   *   the current time will be used. Due to delays in resource data collection
   *   and indexing, there is a volatile window during which running the same
   *   query may get different results.
   * @param {string[]} request.assetTypes
   *   A list of asset types of which to take a snapshot for. For  example:
   *   "compute.googleapis.com/Disk". If specified, only matching assets will be
   *   returned. See [Introduction to Cloud Asset
   *   Inventory](https://cloud.google.com/resource-manager/docs/cloud-asset-inventory/overview)
   *   for all supported asset types.
   * @param {google.cloud.asset.v1p5beta1.ContentType} request.contentType
   *   Asset content type. If not specified, no content but the asset name will
   *   be returned.
   * @param {number} request.pageSize
   *   The maximum number of assets to be returned in a single response. Default
   *   is 100, minimum is 1, and maximum is 1000.
   * @param {string} request.pageToken
   *   The `next_page_token` returned from the previous `ListAssetsResponse`, or
   *   unspecified for the first `ListAssetsRequest`. It is a continuation of a
   *   prior `ListAssets` call, and the API should return the next page of assets.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Object}
   *   An iterable Object that allows [async iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols).
   *   When you iterate the returned iterable, each element will be an object representing
   *   [Asset]{@link google.cloud.asset.v1p5beta1.Asset}. The API will be called under the hood as needed, once per the page,
   *   so you can stop the iteration when you don't need more results.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination)
   *   for more details and examples.
   * @example
   * const iterable = client.listAssetsAsync(request);
   * for await (const response of iterable) {
   *   // process response
   * }
   */
  listAssetsAsync(
    request?: protos.google.cloud.asset.v1p5beta1.IListAssetsRequest,
    options?: CallOptions
  ): AsyncIterable<protos.google.cloud.asset.v1p5beta1.IAsset> {
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      gax.routingHeader.fromParams({
        parent: request.parent || '',
      });
    options = options || {};
    const defaultCallSettings = this._defaults['listAssets'];
    const callSettings = defaultCallSettings.merge(options);
    this.initialize();
    return this.descriptors.page.listAssets.asyncIterate(
      this.innerApiCalls['listAssets'] as GaxCall,
      request as unknown as RequestType,
      callSettings
    ) as AsyncIterable<protos.google.cloud.asset.v1p5beta1.IAsset>;
  }
  // --------------------
  // -- Path templates --
  // --------------------

  /**
   * Return a fully-qualified accessLevel resource name string.
   *
   * @param {string} access_policy
   * @param {string} access_level
   * @returns {string} Resource name string.
   */
  accessLevelPath(accessPolicy: string, accessLevel: string) {
    return this.pathTemplates.accessLevelPathTemplate.render({
      access_policy: accessPolicy,
      access_level: accessLevel,
    });
  }

  /**
   * Parse the access_policy from AccessLevel resource.
   *
   * @param {string} accessLevelName
   *   A fully-qualified path representing AccessLevel resource.
   * @returns {string} A string representing the access_policy.
   */
  matchAccessPolicyFromAccessLevelName(accessLevelName: string) {
    return this.pathTemplates.accessLevelPathTemplate.match(accessLevelName)
      .access_policy;
  }

  /**
   * Parse the access_level from AccessLevel resource.
   *
   * @param {string} accessLevelName
   *   A fully-qualified path representing AccessLevel resource.
   * @returns {string} A string representing the access_level.
   */
  matchAccessLevelFromAccessLevelName(accessLevelName: string) {
    return this.pathTemplates.accessLevelPathTemplate.match(accessLevelName)
      .access_level;
  }

  /**
   * Return a fully-qualified accessPolicy resource name string.
   *
   * @param {string} access_policy
   * @returns {string} Resource name string.
   */
  accessPolicyPath(accessPolicy: string) {
    return this.pathTemplates.accessPolicyPathTemplate.render({
      access_policy: accessPolicy,
    });
  }

  /**
   * Parse the access_policy from AccessPolicy resource.
   *
   * @param {string} accessPolicyName
   *   A fully-qualified path representing AccessPolicy resource.
   * @returns {string} A string representing the access_policy.
   */
  matchAccessPolicyFromAccessPolicyName(accessPolicyName: string) {
    return this.pathTemplates.accessPolicyPathTemplate.match(accessPolicyName)
      .access_policy;
  }

  /**
   * Return a fully-qualified servicePerimeter resource name string.
   *
   * @param {string} access_policy
   * @param {string} service_perimeter
   * @returns {string} Resource name string.
   */
  servicePerimeterPath(accessPolicy: string, servicePerimeter: string) {
    return this.pathTemplates.servicePerimeterPathTemplate.render({
      access_policy: accessPolicy,
      service_perimeter: servicePerimeter,
    });
  }

  /**
   * Parse the access_policy from ServicePerimeter resource.
   *
   * @param {string} servicePerimeterName
   *   A fully-qualified path representing ServicePerimeter resource.
   * @returns {string} A string representing the access_policy.
   */
  matchAccessPolicyFromServicePerimeterName(servicePerimeterName: string) {
    return this.pathTemplates.servicePerimeterPathTemplate.match(
      servicePerimeterName
    ).access_policy;
  }

  /**
   * Parse the service_perimeter from ServicePerimeter resource.
   *
   * @param {string} servicePerimeterName
   *   A fully-qualified path representing ServicePerimeter resource.
   * @returns {string} A string representing the service_perimeter.
   */
  matchServicePerimeterFromServicePerimeterName(servicePerimeterName: string) {
    return this.pathTemplates.servicePerimeterPathTemplate.match(
      servicePerimeterName
    ).service_perimeter;
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
