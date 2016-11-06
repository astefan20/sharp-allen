"use strict";

var watcher = {};

watcher.getWachersCount = getWachersCount;

function getWachersCount() {
    // this should be the element you placed your ng-app on
    var rootElement = angular.element(document.getElementsByTagName('body'));

    var watchers = [];

    var countWatchers = function (element) {
        angular.forEach(['$scope', '$isolateScope'], function (scopeProperty) {
            var elementData = element.data();

            if (elementData && elementData.hasOwnProperty(scopeProperty) && elementData[scopeProperty].$$watchers) {

                for (var i = 0, lengthWatchers = element.data()[scopeProperty].$$watchers.length; i < lengthWatchers; ++i) {
                    var watcher = element.data()[scopeProperty].$$watchers[i];

                    if (watchers.indexOf(watcher) < 0) {
                        watchers.push(watcher);
                    }
                }
            }
        });

        var elementChildren = element.children();

        if (elementChildren.length == 0) return;

        for (var i = 0, lengthElementChildren = elementChildren.length; i < lengthElementChildren; ++i) {
            countWatchers(angular.element(elementChildren[i]));
        }
    };

    countWatchers(rootElement);

    console.log(watchers.length - 2);
}

// Only for training purposes!