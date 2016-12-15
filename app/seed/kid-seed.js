var Kid = require('../models/kid');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/watch');

var kids =  [
  new Kid({
    imagePath: 'http://localhost:3000/images/DakotaFusionMini.jpg',
    secondimagePath: 'http://localhost:3000/images/DakotaFusionMini2.jpg',
    thirdimagePath: 'http://localhost:3000/images/DakotaFusionMini3.jpg',
    title: "Dakota Fusion Mini",
    description: "Fashionable and trendy, the Fusion LED touch watch by Dakota is a fun, vibrant colored watch appearing like just a bracelet. With a touch of the screen, a digital LED time display is lit up right before your eyes.",
    price: 19,
    sale: 'show',
  }),
  new Kid({
    imagePath: 'http://localhost:3000/images/DakotaDigitalSting.jpg',
    secondimagePath: 'http://localhost:3000/images/DakotaDigitalSting2.jpg',
    thirdimagePath: 'http://localhost:3000/images/DakotaDigitalSting3.jpg',
    title: "Dakota Digital Sting",
    description: "Give your child a timepiece that's both attractive and durable with this Dakota Kids digital sting ray watch. The watch is water-resistant with a tough silicone strap to stand up to even the toughest adventures.",
    price: 26,
    sale: 'show',
  }),
  new Kid({
    imagePath: 'http://localhost:3000/images/LilyNilyAssortedCandies.jpg',
    secondimagePath: 'http://localhost:3000/images/LilyNilyAssortedCandies2.jpg',
    thirdimagePath: 'http://localhost:3000/images/LilyNilyAssortedCandies3.jpg',
    title: "Lily Nily Assorted Candies",
    description: "Treat your little girl with this adorable watch by Lily Nily. Crafted of durable plastic and stainless steel, this watch is decorated with yummy assorted candies.",
    price: 13,
    sale: 'show',
  }),
  new Kid({
    imagePath: 'http://localhost:3000/images/DakotaMidsizeFunColor.jpg',
    secondimagePath: 'http://localhost:3000/images/DakotaMidsizeFunColor2.jpg',
    thirdimagePath: 'http://localhost:3000/images/DakotaMidsizeFunColor3.jpg',
    title: "Dakota Midsize Fun Color",
    description: "Teach your young child how to tell the time with this colorful midsize digital watch. Equipped with a stopwatch, countdown timer, and alarm, this sporty watch is water-resistant for long-lasting use.",
    price: 30,
    sale: 'none',
  }),
  new Kid({
    imagePath: 'http://localhost:3000/images/DakotaFusionRacecar.jpg',
    secondimagePath: 'http://localhost:3000/images/DakotaFusionRacecar2.jpg',
    thirdimagePath: 'http://localhost:3000/images/DakotaFusionRacecar3.jpg',
    title: "Dakota Fusion Racecar",
    description: "The Fusion Digital Race Car by Dakota makes telling time fun and unique. The case looks like an actual race car and has many additional functions including a stopwatch, alarm and light up display. The soft silicone strap adds style and comfort. A must have for any child that loves race cars ",
    price: 40,
    sale: 'show',
  }),
  new Kid({
    imagePath: 'http://localhost:3000/images/BulbBotzStormtrooper.jpg',
    secondimagePath: 'http://localhost:3000/images/BulbBotzStormtrooper2.jpg',
    thirdimagePath: 'http://localhost:3000/images/BulbBotzStormtrooper3.jpg',
    title: "BulbBotz Stormtrooper",
    description: "Join the epic battle with this Star Wars Storm Trooper watch by Bulbbotz. This cool watch features an easy-to-read LCD display and a super awesome BulbBotz Storm Trooper shaped case. This minifigure watch has a digital movement with glass material on the display. A printed PU strap secures with a classic tang buckle to complete the design. ",
    price: 60,
    sale: 'none',
  }),
  new Kid({
    imagePath: 'http://localhost:3000/images/LEGONinjagoPirates.jpg',
    secondimagePath: 'http://localhost:3000/images/LEGONinjagoPirates2.jpg',
    thirdimagePath: 'http://localhost:3000/images/LEGONinjagoPirates3.jpg',
    title: "LEGO Ninjago Pirates",
    description: "Join the Ninjango universe with a Sky Pirates Lloyd wristwatch from LEGO. This wristwatch features a ninja Lloyd decal on the face and interchangeable links- including an action figure link so that kids can create and build their own unique style.",
    price: 58,
    sale: 'none',
  }),
  new Kid({
    imagePath: 'http://localhost:3000/images/LEGOCitySpecialPolice.jpg',
    secondimagePath: 'http://localhost:3000/images/LEGOCitySpecialPolice2.jpg',
    thirdimagePath: 'http://localhost:3000/images/LEGOCitySpecialPolice3.jpg',
    title: "LEGO City Special Police",
    description: "Stop in the name of the law and join in the fun and adventure of the LEGO Police Force. This watch features fun dial art and soft, yet durable interchangeable links that you can add and subtract to build your own unique watch.You’ll detain all of the bad guys every time with a police officer mini action toy that is included with this fully buildable kid’s link watch.",
    price: 30,
    sale: 'display',
  }),
  new Kid({
    imagePath: 'http://localhost:3000/images/LEGODCBatman.jpg',
    secondimagePath: 'http://localhost:3000/images/LEGODCBatman2.jpg',
    thirdimagePath: 'http://localhost:3000/images/LEGODCBatman3.jpg',
    title: "LEGO DC Batman",
    description: "Become the hero Gotham deserves with the new Super Heroes Batman watch. This cool watch has a character decal on the dial with easy-to-read number markers. Colorful links with interchangeable character pieces complete the design.",
    price: 50,
    sale: 'none',
  }),
  new Kid({
    imagePath: 'http://localhost:3000/images/LEGODCWonderWoman.jpg',
    secondimagePath: 'http://localhost:3000/images/LEGODCWonderWoman2.jpg',
    thirdimagePath: 'http://localhost:3000/images/LEGODCWonderWoman3.jpg',
    title: "LEGO DC Wonder Woman",
    description: "Save the day and join in the fun and adventure of the LEGO Superheroes world with this Wonder Woman link watch. This watch features fun dial art and soft, yet durable interchangeable links that you can add and subtract to build your own unique watch. You’ll defeat all of the villans every time with a Wonder Woman mini action toy that is included with this fully buildable kid’s link watch.",
    price: 60,
    sale: 'none',
  }),
  new Kid({
    imagePath: 'http://localhost:3000/images/GenevaPlatinumPrincess.jpg',
    secondimagePath: 'http://localhost:3000/images/GenevaPlatinumPrincess2.jpg',
    thirdimagePath: 'http://localhost:3000/images/GenevaPlatinumPrincess3.jpg',
    title: "Geneva Princess",
    description: "This adorable Geneva Platinum girl's watch is assembled with a silicone strap that features textured princess and heart designs. The dial displays colored numbers and a heart accent. A buckle clasp completes this great look.",
    price: 50,
    sale: 'show',
  }),
  new Kid({
    imagePath: 'http://localhost:3000/images/GirlsPinkPrincess.jpg',
    secondimagePath: 'http://localhost:3000/images/GirlsPinkPrincess2.jpg',
    thirdimagePath: 'http://localhost:3000/images/GirlsPinkPrincess3.jpg',
    title: "Girl's Pink Princess",
    description: "Added attachments make it easy to update this fun girls' Princess Time Teacher watch. Crafted with a pretty pink silicone band, this fashionable watch features a shimmery pink dial that is highlighted with a glittery silvertone heart and Arabic numerals.",
    price: 40,
    sale: 'display',
  }),
];

var done = 0;
for (var i=0; i < kids.length; i++){
	kids[i].save(function(err, result){
		done++;
		if(done === kids.length){
			exit();
		}
	});
}

function exit(){
	mongoose.disconnect();
}
