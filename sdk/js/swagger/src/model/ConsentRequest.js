/**
 * ORY Hydra - Cloud Native OAuth 2.0 and OpenID Connect Server
 * Welcome to the ORY Hydra HTTP API documentation. You will find documentation for all HTTP APIs here. Keep in mind that this document reflects the latest branch, always. Support for versioned documentation is coming in the future.
 *
 * OpenAPI spec version: Latest
 * Contact: hi@ory.am
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory)
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'))
  } else {
    // Browser globals (root is window)
    if (!root.OryHydraCloudNativeOAuth20AndOpenIdConnectServer) {
      root.OryHydraCloudNativeOAuth20AndOpenIdConnectServer = {}
    }
    root.OryHydraCloudNativeOAuth20AndOpenIdConnectServer.ConsentRequest = factory(
      root.OryHydraCloudNativeOAuth20AndOpenIdConnectServer.ApiClient
    )
  }
})(this, function(ApiClient) {
  'use strict'

  /**
   * The ConsentRequest model module.
   * @module model/ConsentRequest
   * @version Latest
   */

  /**
   * Constructs a new <code>ConsentRequest</code>.
   * @alias module:model/ConsentRequest
   * @class
   */
  var exports = function() {
    var _this = this
  }

  /**
   * Constructs a <code>ConsentRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConsentRequest} obj Optional instance to populate.
   * @return {module:model/ConsentRequest} The populated <code>ConsentRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports()

      if (data.hasOwnProperty('clientId')) {
        obj['clientId'] = ApiClient.convertToType(data['clientId'], 'String')
      }
      if (data.hasOwnProperty('expiresAt')) {
        obj['expiresAt'] = ApiClient.convertToType(data['expiresAt'], 'Date')
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String')
      }
      if (data.hasOwnProperty('redirectUrl')) {
        obj['redirectUrl'] = ApiClient.convertToType(
          data['redirectUrl'],
          'String'
        )
      }
      if (data.hasOwnProperty('requestedScopes')) {
        obj['requestedScopes'] = ApiClient.convertToType(
          data['requestedScopes'],
          ['String']
        )
      }
    }
    return obj
  }

  /**
   * ClientID is the client id that initiated the OAuth2 request.
   * @member {String} clientId
   */
  exports.prototype['clientId'] = undefined
  /**
   * ExpiresAt is the time where the access request will expire.
   * @member {Date} expiresAt
   */
  exports.prototype['expiresAt'] = undefined
  /**
   * ID is the id of this consent request.
   * @member {String} id
   */
  exports.prototype['id'] = undefined
  /**
   * Redirect URL is the URL where the user agent should be redirected to after the consent has been accepted or rejected.
   * @member {String} redirectUrl
   */
  exports.prototype['redirectUrl'] = undefined
  /**
   * RequestedScopes represents a list of scopes that have been requested by the OAuth2 request initiator.
   * @member {Array.<String>} requestedScopes
   */
  exports.prototype['requestedScopes'] = undefined

  return exports
})
