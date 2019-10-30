/**
 * Copyright 2019, Google, LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const {assert} = require('chai');
const uuid = require('uuid');
const cp = require('child_process');
const {Storage} = require('@google-cloud/storage');

const execSync = cmd => cp.execSync(cmd, {encoding: 'utf-8'});

const storage = new Storage();
const bucketName = `asset-nodejs-${uuid.v4()}`;
const bucket = storage.bucket(bucketName);

const {BigQuery} = require('@google-cloud/bigquery');
const bigquery = new BigQuery();
const options = {
      location: 'US',
    };
const datasetName = `asset_nodejs_${uuid.v4()}`.replace(/-/gi, '_');

describe('quickstart sample tests', () => {
  before(async () => {
    await bucket.create();
    await bigquery.createDataset(datasetName, options);
    await bigquery.dataset(datasetName).exists();
  });

  after(async () => {
    await bucket.delete();
    await bigquery
      .dataset(datasetName)
      .delete({force: true})
      .catch(console.warn);
  });

  it('should export assets to specified path', async () => {
    const dumpFilePath = `gs://${bucketName}/my-assets.txt`;
    const dataSet = `datasets/${datasetName}`;
    const table = 'asset_nodejs';
    execSync(`node exportAssets ${dumpFilePath} ${dataSet} ${table}`);
    const file = await bucket.file('my-assets.txt');
    const exists = await file.exists();
    assert.ok(exists);
    await file.delete();
    const bqTable = await bigquery
      .dataset(datasetName)
      .table(table)
      .exists();
    assert.ok(bqTable);
  });

  it('should get assets history successfully', async () => {
    const assetName = `//storage.googleapis.com/${bucketName}`;
    const stdout = execSync(`node getBatchAssetHistory ${assetName}`);
    assert.include(stdout, assetName);
  });

  it('should run the quickstart', async () => {
    const assetName = `//storage.googleapis.com/${bucketName}`;
    const stdout = execSync(`node quickstart ${assetName}`);
    assert.include(stdout, assetName);
  });
});
