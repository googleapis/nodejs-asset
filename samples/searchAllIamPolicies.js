// Copyright 2020 Google LLC
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

// sample-metadata:
//   title: Search All Iam Policies
//   description: Search All Iam Policies.
//   usage: node searchAllIamPolicies --scope=<SCOPE> --query=<QUERY> --pageSize=<PAGE_SIZE> --pageToken=<PAGE_TOKEN>

async function main() {
  // [START asset_quickstart_search_all_iam_policies]
  const util = require('util');
  const {AssetServiceClient} = require('@google-cloud/asset');
  const argv = require('yargs').boolean(['autoPaginate']).argv;

  const client = new AssetServiceClient();

  async function searchAllIamPolicies() {
    const request = {
      scope: argv.scope,
      query: argv.query,
      pageSize: argv.pageSize,
      pageToken: argv.pageToken,
    };
    const options = {
      autoPaginate: argv.autoPaginate,
    }

    // Handle the operation using the promise pattern.
    const result = await client.searchAllIamPolicies(request, options);
    // Do things with with the response.
    console.log(util.inspect(result, {depth: null}));
  }
  // [END asset_quickstart_search_all_iam_policies]
  searchAllIamPolicies();
}

main(...process.argv.slice(2)).catch(err => {
  console.error(err.message);
  process.exitCode = 1;
});