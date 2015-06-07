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