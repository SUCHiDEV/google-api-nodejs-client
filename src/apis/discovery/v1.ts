/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {AxiosPromise} from 'axios';
import {Compute, JWT, OAuth2Client, UserRefreshClient} from 'google-auth-library';
import {BodyResponseCallback, createAPIRequest, GlobalOptions, GoogleConfigurable, MethodOptions} from 'googleapis-common';

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace discovery_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

  /**
   * APIs Discovery Service
   *
   * Provides information about other Google APIs, such as what APIs are
   * available, the resource, and method details for each API.
   *
   * @example
   * const {google} = require('googleapis');
   * const discovery = google.discovery('v1');
   *
   * @namespace discovery
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Discovery
   */
  export class Discovery {
    _options: GlobalOptions;
    google?: GoogleConfigurable;
    root = this;

    apis: Resource$Apis;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this._options = options || {};
      this.google = google;
      this.getRoot.bind(this);

      this.apis = new Resource$Apis(this);
    }

    getRoot() {
      return this.root;
    }
  }

  export interface Schema$DirectoryList {
    /**
     * Indicate the version of the Discovery API used to generate this doc.
     */
    discoveryVersion?: string;
    /**
     * The individual directory entries. One entry per api/version pair.
     */
    items?: any[];
    /**
     * The kind for this response.
     */
    kind?: string;
  }
  export interface Schema$JsonSchema {
    /**
     * A reference to another schema. The value of this property is the
     * &quot;id&quot; of another schema.
     */
    $ref?: string;
    /**
     * If this is a schema for an object, this property is the schema for any
     * additional properties with dynamic keys on this object.
     */
    additionalProperties?: Schema$JsonSchema;
    /**
     * Additional information about this property.
     */
    annotations?: any;
    /**
     * The default value of this property (if one exists).
     */
    default?: string;
    /**
     * A description of this object.
     */
    description?: string;
    /**
     * Values this parameter may take (if it is an enum).
     */
    enum?: string[];
    /**
     * The descriptions for the enums. Each position maps to the corresponding
     * value in the &quot;enum&quot; array.
     */
    enumDescriptions?: string[];
    /**
     * An additional regular expression or key that helps constrain the value.
     * For more details see:
     * http://tools.ietf.org/html/draft-zyp-json-schema-03#section-5.23
     */
    format?: string;
    /**
     * Unique identifier for this schema.
     */
    id?: string;
    /**
     * If this is a schema for an array, this property is the schema for each
     * element in the array.
     */
    items?: Schema$JsonSchema;
    /**
     * Whether this parameter goes in the query or the path for REST requests.
     */
    location?: string;
    /**
     * The maximum value of this parameter.
     */
    maximum?: string;
    /**
     * The minimum value of this parameter.
     */
    minimum?: string;
    /**
     * The regular expression this parameter must conform to. Uses Java 6 regex
     * format:
     * http://docs.oracle.com/javase/6/docs/api/java/util/regex/Pattern.html
     */
    pattern?: string;
    /**
     * If this is a schema for an object, list the schema for each property of
     * this object.
     */
    properties?: any;
    /**
     * The value is read-only, generated by the service. The value cannot be
     * modified by the client. If the value is included in a POST, PUT, or PATCH
     * request, it is ignored by the service.
     */
    readOnly?: boolean;
    /**
     * Whether this parameter may appear multiple times.
     */
    repeated?: boolean;
    /**
     * Whether the parameter is required.
     */
    required?: boolean;
    /**
     * The value type for this schema. A list of values can be found here:
     * http://tools.ietf.org/html/draft-zyp-json-schema-03#section-5.1
     */
    type?: string;
    /**
     * In a variant data type, the value of one property is used to determine
     * how to interpret the entire entity. Its value must exist in a map of
     * descriminant values to schema names.
     */
    variant?: any;
  }
  export interface Schema$RestDescription {
    /**
     * Authentication information.
     */
    auth?: any;
    /**
     * [DEPRECATED] The base path for REST requests.
     */
    basePath?: string;
    /**
     * [DEPRECATED] The base URL for REST requests.
     */
    baseUrl?: string;
    /**
     * The path for REST batch requests.
     */
    batchPath?: string;
    /**
     * Indicates how the API name should be capitalized and split into various
     * parts. Useful for generating pretty class names.
     */
    canonicalName?: string;
    /**
     * The description of this API.
     */
    description?: string;
    /**
     * Indicate the version of the Discovery API used to generate this doc.
     */
    discoveryVersion?: string;
    /**
     * A link to human readable documentation for the API.
     */
    documentationLink?: string;
    /**
     * The ETag for this response.
     */
    etag?: string;
    /**
     * Enable exponential backoff for suitable methods in the generated clients.
     */
    exponentialBackoffDefault?: boolean;
    /**
     * A list of supported features for this API.
     */
    features?: string[];
    /**
     * Links to 16x16 and 32x32 icons representing the API.
     */
    icons?: any;
    /**
     * The ID of this API.
     */
    id?: string;
    /**
     * The kind for this response.
     */
    kind?: string;
    /**
     * Labels for the status of this API, such as labs or deprecated.
     */
    labels?: string[];
    /**
     * API-level methods for this API.
     */
    methods?: any;
    /**
     * The name of this API.
     */
    name?: string;
    /**
     * The domain of the owner of this API. Together with the ownerName and a
     * packagePath values, this can be used to generate a library for this API
     * which would have a unique fully qualified name.
     */
    ownerDomain?: string;
    /**
     * The name of the owner of this API. See ownerDomain.
     */
    ownerName?: string;
    /**
     * The package of the owner of this API. See ownerDomain.
     */
    packagePath?: string;
    /**
     * Common parameters that apply across all apis.
     */
    parameters?: any;
    /**
     * The protocol described by this document.
     */
    protocol?: string;
    /**
     * The resources in this API.
     */
    resources?: any;
    /**
     * The version of this API.
     */
    revision?: string;
    /**
     * The root URL under which all API services live.
     */
    rootUrl?: string;
    /**
     * The schemas for this API.
     */
    schemas?: any;
    /**
     * The base path for all REST requests.
     */
    servicePath?: string;
    /**
     * The title of this API.
     */
    title?: string;
    /**
     * The version of this API.
     */
    version?: string;
    version_module?: boolean;
  }
  export interface Schema$RestMethod {
    /**
     * Description of this method.
     */
    description?: string;
    /**
     * Whether this method requires an ETag to be specified. The ETag is sent as
     * an HTTP If-Match or If-None-Match header.
     */
    etagRequired?: boolean;
    /**
     * HTTP method used by this method.
     */
    httpMethod?: string;
    /**
     * A unique ID for this method. This property can be used to match methods
     * between different versions of Discovery.
     */
    id?: string;
    /**
     * Media upload parameters.
     */
    mediaUpload?: any;
    /**
     * Ordered list of required parameters, serves as a hint to clients on how
     * to structure their method signatures. The array is ordered such that the
     * &quot;most-significant&quot; parameter appears first.
     */
    parameterOrder?: string[];
    /**
     * Details for all parameters in this method.
     */
    parameters?: any;
    /**
     * The URI path of this REST method. Should be used in conjunction with the
     * basePath property at the api-level.
     */
    path?: string;
    /**
     * The schema for the request.
     */
    request?: any;
    /**
     * The schema for the response.
     */
    response?: any;
    /**
     * OAuth 2.0 scopes applicable to this method.
     */
    scopes?: string[];
    /**
     * Whether this method supports media downloads.
     */
    supportsMediaDownload?: boolean;
    /**
     * Whether this method supports media uploads.
     */
    supportsMediaUpload?: boolean;
    /**
     * Whether this method supports subscriptions.
     */
    supportsSubscription?: boolean;
    /**
     * Indicates that downloads from this method should use the download service
     * URL (i.e. &quot;/download&quot;). Only applies if the method supports
     * media download.
     */
    useMediaDownloadService?: boolean;
  }
  export interface Schema$RestResource {
    /**
     * Methods on this resource.
     */
    methods?: any;
    /**
     * Sub-resources on this resource.
     */
    resources?: any;
  }


  export class Resource$Apis {
    root: Discovery;
    constructor(root: Discovery) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * discovery.apis.getRest
     * @desc Retrieve the description of a particular version of an api.
     * @alias discovery.apis.getRest
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.api The name of the API.
     * @param {string} params.version The version of the API.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getRest(params?: Params$Resource$Apis$Getrest, options?: MethodOptions):
        AxiosPromise<Schema$RestDescription>;
    getRest(
        params: Params$Resource$Apis$Getrest,
        options: MethodOptions|BodyResponseCallback<Schema$RestDescription>,
        callback: BodyResponseCallback<Schema$RestDescription>): void;
    getRest(
        params: Params$Resource$Apis$Getrest,
        callback: BodyResponseCallback<Schema$RestDescription>): void;
    getRest(callback: BodyResponseCallback<Schema$RestDescription>): void;
    getRest(
        paramsOrCallback?: Params$Resource$Apis$Getrest|
        BodyResponseCallback<Schema$RestDescription>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$RestDescription>,
        callback?: BodyResponseCallback<Schema$RestDescription>):
        void|AxiosPromise<Schema$RestDescription> {
      let params = (paramsOrCallback || {}) as Params$Resource$Apis$Getrest;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Apis$Getrest;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/discovery/v1/apis/{api}/{version}/rest')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['api', 'version'],
        pathParams: ['api', 'version'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$RestDescription>(parameters, callback);
      } else {
        return createAPIRequest<Schema$RestDescription>(parameters);
      }
    }


    /**
     * discovery.apis.list
     * @desc Retrieve the list of APIs supported at this endpoint.
     * @alias discovery.apis.list
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.name Only include APIs with the given name.
     * @param {boolean=} params.preferred Return only the preferred version of an API.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: Params$Resource$Apis$List, options?: MethodOptions):
        AxiosPromise<Schema$DirectoryList>;
    list(
        params: Params$Resource$Apis$List,
        options: MethodOptions|BodyResponseCallback<Schema$DirectoryList>,
        callback: BodyResponseCallback<Schema$DirectoryList>): void;
    list(
        params: Params$Resource$Apis$List,
        callback: BodyResponseCallback<Schema$DirectoryList>): void;
    list(callback: BodyResponseCallback<Schema$DirectoryList>): void;
    list(
        paramsOrCallback?: Params$Resource$Apis$List|
        BodyResponseCallback<Schema$DirectoryList>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$DirectoryList>,
        callback?: BodyResponseCallback<Schema$DirectoryList>):
        void|AxiosPromise<Schema$DirectoryList> {
      let params = (paramsOrCallback || {}) as Params$Resource$Apis$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Apis$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/discovery/v1/apis')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$DirectoryList>(parameters, callback);
      } else {
        return createAPIRequest<Schema$DirectoryList>(parameters);
      }
    }
  }

  export interface Params$Resource$Apis$Getrest {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the API.
     */
    api?: string;
    /**
     * The version of the API.
     */
    version?: string;
  }
  export interface Params$Resource$Apis$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Only include APIs with the given name.
     */
    name?: string;
    /**
     * Return only the preferred version of an API.
     */
    preferred?: boolean;
  }
}
