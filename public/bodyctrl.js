app.controller('bodyCtrl',function($scope, $rootScope,$timeout, $mdSidenav){
		

	$scope.toggleLeft=function(){
		$rootScope.name=$scope.name;
        console.log($rootScope.name);
	
    }
	})
