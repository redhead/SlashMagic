
class Weapons

	@shortRangeCategories:
		0: "Beze zbraně"
		1: "Hole a kopí"
		2: "Meče"
		3: "Nože a dýky"
		4: "Palice a kyje"
		5: "Řemdihy a bijáky"
		6: "Sekery"
		7: "Sudlice a trojzubce"
		8: "Šavle a tesáky"

	@longRangeCategories:
		0: "Kuše"
		1: "Luky"
		2: "Vrhací zbraně"

	@longRange: [
		{
			name: "Krátký luk",
			strength: "-1",
			maxStrength: 3,
			rampancy: 2,
			damage: 1,
			type: "B",
			range: 24,
			category: 1,
			weight: 1
		},
		{
			name: "Dlouhý luk",
			strength: 5,
			maxStrength: 7,
			rampancy: 3,
			damage: 4,
			type: "B",
			range: 27,
			category: 1,
			weight: "1.2"
		},
		{
			name: "Krátký skládaný luk",
			strength: 1,
			maxStrength: 6,
			rampancy: 3,
			damage: 2,
			type: "B",
			range: 26,
			category: 1,
			weight: 1
		},
		{
			name: "Dlouhý skládaný luk",
			strength: 5,
			maxStrength: 9,
			rampancy: 4,
			damage: 5,
			type: "B",
			range: 29,
			category: 1,
			weight: "1.5"
		},
		{
			name: "Silový luk",
			strength: 7,
			maxStrength: 12,
			rampancy: 5,
			damage: 6,
			type: "B",
			range: 31,
			category: 1,
			weight: 2
		},
		{
			name: "Minikuše",
			strength: "-3",
			rampancy: "-1",
			damage: 1,
			type: "B",
			range: 19,
			category: 0,
			weight: 1
		},
		{
			name: "Lehká kuše",
			strength: 6,
			rampancy: 3,
			damage: 5,
			type: "B",
			range: 36,
			category: 0,
			weight: "1.5"
		},
		{
			name: "Vojenská kuše",
			strength: 9,
			rampancy: 3,
			damage: 7,
			type: "B",
			range: 40,
			category: 0,
			weight: 2
		},
		{
			name: "Těžká kuše",
			strength: 11,
			rampancy: 2,
			damage: 10,
			type: "B",
			range: 38,
			category: 0,
			weight: 3
		},
		{
			name: "Kámen",
			strength: "-3",
			rampancy: "-1",
			damage: "-2",
			type: "D",
			range: 23,
			category: 2,
			weight: "0.2"
		},
		{
			name: "Vrhací dýka",
			strength: 0,
			rampancy: 0,
			damage: 1,
			type: "B",
			range: 20,
			category: 2,
			weight: "0.2"
		},
		{
			name: "Lehká vrhací sekyra",
			strength: 2,
			rampancy: 1,
			damage: 2,
			type: "S",
			range: 18,
			category: 2,
			weight: "0.7"
		},
		{
			name: "Válečná vrhací sekyra",
			strength: 2,
			rampancy: 1,
			damage: 5,
			type: "S",
			range: 16,
			category: 2,
			weight: 1
		},
		{
			name: "Vrhací kladivo",
			strength: 5,
			rampancy: 2,
			damage: 7,
			type: "D",
			range: 15,
			category: 2,
			weight: "0.5"
		},
		{
			name: "Hvězdice",
			strength: "-1",
			rampancy: 0,
			damage: 1,
			type: "S",
			range: 20,
			category: 2,
			weight: "0.1"
		},
		{
			name: "Kopí",
			strength: 3,
			rampancy: 2,
			damage: 3,
			type: "B",
			range: 23,
			category: 2,
			weight: "1.2"
		},
		{
			name: "Oštěp",
			strength: 2,
			rampancy: 2,
			damage: 2,
			type: "B",
			range: 25,
			category: 2,
			weight: 1
		},
		{
			name: "Prak",
			strength: "-1",
			rampancy: 1,
			damage: 1,
			type: "D",
			range: 20,
			category: 2,
			weight: "0.1"
		}
		]

	@shortRange: [
		{
			name: "Ruka",
			length: 0,
			rampancy: 0,
			damage: "-2",
			type: "D",
			cover: 0,
			category: 0,
			twohanded: false,
			weight: 0
		},
		{
			name: "Okovaná rukavice",
			length: 0,
			rampancy: 0,
			damage: 0,
			type: "D",
			cover: 0,
			category: 0,
			twohanded: false,
			weight: 0
		},
		{
			name: "Noha",
			length: 0,
			rampancy: "-1",
			damage: 1,
			type: "D",
			cover: 0,
			category: 0,
			twohanded: false,
			weight: 0
		},
		{
			name: "Okovaná bota",
			length: 0,
			rampancy: "-2",
			damage: 4,
			type: "D",
			cover: 0,
			category: 0,
			twohanded: false,
			weight: 0
		},
		{
			name: "Nůž",
			strength: "-4",
			length: 0,
			rampancy: 0,
			damage: "-2",
			type: "B",
			cover: 1,
			category: 3,
			twohanded: false,
			weight: "0.3"
		},
		{
			name: "Dýka",
			strength: "-1",
			length: 0,
			rampancy: 1,
			damage: 1,
			type: "B",
			cover: 2,
			category: 3,
			twohanded: false,
			weight: "0.2"
		},
		{
			name: "Bodná dýka",
			strength: "-1",
			length: 0,
			rampancy: 2,
			damage: 0,
			type: "B",
			cover: 1,
			category: 3,
			twohanded: false,
			weight: "0.2"
		},
		{
			name: "Dlouhý nůž",
			strength: "-2",
			length: 1,
			rampancy: 1,
			damage: "-1",
			type: "B",
			cover: 1,
			category: 3,
			twohanded: false,
			weight: "0.3"
		},
		{
			name: "Dlouhá dýka",
			strength: 1,
			length: 1,
			rampancy: 1,
			damage: 2,
			type: "B",
			cover: 2,
			category: 3,
			twohanded: false,
			weight: "0.3"
		},
		{
			name: "Lehká sekerka",
			strength: 3,
			length: 1,
			rampancy: 3,
			damage: 3,
			type: "S",
			cover: 2,
			category: 6,
			twohanded: false,
			weight: 1
		},
		{
			name: "Sekera",
			strength: 6,
			length: 2,
			rampancy: 3,
			damage: 5,
			type: "S",
			cover: 2,
			category: 6,
			twohanded: false,
			weight: 2
		},
		{
			name: "Válečná sekera",
			strength: 9,
			length: 3,
			rampancy: 3,
			damage: 7,
			type: "S",
			cover: 3,
			category: 6,
			twohanded: false,
			weight: "2.5"
		},
		{
			name: "Obouruční sekera",
			strength: 12,
			length: 3,
			rampancy: 4,
			damage: 10,
			type: "S",
			cover: 3,
			category: 6,
			twohanded: true,
			weight: 3
		},
		{
			name: "Mačeta",
			strength: 2,
			length: 1,
			rampancy: 2,
			damage: 2,
			type: "S",
			cover: 2,
			category: 8,
			twohanded: false,
			weight: 1
		},
		{
			name: "Lehká šavle",
			strength: 3,
			length: 2,
			rampancy: 3,
			damage: 1,
			type: "S",
			cover: 3,
			category: 8,
			twohanded: false,
			weight: "1.2"
		},
		{
			name: "Tesák",
			strength: 3,
			length: 1,
			rampancy: 2,
			damage: 3,
			type: "S",
			cover: 3,
			category: 8,
			twohanded: false,
			weight: "1.2"
		},
		{
			name: "Šavle",
			strength: 6,
			length: 2,
			rampancy: 4,
			damage: 4,
			type: "S",
			cover: 3,
			category: 8,
			twohanded: false,
			weight: "1.5"
		},
		{
			name: "Těžká šavle",
			strength: 9,
			length: 2,
			rampancy: 4,
			damage: 6,
			type: "S",
			cover: 4,
			category: 8,
			twohanded: false,
			weight: 2
		},
		{
			name: "Krátký meč",
			strength: 2,
			length: 1,
			rampancy: 3,
			damage: 1,
			type: "S",
			cover: 4,
			category: 2,
			twohanded: false,
			weight: "1.5"
		},
		{
			name: "Krátký široký meč",
			strength: 4,
			length: 1,
			rampancy: 3,
			damage: 3,
			type: "S",
			cover: 5,
			category: 2,
			twohanded: false,
			weight: "1.7"
		},
		{
			name: "Široký meč",
			strength: 6,
			length: 2,
			rampancy: 4,
			damage: 4,
			type: "S",
			cover: 5,
			category: 2,
			twohanded: false,
			weight: 2
		},
		{
			name: "Dlouhý meč",
			strength: 7,
			length: 3,
			rampancy: 5,
			damage: 3,
			type: "S",
			cover: 5,
			category: 2,
			twohanded: false,
			weight: "1.7"
		},
		{
			name: "Jedenapůlruční meč",
			strength: 8,
			length: 2,
			rampancy: 5,
			damage: 5,
			type: "S",
			cover: 6,
			category: 2,
			twohanded: false,
			weight: 2
		},
		{
			name: "Barbarský meč",
			strength: 10,
			length: 2,
			rampancy: 6,
			damage: 6,
			type: "S",
			cover: 5,
			category: 2,
			twohanded: false,
			weight: "2.5"
		},
		{
			name: "Obouruční meč",
			strength: 12,
			length: 3,
			rampancy: 5,
			damage: 9,
			type: "S",
			cover: 5,
			category: 2,
			twohanded: true,
			weight: "4.5"
		},
		{
			name: "Obušek",
			strength: 1,
			length: 1,
			rampancy: 1,
			damage: 2,
			type: "D",
			cover: 1,
			category: 4,
			twohanded: false,
			weight: "0.2"
		},
		{
			name: "Kyj",
			strength: 3,
			length: 1,
			rampancy: 2,
			damage: 3,
			type: "D",
			cover: 2,
			category: 4,
			twohanded: false,
			weight: 1
		},
		{
			name: "Okovaný kyj",
			strength: 5,
			length: 1,
			rampancy: 2,
			damage: 5,
			type: "D",
			cover: 2,
			category: 4,
			twohanded: false,
			weight: 2
		},
		{
			name: "Lehký palcát",
			strength: 5,
			length: 2,
			rampancy: 3,
			damage: 4,
			type: "D",
			cover: 2,
			category: 4,
			twohanded: false,
			weight: 3
		},
		{
			name: "Palcát",
			strength: 8,
			length: 2,
			rampancy: 4,
			damage: 6,
			type: "D",
			cover: 3,
			category: 4,
			twohanded: false,
			weight: 5
		},
		{
			name: "Těžký kyj",
			strength: 8,
			length: 2,
			rampancy: 3,
			damage: 7,
			type: "D",
			cover: 2,
			category: 4,
			twohanded: false,
			weight: 4
		},
		{
			name: "Válečné kladivo",
			strength: 10,
			length: 3,
			rampancy: 5,
			damage: 7,
			type: "D",
			cover: 3,
			category: 4,
			twohanded: false,
			weight: 3
		},
		{
			name: "Obouruční kyj",
			strength: 11,
			length: 2,
			rampancy: 3,
			damage: 10,
			type: "D",
			cover: 2,
			category: 4,
			twohanded: false,
			weight: 5
		},
		{
			name: "Těžký perlík",
			strength: 13,
			length: 3,
			rampancy: 4,
			damage: 11,
			type: "D",
			cover: 2,
			category: 4,
			twohanded: false,
			weight: 5
		},
		{
			name: "Lehký biják",
			strength: 3,
			length: 2,
			rampancy: 2,
			damage: 3,
			type: "D",
			cover: 2,
			category: 5,
			twohanded: false,
			weight: 2
		},
		{
			name: "Biják",
			strength: 7,
			length: 3,
			rampancy: 2,
			damage: 6,
			type: "D",
			cover: 3,
			category: 5,
			twohanded: false,
			weight: "2.5"
		},
		{
			name: "Těžký biják",
			strength: 11,
			length: 3,
			rampancy: 3,
			damage: 9,
			type: "D",
			cover: 3,
			category: 5,
			twohanded: false,
			weight: 3
		},
		{
			name: "Lehké kopí",
			strength: 1,
			length: 3,
			rampancy: 3,
			damage: 2,
			type: "B",
			cover: 3,
			category: 1,
			twohanded: true,
			weight: 1
		},
		{
			name: "Zkrácená hůl",
			strength: "-4",
			length: 3,
			rampancy: 1,
			damage: "-1",
			type: "D",
			cover: 3,
			category: 1,
			twohanded: true,
			weight: "0.3"
		},
		{
			name: "Lehká hůl",
			strength: "-1",
			length: 4,
			rampancy: 2,
			damage: 0,
			type: "D",
			cover: 3,
			category: 1,
			twohanded: true,
			weight: "0.5"
		},
		{
			name: "Kopí",
			strength: 3,
			length: 4,
			rampancy: 3,
			damage: 4,
			type: "B",
			cover: 3,
			category: 1,
			twohanded: true,
			weight: "1.2"
		},
		{
			name: "Okovaná hůl",
			strength: 1,
			length: 4,
			rampancy: 2,
			damage: 2,
			type: "D",
			cover: 3,
			category: 1,
			twohanded: true,
			weight: 1
		},
		{
			name: "Dlouhé kopí",
			strength: 5,
			length: 5,
			rampancy: 3,
			damage: 6,
			type: "B",
			cover: 2,
			category: 1,
			twohanded: true,
			weight: "1.5"
		},
		{
			name: "Těžká kovaná hůl",
			strength: 2,
			length: 4,
			rampancy: 2,
			damage: 4,
			type: "D",
			cover: 3,
			category: 1,
			twohanded: true,
			weight: "1.2"
		},
		{
			name: "Píka",
			strength: 7,
			length: 6,
			rampancy: 3,
			damage: 8,
			type: "B",
			cover: 2,
			category: 1,
			twohanded: true,
			weight: 3
		},
		{
			name: "Kovová hůl",
			strength: 5,
			length: 4,
			rampancy: 2,
			damage: 7,
			type: "D",
			cover: 3,
			category: 1,
			twohanded: true,
			weight: 3
		},
		{
			name: "Vidle",
			strength: 0,
			length: 3,
			rampancy: 2,
			damage: 2,
			type: "B",
			cover: 3,
			category: 7,
			twohanded: true,
			weight: 2
		},
		{
			name: "Lehká sudlice",
			strength: 2,
			length: 4,
			rampancy: 4,
			damage: 4,
			type: "S",
			cover: 3,
			category: 7,
			twohanded: true,
			weight: 3
		},
		{
			name: "Lehký trojzubec",
			strength: 5,
			length: 4,
			rampancy: 3,
			damage: 6,
			type: "B",
			cover: 4,
			category: 7,
			twohanded: true,
			weight: "2.5"
		},
		{
			name: "Halapartna",
			strength: 6,
			length: 4,
			rampancy: 3,
			damage: 7,
			type: "S",
			cover: 3,
			category: 7,
			twohanded: true,
			weight: 4
		},
		{
			name: "Těžká sudlice",
			strength: 7,
			length: 4,
			rampancy: 4,
			damage: 9,
			type: "S",
			cover: 3,
			category: 7,
			twohanded: true,
			weight: 4
		},
		{
			name: "Těžký trojzubec",
			strength: 9,
			length: 4,
			rampancy: 3,
			damage: 10,
			type: "B",
			cover: 4,
			category: 7,
			twohanded: true,
			weight: 4
		},
		{
			name: "Těžká halapartna",
			strength: 10,
			length: 4,
			rampancy: 3,
			damage: 12,
			type: "S",
			cover: 3,
			category: 7,
			twohanded: true,
			weight: 6
		},
		{
			name: "Cep",
			strength: 2,
			length: 4,
			rampancy: 2,
			damage: 4,
			type: "D",
			cover: 2,
			category: 5,
			twohanded: true,
			weight: 3
		},
		{
			name: "Řemdih",
			strength: 6,
			length: 4,
			rampancy: 3,
			damage: 8,
			type: "D",
			cover: 2,
			category: 5,
			twohanded: true,
			weight: 2
		},
		{
			name: "Okovaný cep",
			strength: 7,
			length: 4,
			rampancy: 2,
			damage: 10,
			type: "D",
			cover: 2,
			category: 5,
			twohanded: true,
			weight: 4
		},
		{
			name: "Těžký řemdih",
			strength: 11,
			length: 4,
			rampancy: 3,
			damage: 13,
			type: "D",
			cover: 2,
			category: 5,
			twohanded: true,
			weight: 4
		}
		]