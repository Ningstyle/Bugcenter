   angular.module("syf",[]).directive("shoufenqing",function(){
      return{
        restrict:'ECMA',
        template:'<div class="panel panel-default"><div class="panel-heading" role="tab" id="heading{{as}}"><h4 class="panel-title"><a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse{{as}}" aria-expanded="false" aria-controls="collapse{{as}}">Collapsible Group Item #3</a></h4></div><div id="collapse{{as}}" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading{{as}}"><div class="panel-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute</div></div></div>',
        replace:true,
        scope:{dataOne:"=data"},
        link:function(sc,el,at){
          sc.as = at["b"]
        }
      }
   })