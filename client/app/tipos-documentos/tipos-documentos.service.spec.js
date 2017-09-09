'use strict';

describe('Service: tiposDocumentos', function () {

  // load the service's module
  beforeEach(module('videoClubApp'));

  // instantiate service
  var tiposDocumentos;
  beforeEach(inject(function (_tiposDocumentos_) {
    tiposDocumentos = _tiposDocumentos_;
  }));

  it('should do something', function () {
    expect(!!tiposDocumentos).to.be.true;
  });

});
