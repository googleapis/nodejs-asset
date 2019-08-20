// Copyright 2018 Google LLC
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

/**
 * @namespace google
 */
/**
 * @namespace google.cloud
 */
/**
 * @namespace google.cloud.asset
 */
/**
 * @namespace google.cloud.asset.v1beta1
 */
/**
 * @namespace google.cloud.asset.v1
 */
/**
 * @namespace google.protobuf
 */
/**
 * @namespace google.rpc
 */
/**
 * @namespace google.type
 */
/**
 * @namespace google.iam.v1
 */
/**
 * @namespace google.longrunning
 */
/**
 * @namespace google.cloud.asset.v1p2beta1
 */

'use strict';

// Import the clients for each version supported by this package.
const gapic = Object.freeze({
  v1beta1: require('./v1beta1'),
  v1: require('./v1'),
  v1p2beta1: require('./v1p2beta1'),
});

/**
 * The `asset` package has the following named exports:
 *
 * - `AssetServiceClient` - Reference to
 *   {@link v1beta1.AssetServiceClient}
 * - `v1beta1` - This is used for selecting or pinning a
 *   particular backend service version. It exports:
 *     - `AssetServiceClient` - Reference to
 *       {@link v1beta1.AssetServiceClient}
 *
 * @module {object} asset
 * @alias nodejs-asset
 *
 * @example <caption>Install the client library with <a href="https://www.npmjs.com/">npm</a>:</caption>
 * npm install --save @google-cloud/asset
 *
 * @example <caption>Import the client library:</caption>
 * const asset = require('@google-cloud/asset');
 *
 * @example <caption>Create a client that uses <a href="https://goo.gl/64dyYX">Application Default Credentials (ADC)</a>:</caption>
 * const client = new asset.AssetServiceClient();
 *
 * @example <caption>Create a client with <a href="https://goo.gl/RXp6VL">explicit credentials</a>:</caption>
 * const client = new asset.AssetServiceClient({
 *   projectId: 'your-project-id',
 *   keyFilename: '/path/to/keyfile.json',
 * });
 */

/**
 * @type {object}
 * @property {constructor} AssetServiceClient
 *   Reference to {@link v1beta1.AssetServiceClient}
 */
module.exports = gapic.v1;

/**
 * @type {object}
 * @property {constructor} AssetServiceClient
 *   Reference to {@link v1beta1.AssetServiceClient}
 */
module.exports.v1p2beta1 = gapic.v1p2beta1;

/**
 * @type {object}
 * @property {constructor} AssetServiceClient
 *   Reference to {@link v1beta1.AssetServiceClient}
 */
module.exports.v1beta1 = gapic.v1beta1;

/**
 * @type {object}
 * @property {constructor} AssetServiceClient
 *   Reference to {@link v1.AssetServiceClient}
 */
module.exports.v1 = gapic.v1;

// Alias `module.exports` as `module.exports.default`, for future-proofing.
module.exports.default = Object.assign({}, module.exports);
