angular.module("bugcenterApp").controller("Sy",["$rootScope","$scope","$http","$interval","$timeout",function($rootScope,$scope,$http,$interval,$timeout){
	$scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
	$scope.series = ['Series A', 'Series B'];
	$scope.data = [
	    [65, 59, 80, 81, 56, 55, 40],
	    [28, 48, 40, 19, 86, 27, 90]
	];
	$scope.onClick = function (points, evt) {
	    console.log(points, evt);
	};

	  // Simulate async data update
	$timeout(function () {
	    $scope.data = [
	      [28, 48, 40, 19, 86, 27, 90],
	      [65, 59, 80, 81, 56, 55, 40]
	    ];
	}, 3000);
	$scope.user = $rootScope.UserName.username
	$http({
		url:"http://www.bugcenter.com.cn:1511/item",
		method:"get",
		params:{to:$scope.user}
	}).success(function(e){
		$scope.Sdata = e
	})
}])
	
