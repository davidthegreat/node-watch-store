var Women = require('../models/women');
var mongoose = require('mongoose');

mongoose.connect('mongodb://heroku_33201xb5:l9kqdokv0b3errs1e08mre8ufv@ds139288.mlab.com:39288/heroku_33201xb5');

var womens =  [
  new Women({
    imagePath: 'https://cloud.githubusercontent.com/assets/9848162/21342310/2739a960-c646-11e6-9a67-b6dd3c6af361.jpg',
    secondimagePath: 'https://cloud.githubusercontent.com/assets/9848162/21342309/273407d0-c646-11e6-917e-3dc6989c5efd.jpg',
    thirdimagePath: 'https://cloud.githubusercontent.com/assets/9848162/21342308/271d1a20-c646-11e6-98f3-f1e936dcb5f1.jpg',
    title: "Michael Kors MK5801",
    description: "A bold pink dial houses easy-to-read markers and a convenient calendar date on this fine Michael Kors watch. Crafted with yellow goldtone stainless steel, this timepiece features a push-button clasp and polished finish.This feminine fashion statement and functional timepiece stylishly transitions from casual day wear into evening wear with ease.",
    price: 179,
    sale: 'show',
  }),
  new Women({
    imagePath: 'https://cloud.githubusercontent.com/assets/9848162/21342356/5b6e8a98-c646-11e6-9da8-259b7ef77876.jpg',
    secondimagePath: 'https://cloud.githubusercontent.com/assets/9848162/21342355/5b6a5518-c646-11e6-8fb8-1c65070f625f.jpg',
    thirdimagePath: 'https://cloud.githubusercontent.com/assets/9848162/21342354/5b658c5e-c646-11e6-8d94-3623d3d110f3.jpg',
    title: "Bulova 96R153",
    description: "A twirling, diamond-encrusted bezel surrounds the mother of pearl centerpiece dial to style this Precisionist watch from Bulova. This beautiful accessory is finished with a classic, multi-link stainless steel bracelet. ",
    price: 139,
    sale: 'none',
  }),
  new Women({
    imagePath: 'https://cloud.githubusercontent.com/assets/9848162/21342430/bd5521c2-c646-11e6-8f0b-8817b3f7b3a3.jpg',
    secondimagePath: 'https://cloud.githubusercontent.com/assets/9848162/21342428/bd49464a-c646-11e6-9705-ab634c76d774.jpg',
    thirdimagePath: 'https://cloud.githubusercontent.com/assets/9848162/21342429/bd4ff706-c646-11e6-8706-e9f6ef33b142.jpg',
    title: "Movado 2100006 Quartz",
    description: "Lend an elegant air to any outfit with this sophisticated watch from Movado. The signature Movado dot and goldtone watch hands provide a polished accent on the smooth black dial. With a rich texture, the black leather strap proves a lush complement to the sleek gold-plated stainless steel case.",
    price: 224,
    sale: 'none',
  }),
  new Women({
    imagePath: 'https://cloud.githubusercontent.com/assets/9848162/21342507/1dc216fa-c647-11e6-81cc-79e96bef8be6.jpg',
    secondimagePath: 'https://cloud.githubusercontent.com/assets/9848162/21342509/1dcf7d72-c647-11e6-8eb5-6c8d7789a65e.jpg',
    thirdimagePath: 'https://cloud.githubusercontent.com/assets/9848162/21342508/1dca05a4-c647-11e6-812f-a80be5e9ba52.jpg',
    title: "Fossil ES3962 Virginia",
    description: "Silver-tone stainless steel case and bracelet with white center links. Crystal accented bezel. White/grey dial with rose gold-tone hands and crystal index hour markers. Roman numerals mark the quarter hour positions. Quartz movement. Minera crystal. Push/pull crown. Case: diameter 30mm thickness 9mm. Band: width 7mm length 7.25in. Pushbutton clasp. Water resistant up to 50 meters/165 feet. Functions: hour, minute, second. Fossil Women's ES3962 Virginia White/Grey Dial Two-Tone Stainless Steel Bracelet Watch.All measurements are approximate and may vary slightly from the listed dimensions.Women's watch bands can be sized to fit 6.5-inch to 7.5-inch wrists.",
    price: 300,
    sale: 'none',
  }),
  new Women({
    imagePath: 'https://cloud.githubusercontent.com/assets/9848162/21342710/27aa51b8-c648-11e6-87a0-5349cc417f50.jpg',
    secondimagePath: 'https://cloud.githubusercontent.com/assets/9848162/21342709/279fa56a-c648-11e6-984d-192aa0a1c3e0.jpg',
    thirdimagePath: 'https://cloud.githubusercontent.com/assets/9848162/21342708/27890c42-c648-11e6-871d-31e3e881c84e.jpg',
    title: "Michael Kors MK5865",
    description: "Exemplifying elegance and sophistication, this watch and its stainless steel construction ensures a durable and gorgeous addition to any wrist. In the center of the dial sits the Michael Kors logo to truly showcase your obvious fashion sense. No matter the occasion or ensemble, this rose gold watch will complement it effortlessly.",
    price: 169,
    sale: 'none',
  }),
  new Women({
    imagePath: 'https://cloud.githubusercontent.com/assets/9848162/21342739/5634211c-c648-11e6-8c2d-2f7a9995e183.jpg',
    secondimagePath: 'https://cloud.githubusercontent.com/assets/9848162/21342738/5630bc3e-c648-11e6-9fbc-9ce21376cc99.jpg',
    thirdimagePath: 'https://cloud.githubusercontent.com/assets/9848162/21342737/562b81ba-c648-11e6-9954-a4ea61fad3cb.jpg',
    title: "SO&CO New York SoHo",
    description: "Show off your trendsetting style with this beautiful crystal-cut dial watch. This watch features a beautiful stainless steel mesh bracelet and a precise quartz movement. The minimalist style with three hands and no time markers shows how simple style can be.",
    price: 60,
    sale: 'show',
  }),
  new Women({
    imagePath: 'https://cloud.githubusercontent.com/assets/9848162/21342784/9536bc26-c648-11e6-800c-4264da718d39.jpg',
    secondimagePath: 'https://cloud.githubusercontent.com/assets/9848162/21342783/95332a98-c648-11e6-9242-33d5780c08be.jpg',
    thirdimagePath: 'https://cloud.githubusercontent.com/assets/9848162/21342782/952cafd8-c648-11e6-8d80-17efc3b2e463.jpg',
    title: "Michael Kors MK2256",
    description: "Iconic designer Michael Kors is one of the top names in American fashion, with fashion forward styles and bold designs. This gold tone ion plated steel and brown leather watch from the Runway collection features a wraparound strap and a gold dial.",
    price: 125,
    sale: 'show',
  }),
  new Women({
    imagePath: 'https://cloud.githubusercontent.com/assets/9848162/21343142/31e012ce-c64a-11e6-8b2e-72037c5a6f02.jpg',
    secondimagePath: 'https://cloud.githubusercontent.com/assets/9848162/21343141/31da654a-c64a-11e6-9607-1dc746eac19f.jpg',
    thirdimagePath: 'https://cloud.githubusercontent.com/assets/9848162/21343140/31d4a718-c64a-11e6-9547-84db1761048f.jpg',
    title: "Seiko SZZC42",
    description: "Add a slim accent to your wrist with this gorgeous design from Seiko. The gold and silver-tone stainless steel bracelet and case accent the black dial with gold-tone embellishments. Quartz movement. Water resistant to 30 meters. This elegant women's watch is perfect for everyday or dressy occasions.",
    price: 80,
    sale: 'show',
  }),
  new Women({
    imagePath: 'https://cloud.githubusercontent.com/assets/9848162/21343197/793bccb2-c64a-11e6-81b3-e587b59a12ef.jpg',
    secondimagePath: 'https://cloud.githubusercontent.com/assets/9848162/21343196/79320a10-c64a-11e6-9a59-da16b7ed67ae.jpg',
    thirdimagePath: 'https://cloud.githubusercontent.com/assets/9848162/21343195/791c8c08-c64a-11e6-9b8c-cffe259b06bf.jpg',
    title: "Geneva Platinum Bangle",
    description: "A gorgeous combination of function and beauty, this bangle watch looks like a piece of jewelry while keeping the time with excellent Japanese quartz precision. With a round silver-plated case and a graceful hinge cuff, the watch sits elegantly on your wrist. Available in three combinations of black or silver dials and goldtone or silvertone cuffs, the watch gives you more or less chromatic contrast, according to your preferences.",
    price: 40,
    sale: 'show',
  }),
  new Women({
    imagePath: 'https://cloud.githubusercontent.com/assets/9848162/21343242/abc44ac4-c64a-11e6-8f76-274a10e82e1c.jpg',
    secondimagePath: 'https://cloud.githubusercontent.com/assets/9848162/21343241/abc10d78-c64a-11e6-80ec-1da6915b185e.jpg',
    thirdimagePath: 'https://cloud.githubusercontent.com/assets/9848162/21343240/abbaf99c-c64a-11e6-8225-54ea004d3f27.jpg',
    title: "Burgi Crystal Mesh",
    description: "This exceptional, Burgi women's, dazzling, crystal, quartz watch is perfect for any occasion. The bezel features genuine crystals with a sunray and flower pattern dial. ",
    price: 45,
    sale: 'show',
  }),
  new Women({
    imagePath: 'https://cloud.githubusercontent.com/assets/9848162/21343305/eb2c1cfa-c64a-11e6-9732-9aa807517375.jpg',
    secondimagePath: 'https://cloud.githubusercontent.com/assets/9848162/21343304/eb284b84-c64a-11e6-8d67-fc229d240c1f.jpg',
    thirdimagePath: 'https://cloud.githubusercontent.com/assets/9848162/21343303/eb228532-c64a-11e6-96d1-d6f0fa4cc9b4.jpg',
    title: "Michael Kors MK3192",
    description: "Add a sparkling touch of elegance and glamour to any ensemble with this stunning women's watch from MichaelKors. Made of gorgeous rose goldtone stainless steel, this exquisite watch looks just as fabulous with everyday outfits as it does with evening gowns. Water-resistantconstruction offers peace of mind as you go about your daily activities, while genuine quartz movement ensures you stay on time, all the time.",
    price: 168,
    sale: 'none',
  }),
  new Women({
    imagePath: 'https://cloud.githubusercontent.com/assets/9848162/21343342/1ae5b190-c64b-11e6-91f9-04b8f3e900d0.jpg',
    secondimagePath: 'https://cloud.githubusercontent.com/assets/9848162/21343340/1adb5272-c64b-11e6-9813-55134a6d63e0.jpg',
    thirdimagePath: 'https://cloud.githubusercontent.com/assets/9848162/21343341/1ae1742c-c64b-11e6-8a1f-9549022f1c37.jpg',
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
