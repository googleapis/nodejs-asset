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
 * An `AccessLevel` is a label that can be applied to requests to GCP services,
 * along with a list of requirements necessary for the label to be applied.
 *
 * @property {string} name
 *   Required. Resource name for the Access Level. The `short_name` component
 *   must begin with a letter and only include alphanumeric and '_'. Format:
 *   `accessPolicies/{policy_id}/accessLevels/{short_name}`
 *
 * @property {string} title
 *   Human readable title. Must be unique within the Policy.
 *
 * @property {string} description
 *   Description of the `AccessLevel` and its use. Does not affect behavior.
 *
 * @property {Object} basic
 *   A `BasicLevel` composed of `Conditions`.
 *
 *   This object should have the same structure as [BasicLevel]{@link google.identity.accesscontextmanager.v1.BasicLevel}
 *
 * @property {Object} createTime
 *   Output only. Time the `AccessLevel` was created in UTC.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} updateTime
 *   Output only. Time the `AccessLevel` was updated in UTC.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @typedef AccessLevel
 * @memberof google.identity.accesscontextmanager.v1
 * @see [google.identity.accesscontextmanager.v1.AccessLevel definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/identity/accesscontextmanager/v1/access_level.proto}
 */
const AccessLevel = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * `BasicLevel` is an `AccessLevel` using a set of recommended features.
 *
 * @property {Object[]} conditions
 *   Required. A list of requirements for the `AccessLevel` to be granted.
 *
 *   This object should have the same structure as [Condition]{@link google.identity.accesscontextmanager.v1.Condition}
 *
 * @property {number} combiningFunction
 *   How the `conditions` list should be combined to determine if a request is
 *   granted this `AccessLevel`. If AND is used, each `Condition` in
 *   `conditions` must be satisfied for the `AccessLevel` to be applied. If OR
 *   is used, at least one `Condition` in `conditions` must be satisfied for the
 *   `AccessLevel` to be applied. Default behavior is AND.
 *
 *   The number should be among the values of [ConditionCombiningFunction]{@link google.identity.accesscontextmanager.v1.ConditionCombiningFunction}
 *
 * @typedef BasicLevel
 * @memberof google.identity.accesscontextmanager.v1
 * @see [google.identity.accesscontextmanager.v1.BasicLevel definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/identity/accesscontextmanager/v1/access_level.proto}
 */
const BasicLevel = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Options for how the `conditions` list should be combined to determine if
   * this `AccessLevel` is applied. Default is AND.
   *
   * @enum {number}
   * @memberof google.identity.accesscontextmanager.v1
   */
  ConditionCombiningFunction: {

    /**
     * All `Conditions` must be true for the `BasicLevel` to be true.
     */
    AND: 0,

    /**
     * If at least one `Condition` is true, then the `BasicLevel` is true.
     */
    OR: 1
  }
};

/**
 * A condition necessary for an `AccessLevel` to be granted. The Condition is an
 * AND over its fields. So a Condition is true if: 1) the request IP is from one
 * of the listed subnetworks AND 2) the originating device complies with the
 * listed device policy AND 3) all listed access levels are granted AND 4) the
 * request was sent at a time allowed by the DateTimeRestriction.
 *
 * @property {string[]} ipSubnetworks
 *   CIDR block IP subnetwork specification. May be IPv4 or IPv6. Note that for
 *   a CIDR IP address block, the specified IP address portion must be properly
 *   truncated (i.e. all the host bits must be zero) or the input is considered
 *   malformed. For example, "192.0.2.0/24" is accepted but "192.0.2.1/24" is
 *   not. Similarly, for IPv6, "2001:db8::/32" is accepted whereas
 *   "2001:db8::1/32" is not. The originating IP of a request must be in one of
 *   the listed subnets in order for this Condition to be true. If empty, all IP
 *   addresses are allowed.
 *
 * @property {Object} devicePolicy
 *   Device specific restrictions, all restrictions must hold for the
 *   Condition to be true. If not specified, all devices are allowed.
 *
 *   This object should have the same structure as [DevicePolicy]{@link google.identity.accesscontextmanager.v1.DevicePolicy}
 *
 * @property {string[]} requiredAccessLevels
 *   A list of other access levels defined in the same `Policy`, referenced by
 *   resource name. Referencing an `AccessLevel` which does not exist is an
 *   error. All access levels listed must be granted for the Condition
 *   to be true. Example:
 *   "`accessPolicies/MY_POLICY/accessLevels/LEVEL_NAME"`
 *
 * @property {boolean} negate
 *   Whether to negate the Condition. If true, the Condition becomes a NAND over
 *   its non-empty fields, each field must be false for the Condition overall to
 *   be satisfied. Defaults to false.
 *
 * @property {string[]} members
 *   The request must be made by one of the provided user or service
 *   accounts. Groups are not supported.
 *   Syntax:
 *   `user:{emailid}`
 *   `serviceAccount:{emailid}`
 *   If not specified, a request may come from any user.
 *
 * @property {string[]} regions
 *   The request must originate from one of the provided countries/regions.
 *   Must be valid ISO 3166-1 alpha-2 codes.
 *
 * @typedef Condition
 * @memberof google.identity.accesscontextmanager.v1
 * @see [google.identity.accesscontextmanager.v1.Condition definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/identity/accesscontextmanager/v1/access_level.proto}
 */
