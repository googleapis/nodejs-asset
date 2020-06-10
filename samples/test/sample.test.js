// Copyright 2018 Google LLC
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

const {assert} = require('chai');
const {after, before, describe, it} = require('mocha');
const uuid = require('uuid');
const cp = require('child_process');
const {Storage} = require('@google-cloud/storage');

const execSync = cmd => cp.execSync(cmd, {encoding: 'utf-8'});

const storage = new Storage();
const bucketName = `asset-nodejs-${uuid.v4()}`;
const bucket = storage.bucket(bucketName);

const Compute = require('@google-cloud/compute');
const zone = new Compute().zone('us-central1-c');
const vmName = `asset-nodejs-${uuid.v4()}`;

let vm;

// Some of these tests can take an extremely long time, and occasionally
// timeout, see:
// "Timeout of 180000ms exceeded. For async tests and hooks".
const delay = async test => {
  const retries = test.currentRetry();
  if (retries === 0) return; // no retry on the first failure.
  // see: https://cloud.google.com/storage/docs/exponential-backoff:
  const ms = Math.pow(2, retries) * 1000 + Math.random() * 2000;
  return new Promise(done => {
    console.info(`retrying "${test.title}" in ${ms}ms`);
    setTimeout(done, ms);
  });
};

describe('quickstart sample tests', () => {
  before(async () => {
    await bucket.create();
    [vm] = await zone.createVM(vmName, {os: 'ubuntu'});
  });

  after(async () => {
    await bucket.delete();
    await vm.delete();
  });

  it('should export assets to specified path', async function () {
    this.retries(2);
    await delay(this.test);
    const dumpFilePath = `gs://${bucketName}/my-assets.txt`;
    execSync(`node exportAssets ${dumpFilePath}`);
    const file = await bucket.file('my-assets.txt');
    const exists = await file.exists();
    assert.ok(exists);
    await file.delete();
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

  it('should search all resources successfully', async () => {
    const scope = `projects/${process.env.GCLOUD_PROJECT}`;
    const query = `name:${vmName}`;
    const stdout = execSync(
      `node searchAllResources --scope=${scope} --query=${query}`
    );
    assert.include(stdout, vmName);
  });

  it('should search all iam policies successfully', async () => {
    const scope = `projects/${process.env.GCLOUD_PROJECT}`;
    const query = 'policy:roles/owner';
    const stdout = execSync(
      `node searchAllIamPolicies --scope=${scope} --query=${query}`
    );
    assert.isAtLeast(stdout[0].length, 1);
  });
});
