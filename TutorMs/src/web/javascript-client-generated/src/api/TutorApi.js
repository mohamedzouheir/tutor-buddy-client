/*
 * Student Tutor Booking Management System
 * This is a system allowing students and tutors to book in-person sessions at designated venues on campus.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: 222641495@mycput.ac.za
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.61
 *
 * Do not edit the class manually.
 *
 */
import ApiClient from "../ApiClient";
import TutorDTO from '../model/TutorDTO';

/**
* Tutor service.
* @module api/TutorApi
* @version 1.0.0
*/
export default class TutorApi {

    /**
    * Constructs a new TutorApi. 
    * @alias module:api/TutorApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the addTutor operation.
     * @callback moduleapi/TutorApi~addTutorCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TutorDTO{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a new tutor
     * This can only be done by the admin.
     * @param {module:model/TutorDTO} body Tutor object that needs to be added to the system
     * @param {module:api/TutorApi~addTutorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    addTutor(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addTutor");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = TutorDTO;

      return this.apiClient.callApi(
        '/tutor', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the authenticateTutor operation.
     * @callback moduleapi/TutorApi~authenticateTutorCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TutorDTO{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * authenticate tutor
     * Returns a single tutor
     * @param {String} email email of the Tutor
     * @param {String} password password of the Tutor
     * @param {module:api/TutorApi~authenticateTutorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    authenticateTutor(email, password, callback) {
      
      let postBody = null;
      // verify the required parameter 'email' is set
      if (email === undefined || email === null) {
        throw new Error("Missing the required parameter 'email' when calling authenticateTutor");
      }
      // verify the required parameter 'password' is set
      if (password === undefined || password === null) {
        throw new Error("Missing the required parameter 'password' when calling authenticateTutor");
      }

      let pathParams = {
        'email': email,'password': password
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = TutorDTO;

      return this.apiClient.callApi(
        '/tutor/authenticate/{email}/{password}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the deleteTutor operation.
     * @callback moduleapi/TutorApi~deleteTutorCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete tutor
     * This can only be done by the admin.
     * @param {Number} tutorId ID of tutor that needs to be deleted
     * @param {module:api/TutorApi~deleteTutorCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteTutor(tutorId, callback) {
      
      let postBody = null;
      // verify the required parameter 'tutorId' is set
      if (tutorId === undefined || tutorId === null) {
        throw new Error("Missing the required parameter 'tutorId' when calling deleteTutor");
      }

      let pathParams = {
        'tutorId': tutorId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/tutor/{tutorId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getAllTutors operation.
     * @callback moduleapi/TutorApi~getAllTutorsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/TutorDTO>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all tutors
     * Returns all tutors in the system
     * @param {module:api/TutorApi~getAllTutorsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getAllTutors(callback) {
      
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [TutorDTO];

      return this.apiClient.callApi(
        '/tutor', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getTutorById operation.
     * @callback moduleapi/TutorApi~getTutorByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TutorDTO{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get tutor by ID
     * Returns a single tutor
     * @param {Number} tutorId ID of tutor to return
     * @param {module:api/TutorApi~getTutorByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getTutorById(tutorId, callback) {
      
      let postBody = null;
      // verify the required parameter 'tutorId' is set
      if (tutorId === undefined || tutorId === null) {
        throw new Error("Missing the required parameter 'tutorId' when calling getTutorById");
      }

      let pathParams = {
        'tutorId': tutorId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = TutorDTO;

      return this.apiClient.callApi(
        '/tutor/{tutorId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateTutor operation.
     * @callback moduleapi/TutorApi~updateTutorCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TutorDTO{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an existing tutor
     * This can only be done by the admin.
     * @param {module:model/TutorDTO} body Updated tutor object
     * @param {Number} tutorId ID of tutor that needs to be updated
     * @param {module:api/TutorApi~updateTutorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    updateTutor(body, tutorId, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateTutor");
      }
      // verify the required parameter 'tutorId' is set
      if (tutorId === undefined || tutorId === null) {
        throw new Error("Missing the required parameter 'tutorId' when calling updateTutor");
      }

      let pathParams = {
        'tutorId': tutorId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = TutorDTO;

      return this.apiClient.callApi(
        '/tutor/{tutorId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}