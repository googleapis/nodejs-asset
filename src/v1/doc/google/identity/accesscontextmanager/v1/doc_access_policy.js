// Copyright 2019 Google LLC
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

// Note: this file is purely for documentation. Any contents are not expected
// to be loaded as the JS file.

/**
 * `AccessPolicy` is a container for `AccessLevels` (which define the necessary
 * attributes to use GCP services) and `ServicePerimeters` (which define regions
 * of services able to freely pass data within a perimeter). An access policy is
 * globally visible within an organization, and the restrictions it specifies
 * apply to all projects within an organization.
 *
 * @property {string} name
 *   Output only. Resource name of the `AccessPolicy`. Format:
 *   `accessPolicies/{policy_id}`
 *
 * @property {string} parent
 *   Required. The parent of this `AccessPolicy` in the Cloud Resource
 *   Hierarchy. Currently immutable once created. Format:
 *   `organizations/{organization_id}`
 *
 * @property {string} title
 *   Required. Human readable title. Does not affect behavior.
 *
 * @property {Object} createTime
 *   Output only. Time the `AccessPolicy` was created in UTC.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} updateTime
 *   Output only. Time the `AccessPolicy` was updated in UTC.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @typedef AccessPolicy
 * @memberof google.identity.accesscontextmanager.v1
 * @see [google.identity.accesscontextmanager.v1.AccessPolicy definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/identity/accesscontextmanager/v1/access_policy.proto}
 */
const AccessPolicy = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};