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
  $scope.u=sessionStorage.getItem('Busername')
  if(!$scope.u){
  	$state.go('/login')
  }
  	$scope.s=0
	$scope.Shang=function(e){
			$scope.s=e
	}
$scope.Lxuser = sessionStorage.getItem("Lusername")

$scope.fn=function(e){
	$http({
		url:'http://www.bugcenter.com.cn:1511/item/'+e,
		method:'put',
		data:{status:1}
	}).success(function(){
	
})
}
	
$scope.Quit=function(){
	sessionStorage.clear()
	$state.go('/login')
}
$scope.Lxipm="Lxred"
  $http({
  	url:"http://www.bugcenter.com.cn:1511/item",
  	method:"get",
  	params:{"to":$scope.Lxuser}
  }).success(function(e){
  	
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
  	console.log($scope.Lxdata1)
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
	console.log(e.length)	
//	var num=e.length;
//	if(e.length>5){
//		//去到第几页
//		
//	}
  })
//var totalpage,pagesize,cpage,count,curcount,outstr,num; 
////初始化 
//				cpage = 1; //所在的页数
//				totalpage = 6;    //总页
//				pagesize = 5; //初始化，每页显示10个
//				outstr = ""; 
//				num=data.length;
//				setpage(); 
//function gotopage(target)    
//	{     
//	    cpage = target;        //把页面计数定位到第几页 
//	    	setpage(); 
//	    
//	} 
//	//获取分页
//		function setpage() 
//		{ 
//		    if(totalpage>3){        //总页数大于5页 
//		        if(parseInt((cpage-1)/3) == 0) //在5页以前
//		        {             
//		            for (count=1;count<=3;count++) //循环一下页数
//		            {    if(count!=cpage)    //除了当前显示的页数
//		                { 
//		                    outstr = outstr + "<a href='javascript:void(0)' onclick='gotopage("+count+")'>"+count+"</a>"; 
//		                }else{      //显示当前页数
//		                    outstr = outstr + "<span class='current'>"+count+"</span>"; 
//		                } 
//		            } 
//		            outstr ="<a href='javascript:void(0)' onclick='gotopage("
//		            +(cpage-1)+")'>上一页</a>"+ outstr + "<a href='javascript:void(0)' onclick='gotopage("+(cpage+1)+")'> 下一页 </a><a href='javascript:void(0)' onclick='gotopage("+(parseInt(totalpage/3)*3+1)+")'> 末页 </a>"; 
//		        } 
//		        else if(parseInt((cpage-1)/3) == parseInt(totalpage/3)) //正好是末页
//		        {     
//		            outstr = outstr + "<a href='javascript:void(0)' onclick='gotopage("+(1)+")'>首页</a><a href='javascript:void(0)' onclick='gotopage("
//		            +(cpage-1)+")'>上一页</a>";
//		            					for(count=parseInt(totalpage/3)*3+1;count<=totalpage;count++) 
//		            {    if(count!=cpage) 
//		                { 
//		                    outstr = outstr + "<a href='javascript:void(0)' onclick='gotopage("+count+")'>"+count+"</a>"; 
//		                }else{ 
//		                    outstr = outstr + "<span class='current'>"+count+"</span>"; 
//		                } 
//		            } 
//		            outstr = outstr + "<a href='javascript:void(0)' onclick='gotopage("
//		            +(cpage+1)+")'>下一页</a>";
//		        } 
//		        else //除去首页和末页，中间的那些页
//		        {     
//		            outstr = outstr + "<a href='javascript:void(0)' onclick='gotopage("+(1)+")'>首页</a><a href='javascript:void(0)' onclick='gotopage("
//		            +(cpage-1)+")'>上一页</a>"; 
//		            for (count=parseInt((cpage-1)/3)*3+1;count<=parseInt((cpage-1)/3)*3+3;count++) 
//		            {         
//		                if(count!=cpage) 
//		                { 
//		                    outstr = outstr + "<a href='javascript:void(0)' onclick='gotopage("+count+")'>"+count+"</a>"; 
//		                }else{ 
//		                    outstr = outstr + "<span class='current'>"+count+"</span>"; 
//		                } 
//		            } 
//		            outstr = outstr + "<a href='javascript:void(0)' onclick='gotopage("
//		            +(cpage+1)+")'>下一页</a><a href='javascript:void(0)' onclick='gotopage("+(parseInt(totalpage/3)*3+1)+")'> 末页 </a>"; 
//		        } 
//		    }     
//		    document.getElementById("butt").innerHTML = "<span id='info'>共"+num+"条数据,"+totalpage+"页|第"+cpage+"页<\/span>" + outstr; 
//		    outstr = ""; 
//		} 

}])
	
