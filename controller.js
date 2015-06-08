app.controller("TemplateController", function($scope, templates) {
	$scope.data = templates.templateLink;
});

app.controller("AnimationController", function($scope, animationDesc, $log){
	// Aufrufen des Datenarrays aus dem animationDesc Service
	var desc = animationDesc.text;

	/*
	*	Diese Methode dient dazu den korrekten Text für die Animation anzuzeigen. Die einzelnen Elemente in der Animation haben einen
	*	Click–Listener und rufen diese Methode auf, wenn sie gedrückt werden
	*/
	$scope.showDescText = function(type){
		$log.log('hello');
		$log.log(type);
		angular.forEach(desc, function(value, key){
			if(type === value.name){
				$scope.text = value.text;
			}
		});
	};

	$scope.test = function(){
		$log.log('hello');
	};
});