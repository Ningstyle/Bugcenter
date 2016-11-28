angular.module("bugcenterApp").controller("Bx",["$rootScope","$scope","$http","$interval",function($rootScope,$scope,$http,$interval){
	$scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
    $scope.data = [300, 500, 100];
    $scope.u=sessionStorage.getItem("Busername")
    $scope.jiejue=''
    $scope.fn=function(e){
    	$http({
    		url:'http://www.bugcenter.com.cn:1511/item/'+e,
    		method:'put',
    		data:{status:1}
    	}).success(function(d){
    		alert(1)
    		
    	})
    }
    $http({
    	url:'http://www.bugcenter.com.cn:1511/item',
    	method:'get',
    	params:{to:$scope.u}
    }).success(function(e){
    	debugger
    	$scope.data1=e 
    	
    	for(var i=0;i<$scope.data1.length;i++){
    		if($scope.data1[i].importance==0){
    			$scope.data1[i].importance='重要'
    		}else if($scope.data1[i].importance==1){
    			$scope.data1[i].importance='中等'
    		}else if($scope.data1[i].importance==2){
    			$scope.data1[i].importance='一般'
    		}
    	}
    	
    	for(var i=0;i<$scope.data1.length;i++){
    		if($scope.data1[i].frequency ==0){
    			$scope.data1[i].frequency ='偶尔'
    		}else if($scope.data1[i].frequency ==1){
    			$scope.data1[i].frequency ='经常'
    		}
    	}
    	
    	for(var i=0;i<e.length;i++){
    		if(e[i].status ==0){
    			e[i].status ='已指派'
    		}else if(e[i].status ==1){
    			e[i].status ='解决'
    		}else if(e[i].status ==2){
    			e[i].status ='已关闭'
    		}
    		
    	}
    })
}])
	








  
  

