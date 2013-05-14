'use strict';

describe('Service: nireEguraldia', function () {

  // load the service's module
  beforeEach(module('favoritosApp'));

  // instantiate service
  var nireEguraldia;
  beforeEach(inject(function (_nireEguraldia_) {
    nireEguraldia = _nireEguraldia_;
  }));

  it('should do something', function () {
    expect(!!nireEguraldia).toBe(true);
  });

});
