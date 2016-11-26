angular.module("bugcenterApp").controller("Lx",["$rootScope","$scope","$http","$interval",function($rootScope,$scope,$http,$interval){
	$scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
  	$scope.series = ['Series A', 'Series B'];
  	$scope.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };
  $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
  $scope.options = {
    scales: {
      yAxes: [
        {
          id: 'y-axis-1',
          type: 'linear',
          display: true,
          position: 'left'
        },
        {
          id: 'y-axis-2',
          type: 'linear',
          display: true,
          position: 'right'
        }
      ]
    }
  }
  if($rootScope.UserName.username)
  $scope.Lxipm="Lxred"
  $http({
  	url:"http://www.bugcenter.com.cn:1511/item",
  	method:"get",
  	params:{to:$scope.Lxuser}
  }).success(function(e){
  	console.log(e)
  	for(var i =0;i<e.length;i++){
  		if(e[i].importance==0){
  			e[i].importance="重要"
  		}else if(e[i].importance==1){
  			e[i].importance="中等"
  		}else if(e[i].importance==2){
  			e[i].importance="一般"
  		}
  		$scope.Lxdata1 = e
  	}
  })
}])
	
