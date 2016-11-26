
angular.module("bugcenterApp").controller("Ln",["$rootScope","$scope","$http","$interval","$timeout",function($rootScope,$scope,$http,$interval,$timeout){
	$scope.dataname=["Ui设计","前端","后台"]
	$scope.frequency=["偶尔","经常"]
	$scope.importance =["重要","中等","一般"]
	$scope.jinc="偶尔"
	$scope.imp = "重要"
	$scope.Users = "lnn"
	$scope.Jue=["Ui设计","前端","后台"]
	$scope.Fabu="Fabu"
	$scope.Motai="Motai"
	$scope.userName = []
	//默认已指派
	$scope.status =0
	console.log($scope.u)
	//图表信息
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
	//获取所有用户
	$http({
		url:"http://www.bugcenter.com.cn:1511/users",
		method:"get",
	}).success(function(e){
		//过滤测试人员获取所有其他用户
		for(var i =0;i<e.length;i++){
			if(e[i].charactor!=3){
				$scope.userName.push(e[i].username)
			}
		}
		
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
			// console.log($scope.QdL)
		})
	})
	$scope.FabuLn = function(){
		$scope.Fabu="Fabu1"
	}
	//声明空对象
	$scope.uesrifm = {}
	//判断bug分类（ui设计、前端、后台）
	$scope.fn = function(index){
		$scope.uesrifm.classify=index
	}
	//点击发布判断bug频率（偶尔、经常）
	$scope.Submit = function(){
		if($scope.jinc=="偶尔"){
			$scope.uesrifm.frequency=0
		}else if($scope.jinc=="经常"){
			$scope.uesrifm.frequency=1
		}
		//判断bug重要性（重要、中等、一般）
		if($scope.imp=="重要"){
			$scope.uesrifm.importance =0
		}else if($scope.imp=="中等"){
			$scope.uesrifm.importance =1
		}else if($scope.imp=="一般"){
			$scope.uesrifm.importance =2
		}
		//存bug简介到$scope.uesrifm.summary
		$scope.uesrifm.summary=$scope.Textarea
		//存bug详情到$scope.uesrifm.description
		$scope.uesrifm.description=$scope.text1
		//获取当前时间 
		var mydate = new Date()
		var Year = mydate.getFullYear()
		var month = mydate.getMonth()+1
		var day = mydate.getDate()
		var Hous = mydate.getHours()
		var Min = mydate.getMinutes()
		var Se = mydate.getSeconds()
		var Mydate = Year+'-'+month+'-'+day+' '+Hous+':'+Min+':'+Se
		//存当前时间到$scope.uesrifm.date
		$scope.uesrifm.date =Mydate
		//获取存bug指向（即bug发布给谁） 
		$scope.uesrifm.to =$scope.Users
		//默认存bug已指派
		$scope.uesrifm.status=$scope.status 
		//存bug发布人
		$scope.uesrifm.from =sessionStorage.getItem("username")
		//执行$http,发布bug
		if($scope.uesrifm.classify==null){
			$scope.Lntext="请选择Bug错误分类!"
			$scope.Motai="Motai1"
			$timeout(function(){
				$scope.Motai="Motai"
			},2000)
		}else if($scope.uesrifm.summary==null){
			$scope.Lntext="请填写此Bug简介!"
			$scope.Motai="Motai1"
			$timeout(function(){
				$scope.Motai="Motai"
			},2000)
		}else if($scope.uesrifm.description==null){
			$scope.Lntext="请填写此Bug详情!"
			$scope.Motai="Motai1"
			$timeout(function(){
				$scope.Motai="Motai"
			},2000)
		}else{
			$http({
				url:"http://www.bugcenter.com.cn:1511/item",
				method:"post",
				data:$scope.uesrifm
			}).success(function(e){
				$scope.Lntext="发布成功!"
				$scope.Motai="Motai1"
				$timeout(function(){
					$scope.Motai="Motai"
				},1500)
				$scope.uesrifm.classify=""
				$scope.uesrifm.summary=""
				$scope.uesrifm.description=""
				console.log($scope.uesrifm)
			})
		}
		
	}

	$scope.back = function(){
		$scope.Fabu="Fabu"
	}
}])
	
