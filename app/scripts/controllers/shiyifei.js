angular.module("bugcenterApp").controller("Sy",["$state","$rootScope","$scope","$http","$interval","$timeout",function($state,$rootScope,$scope,$http,$interval,$timeout){
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
		// var Sspan=document.getElementByClassName("s_span");
		$scope.Sdata = e
		for(var i=0;i<e.length;i++){
			if(e[i].importance==0){
				// this.Sspan.style.background="red"
				e[i].importance="重要"

			}else if(e[i].importance==1){
				e[i].importance="中等"
			}else if(e[i].importance==2){
				e[i].importance="一般"
			}
		}
		// var Sspan=document.getElementsByClassName('s_span');
		
  //       if(Sspan.innerHTML=="重要"){
  //         Sspan.style.background="red"
  //       }
		for(var i=0;i<e.length;i++){
			if(e[i].frequency==0){
				
				e[i].frequency="偶尔"
			}else if(e[i].frequency==1){
				e[i].frequency="经常"
			}
		}
		console.log($scope.Sdata)
		for(var i=0;i<e.length;i++){
			if(e[i].status==0){
				e[i].status="解决"
			}else if(e[i].status==1){
				e[i].status="已解决"
			}else if(e[i].status==2){
				e[i].status="已关闭"
			}
			
		}
	})
	$http({
		url:"http://www.bugcenter.com.cn:1511/item",
		method:"get"
	}).success(function(e){
		console.log(e)
	})

// var num=0;
// $http({
//     url:'http://www.bugcenter.com.cn:1511/item',
//     method:"GET",
//     params:{"$skip":num,"$limit":6}
// }).success(function(e){
//     $scope.data=e
   
    
// });

// $scope.next=function(){
//     num+=3;
//     $http({
//       url:'http://www.bugcenter.com.cn:1511/item',
//       method:"GET",
//       params:{"$skip":num,"$limit":3}
//     }).success(function(e){
//       $scope.data=e
     
    
//     })
// }
// $scope.shang=function(){
//     num-=3;
//     $http({
//       url:'http://www.bugcenter.com.cn:1511/item',
//       method:"GET",
//       params:{"$skip":num,"$limit":3}
//     }).success(function(e){
//       $scope.data=e
    
//     })
// }
$scope.Sout = function(){
	sessionStorage.clear()
	$state.go("/login")
}
if(!$scope.user){
	$state.go("/login")
}
}])
	
