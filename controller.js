app.controller("TemplateController", function($scope) {
	
});

app.controller("AnimationController", function($scope, animationDesc){
	var desc = animationDesc.text;

	$scope.showText = function(type){
		angular.forEach(desc, function(value, key){
			if(type === value.name){
				$scope.text = value.text;
			}
		});
	};
});