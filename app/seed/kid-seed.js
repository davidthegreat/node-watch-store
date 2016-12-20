var Kid = require('../models/kid');
var mongoose = require('mongoose');

// mongoose.connect('localhost:27017/watch');
mongoose.connect('mongodb://heroku_33201xb5:l9kqdokv0b3errs1e08mre8ufv@ds139288.mlab.com:39288/heroku_33201xb5');

var kids =  [
  new Kid({
    imagePath: 'https://cloud.githubusercontent.com/assets/9848162/21339956/fc7002a0-c637-11e6-98ef-c5b6f3cee9fa.jpg',
    secondimagePath: 'https://cloud.githubusercontent.com/assets/9848162/21339955/fc6d9bb4-c637-11e6-8ced-34ef78d7c174.jpg',
    thirdimagePath: 'https://cloud.githubusercontent.com/assets/9848162/21339954/fc69d178-c637-11e6-82a1-22d2e31e3a41.jpg',
    title: "Dakota Fusion Mini",
    description: "Fashionable and trendy, the Fusion LED touch watch by Dakota is a fun, vibrant colored watch appearing like just a bracelet. With a touch of the screen, a digital LED time display is lit up right before your eyes.",
    price: 19,
    sale: 'show',
  }),
  new Kid({
    imagePath: 'https://cloud.githubusercontent.com/assets/9848162/21339981/2c8c9034-c638-11e6-86a0-4a5fa4a20fea.jpg',
    secondimagePath: 'https://cloud.githubusercontent.com/assets/9848162/21339980/2c883ee4-c638-11e6-9fb9-abb911c818b6.jpg',
    thirdimagePath: 'https://cloud.githubusercontent.com/assets/9848162/21339979/2c81cffa-c638-11e6-8137-be564ec0d44f.jpg',
    title: "Dakota Digital Sting",
    description: "Give your child a timepiece that's both attractive and durable with this Dakota Kids digital sting ray watch. The watch is water-resistant with a tough silicone strap to stand up to even the toughest adventures.",
    price: 26,
    sale: 'show',
  }),
  new Kid({
    imagePath: 'https://cloud.githubusercontent.com/assets/9848162/21340002/60133642-c638-11e6-88b1-4fce7feab0ba.jpg',
    secondimagePath: 'https://cloud.githubusercontent.com/assets/9848162/21340001/6003982c-c638-11e6-8918-56eab5c56141.jpg',
    thirdimagePath: 'https://cloud.githubusercontent.com/assets/9848162/21340000/5fedbd90-c638-11e6-9931-5ff17cbee12b.jpg',
    title: "Lily Nily Candies",
    description: "Treat your little girl with this adorable watch by Lily Nily. Crafted of durable plastic and stainless steel, this watch is decorated with yummy assorted candies.",
    price: 13,
    sale: 'show',
  }),
  new Kid({
    imagePath: 'https://cloud.githubusercontent.com/assets/9848162/21340154/65f0d960-c639-11e6-865d-830f7791b46c.jpg',
    secondimagePath: 'https://cloud.githubusercontent.com/assets/9848162/21340153/65ee8f7a-c639-11e6-9e8f-9afb09034677.jpg',
    thirdimagePath: 'https://cloud.githubusercontent.com/assets/9848162/21340152/65ebd17c-c639-11e6-90b1-342ccbab6a5f.jpg',
    title: "Dakota Midsizex Color",
    description: "Teach your young child how to tell the time with this colorful midsize digital watch. Equipped with a stopwatch, countdown timer, and alarm, this sporty watch is water-resistant for long-lasting use.",
    price: 30,
    sale: 'none',
  }),
  new Kid({
    imagePath: 'https://cloud.githubusercontent.com/assets/9848162/21340543/2552c38e-c63c-11e6-8085-4c75d488f1c4.jpg',
    secondimagePath: 'https://cloud.githubusercontent.com/assets/9848162/21340542/2551fe18-c63c-11e6-9334-d5905e2bcd8d.jpg',
    thirdimagePath: 'https://cloud.githubusercontent.com/assets/9848162/21340541/255096f4-c63c-11e6-9d77-eda320459d9c.jpg',
    title: "Dakota Fusion Racecar",
    description: "The Fusion Digital Race Car by Dakota makes telling time fun and unique. The case looks like an actual race car and has many additional functions including a stopwatch, alarm and light up display. The soft silicone strap adds style and comfort. A must have for any child that loves race cars ",
    price: 40,
    sale: 'show',
  }),
  new Kid({
    imagePath: 'https://cloud.githubusercontent.com/assets/9848162/21340648/cabfab52-c63c-11e6-8925-fb35c502295e.jpg',
    secondimagePath: 'https://cloud.githubusercontent.com/assets/9848162/21340647/cabe9456-c63c-11e6-9811-4bd56f0a820b.jpg',
    thirdimagePath: 'https://cloud.githubusercontent.com/assets/9848162/21340646/cabaffda-c63c-11e6-9451-09e24e085607.jpg',
    title: "BulbBotz Stormtrooper",
    description: "Join the epic battle with this Star Wars Storm Trooper watch by Bulbbotz. This cool watch features an easy-to-read LCD display and a super awesome BulbBotz Storm Trooper shaped case. This minifigure watch has a digital movement with glass material on the display. A printed PU strap secures with a classic tang buckle to complete the design. ",
    price: 60,
    sale: 'none',
  }),
  new Kid({
    imagePath: 'https://cloud.githubusercontent.com/assets/9848162/21340849/efc9b09a-c63d-11e6-8cca-481a218150e1.jpg',
    secondimagePath: 'https://cloud.githubusercontent.com/assets/9848162/21340847/efc4102c-c63d-11e6-97e5-07b34bf8959f.jpg',
    thirdimagePath: 'https://cloud.githubusercontent.com/assets/9848162/21340848/efc940f6-c63d-11e6-9232-478c685a5978.jpg',
    title: "LEGO Ninjago Pirates",
    description: "Join the Ninjango universe with a Sky Pirates Lloyd wristwatch from LEGO. This wristwatch features a ninja Lloyd decal on the face and interchangeable links- including an action figure link so that kids can create and build their own unique style.",
    price: 58,
    sale: 'none',
  }),
  new Kid({
    imagePath: 'https://cloud.githubusercontent.com/assets/9848162/21341241/60a3cc4a-c640-11e6-9970-8251fde48e32.jpg',
    secondimagePath: 'https://cloud.githubusercontent.com/assets/9848162/21341240/609da126-c640-11e6-86db-3db2adf9b878.jpg',
    thirdimagePath: 'https://cloud.githubusercontent.com/assets/9848162/21341239/60873e9a-c640-11e6-99a5-abc44a1f60a7.jpg',
    title: "LEGO City Special Police",
    description: "Stop in the name of the law and join in the fun and adventure of the LEGO Police Force. This watch features fun dial art and soft, yet durable interchangeable links that you can add and subtract to build your own unique watch.You’ll detain all of the bad guys every time with a police officer mini action toy that is included with this fully buildable kid’s link watch.",
    price: 30,
    sale: 'display',
  }),
  new Kid({
    imagePath: 'https://cloud.githubusercontent.com/assets/9848162/21341417/456c97b2-c641-11e6-9f8f-eb4be91d54e7.jpg',
    secondimagePath: 'https://cloud.githubusercontent.com/assets/9848162/21341416/45663886-c641-11e6-9a47-4e8838c373c9.jpg',
    thirdimagePath: 'https://cloud.githubusercontent.com/assets/9848162/21341415/45601a28-c641-11e6-8740-1ac45ee977d8.jpg',
    title: "LEGO DC Batman",
    description: "Become the hero Gotham deserves with the new Super Heroes Batman watch. This cool watch has a character decal on the dial with easy-to-read number markers. Colorful links with interchangeable character pieces complete the design.",
    price: 50,
    sale: 'none',
  }),
  new Kid({
    imagePath: 'https://cloud.githubusercontent.com/assets/9848162/21341506/b2491c7a-c641-11e6-82b6-eefd60862fd6.jpg',
    secondimagePath: 'https://cloud.githubusercontent.com/assets/9848162/21341505/b244b89c-c641-11e6-836a-e5fa67fce026.jpg',
    thirdimagePath: 'https://cloud.githubusercontent.com/assets/9848162/21341504/b23c97a2-c641-11e6-94ce-a5a99fb979e4.jpg',
    title: "LEGO DC Wonder Woman",
    description: "Save the day and join in the fun and adventure of the LEGO Superheroes world with this Wonder Woman link watch. This watch features fun dial art and soft, yet durable interchangeable links that you can add and subtract to build your own unique watch. You’ll defeat all of the villans every time with a Wonder Woman mini action toy that is included with this fully buildable kid’s link watch.",
    price: 60,
    sale: 'none',
  }),
  new Kid({
    imagePath: 'https://cloud.githubusercontent.com/assets/9848162/21341584/252b119e-c642-11e6-9d6a-1a9c8ede0498.jpg',
    secondimagePath: 'https://cloud.githubusercontent.com/assets/9848162/21341583/25274c58-c642-11e6-8b4e-0189b286c37e.jpg',
    thirdimagePath: 'https://cloud.githubusercontent.com/assets/9848162/21341582/2521b7ca-c642-11e6-942a-ff8379ac25e2.jpg',
    title: "Geneva Princess",
    description: "This adorable Geneva Platinum girl's watch is assembled with a silicone strap that features textured princess and heart designs. The dial displays colored numbers and a heart accent. A buckle clasp completes this great look.",
    price: 50,
    sale: 'show',
  }),
  new Kid({
    imagePath: 'https://cloud.githubusercontent.com/assets/9848162/21341621/4327f28e-c642-11e6-8d0d-6724c5b62536.jpg',
    secondimagePath: 'https://cloud.githubusercontent.com/assets/9848162/21341620/43233668-c642-11e6-90c9-2bbbe29af846.jpg',
    thirdimagePath: 'https://cloud.githubusercontent.com/assets/9848162/21341619/431c1892-c642-11e6-9913-8433c79b1acf.jpg',
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


// var Kid = require('../models/kid');
// var mongoose = require('mongoose');
//
// mongoose.connect('mongodb://heroku_33201xb5:l9kqdokv0b3errs1e08mre8ufv@ds139288.mlab.com:39288/heroku_33201xb5');
//
// var kids =  [
//   new Kid({
//     imagePath: 'https://world-of-watches.herokuapp.com/images/DakotaFusionMini.jpg',
//     secondimagePath: 'https://world-of-watches.herokuapp.com/images/DakotaFusionMini2.jpg',
//     thirdimagePath: 'https://world-of-watches.herokuapp.com/images/DakotaFusionMini3.jpg',
//     title: "Dakota Fusion Mini",
//     description: "Fashionable and trendy, the Fusion LED touch watch by Dakota is a fun, vibrant colored watch appearing like just a bracelet. With a touch of the screen, a digital LED time display is lit up right before your eyes.",
//     price: 19,
//     sale: 'show',
//   }),
//   new Kid({
//     imagePath: 'https://world-of-watches.herokuapp.com/images/DakotaDigitalSting.jpg',
//     secondimagePath: 'https://world-of-watches.herokuapp.com/images/DakotaDigitalSting2.jpg',
//     thirdimagePath: 'https://world-of-watches.herokuapp.com/images/DakotaDigitalSting3.jpg',
//     title: "Dakota Digital Sting",
//     description: "Give your child a timepiece that's both attractive and durable with this Dakota Kids digital sting ray watch. The watch is water-resistant with a tough silicone strap to stand up to even the toughest adventures.",
//     price: 26,
//     sale: 'show',
//   }),
//   new Kid({
//     imagePath: 'https://world-of-watches.herokuapp.com/images/LilyNilyAssortedCandies.jpg',
//     secondimagePath: 'https://world-of-watches.herokuapp.com/images/LilyNilyAssortedCandies2.jpg',
//     thirdimagePath: 'https://world-of-watches.herokuapp.com/images/LilyNilyAssortedCandies3.jpg',
//     title: "Lily Nily Candies",
//     description: "Treat your little girl with this adorable watch by Lily Nily. Crafted of durable plastic and stainless steel, this watch is decorated with yummy assorted candies.",
//     price: 13,
//     sale: 'show',
//   }),
//   new Kid({
//     imagePath: 'https://world-of-watches.herokuapp.com/images/DakotaMidsizeFunColor.jpg',
//     secondimagePath: 'https://world-of-watches.herokuapp.com/images/DakotaMidsizeFunColor2.jpg',
//     thirdimagePath: 'https://world-of-watches.herokuapp.com/images/DakotaMidsizeFunColor3.jpg',
//     title: "Dakota Midsizex Color",
//     description: "Teach your young child how to tell the time with this colorful midsize digital watch. Equipped with a stopwatch, countdown timer, and alarm, this sporty watch is water-resistant for long-lasting use.",
//     price: 30,
//     sale: 'none',
//   }),
//   new Kid({
//     imagePath: 'https://world-of-watches.herokuapp.com/images/DakotaFusionRacecar.jpg',
//     secondimagePath: 'https://world-of-watches.herokuapp.com/images/DakotaFusionRacecar2.jpg',
//     thirdimagePath: 'https://world-of-watches.herokuapp.com/images/DakotaFusionRacecar3.jpg',
//     title: "Dakota Fusion Racecar",
//     description: "The Fusion Digital Race Car by Dakota makes telling time fun and unique. The case looks like an actual race car and has many additional functions including a stopwatch, alarm and light up display. The soft silicone strap adds style and comfort. A must have for any child that loves race cars ",
//     price: 40,
//     sale: 'show',
//   }),
//   new Kid({
//     imagePath: 'https://world-of-watches.herokuapp.com/images/BulbBotzStormtrooper.jpg',
//     secondimagePath: 'https://world-of-watches.herokuapp.com/images/BulbBotzStormtrooper2.jpg',
//     thirdimagePath: 'https://world-of-watches.herokuapp.com/images/BulbBotzStormtrooper3.jpg',
//     title: "BulbBotz Stormtrooper",
//     description: "Join the epic battle with this Star Wars Storm Trooper watch by Bulbbotz. This cool watch features an easy-to-read LCD display and a super awesome BulbBotz Storm Trooper shaped case. This minifigure watch has a digital movement with glass material on the display. A printed PU strap secures with a classic tang buckle to complete the design. ",
//     price: 60,
//     sale: 'none',
//   }),
//   new Kid({
//     imagePath: 'https://world-of-watches.herokuapp.com/images/LEGONinjagoPirates.jpg',
//     secondimagePath: 'https://world-of-watches.herokuapp.com/images/LEGONinjagoPirates2.jpg',
//     thirdimagePath: 'https://world-of-watches.herokuapp.com/images/LEGONinjagoPirates3.jpg',
//     title: "LEGO Ninjago Pirates",
//     description: "Join the Ninjango universe with a Sky Pirates Lloyd wristwatch from LEGO. This wristwatch features a ninja Lloyd decal on the face and interchangeable links- including an action figure link so that kids can create and build their own unique style.",
//     price: 58,
//     sale: 'none',
//   }),
//   new Kid({
//     imagePath: 'https://world-of-watches.herokuapp.com/images/LEGOCitySpecialPolice.jpg',
//     secondimagePath: 'https://world-of-watches.herokuapp.com/images/LEGOCitySpecialPolice2.jpg',
//     thirdimagePath: 'https://world-of-watches.herokuapp.com/images/LEGOCitySpecialPolice3.jpg',
//     title: "LEGO City Special Police",
//     description: "Stop in the name of the law and join in the fun and adventure of the LEGO Police Force. This watch features fun dial art and soft, yet durable interchangeable links that you can add and subtract to build your own unique watch.You’ll detain all of the bad guys every time with a police officer mini action toy that is included with this fully buildable kid’s link watch.",
//     price: 30,
//     sale: 'display',
//   }),
//   new Kid({
//     imagePath: 'https://world-of-watches.herokuapp.com/images/LEGODCBatman.jpg',
//     secondimagePath: 'https://world-of-watches.herokuapp.com/images/LEGODCBatman2.jpg',
//     thirdimagePath: 'https://world-of-watches.herokuapp.com/images/LEGODCBatman3.jpg',
//     title: "LEGO DC Batman",
//     description: "Become the hero Gotham deserves with the new Super Heroes Batman watch. This cool watch has a character decal on the dial with easy-to-read number markers. Colorful links with interchangeable character pieces complete the design.",
//     price: 50,
//     sale: 'none',
//   }),
//   new Kid({
//     imagePath: 'https://world-of-watches.herokuapp.com/images/LEGODCWonderWoman.jpg',
//     secondimagePath: 'https://world-of-watches.herokuapp.com/images/LEGODCWonderWoman2.jpg',
//     thirdimagePath: 'https://world-of-watches.herokuapp.com/images/LEGODCWonderWoman3.jpg',
//     title: "LEGO DC Wonder Woman",
//     description: "Save the day and join in the fun and adventure of the LEGO Superheroes world with this Wonder Woman link watch. This watch features fun dial art and soft, yet durable interchangeable links that you can add and subtract to build your own unique watch. You’ll defeat all of the villans every time with a Wonder Woman mini action toy that is included with this fully buildable kid’s link watch.",
//     price: 60,
//     sale: 'none',
//   }),
//   new Kid({
//     imagePath: 'https://world-of-watches.herokuapp.com/images/GenevaPlatinumPrincess.jpg',
//     secondimagePath: 'https://world-of-watches.herokuapp.com/images/GenevaPlatinumPrincess2.jpg',
//     thirdimagePath: 'https://world-of-watches.herokuapp.com/images/GenevaPlatinumPrincess3.jpg',
//     title: "Geneva Princess",
//     description: "This adorable Geneva Platinum girl's watch is assembled with a silicone strap that features textured princess and heart designs. The dial displays colored numbers and a heart accent. A buckle clasp completes this great look.",
//     price: 50,
//     sale: 'show',
//   }),
//   new Kid({
//     imagePath: 'https://world-of-watches.herokuapp.com/images/GirlsPinkPrincess.jpg',
//     secondimagePath: 'https://world-of-watches.herokuapp.com/images/GirlsPinkPrincess2.jpg',
//     thirdimagePath: 'https://world-of-watches.herokuapp.com/images/GirlsPinkPrincess3.jpg',
//     title: "Girl's Pink Princess",
//     description: "Added attachments make it easy to update this fun girls' Princess Time Teacher watch. Crafted with a pretty pink silicone band, this fashionable watch features a shimmery pink dial that is highlighted with a glittery silvertone heart and Arabic numerals.",
//     price: 40,
//     sale: 'display',
//   }),
// ];
//
// var done = 0;
// for (var i=0; i < kids.length; i++){
// 	kids[i].save(function(err, result){
// 		done++;
// 		if(done === kids.length){
// 			exit();
// 		}
// 	});
// }
//
// function exit(){
// 	mongoose.disconnect();
// }
