
SM = SM || {}
SM.database = SM.database || {}

SM.database.armors = {
	"Beze zbroje":
		strengthNeed:	null
		restriction:	0
		protection:		0
		weight:			0
	
	"Prošívaná zbroj":
		strengthNeed:	-2
		restriction:	0
		protection:		2
		weight:			4
	
	"Kožená zbroj":
		strengthNeed:	1
		restriction:	0
		protection:		3
		weight:			6
	
	"Pobíjená zbroj":
		strengthNeed:	3
		restriction:	0
		protection:		4
		weight:			8
	
	"Kroužková zbroj":
		strengthNeed:	5
		restriction:	-1
		protection:		6
		weight:			15
	
	"Šupinová zbroj":
		strengthNeed:	7
		restriction:	-2
		protection:		7
		weight:			20
	
	"Plátová zbroj":
		strengthNeed:	10
		restriction:	-3
		protection:		9
		weight:			30
	
	"Plná plátová zbroj":
		strengthNeed:	12
		restriction:	-4
		protection:		10
		weight:			35
	
}

SM.database.helmets = {
	"Bez pokrývky hlavy":
		strengthNeed:	null
		restriction:	0
		protection:		0
		weight:			0

	"Kožená čapka":
		strengthNeed:	0
		restriction:	0
		protection:		1
		weight:			0.3

	"Kroužková kukla":
		strengthNeed:	2
		restriction:	0
		protection:		2
		weight:			2

	"Konická přilba":
		strengthNeed:	3
		restriction:	-1
		protection:		3
		weight:			1.5

	"Plná přilba":
		strengthNeed:	4
		restriction:	-1
		protection:		4
		weight:			2

	"Hrncová přilba":
		strengthNeed:	5
		restriction:	-2
		protection:		5
		weight:			3

	"Kbelcová přilba":
		strengthNeed:	7
		restriction:	-3
		protection:		7
		weight:			4
}

SM.database.items = {
	"Kožená torna":
		name: "Kožená torna"
		weight: 1
		price: 4
		category: "Zavazadla"

	"Vak (do 5 kg)":
		name: "Vak (do 5 kg)"
		weight: 0.4
		price: 1
		category: "Zavazadla"

	"Malý batoh (do 10 kg)":
		name: "Malý batoh (do 10 kg)"
		weight: 0.5
		price: 8
		category: "Zavazadla"

	"Velký batoh (do 20 kg)":
		name: "Velký batoh (do 20 kg)"
		weight: 0.75
		price: 15
		category: "Zavazadla"

	"Měšec":
		name: "Měšec"
		weight: 0.2
		price: 1.2
		category: "Ostatní"

	"Přikrývka":
		name: "Přikrývka"
		weight: 1.5
		price: 6
		category: "Na spaní"

	"Spací vak":
		name: "Spací vak"
		weight: 2
		price: 12
		category: "Na spaní"

	"Velký měch (1 l)":
		name: "Velký měch (1 l)"
		weight: 0.5
		price: 2.2
		category: "Nádoby"

	"Malý měch (0,5 l)":
		name: "Malý měch (0,5 l)"
		weight: 0.25
		price: 1.5
		category: "Nádoby"

	"Flakónek (0,2 l)":
		name: "Flakónek (0,2 l)"
		weight: 0.1
		price: 12.5
		category: "Nádoby"

	"Skleněná láhev (0,5 l)":
		name: "Skleněná láhev (0,5 l)"
		weight: 0.2
		price: 7.5
		category: "Nádoby"

	"Malý soudek (5 l)":
		name: "Malý soudek (5 l)"
		weight: 2
		price: 3.5
		category: "Nádoby"

	"Velký sud (20 l)":
		name: "Velký sud (20 l)"
		weight: 8
		price: 5
		category: "Nádoby"

	"Ampulka":
		name: "Ampulka"
		weight: 0.05
		price: 5
		category: "Nádoby"

	"Křesadlo a troud":
		name: "Křesadlo a troud"
		weight: 0.1
		price: 0.5
		category: "Světlo a oheň"

	"Křída":
		name: "Křída"
		weight: 0.05
		price: 0.3
		category: "Na psaní"

	"Brk":
		name: "Brk"
		weight: 0.05
		price: 0.5
		category: "Na psaní"

	"Inkoust (0,1 l)":
		name: "Inkoust (0,1 l)"
		weight: 0.1
		price: 5
		category: "Na psaní"

	"Kalamář":
		name: "Kalamář"
		weight: 0.1
		price: 5
		category: "Na psaní"

	"Pergamen (24x18 cm)":
		name: "Pergamen (24x18 cm)"
		weight: 0.1
		price: 2.5
		category: "Na psaní"

	"Papyrus (24x18 cm)":
		name: "Papyrus (24x18 cm)"
		weight: 0.02
		price: 0.5
		category: "Na psaní"

	"Svíčka":
		name: "Svíčka"
		weight: 0.05
		price: 0.3
		category: "Světlo a oheň"

	"Pochodeň":
		name: "Pochodeň"
		weight: 0.75
		price: 0.2
		category: "Světlo a oheň"

	"Lucerna (0,5 l)":
		name: "Lucerna (0,5 l)"
		weight: 1
		price: 10
		category: "Světlo a oheň"

	"Stíněná lucerna":
		name: "Stíněná lucerna"
		weight: 1.25
		price: 14
		category: "Světlo a oheň"

	"Olej, dávka do lucerny (0, 5 l)":
		name: "Olej, dávka do lucerny (0, 5 l)"
		weight: 0.5
		price: 1
		category: "Světlo a oheň"

	"Provaz (10 m)":
		name: "Provaz (10 m)"
		weight: 2
		price: 1
		category: "Ostatní"

}