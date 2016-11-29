angular.module("bugcenterApp").filter('f',function(){
					return function(a,page,size){
						if(a!=undefined){
							var start=page*size
							var end=(page+1)*size
							return a.slice(start,end)
						}
					}
				}).controller("Lx",["$state","$rootScope","$scope","$http","$interval",function($state,$rootScope,$scope,$http,$interval){
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
  $scope.datalen=0
$scope.Lxuser = sessionStorage.getItem("Lusername")
  if(!$scope.Lxuser){
  	$state.go('/login')
  }
	
$scope.fn=function(e){
	$http({
		url:'http://www.bugcenter.com.cn:1511/item/'+e,
		method:'put',
		data:{status:1}
	}).success(function(){
	
})
}
	
$scope.Quit1=function(){
	sessionStorage.clear()
	$state.go('/login')
}
$scope.Lxipm="Lxred"
  $http({
  	url:"http://www.bugcenter.com.cn:1511/item",
  	method:"get",
  	params:{"to":$scope.Lxuser}
  }).success(function(e){
  	$scope.data1=e
  	$scope.datalen=e.length
  	for(var i=0;i<e.length;i++){
  	
  	}
  	for(var i=0;i<e.length;i++){
			if(e[i].status==0){
				e[i].status="解决"
				}
			 else if(e[i].status==1){
				e[i].status="已解决"				
			}
			else if(e[i].status==2){
				e[i].status="已关闭"				
			}
		}
  	$scope.Lxdata1 = e
  	for(var i =0;i<e.length;i++){
  		if(e[i].importance==0){
  			e[i].importance="重要"
  		}else if(e[i].importance==1){
  			e[i].importance="中等"
  		}else if(e[i].importance==2){
  			e[i].importance="一般"
  		}
  	}
//	console.log($scope.Lxdata1)
	for(var j =0;j<$scope.Lxdata1.length;j++){
		if($scope.Lxdata1[j].importance=="重要"){
			$scope.Lxipm="Lxred"
		}else if($scope.Lxdata1[j].importance=="中等"){
			$scope.Lxipm="Lxred1"
		}else if($scope.Lxdata1[j].importance=="一般"){
			$scope.Lxipm="Lxred2"
		}
	}
	$scope.Lxdatatw=e
	for(var i =0;i<e.length;i++){
  		if(e[i].frequency==0){
  			e[i].frequency="偶尔"
  		}else if(e[i].frequency==1){
  			e[i].frequency="经常"
  		}
  	}
	$scope.size=5;
	$scope.s=0;
	$scope.Le = Math.ceil($scope.datalen/$scope.size)
	console.log($scope.Le)
//	console.log($scope.datalen)
	$scope.Fn=function(){
		$scope.s--
		if($scope.s<0){
			$scope.s=0
		}
	}
	$scope.Fn1=function(e){
		$scope.s++
		if($scope.s>$scope.Le-1){
			$scope.s=$scope.Le-1
		}
	}
 })
	
}])
	
