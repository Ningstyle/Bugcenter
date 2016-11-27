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
	$scope.fn=function(e){
		$http({
			url:"http://www.bugcenter.com.cn:1511/item/"+e,
			method:"post",
			data:{status:1}
		})
	}
	$scope.user =sessionStorage.Susername
	// $scope.jiejue="解决"
	$http({
		url:"http://www.bugcenter.com.cn:1511/item",
		method:"get",
		params:{to:$scope.user}
	}).success(function(e){
		$scope.Sdata = e
		for(var i=0;i<e.length;i++){
			if(e[i].importance==0){
				
				e[i].importance="重要"
			}else if(e[i].importance==1){
				e[i].importance="中等"
			}else if(e[i].importance==2){
				e[i].importance="一般"
			}
		}
		console.log($scope.Sdata)
		for(var i=0;i<$scope.Sdata.length;i++){
			if($scope.Sdata[i].status==0){
				$scope.jiejue="解决"
				}
			 if($scope.Sdata[i].status==1){
				$scope.jiejue="已解决"				
			}
			if($scope.Sdata[i].status==2){
				$scope.jiejue="已关闭"				
			}
		}
	})
	$http({
		url:"http://www.bugcenter.com.cn:1511/item",
		method:"get"
	}).success(function(e){
		console.log(e)
	})

}])
	
