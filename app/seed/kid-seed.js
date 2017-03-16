var Kid = require('../models/kid');
var mongoose = require('mongoose');

// mongoose.connect('localhost:27017/watch');
mongoose.connect('mongodb://heroku_33201xb5:l9kqdokv0b3errs1e08mre8ufv@ds139288.mlab.com:39288/heroku_33201xb5');

var kids =  [
  new Kid({
    imagePath: 'https://ak1.ostkcdn.com/images/products/9375920/Dakota-Fusion-Mini-Black-Hidden-Touch-Digital-LED-Watch-71129958-4c52-48ef-9b30-465daa4a072f_600.jpg',
    secondimagePath: 'https://ak1.ostkcdn.com/images/products/9375920/Dakota-Fusion-Mini-Black-Hidden-Touch-Digital-LED-Watch-ee01f5c5-07df-4be5-8370-f307a9a006f1_600.jpg',
    thirdimagePath: 'https://ak1.ostkcdn.com/images/products/9375920/Dakota-Fusion-Mini-Black-Hidden-Touch-Digital-LED-Watch-162091f9-cb39-4283-b5c4-9a6ffa1820ba_600.jpg',
    title: "Dakota Fusion Mini",
    description: "Fashionable and trendy, the Fusion LED touch watch by Dakota is a fun, vibrant colored watch appearing like just a bracelet. With a touch of the screen, a digital LED time display is lit up right before your eyes.",
    price: 19,
    sale: 'show',
    starone: 'show',
    startwo: 'none',
    starthree: 'none',
    starfour: 'none',
    starfive: 'none'
  }),
  new Kid({
    imagePath: 'https://ak1.ostkcdn.com/images/products/12932798/Dakota-Kids-Digital-Sting-Ray-Sport-Watch-f2a2610e-9cbb-4d4a-8122-3e4c9c533f01_600.jpg',
    secondimagePath: 'https://ak1.ostkcdn.com/images/products/12932798/Dakota-Kids-Digital-Sting-Ray-Sport-Watch-a85d6aa0-7be6-46ba-8b2c-3195f164f0c0_600.jpg',
    thirdimagePath: 'https://ak1.ostkcdn.com/images/products/12932798/Dakota-Kids-Digital-Sting-Ray-Sport-Watch-1f4575c5-2c90-473e-b7d5-d4c69a4d1f18_600.jpg',
    title: "Dakota Digital Sting",
    description: "Give your child a timepiece that's both attractive and durable with this Dakota Kids digital sting ray watch. The watch is water-resistant with a tough silicone strap to stand up to even the toughest adventures.",
    price: 26,
    sale: 'show',
    starone: 'show',
    startwo: 'show',
    starthree: 'none',
    starfour: 'none',
    starfive: 'none'
  }),
  new Kid({
    imagePath: 'https://ak1.ostkcdn.com/images/products/9276457/Lily-Nily-Kids-Plastic-and-Stainless-Steel-Assorted-Candies-Watch-c8e83f86-d6dd-4b75-a7e0-1e4100a95e7f_600.jpg',
    secondimagePath: 'https://ak1.ostkcdn.com/images/products/9276457/Lily-Nily-Kids-Plastic-and-Stainless-Steel-Assorted-Candies-Watch-4f13f358-05cc-486c-b5d2-01f97a9488d3_600.jpg',
    thirdimagePath: 'https://ak1.ostkcdn.com/images/products/9276457/Lily-Nily-Kids-Plastic-and-Stainless-Steel-Assorted-Candies-Watch-6ec251a8-92a5-49c4-b7c4-d8802819b661_600.jpg',
    title: "Lily Nily Candies",
    description: "Treat your little girl with this adorable watch by Lily Nily. Crafted of durable plastic and stainless steel, this watch is decorated with yummy assorted candies.",
    price: 13,
    sale: 'show',
    starone: 'show',
    startwo: 'show',
    starthree: 'show',
    starfour: 'none',
    starfive: 'none'
  }),
  new Kid({
    imagePath: 'https://ak1.ostkcdn.com/images/products/13266814/Dakota-Kids-and-Teens-Plastic-and-Stainless-Steel-Midsize-Fun-Color-Digital-Watch-830dfd78-1290-43c8-8848-3264ca4e2f41_600.jpg',
    secondimagePath: 'https://ak1.ostkcdn.com/images/products/13266814/Dakota-Kids-and-Teens-Plastic-and-Stainless-Steel-Midsize-Fun-Color-Digital-Watch-b1e388ae-92c6-4470-99de-b9e37a64f719_600.jpg',
    thirdimagePath: 'https://ak1.ostkcdn.com/images/products/13266814/Dakota-Kids-and-Teens-Plastic-and-Stainless-Steel-Midsize-Fun-Color-Digital-Watch-8ab4dcf0-2dd9-45c4-b3cb-daab7c16c596_600.jpg',
    title: "Dakota Midsizex Color",
    description: "Teach your young child how to tell the time with this colorful midsize digital watch. Equipped with a stopwatch, countdown timer, and alarm, this sporty watch is water-resistant for long-lasting use.",
    price: 30,
    sale: 'none',
    starone: 'show',
    startwo: 'show',
    starthree: 'show',
    starfour: 'show',
    starfive: 'none'
  }),
  new Kid({
    imagePath: 'https://ak1.ostkcdn.com/images/products/9481569/Dakota-Fusion-Kids-Red-Digital-Racecar-Watch-1f367cae-414a-4079-804c-d343147c29b6_600.jpg',
    secondimagePath: 'https://ak1.ostkcdn.com/images/products/9481569/Dakota-Fusion-Kids-Red-Digital-Racecar-Watch-10e9283d-61f7-4ecb-a576-226fc6239d39_600.jpg',
    thirdimagePath: 'https://ak1.ostkcdn.com/images/products/9481569/Dakota-Fusion-Kids-Red-Digital-Racecar-Watch-ac72eab2-d231-412d-8506-9a9b48be5278_600.jpg',
    title: "Dakota Fusion Racecar",
    description: "The Fusion Digital Race Car by Dakota makes telling time fun and unique. The case looks like an actual race car and has many additional functions including a stopwatch, alarm and light up display. The soft silicone strap adds style and comfort. A must have for any child that loves race cars. ",
    price: 40,
    sale: 'show',
    starone: 'show',
    startwo: 'show',
    starthree: 'show',
    starfour: 'show',
    starfive: 'show'
  }),
  new Kid({
    imagePath: 'https://ak1.ostkcdn.com/images/products/10703847/BulbBotz-Star-Wars-Kids-Light-Up-Stormtrooper-Watch-5b7e43f3-550a-44d0-a1ad-e6ec541a9263_600.jpg',
    secondimagePath: 'https://ak1.ostkcdn.com/images/products/10703847/BulbBotz-Star-Wars-Kids-Light-Up-Stormtrooper-Watch-036c7ed3-1a2c-4577-ad9a-968966b9b315_600.jpg',
    thirdimagePath: 'https://ak1.ostkcdn.com/images/products/10703847/BulbBotz-Star-Wars-Kids-Light-Up-Stormtrooper-Watch-edec2b89-10c9-43bb-be4c-18fc5386741c_600.jpg',
    title: "BulbBotz Stormtrooper",
    description: "Join the epic battle with this Star Wars Storm Trooper watch by Bulbbotz. This cool watch features an easy-to-read LCD display and a super awesome BulbBotz Storm Trooper shaped case. This minifigure watch has a digital movement with glass material on the display. A printed PU strap secures with a classic tang buckle to complete the design. ",
    price: 60,
    sale: 'none',
    starone: 'show',
    startwo: 'show',
    starthree: 'show',
    starfour: 'show',
    starfive: 'show'
  }),
  new Kid({
    imagePath: 'https://ak1.ostkcdn.com/images/products/13574230/LEGO-Ninjago-Sky-Pirates-Lloyd-Minifigure-Link-Watch-02798263-b425-41a6-8e15-ee700c80bdb2_600.jpg',
    secondimagePath: 'https://ak1.ostkcdn.com/images/products/13574230/LEGO-Ninjago-Sky-Pirates-Lloyd-Minifigure-Link-Watch-30b37d67-6df1-40c8-900b-c4341e018c2f_600.jpg',
    thirdimagePath: 'https://ak1.ostkcdn.com/images/products/13574230/LEGO-Ninjago-Sky-Pirates-Lloyd-Minifigure-Link-Watch-c315625d-1c2b-4cd8-9ff5-2d796d0707dd_600.jpg',
    title: "LEGO Ninjago Pirates",
    description: "Join the Ninjango universe with a Sky Pirates Lloyd wristwatch from LEGO. This wristwatch features a ninja Lloyd decal on the face and interchangeable links- including an action figure link so that kids can create and build their own unique style.",
    price: 58,
    sale: 'none',
  }),
  new Kid({
    imagePath: 'https://ak1.ostkcdn.com/images/products/10625658/LEGO-City-Special-Police-Kids-Minifigure-Interchangeable-Links-Watch-9235ec1d-f39d-4889-81df-ea170649034c_600.jpg',
    secondimagePath: 'https://ak1.ostkcdn.com/images/products/10625658/LEGO-City-Special-Police-Kids-Minifigure-Interchangeable-Links-Watch-2fa9ea73-8517-4ccd-bfc9-24023a1cd7f1_600.jpg',
    thirdimagePath: 'https://ak1.ostkcdn.com/images/products/10625658/LEGO-City-Special-Police-Kids-Minifigure-Interchangeable-Links-Watch-1456dde1-f52c-4836-bba3-1089f8ee9bad_600.jpg',
    title: "LEGO City Special Police",
    description: "Stop in the name of the law and join in the fun and adventure of the LEGO Police Force. This watch features fun dial art and soft, yet durable interchangeable links that you can add and subtract to build your own unique watch.You’ll detain all of the bad guys every time with a police officer mini action toy that is included with this fully buildable kid’s link watch.",
    price: 30,
    sale: 'display',
    starone: 'show',
    startwo: 'show',
    starthree: 'show',
    starfour: 'show',
    starfive: 'show'
  }),
  new Kid({
    imagePath: 'https://ak1.ostkcdn.com/images/products/10283728/LEGO-Super-Heroes-Batman-Kids-Minifigure-Interchangeable-Links-Watch-de8214e5-2cec-439a-972a-b86aeb8c35c0_600.jpg',
    secondimagePath: 'https://ak1.ostkcdn.com/images/products/10283728/LEGO-Super-Heroes-Batman-Kids-Minifigure-Interchangeable-Links-Watch-0e25d5cf-a398-4508-905b-b51759cac84c_600.jpg',
    thirdimagePath: 'https://ak1.ostkcdn.com/images/products/10283728/LEGO-Super-Heroes-Batman-Kids-Minifigure-Interchangeable-Links-Watch-f21bd3e3-964d-443e-8ab4-37f79a15f492_600.jpg',
    title: "LEGO DC Batman",
    description: "Become the hero Gotham deserves with the new Super Heroes Batman watch. This cool watch has a character decal on the dial with easy-to-read number markers. Colorful links with interchangeable character pieces complete the design.",
    price: 50,
    sale: 'none',
    starone: 'show',
    startwo: 'show',
    starthree: 'show',
    starfour: 'show',
    starfive: 'show'
  }),
  new Kid({
    imagePath: 'https://ak1.ostkcdn.com/images/products/10625657/LEGO-DC-Super-Heroes-Wonder-Woman-Kids-Minifigure-Interchangeable-Links-Watch-c489e0da-195c-47b7-b8f5-19d7dfda0d69_600.jpg',
    secondimagePath: 'https://ak1.ostkcdn.com/images/products/10625657/LEGO-DC-Super-Heroes-Wonder-Woman-Kids-Minifigure-Interchangeable-Links-Watch-949e2ce6-1893-4d64-8053-8c6c5a780855_600.jpg',
    thirdimagePath: 'https://ak1.ostkcdn.com/images/products/10625657/LEGO-DC-Super-Heroes-Wonder-Woman-Kids-Minifigure-Interchangeable-Links-Watch-46984df3-211d-4628-8856-29a360170f13_600.jpg',
    title: "LEGO DC Wonder Woman",
    description: "Save the day and join in the fun and adventure of the LEGO Superheroes world with this Wonder Woman link watch. This watch features fun dial art and soft, yet durable interchangeable links that you can add and subtract to build your own unique watch. You’ll defeat all of the villans every time with a Wonder Woman mini action toy that is included with this fully buildable kid’s link watch.",
    price: 60,
    sale: 'none',
    starone: 'show',
    startwo: 'show',
    starthree: 'show',
    starfour: 'show',
    starfive: 'show'
  }),
  new Kid({
    imagePath: 'https://ak1.ostkcdn.com/images/products/9441382/Geneva-Platinum-Girls-Princess-Design-Silicone-Watch-3fb62fd5-abb6-4067-a9b4-198097197d66_600.jpg',
    secondimagePath: 'https://ak1.ostkcdn.com/images/products/9441382/Geneva-Platinum-Girls-Princess-Design-Silicone-Watch-707a9983-fb23-4ab9-b47c-a0341826bed4_600.jpg',
    thirdimagePath: 'https://ak1.ostkcdn.com/images/products/9441382/Geneva-Platinum-Girls-Princess-Design-Silicone-Watch-1a525d0d-bf66-474d-8cd9-18a4575bd93a_600.jpg',
    title: "Geneva Princess",
    description: "This adorable Geneva Platinum girl's watch is assembled with a silicone strap that features textured princess and heart designs. The dial displays colored numbers and a heart accent. A buckle clasp completes this great look.",
    price: 50,
    sale: 'show',
    starone: 'show',
    startwo: 'show',
    starthree: 'show',
    starfour: 'show',
    starfive: 'none'
  }),
  new Kid({
    imagePath: 'https://ak1.ostkcdn.com/images/products/9218627/Girls-Pink-Princess-Time-Teacher-Watch-7822fa81-5255-4cc8-94aa-0b4984082de5_600.jpg',
    secondimagePath: 'https://ak1.ostkcdn.com/images/products/9218627/Girls-Pink-Princess-Time-Teacher-Watch-caacbba4-458c-41fd-a417-b3d668f7c130_600.jpg',
    thirdimagePath: 'https://ak1.ostkcdn.com/images/products/9218627/Girls-Pink-Princess-Time-Teacher-Watch-f88751cd-b9fb-44ef-9bcb-7dffd17bf4fa_600.jpg',
    title: "Girl's Pink Princess",
    description: "Added attachments make it easy to update this fun girls' Princess Time Teacher watch. Crafted with a pretty pink silicone band, this fashionable watch features a shimmery pink dial that is highlighted with a glittery silvertone heart and Arabic numerals.",
    price: 40,
    sale: 'display',
    starone: 'show',
    startwo: 'show',
    starthree: 'show',
    starfour: 'none',
    starfive: 'none'
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
