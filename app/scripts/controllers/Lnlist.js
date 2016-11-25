
angular.module("bugcenterApp").controller("Ln",["$scope","$http","$interval","$timeout",function($scope,$http,$interval,$timeout){
	$scope.Jue=["Ui设计","前端","后台"]
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
	$http({
		url:"http://www.bugcenter.com.cn:1511/users",
		method:"get",
	}).success(function(e){
		$scope.Usern=e
		$scope.Username = e.username
		$http({
			url:"http://www.bugcenter.com.cn:1511/item",
			method:"get",
			params:{to:$scope.Username}
		}).success(function(e){
			//ui设计数据
			$scope.Ui = []
			$scope.Im0 = []
			$scope.Qd = []
			$scope.Ht = []
			for(var i=0;i<e.length;i++){
				if(e[i].status==0){
					$scope.Ui.push(e[i].status)
				}
				if(e[i].status==1){
					$scope.Qd.push(e[i].status)
				}
				if(e[i].status==2){
					$scope.Ht.push(e[i].status)
				}
				if(e[i].importance==0){
					$scope.Im0.push(e[i].importance)
				}
			}
			$scope.UiL = $scope.Ui.length
			$scope.QdL = $scope.Qd.length
			$scope.HtL = $scope.Ht.length
			console.log($scope.QdL)
		})
	})
}])
	
