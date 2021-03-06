/*
 *  validate/with.certs.js
 *
 *  David Janes
 *  Consenas.com
 *  2021-02-02
 *
 *  Copyright (2013-2021) Consensas
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

"use strict"

/**
 *  This will return a new verified, with
 *  "cert_accepts" (certs that are accepted)
 *  and "cert_rejects" (certs that are rejected)
 */
const with_certs = async (verified, certs) => {
    verified = Object.assign({}, verified)
    verified.cert_accepts = []
    verified.cert_rejects = []

    // console.log("with certs called", certs)

    return verified
}

/**
 *  API
 */
exports.certs = with_certs
