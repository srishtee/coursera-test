(function (params) {
    'use strict';
    angular.module('food',[])
    .controller('foodcontroller',foodcontroller);

    foodcontroller.$inject = ['$scope'];

    function foodcontroller($scope) {
        $scope.names = "";
        $scope.message = "";
        

        $scope.displaymessage = function () {
            var namesArray = $scope.names.split(",");

            if ($scope.names.length === 0) {
                $scope.checked = false;
                $scope.empty=true;
                $scope.message = "Enter some item name!";
            }
        
            else {
                $scope.checked = true;
                $scope.empty=false;
                
                if(namesArray.length <=3) {
                    $scope.message = "This is okay. Enjoy!";
                }

                else {
                    $scope.message = "Sorry! This is too much."
                }
            }
        };
    }
})();