   angular.module("syf",[]).directive("shoufenqing",function(){
      return{
        restrict:'ECMA',
        template:'<div class="panel panel-default" ng-repeat="x in dataOne"><div class="panel-heading" role="tab" id="heading{{$index+1}}"><h4 class="panel-title"><b class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse{{$index+1}}" aria-expanded="false" aria-controls="collapse{{$index+1}}">{{x.summary}}</b><b ng-class="Lxipm">{{x.importance}}</b></h4><span ng-class="Lxdatatw">{{x.frequency}}</span></div><div id="collapse{{$index+1}}" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading{{$index+1}}"><div class="panel-body">{{x.description}}<button class="settled" ng-click="jue(x.id)">已解决</button><p class="time">{{x.date}}</p></div></div></div>',
        replace:true,
        scope:{dataOne:"=data"},
      }
   })