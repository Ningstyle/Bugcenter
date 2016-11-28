
angular.module("bugcenterApp").controller("Ln",["$state","$rootScope","$scope","$http","$interval","$timeout",function($state,$rootScope,$scope,$http,$interval,$timeout){
	$scope.dataname=["Ui设计","前端","后台"]
	$scope.frequency=["偶尔","经常"]
	$scope.importance =["重要","中等","一般"]
	$scope.jinc="偶尔"
	$scope.imp = "重要"
	$scope.Jue=["Ui设计","前端","后台"]
	$scope.Fabu="Fabu"
	$scope.Motai="Motai"
	$scope.userName = []
	//默认已指派
	$scope.status =0
	$scope.FabuLn = function(){
		$scope.Fabu="Fabu1"
	}
	//声明空对象
	$scope.uesrifm = {}
	//判断bug分类（ui设计、前端、后台）
	$scope.fn = function(index){
		$scope.uesrifm.classify=index
		$http({
			url:"http://www.bugcenter.com.cn:1511/users",
			method:"get",
		}).success(function(e){
			if(index==0){
				$scope.userName.length=0
				for(var i =0;i<e.length;i++){
					if(e[i].charactor==0){
						$scope.userName.push(e[i].username)
						$scope.Users = $scope.userName[0]
					}
				}
			}else if(index==1){
				$scope.userName.length=0
				for(var i =0;i<e.length;i++){
					if(e[i].charactor==1){
						$scope.userName.push(e[i].username)
						$scope.Users = $scope.userName[0]
					}
				}
			}else if(index==2){
				$scope.userName.length=0
				for(var i =0;i<e.length;i++){
					if(e[i].charactor==2){
						$scope.userName.push(e[i].username)
						$scope.Users = $scope.userName[0]
					}
				}
			}
		})
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
				$scope.jinc="偶尔"
				$scope.imp="重要"
				$scope.Textarea=""
				$scope.text1=""
				// $scope.uesrifm=""
				// console.log($scope.userifm)
				// console.log(e)
				// console.log($scope.buglist2)
			})
		}
		
	}
	$scope.buglist = []
	$scope.buglist1 = []
	$scope.buglist2 = []
	//获取所有用户
	$http({
		url:"http://www.bugcenter.com.cn:1511/users",
		method:"get",
	}).success(function(e){
		//过滤测试人员获取所有其他用户
		// for(var i =0;i<e.length;i++){
		// 	if(e[i].charactor!=3){
		// 		$scope.userName.push(e[i].username)
		// 	}
		// }
		$http({
			url:"http://www.bugcenter.com.cn:1511/item",
			method:"get",
			// params:{"to":$scope.userName}
		}).success(function(e){
			for(var i = 0;i<e.length;i++){
				if(e[i].status==1){
					if(e[i].importance==0){
						e[i].importance="重要"
					}
					if(e[i].importance==1){
						e[i].importance="中等"
					}
					if(e[i].importance==2){
						e[i].importance="一般"
					}

					$scope.bugtext=e[i].description
					$scope.buglist.push(e[i])

				}else if(e[i].status==0){
					if(e[i].importance==0){
						e[i].importance="重要"
					}
					if(e[i].importance==1){
						e[i].importance="中等"
					}
					if(e[i].importance==2){
						e[i].importance="一般"
					}
					$scope.myHtml=$scope.bugtext1=e[i].description
					$scope.buglist1.push(e[i])
				}else if(e[i].status==2){
					if(e[i].importance==0){
						e[i].importance="重要"
					}
					if(e[i].importance==1){
						e[i].importance="中等"
					}
					if(e[i].importance==2){
						e[i].importance="一般"
					}
					$scope.myHtml=$scope.bugtext2=e[i].description
					$scope.buglist2.push(e[i])
				}
			}
			// console.log($scope.buglist)
		})
			
	})
	$scope.bugguanbi="bugbutton1",
	$scope.gunabi ="确认关闭"
	$scope.bugg=false
	$scope.Fnout = function(x){
		$http({
			url:"http://www.bugcenter.com.cn:1511/item/"+x,
			method:"put",
			data:{"status":2}
		}).success(function(e){
			$scope.Lntext="已关闭!"
			$scope.Motai="Motai1"
			$timeout(function(){
				$scope.Motai="Motai"
			},1500)
			console.log($scope.uesrifm)
			// window.location.reload()
		})
	}
	$scope.back = function(){
		$scope.Fabu="Fabu"
	}
	//退出登录
	$scope.Outfn = function(){
		sessionStorage.clear()
		$state.go("/login")
	}
	//判断是否已登录账号
	if(!sessionStorage.getItem("username")){
		$state.go("/login")
	}
	//图表信息
	$scope.labels = $scope.userName
	$scope.series = ['Bug总数', '已解决','未解决'];
	$scope.data = [
	    [65, 59, 80, 81, 56, 55, 40],
	    [28, 48, 40, 19, 86, 27, 90],
	    [54, 48, 21, 2, 1, 4, 53]
	];
	$scope.onClick = function (points, evt) {
	    console.log(points, evt);
	};

	  // Simulate async data update
	$timeout(function () {
	    $scope.data = [
	    [54, 48, 21, 2, 1, 4, 53],
	      [28, 48, 40, 19, 86, 27, 90],
	      [65, 59, 80, 81, 56, 55, 40]
	    ];
	}, 3000);
}])
	
