var Men = require('../models/men');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/watch');

var mens =  [
  new Men({
    imagePath: 'AkribosXXIV.jpg',
    secondimagePath: 'AkribosXXIV2.jpg',
    thirdimagePath: 'AkribosXXIV3.jpg',
    title: "Akribos XXIV Men's Multifunction Tachymeter ",
    description: "This stainless steel Akribos watch is the perfect complement to any ensemble. A sleek black finish and modern, masculine design fits both for formal and casual affairs. Complete with Swiss quartz movement for reliability and accuracy, as well as a multi-function tachymeter and a day and date indicator make this watch just as practical an addition to your collection as it is stylish.",
    price: 49,
  }),
  new Men({
    imagePath: 'MovadoCollectionMens.jpg',
    secondimagePath: 'MovadoCollectionMens2.jpg',
    thirdimagePath: 'MovadoCollectionMens3.jpg',
    title: "Movado Collection Mens",
    description: "Wear this sleek, modern watch with almost any ensemble in your closet, thanks to its versatile black dial and supple black leather strap. A polished stainless steel caseback, silvertone hands and a Movado silvertone signature dot offer exceptional contrast for a look that works just as well at the office as for formal events and special occasions.",
    price: 189,
  }),
  new Men({
    imagePath: 'MensBalmerE-Type.jpg',
    secondimagePath: 'MensBalmerE-Type2.jpg',
    thirdimagePath: 'MensBalmerE-Type3.jpg',
    title: "Men's Balmer E-Type Racing-style",
    description: 'Named after the legendary Jaguar E-Type which from 1961 to 1975 set records and garnered much acclaim for Jaguar, and helped to establish them as one of the premier luxury/sport brands in the industry. This design replicates the luxury established by this great car and adds a degree of complication by its busy dial. Hearkening back to the racing pedigree that bred the Jaguar E-Type, Balmer has created a racing style chronograph with the level sophistication to be worn with a suit. 48mm in size with a dial large enough to show its incredible detail and register the complications from the Swiss made Ronda 5030.D movement inside, this is an impressive piece on the wrist.',
    price: 119,
  }),
  new Men({
    imagePath: 'ESQMovadoMensRubber.jpg',
    secondimagePath: 'ESQMovadoMensRubber2.jpg',
    thirdimagePath: 'ESQMovadoMensRubber3.jpg',
    title: "ESQ by Movado Men's Rubber",
    description: "Add a sporty accent to your wardrobe with this handsome men's watch from ESQ by Movado. A white rubber strap and a stainless steel case with a white dial make this watch a stylish complement to your active lifestyle. The watch runs on a reliable Swiss quartz movement to keep you consistently on time and in style.",
    price: 64,
  }),
  new Men({
    imagePath: 'MichaelKorsMensMK8281.jpg',
    secondimagePath: 'MichaelKorsMensMK82812.jpg',
    thirdimagePath: 'MichaelKorsMensMK82813.jpg',
    title: "Michael Kors Men's MK8281",
    description: "This fine Michael Kors watch has chronograph easy-to-read subdials to match function with class. This goldtone watch features a fluted bezel and stainless steel construction. This watch is suitable for wear with casual clothing, professional outfits, or formal wear, and will add some polished elegance to your ensemble. Complete with a relatively lightweight feel, this classic watch makes an excellent gift for birthdays, anniversaries, or graduations.",
    price: 196,
  }),
  new Men({
    imagePath: 'FossilMensCH2564.png',
    secondimagePath: 'FossilMensCH25642.png',
    thirdimagePath: 'FossilMensCH25643.png',
    title: "Fossil Men's CH2564 Black Leather",
    description: "Dress up any wardrobe, and stay on track during your busy days with this men's quartz watch from Fossil. The soft blue color of the dial exudes a glowing quality that is accented by the white applied luminescent hands and black applied markers, making this timepiece a classic favorite. Adding the black leather strap enhances the masculine quality of this watch and provides a comfortable yet secure fit around your wrist.",
    price: 79,
  }),
  new Men({
    imagePath: 'AkribosXXIVMensAntiqueMechanical.jpg',
    secondimagePath: 'AkribosXXIVMensAntiqueMechanical2.jpg',
    thirdimagePath: 'AkribosXXIVMensAntiqueMechanical3.jpg',
    title: "Akribos XXIV Men's Antique Mechanical",
    description: "Add classic, vintage, and Steampunk style to your everyday ensembles with this handsome pocket watch. Superior craftsmanship and outstanding detail makes this mechanical pocket watch an heirloom quality piece that you will be proud to pass on. Engraved details on the front and back of the gold metal case are presented as an homage to eras past.",
    price: 59,
  }),
  new Men({
    imagePath: 'StuhrlingOriginalMensRegattaEspora.jpg',
    secondimagePath: 'StuhrlingOriginalMensRegattaEspora2.jpg',
    thirdimagePath: 'StuhrlingOriginalMensRegattaEspora3.jpg',
    title: "Stuhrling Original Men's Regatta Espora",
    description: "This beautiful diver's watch features a rich stainless steel finishand a Swiss quartz watch movement that is designed to keep itsaccurate time day after day. Water resistant to 330 feet or 100meters, this watch is ideal for today's active man with style. Themasculine black dial complete with Krysterna crystal featuresthree-hand timekeeping as well as a date display to ensure you'realways on time. ",
    price: 89,
  }),
  new Men({
    imagePath: 'StuhrlingOriginalMensAlbionSwiss.jpg',
    secondimagePath: 'StuhrlingOriginalMensAlbionSwiss2.jpg',
    thirdimagePath: 'StuhrlingOriginalMensAlbionSwiss3.jpg',
    title: "Stuhrling Original Men's Albion Swiss",
    description: "The Albion is a fascinating member of Stuhrling Original's Ascot Family. This elegant timepiece features a solid stainless steel case with an ultra slim design that gives it a minimalistic style.",
    price: 64,
  }),
  new Men({
    imagePath: 'TimexMensT49963Expedition.jpg',
    secondimagePath: 'TimexMensT49963Expedition2.jpg',
    thirdimagePath: 'TimexMensT49963Expedition3.jpg',
    title: "Timex Men's T49963 Expedition",
    description: "Rugged yet classy, this Timex men's T49963 Expedition comes with a rough and tumble brown leather strap. Featuring luminous hands so you can keep time in any situation and completed by a tang buckle clasp.",
    price: 35,
  }),
  new Men({
    imagePath: 'JulesBretingAdamaStainlessSteel.jpg',
    secondimagePath: 'JulesBretingAdamaStainlessSteel2.jpg',
    thirdimagePath: 'JulesBretingAdamaStainlessSteel3.jpg',
    title: "Jules Breting Adama Stainless Steel",
    description: "Named after the famed Commander Adama, from popular Sci-Fi TV series Battlestar Galactica. Battle-hardened with a sense of power and character, the futuristic leader offers the perfect namesake for the Adama model. Like the Commander, the Adama model is bold and pure. The 45mm, 316L stainless steel case is polished to a mirror finish and the same great care is taken on the coin-edged bezel. Each Adama features a Swiss made Ronda 3520.D Chronograph movement, a multi-textured sunray finished dial. The Adama band is crafted from the finest Italian leather, and is an impressive 4mm in thickness. Bold & luxurious, the Adama will be a constant, daily-worn companion.",
    price: 129,
  }),
  new Men({
    imagePath: 'JoshuaSonsClassicMensJapanese.jpg',
    secondimagePath: 'JoshuaSonsClassicMensJapanese2.jpg',
    thirdimagePath: 'JoshuaSonsClassicMensJapanese3.jpg',
    title: "Joshua & Sons Classic Men's Japanese",
    description: "Showcase your sophisticated style with this classically elegant Joshua & Sons men's watch. Featuring a simple black dial with white markers, this watch offers understated style, while the date indicator offers practical function. The comfortable genuine leather strap is available in a variety of colors to match your look.",
    price: 39,
  }),
];

var done = 0;
for (var i=0; i < mens.length; i++){
	mens[i].save(function(err, result){
		done++;
		if(done === mens.length){
			exit();
		}
	});
}

function exit(){
	mongoose.disconnect();
}
