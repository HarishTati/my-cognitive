app.controller('ctrl',function($scope,$http,$location,$rootScope){
  $scope.validate=function(){

   var res = {
       method : 'POST',
       url : 'http://localhost:8081/login',
       data : {
          email: $scope.email,
         password: $scope.password
       },
        headers: {
                   'Content-Type': 'Application/json'
               },
   };
   $http(res)
    .then(function(response) {
		alert('Login Success');
	 if(response.data.result == "success")
	 {
		 
		$location.path('body'); 
	 }
	 
 else{
	 alert('login failed');
 }
    });
   
}
/*$scope.register2=function(){
		$location.path('registration');
}*/
})
