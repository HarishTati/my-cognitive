app.controller('registerCtrl',function($scope,$http, $location){
   
  $scope.register1 = function() {
 /*   $http
        .post('http://localhost:8081/register', {firstname:$scope.fName,
         email: $scope.eml,
         password: $scope.pwd,
         number:$scope.num})
        .success(function(data){
            //what to do here? it's up to you and the data you write from server.
			alert(data);
			$location.path('login');
        })
        .error(function(data){
            console.log('Error: ' + data);
        });
};*/
    var res = {
       method : 'POST',
       url : 'http://localhost:8081/register',
       data : {
         firstname:$scope.fName,
         email: $scope.eml,
         password: $scope.pwd,
         number:$scope.num
	   }
   }
   $http(res)
    .then(function(response) {
		alert('registration succesful');
	 if(response.data.result == "success")
		 
	 $location.path('login');
 else{
	 alert('registration failed');
 }
    });
           
}
});