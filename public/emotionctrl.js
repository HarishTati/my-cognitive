
app.controller('emotionCtrl',function($scope,$http,$rootScope){
	
  /*$scope.myVar = false;
 $scope.toggle = function() {
  console.log('fvtr');
     $scope.myVar = !$scope.myVar;
 };*/
  
  
    var name=$rootScope.name;
console.log(name); 
 var res = {
      method : 'POST',
      url : 'http://localhost:8081/sample4',

      headers: {
        'Content-Type': 'Application/json'
      },
      data: {
        name: name,
      }
    }
    $http(res).then(function(response){
      $scope.names = response.data;
	  
	  CanvasJS.addColorSet("greenShades",
	  [
	  "#3498db",
	  "#e74c3c",
	  "#9b59b6",
	  "#f1c40f",
	  "#2ecc71"
	  ]);

      var chart = new CanvasJS.Chart("chartContainer", {
        backgroundColor:"transparent",
		colorSet:"greenShades",
		title: {
          text: "emotions"
        },
        animationEnabled: true,
        theme: "theme1",
        data: [
          {
            type: "doughnut",
            indexLabelFontFamily: "Garamond",
            indexLabelFontSize: 20,
            startAngle: 0,
            indexLabelFontColor: "dimgrey",
            indexLabelLineColor: "darkgrey",
            toolTipContent: "{y} %",

            dataPoints: [
              { y: $scope.names.sadness, indexLabel: "sadness " },
			   { y: $scope.names.anger, indexLabel: "anger" },
			       { y:$scope. names.fear, indexLabel: "fear" },
              { y: $scope.names.joy, indexLabel: "joy " },
               { y: $scope.names.disgust, indexLabel: "disgust" }
            
            ]
          }
        ]
      });

      chart.render();

    })
  
})


