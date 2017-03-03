angular.module('dealerServices',[])

.factory('User',function($http){

    return {
            get : function() {
                return $http.get('/api/usersData');
            },
         }
})

.factory('Techuser',function($http){
    return{
         create : function(techdata) {
                return $http.post('/api/TechniData', techdata);
            },
    }
})