const Condition = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * `DevicePolicy` specifies device specific restrictions necessary to acquire a
 * given access level. A `DevicePolicy` specifies requirements for requests from
 * devices to be granted access levels, it does not do any enforcement on the
 * device. `DevicePolicy` acts as an AND over all specified fields, and each
 * repeated field is an OR over its elements. Any unset fields are ignored. For
 * example, if the proto is { os_type : DESKTOP_WINDOWS, os_type :
 * DESKTOP_LINUX, encryption_status: ENCRYPTED}, then the DevicePolicy will be
 * true for requests originating from encrypted Linux desktops and encrypted
 * Windows desktops.
 *
 * @property {boolean} requireScreenlock
 *   Whether or not screenlock is required for the DevicePolicy to be true.
 *   Defaults to `false`.
 *
 * @property {number[]} allowedEncryptionStatuses
 *   Allowed encryptions statuses, an empty list allows all statuses.
 *
 *   The number should be among the values of [DeviceEncryptionStatus]{@link google.identity.accesscontextmanager.type.DeviceEncryptionStatus}
 *
 * @property {Object[]} osConstraints
 *   Allowed OS versions, an empty list allows all types and all versions.
 *
 *   This object should have the same structure as [OsConstraint]{@link google.identity.accesscontextmanager.v1.OsConstraint}
 *
 * @property {number[]} allowedDeviceManagementLevels
 *   Allowed device management levels, an empty list allows all management
 *   levels.
 *
 *   The number should be among the values of [DeviceManagementLevel]{@link google.identity.accesscontextmanager.type.DeviceManagementLevel}
 *
 * @property {boolean} requireAdminApproval
 *   Whether the device needs to be approved by the customer admin.
 *
 * @property {boolean} requireCorpOwned
 *   Whether the device needs to be corp owned.
 *
 * @typedef DevicePolicy
 * @memberof google.identity.accesscontextmanager.v1
 * @see [google.identity.accesscontextmanager.v1.DevicePolicy definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/identity/accesscontextmanager/v1/access_level.proto}
 */
const DevicePolicy = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A restriction on the OS type and version of devices making requests.
 *
 * @property {number} osType
 *   Required. The allowed OS type.
 *
 *   The number should be among the values of [OsType]{@link google.identity.accesscontextmanager.type.OsType}
 *
 * @property {string} minimumVersion
 *   The minimum allowed OS version. If not set, any version of this OS
 *   satisfies the constraint. Format: `"major.minor.patch"`.
 *   Examples: `"10.5.301"`, `"9.2.1"`.
 *
 * @property {boolean} requireVerifiedChromeOs
 *   Only allows requests from devices with a verified Chrome OS.
 *   Verifications includes requirements that the device is enterprise-managed,
 *   conformant to Dasher domain policies, and the caller has permission to call
 *   the API targeted by the request.
 *
 * @typedef OsConstraint
 * @memberof google.identity.accesscontextmanager.v1
 * @see [google.identity.accesscontextmanager.v1.OsConstraint definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/identity/accesscontextmanager/v1/access_level.proto}
 */
const OsConstraint = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};