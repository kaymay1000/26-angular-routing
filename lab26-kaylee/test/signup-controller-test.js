'use strict'

require('angular')
require('angular-mocks')

describe('testing signup controller', function() {
  beforeEach(() => {
    angular.mock.module('routesApp')
    angular.mock.inject(($rootScope, $controller) => {
      this.$rootScope = $rootScope
      this.signupCtrl = new $controller('SignupController')
      this.signupCtrl.$onInit()
    })
  })
  afterEach(() => this.$rootScope.$apply())

  it('should have a title property', () => {
    expect(this.signupCtrl.title).toEqual('Sign up for the app here!')
  })
})
