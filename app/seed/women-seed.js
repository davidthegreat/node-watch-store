var Women = require('../models/women');
var mongoose = require('mongoose');

mongoose.connect('mongodb://heroku_33201xb5:l9kqdokv0b3errs1e08mre8ufv@ds139288.mlab.com:39288/heroku_33201xb5');

var womens =  [
  new Women({
    imagePath: 'https://world-of-watches.herokuapp.com/images/MichaelKorsMK5801.jpg',
    secondimagePath: 'https://world-of-watches.herokuapp.com/images/MichaelKorsMK58012.jpg',
    thirdimagePath: 'https://world-of-watches.herokuapp.com/images/MichaelKorsMK58013.jpg',
    title: "Michael Kors MK5801",
    description: "A bold pink dial houses easy-to-read markers and a convenient calendar date on this fine Michael Kors watch. Crafted with yellow goldtone stainless steel, this timepiece features a push-button clasp and polished finish.This feminine fashion statement and functional timepiece stylishly transitions from casual day wear into evening wear with ease.",
    price: 179,
    sale: 'show',
  }),
  new Women({
    imagePath: 'https://world-of-watches.herokuapp.com/images/Bulova96R153Precisionist.jpg',
    secondimagePath: 'https://world-of-watches.herokuapp.com/images/Bulova96R153Precisionist2.jpg',
    thirdimagePath: 'https://world-of-watches.herokuapp.com/images/Bulova96R153Precisionist3.jpg',
    title: "Bulova 96R153",
    description: "A twirling, diamond-encrusted bezel surrounds the mother of pearl centerpiece dial to style this Precisionist watch from Bulova. This beautiful accessory is finished with a classic, multi-link stainless steel bracelet. ",
    price: 139,
    sale: 'none',
  }),
  new Women({
    imagePath: 'https://world-of-watches.herokuapp.com/images/Movado2100006Quartz.jpg',
    secondimagePath: 'https://world-of-watches.herokuapp.com/images/Movado2100006Quartz2.jpg',
    thirdimagePath: 'https://world-of-watches.herokuapp.com/images/Movado2100006Quartz3.jpg',
    title: "Movado 2100006 Quartz",
    description: "Lend an elegant air to any outfit with this sophisticated watch from Movado. The signature Movado dot and goldtone watch hands provide a polished accent on the smooth black dial. With a rich texture, the black leather strap proves a lush complement to the sleek gold-plated stainless steel case.",
    price: 224,
    sale: 'none',
  }),
  new Women({
    imagePath: 'https://world-of-watches.herokuapp.com/images/FossilES3962Virginia.jpg',
    secondimagePath: 'https://world-of-watches.herokuapp.com/images/FossilES3962Virginia2.jpg',
    thirdimagePath: 'https://world-of-watches.herokuapp.com/images/FossilES3962Virginia3.jpg',
    title: "Fossil ES3962 Virginia",
    description: "Silver-tone stainless steel case and bracelet with white center links. Crystal accented bezel. White/grey dial with rose gold-tone hands and crystal index hour markers. Roman numerals mark the quarter hour positions. Quartz movement. Minera crystal. Push/pull crown. Case: diameter 30mm thickness 9mm. Band: width 7mm length 7.25in. Pushbutton clasp. Water resistant up to 50 meters/165 feet. Functions: hour, minute, second. Fossil Women's ES3962 Virginia White/Grey Dial Two-Tone Stainless Steel Bracelet Watch.All measurements are approximate and may vary slightly from the listed dimensions.Women's watch bands can be sized to fit 6.5-inch to 7.5-inch wrists.",
    price: 300,
    sale: 'none',
  }),
  new Women({
    imagePath: 'https://world-of-watches.herokuapp.com/images/MichaelKorsMK5865.jpg',
    secondimagePath: 'https://world-of-watches.herokuapp.com/images/MichaelKorsMK58652.jpg',
    thirdimagePath: 'https://world-of-watches.herokuapp.com/images/MichaelKorsMK58653.jpg',
    title: "Michael Kors MK5865",
    description: "Exemplifying elegance and sophistication, this watch and its stainless steel construction ensures a durable and gorgeous addition to any wrist. In the center of the dial sits the Michael Kors logo to truly showcase your obvious fashion sense. No matter the occasion or ensemble, this rose gold watch will complement it effortlessly.",
    price: 169,
    sale: 'none',
  }),
  new Women({
    imagePath: 'https://world-of-watches.herokuapp.com/images/SO&CONewYorkSoHo.jpg',
    secondimagePath: 'https://world-of-watches.herokuapp.com/images/SO&CONewYorkSoHo2.jpg',
    thirdimagePath: 'https://world-of-watches.herokuapp.com/images/SO&CONewYorkSoHo3.jpg',
    title: "SO&CO New York SoHo",
    description: "Show off your trendsetting style with this beautiful crystal-cut dial watch. This watch features a beautiful stainless steel mesh bracelet and a precise quartz movement. The minimalist style with three hands and no time markers shows how simple style can be.",
    price: 60,
    sale: 'show',
  }),
  new Women({
    imagePath: 'https://world-of-watches.herokuapp.com/images/MichaelKorsMK2256.jpg',
    secondimagePath: 'https://world-of-watches.herokuapp.com/images/MichaelKorsMK225632.jpg',
    thirdimagePath: 'https://world-of-watches.herokuapp.com/images/MichaelKorsMK225633.jpg',
    title: "Michael Kors MK2256",
    description: "Iconic designer Michael Kors is one of the top names in American fashion, with fashion forward styles and bold designs. This gold tone ion plated steel and brown leather watch from the Runway collection features a wraparound strap and a gold dial.",
    price: 125,
    sale: 'show',
  }),
  new Women({
    imagePath: 'https://world-of-watches.herokuapp.com/images/SeikoSZZC42.jpg',
    secondimagePath: 'https://world-of-watches.herokuapp.com/images/SeikoSZZC422.jpg',
    thirdimagePath: 'https://world-of-watches.herokuapp.com/images/SeikoSZZC423.jpg',
    title: "Seiko SZZC42",
    description: "Add a slim accent to your wrist with this gorgeous design from Seiko. The gold and silver-tone stainless steel bracelet and case accent the black dial with gold-tone embellishments. Quartz movement. Water resistant to 30 meters. This elegant women's watch is perfect for everyday or dressy occasions.",
    price: 80,
    sale: 'show',
  }),
  new Women({
    imagePath: 'https://world-of-watches.herokuapp.com/images/GenevaPlatinumBangle.jpg',
    secondimagePath: 'https://world-of-watches.herokuapp.com/images/GenevaPlatinumBangle2.jpg',
    thirdimagePath: 'https://world-of-watches.herokuapp.com/images/GenevaPlatinumBangle3.jpg',
    title: "Geneva Platinum Bangle",
    description: "A gorgeous combination of function and beauty, this bangle watch looks like a piece of jewelry while keeping the time with excellent Japanese quartz precision. With a round silver-plated case and a graceful hinge cuff, the watch sits elegantly on your wrist. Available in three combinations of black or silver dials and goldtone or silvertone cuffs, the watch gives you more or less chromatic contrast, according to your preferences.",
    price: 40,
    sale: 'show',
  }),
  new Women({
    imagePath: 'https://world-of-watches.herokuapp.com/images/BurgiCrystalMesh.jpg',
    secondimagePath: 'https://world-of-watches.herokuapp.com/images/BurgiCrystalMesh2.jpg',
    thirdimagePath: 'https://world-of-watches.herokuapp.com/images/BurgiCrystalMesh3.jpg',
    title: "Burgi Crystal Mesh",
    description: "This exceptional, Burgi women's, dazzling, crystal, quartz watch is perfect for any occasion. The bezel features genuine crystals with a sunray and flower pattern dial. ",
    price: 45,
    sale: 'show',
  }),
  new Women({
    imagePath: 'https://world-of-watches.herokuapp.com/images/MichaelKorsMK3192.jpg',
    secondimagePath: 'https://world-of-watches.herokuapp.com/images/MichaelKorsMK31922.jpg',
    thirdimagePath: 'https://world-of-watches.herokuapp.com/images/MichaelKorsMK31923.jpg',
    title: "Michael Kors MK3192",
    description: "Add a sparkling touch of elegance and glamour to any ensemble with this stunning women's watch from MichaelKors. Made of gorgeous rose goldtone stainless steel, this exquisite watch looks just as fabulous with everyday outfits as it does with evening gowns. Water-resistantconstruction offers peace of mind as you go about your daily activities, while genuine quartz movement ensures you stay on time, all the time.",
    price: 168,
    sale: 'none',
  }),
  new Women({
    imagePath: 'https://world-of-watches.herokuapp.com/images/MovadoAmorosa.jpg',
    secondimagePath: 'https://world-of-watches.herokuapp.com/images/MovadoAmorosa2.jpg',
    thirdimagePath: 'https://world-of-watches.herokuapp.com/images/MovadoAmorosa3.jpg',
    title: "Movado Amorosa",
    description: "Capture every moment in time through the sapphire window of this Movado women's watch. A rich black dial contrasts with silvertone hands to create visual depth, and the analog hands move gracefully to and from the concave dot centered at the 12 o'clock position. The sleek and elegant push-/pull crown makes setting this timepiece simple.",
    price: 229,
    sale: 'none',
  }),
  // new Women({
  //   imagePath: 'http://localhost:3000/images/GenevaPlatinumFaux.jpg',
  //   secondimagePath: 'http://localhost:3000/GenevaPlatinumFaux2.jpg',
  //   thirdimagePath: 'http://localhost:3000/GenevaPlatinumFaux3.jpg',
  //   title: "Geneva Platinum Faux",
  //   description: "Flaunt fashionable style in this chic Geneva Platinum strap watch! This classic watch features a colored faux leather strap. A polished rosegold case highlights a chronograph dial with Roman numeral markers and decorative subdials.",
  //   price: 50,
  //   sale: 'display',
  // }),
];

var done = 0;
for (var i=0; i < womens.length; i++){
	womens[i].save(function(err, result){
		done++;
		if(done === womens.length){
			exit();
		}
	});
}

function exit(){
	mongoose.disconnect();
}
