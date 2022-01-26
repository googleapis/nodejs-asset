// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


'use strict';

function main(parent) {
  // [START cloudasset_v1_generated_AssetService_ListAssets_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Name of the organization or project the assets belong to. Format:
   *  "organizations/[organization-number]" (such as "organizations/123"),
   *  "projects/[project-id]" (such as "projects/my-project-id"), or
   *  "projects/[project-number]" (such as "projects/12345").
   */
  // const parent = 'abc123'
  /**
   *  Timestamp to take an asset snapshot. This can only be set to a timestamp
   *  between the current time and the current time minus 35 days (inclusive).
   *  If not specified, the current time will be used. Due to delays in resource
   *  data collection and indexing, there is a volatile window during which
   *  running the same query may get different results.
   */
  // const readTime = {}
  /**
   *  A list of asset types to take a snapshot for. For example:
   *  "compute.googleapis.com/Disk".
   *  Regular expression is also supported. For example:
   *  * "compute.googleapis.com.*" snapshots resources whose asset type starts
   *  with "compute.googleapis.com".
   *  * ".*Instance" snapshots resources whose asset type ends with "Instance".
   *  * ".*Instance.*" snapshots resources whose asset type contains "Instance".
   *  See RE2 (https://github.com/google/re2/wiki/Syntax) for all supported
   *  regular expression syntax. If the regular expression does not match any
   *  supported asset type, an INVALID_ARGUMENT error will be returned.
   *  If specified, only matching assets will be returned, otherwise, it will
   *  snapshot all asset types. See Introduction to Cloud Asset
   *  Inventory (https://cloud.google.com/asset-inventory/docs/overview)
   *  for all supported asset types.
   */
  // const assetTypes = 'abc123'
  /**
   *  Asset content type. If not specified, no content but the asset name will
   *  be returned.
   */
  // const contentType = {}
  /**
   *  The maximum number of assets to be returned in a single response. Default
   *  is 100, minimum is 1, and maximum is 1000.
   */
  // const pageSize = 1234
  /**
   *  The `next_page_token` returned from the previous `ListAssetsResponse`, or
   *  unspecified for the first `ListAssetsRequest`. It is a continuation of a
   *  prior `ListAssets` call, and the API should return the next page of assets.
   */
  // const pageToken = 'abc123'
  /**
   *  A list of relationship types to output, for example:
   *  `INSTANCE_TO_INSTANCEGROUP`. This field should only be specified if
   *  content_type=RELATIONSHIP.
   *  * If specified:
   *  it snapshots specified relationships. It returns an error if
   *  any of the relationship_types  doesn't belong to the supported
   *  relationship types of the asset_types  or if any of the asset_types 
   *  doesn't belong to the source types of the relationship_types.
   *  * Otherwise:
   *  it snapshots the supported relationships for all asset_types  or returns
   *  an error if any of the asset_types  has no relationship support.
   *  An unspecified asset types field means all supported asset_types.
   *  See Introduction to Cloud Asset
   *  Inventory (https://cloud.google.com/asset-inventory/docs/overview)
   *  for all supported asset types and relationship types.
   */
  // const relationshipTypes = 'abc123'

  // Imports the Asset library
  const {AssetServiceClient} = require('@google-cloud/asset').v1;

  // Instantiates a client
  const assetClient = new AssetServiceClient();

  async function callListAssets() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await assetClient.listAssetsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListAssets();
  // [END cloudasset_v1_generated_AssetService_ListAssets_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
