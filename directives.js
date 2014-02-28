"use strict";

// Fade animation to serve as transition between pages.
angular.module("sample.directives", []).directive("fade", function() {
    return {
        compile: function(element) {
            $(element).css("opacity", 0.5);

            return function(scope, element, attrs) {
                $(element).animate({ opacity: 1.0 }, 400);
            };
        }
    };
});