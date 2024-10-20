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
 * Swagger Codegen version: 3.0.63
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.StudentTutorBookingManagementSystem);
  }
}(this, function(expect, StudentTutorBookingManagementSystem) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('LocationDTO', function() {
      beforeEach(function() {
        instance = new StudentTutorBookingManagementSystem.LocationDTO();
      });

      it('should create an instance of LocationDTO', function() {
        // TODO: update the code to test LocationDTO
        expect(instance).to.be.a(StudentTutorBookingManagementSystem.LocationDTO);
      });

      it('should have the property locationId (base name: "locationId")', function() {
        // TODO: update the code to test the property locationId
        expect(instance).to.have.property('locationId');
        // expect(instance.locationId).to.be(expectedValueLiteral);
      });

      it('should have the property room (base name: "room")', function() {
        // TODO: update the code to test the property room
        expect(instance).to.have.property('room');
        // expect(instance.room).to.be(expectedValueLiteral);
      });

      it('should have the property building (base name: "building")', function() {
        // TODO: update the code to test the property building
        expect(instance).to.have.property('building');
        // expect(instance.building).to.be(expectedValueLiteral);
      });

    });
  });

}));
