app.controller("TemplateController", function($scope) {
	$scope.data = {
		"templates" : [
			{
				"name" : "Product Backlog",
				"desc" : "pback",
				"phase" : "pb",
				"role" : "po",
				"files" : [
					{
						"type" : "Excel",
						"url" : "http://www.ddg.gg"
					},
					{
						"type" : "ODS",
						"url" : "http://www.ddg.gg"
					}
				]
			},
			{
				"name" : "Sprint Planning Meeting",
				"desc" : "sp",
				"phase" : "sb",
				"role" : "sm",
				"files" : [
					{
						"type" : "Word",
						"url" : "http://www.ddg.gg"
					},
					{
						"type" : "ODT",
						"url" : "http://www.ddg.gg"
					},
					{
						"type" : "PDF",
						"url" : "http://www.ddg.gg"
					},
					{
						"type" : "Pages",
						"url" : "http://www.ddg.gg"
					}
				]
			},
			{
				"name" : "Sprint Backlog",
				"desc" : "sback",
				"phase" : "sb",
				"role" : "sm",
				"files" : [
					{
						"type" : "Excel",
						"url" : "http://www.ddg.gg"
					},
					{
						"type" : "ODS",
						"url" : "http://www.ddg.gg"
					}
				]
			},
			{
				"name" : "Sprint Review Meeting",
				"desc" : "sreview",
				"phase" : "se",
				"role" : "sm",
				"files" : [
					{
						"type" : "Word",
						"url" : "http://www.ddg.gg"
					},
					{
						"type" : "ODT",
						"url" : "http://www.ddg.gg"
					},
					{
						"type" : "PDF",
						"url" : "http://www.ddg.gg"
					},
					{
						"type" : "Pages",
						"url" : "http://www.ddg.gg"
					}
				]
			},
			{
				"name" : "Sprint Retrospective",
				"desc" : "sretro",
				"phase" : "se",
				"role" : "sm",
				"files" : [
					{
						"type" : "Word",
						"url" : "http://www.ddg.gg"
					},
					{
						"type" : "ODT",
						"url" : "http://www.ddg.gg"
					},
					{
						"type" : "PDF",
						"url" : "http://www.ddg.gg"
					},
					{
						"type" : "Pages",
						"url" : "http://www.ddg.gg"
					}
				]
			}
		],
		"search" : "",
		"phaseFilter" : "",
		"roleFilter" : ""
	}

	
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
		$scope.text = 'Hello';
	};
});