angular.module("bugcenterApp").controller("Bx",["$state","$rootScope","$scope","$http","$interval",function($state,$rootScope,$scope,$http,$interval){
	$scope.labels = ["重要", "中等", "M一般"];

    $scope.u=sessionStorage.getItem("Busername")
    if(!$scope.u){
    	$state.go('/login')
    }
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
    $scope.arr=[]
    $scope.arr1=[]
    $scope.arr2=[]
    $scope.Quit=function(){
    	sessionStorage.clear()
    	$state.go('/login')
    }
    $http({
    	url:'http://www.bugcenter.com.cn:1511/item',
    	method:'get',
    	params:{to:$scope.u}
    }).success(function(e){
//  	debugger
    	$scope.data1=e 
    	console.log(e)
    	
    	
    	for(var i=0;i<$scope.data1.length;i++){
    		if($scope.data1[i].importance==0){
    			$scope.data1[i].importance='重要'
    			$scope.arr.push($scope.data1[i])
    		}else if($scope.data1[i].importance==1){
    			$scope.data1[i].importance='中等'
    			$scope.arr1.push($scope.data1[i])
    		}else if($scope.data1[i].importance==2){
    			$scope.data1[i].importance='一般'
    			$scope.arr2.push($scope.data1[i])
    		}
    	}
    	if($scope.arr.length){
    		$scope.data = [$scope.arr.length, $scope.arr1.length, $scope.arr2.length];
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
    			e[i].status ='解决'
    		}else if(e[i].status ==1){
    			e[i].status ='已解决'
    		}else if(e[i].status ==2){
    			e[i].status ='已关闭'
    		}
    		
    	}
    })
    
    
}])
	








  
  

