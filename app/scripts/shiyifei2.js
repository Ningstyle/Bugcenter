   angular.module("syf",[]).directive("shoufenqing",function(){
      return{
        restrict:'ECMA',
        template:'<div><div class="panel panel-default" ng-repeat="x in dataOne"><div class="panel-heading" role="tab" id="heading{{$index+1}}"><h4 class="panel-title"><a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse{{$index+1}}" aria-expanded="false" aria-controls="collapse{{$index+1}}">{{x.summary}}</a><b class="BBB">{{x.importance}}</b></h4></div><div id="collapse{{$index+1}}" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading{{$index+1}}"><div class="panel-body">{{x.description}}</div></div></div></div>',
        replace:true,
        scope:{dataOne:"=data"}
      }
   })
// .find('.BBB').html()
