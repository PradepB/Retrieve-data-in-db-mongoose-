angular.module('dealerdataController',[])

.controller('dealerdataCtrl',function($scope, $http){
  
       $http.get('/api/usersData')
                .success(function(data) {
                        $scope.usersDatas = data;
                        console.log(data);
                })
                .error(function(data) {
                        console.log('Error: ' + data);
                });
})

.controller('techniCtrl',function($scope,$http){
$scope.techniAdd=function(){

           $http.post('/api/TechniData',$scope.technicians) 
                     .success(function(){
                                console.log(response.data);
                                alert("added");
                                $scope.technicians = undefined;
                     });
                }     
})