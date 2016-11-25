angular.module("bugcenterApp").controller("Login",["$scope","$http","$state","$interval",function($scope,$http,$state,$interval){
	$scope.class=$scope.class1='form-group has-success'
	$scope.check=false
	$scope.login = function(){
			$http({
				url:"http://www.bugcenter.com.cn:1511/users/login",
				method:"post",
				data:$scope.updata
			}).success(function(e){
				$scope.uid=e.uid
				$http({
					url:"http://www.bugcenter.com.cn:1511/users/"+$scope.uid,
					method:"get",
				}).success(function(e){
					console.log(e)
					if(e.charactor==0){
						$state.go("/Sy")
					}
					if(e.charactor==1){
						$state.go("/Lx")
					}
					if(e.charactor==2){
						$state.go("/Bx")
					}
					if(e.charactor==3){
						$state.go("/Ln")
					}
				})
			})
		}
}])
	
