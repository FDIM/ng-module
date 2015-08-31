"use strict";

;(function(ng)
{
  ng
    .module('ngAcl', [])
    .service('GreetingService', [function()
    {
        var _sayHello = function()
        {
            return "hello there!";
        }

        this.sayHello = _sayHello;
    }]);
}(angular))
