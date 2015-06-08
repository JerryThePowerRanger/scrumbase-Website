app.service('animationDesc', [function () {
	this.text = [
	{
		name: 'pb',
		text: 'Product Backlog: Auflistung aller Anforderungen an das Produkt in Form von User Stories. Ersteller: Product Owner Anmerkung: Es wird laufend vom Product Owner gepflegt und weitergef&uuml;hrt.'
	},
	{
		name: 'sb',
		text: 'Sprint BacklogIn ihm stehen alle Anforderungen, die in einem Sprint erledigt werden mu&uuml;ssen in Form von Tasks.(User Stories werden in Tasks unterbrochen).Die zubearbeitenden User Stories werden aus dem Product Backlog entnommen, wobei die einzelnen Tasks priorisiert sind.Der Sprint Backlog wird im Sprint Planning Meeting am Anfang jedes Sprints erstellt.'
	},
	{
		name: 'sprint',
		text: ''
	},
	{
		name: 'ds',
		text: 'Daily Scrum Meeting: Ist ein t&auml;gliches Status-Meeting mit einer Dauer von h&ouml;chstens 10 Minuten f&ouml;r das ganze Team.U.a zu behandelte Fragen:Was wurde das letzte mal erreicht?Wo gab es Probleme?Was soll dieses mal erreicht werden?Dauer: ~10 Minuten'
	},
	{
		name: 'sr',
		text: 'Sprint Review Meeting: Das Team zeigt dem Product Owner was es geschafft hat.Zweck: Fertigstellungsgrad der Feature/ User Stories festzustellen und um Feedback von Anwesenden einzuholen.Durchf&uuml;hrung: Anhand des Sprintbacklogs, werden die einzelne User Stories mit den Acceptance Criteria und Definition of Done Kriterien auf Vollständigkeit und weitere geforderte Eigenschaften begutachtet und bewertet.Anschließend wird beschlossen, ob ein User Story als „Abgenommen“ gilt oder nicht.Dauer pro Mitarbeiter: ~1 StundeSprint Retrospective Meeting: Reflektion des letzten Sprints.Ziel: Verbesserungspotential f&uuml;r die zuk&uuml;nftigen Sprints zu finden. Interne Projektprozesse und Spielregeln kritisch zu betrachten.Ablauf: Am Ende eines Sprints setzt sich das Team zusammen und bespricht was im vergangenem Sprint gut bzw. schlecht gelaufen ist.Aufzeichnungen: Ein Protokoll wird erstellt.Dauer: ~1/2h'
	},{
		name: 'fp',
		text: 'In der Regel sollte nach einem abgeschlossenen Sprint Review Meeting ein funktionierendes Produkt bereitstehen. Der Auftraggeber kann danach entscheiden, ob er noch weitere Features in das Produkt implemeniteren lassen will oder ob er das bereits vorhandene Produkt nimmt und damit das Projekt abschließt.'
	}];
}]);

app.service('templates', [function(){
	this.templateLink = {
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
	};
}]);