(function() { //iife 
    var app = angular.module("LunchCheck", []); 
    app.controller("LunchController", function($scope) {
        //$scope.lunchitems = ["Milk", "Bread", "Cheese"];
        $scope.lunchitems=[];
        $scope.lunchitemsall=[];
        $scope.msgcolor="setgreen";
        $scope.message="Write what you ate for lunch separated by commas.";
        $scope.addItem = function () {
            //$scope.lunchitems.push($scope.addMe);
            //console.log($scope.addMe.length);
            if (($scope.addMe==null) ||($scope.addMe==='')){
              $scope.msgcolor="setred";
              $scope.message="Enter Data First!";
              
            }else{
              $scope.lunchitemsall = $scope.addMe.split(',');
              $scope.lunchitems=$scope.lunchitemsall.filter(x => x.trim() != '');//remove blanks
       
              if ($scope.lunchitems.length>3 ){
                  $scope.msgcolor="setgreen";
                  $scope.message="Too Much!";
              }else{
                  $scope.msgcolor="setgreen";
                  $scope.message="Enjoy!";
              }
            }
            
        }    
    });
}());