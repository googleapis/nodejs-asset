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



'use strict';

function main(name) {
  // [START cloudasset_v1_generated_AssetService_DeleteFeed_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the feed and it must be in the format of:
   *  projects/project_number/feeds/feed_id
   *  folders/folder_number/feeds/feed_id
   *  organizations/organization_number/feeds/feed_id
   */
  // const name = 'abc123'

  // Imports the Asset library
  const {AssetServiceClient} = require('@google-cloud/asset').v1;

  // Instantiates a client
  const assetClient = new AssetServiceClient();

  async function callDeleteFeed() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await assetClient.deleteFeed(request);
    console.log(response);
  }

  callDeleteFeed();
  // [END cloudasset_v1_generated_AssetService_DeleteFeed_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
