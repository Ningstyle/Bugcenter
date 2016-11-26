angular.module("bugcenterApp").controller("Login",["$rootScope","$scope","$http","$state","$interval","$timeout",function($rootScope,$scope,$http,$state,$interval,$timeout){
	$scope.class=$scope.class1='form-group has-success'
	$scope.check=false
	$scope.login = function(){
		if($scope.updata&&$scope.updata.username==null){
			$scope.Lntext="请正确输入账号信息!"
			$scope.Motai="Motai1"
			$timeout(function(){
				$scope.Motai="Motai"
			},2000)
				// $http({
				// 	url:"http://www.bugcenter.com.cn:1511/users/login",
				// 	method:"post",
				// 	data:$scope.updata
				// }).success(function(e){
				// 	$scope.uid=e.uid
				// 	$http({
				// 		url:"http://www.bugcenter.com.cn:1511/users/"+$scope.uid,
				// 		method:"get",
				// 	}).success(function(e){
				// 		console.log(e)
				// 		if(e.charactor==0){
				// 			$rootScope.UserName = {}
				// 			$rootScope.UserName.username=e.username
				// 			$state.go("/Sy")
				// 		}
				// 		if(e.charactor==1){
				// 			$state.go("/Lx")
				// 			$rootScope.UserName = {}
				// 			$rootScope.UserName.username=e.username
				// 		}
				// 		if(e.charactor==2){
				// 			$state.go("/Bx")
				// 			$rootScope.UserName = {}
				// 			$rootScope.UserName.username=e.username
				// 		}
				// 		if(e.charactor==3){
				// 			$state.go("/Ln")
				// 			sessionStorage.setItem("username",e.username)
				// 		}
				// 	})
				// })
			}else{
				alert(2)
			}
		}
}])
	
