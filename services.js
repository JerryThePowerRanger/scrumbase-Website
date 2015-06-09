app.service('animationDesc', [function () {

	/*
	*	Dieses Array enthält alle Daten für die einzelnen Bilder der Animation.
	*/
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
						"url" : "https://docs.google.com/file/d/0B5Oh7AnJWE-iVWZFYTdtcDhuX2c/edit"
					},
					{
						"type" : "ODS",
						"url" : "https://docs.google.com/file/d/0B5Oh7AnJWE-iaFFmMDBXV2R4SUU/edit"
					},
					{
						"type" : "PDF",
						"url" : "https://docs.google.com/file/d/0B5Oh7AnJWE-idXdHZGYzS3llTjA/edit"
					},
					{
						"type" : "GoogleDoc Sheet",
						"url" : "https://docs.google.com/spreadsheets/d/1YH-ggr8enPLw6G-GadXM7f-Y28BVWi607xYmU2srie0/edit?usp=sharing"
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
						"url" : "https://docs.google.com/file/d/0B5Oh7AnJWE-iRFRqSEsxOWFhX28/edit"
					},
					{
						"type" : "ODT",
						"url" : "https://docs.google.com/file/d/0B5Oh7AnJWE-iUEgxakVkWVRxYTQ/edit"
					},
					{
						"type" : "PDF",
						"url" : "https://docs.google.com/file/d/0B5Oh7AnJWE-iWHRWQjl4ZFpDNWc/edit"
					},
					{
						"type" : "Pages",
						"url" : "https://docs.google.com/file/d/0B5Oh7AnJWE-ibWFCYnd2NlYxVDg/edit"
					},
					{
						"type" : "GoogleDoc Text",
						"url" : "https://docs.google.com/document/d/1g4L_l0jVwymnCmY8y7_23DbMZQb7CGKdnz5ePJiunWA/edit?usp=sharing"
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
						"url" : "https://docs.google.com/file/d/0B5Oh7AnJWE-iQk94NDh6WVo5SDA/edit"
					},
					{
						"type" : "ODS",
						"url" : "https://docs.google.com/file/d/0B5Oh7AnJWE-iaVVRdkVaUjZPZEE/edit"
					},
					{
						"type" : "PDF",
						"url" : "https://docs.google.com/file/d/0B5Oh7AnJWE-iQ29xdUlna1NZaGc/edit"
					},
					{
						"type" : "GoogleDoc Sheet",
						"url" : "https://docs.google.com/spreadsheets/d/13FOeBBlCeg59oEbXDRTvvfJBXCx-rlhJeCxsh4u-yh0/edit?usp=sharing"
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
						"url" : "https://docs.google.com/file/d/0B5Oh7AnJWE-iNUJocC1NQjVMcVU/edit"
					},
					{
						"type" : "ODT",
						"url" : "https://docs.google.com/file/d/0B5Oh7AnJWE-iQmJidmVONmRsYlE/edit"
					},
					{
						"type" : "PDF",
						"url" : "https://docs.google.com/file/d/0B5Oh7AnJWE-iMnRLRnFiWEhpSzg/edit"
					},
					{
						"type" : "Pages",
						"url" : "https://docs.google.com/file/d/0B5Oh7AnJWE-iLU83WGctQ25fVTQ/edit"
					},
					{
						"type" : "GoogleDoc Text",
						"url" : "https://docs.google.com/document/d/1xGgKnVqvGs8Y4MPmVx-4Oex3TjewnV4YDXmvp37Ske8/edit?usp=sharing"
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
						"url" : "https://docs.google.com/file/d/0B5Oh7AnJWE-iVFZ0NDI0UWhXVWM/edit"
					},
					{
						"type" : "ODT",
						"url" : "https://docs.google.com/file/d/0B5Oh7AnJWE-iR1E3REZXN2s0TGs/edit"
					},
					{
						"type" : "PDF",
						"url" : "https://docs.google.com/file/d/0B5Oh7AnJWE-iZXM0SEI2QVFNbVU/edit"
					},
					{
						"type" : "Pages",
						"url" : "https://docs.google.com/file/d/0B5Oh7AnJWE-iTHpiZ1E4clh0M0k/edit"
					},
					{
						"type" : "GoogleDoc Text",
						"url" : "https://docs.google.com/document/d/1ybvgbl4bSPg1__kYBMIA_3aIv6vjoL9EaP4DB09IwGI/edit?usp=sharing"
					}
				]
			}
		],
		"fileTypes" : {
			"ODT" : "odt.svg", // LibreOffice / The Document Foundation
			"Word" : "word.svg", // Public Domain, aber Markenzeichen. Sollte problemlos verwendbar sein.
			"PDF" : "pdf.png", // Oxygen Team
			"Pages" : "pages.png", // johnathanmac, Apple
			"Excel" : "excel.svg", // Public Domain, aber Markenzeichen. Sollte problemlos verwendbar sein.
			"ODS" : "ods.svg", // LibreOffice / The Document Foundation
			"GoogleDoc Text" : "google_docs_text.png",
			"GoogleDoc Sheet" : "GoogleSheetsIcon.png"
		},
		"search" : "",
		"phaseFilter" : "",
		"roleFilter" : ""
	};
}]);