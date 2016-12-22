var Women = require('../models/women');
var mongoose = require('mongoose');

mongoose.connect('mongodb://heroku_33201xb5:l9kqdokv0b3errs1e08mre8ufv@ds139288.mlab.com:39288/heroku_33201xb5');

var womens =  [
  new Women({
    imagePath: 'https://ak1.ostkcdn.com/images/products/9358329/Michael-Kors-Womens-MK5801-Runway-Pink-Dial-Goldtone-Stainless-Steel-Watch-103f17bd-6ac4-40ed-a652-877220df9964_600.jpg',
    secondimagePath: 'https://ak1.ostkcdn.com/images/products/9358329/Michael-Kors-Womens-MK5801-Runway-Pink-Dial-Goldtone-Stainless-Steel-Watch-44a45a31-caea-4280-8de6-f3b383048d5b_600.jpg',
    thirdimagePath: 'https://ak1.ostkcdn.com/images/products/9358329/Michael-Kors-Womens-MK5801-Runway-Pink-Dial-Goldtone-Stainless-Steel-Watch-163c8733-8237-4452-ab85-9f446727d80a_600.jpg',
    title: "Michael Kors MK5801",
    description: "A bold pink dial houses easy-to-read markers and a convenient calendar date on this fine Michael Kors watch. Crafted with yellow goldtone stainless steel, this timepiece features a push-button clasp and polished finish.This feminine fashion statement and functional timepiece stylishly transitions from casual day wear into evening wear with ease.",
    price: 179,
    sale: 'show',
  }),
  new Women({
    imagePath: 'https://ak1.ostkcdn.com/images/products/7569470/Bulova-Womens-96R153-Precisionist-Stainless-Steel-Diamond-Bezel-Watch-23f55f73-5092-4a94-9e8a-3f2980127b94_600.jpeg',
    secondimagePath: 'https://ak1.ostkcdn.com/images/products/7569470/Bulova-Womens-96R153-Precisionist-Stainless-Steel-Diamond-Bezel-Watch-6308994e-365b-4e06-99f1-5b3ebb0fa7bb_600.jpg',
    thirdimagePath: 'https://ak1.ostkcdn.com/images/products/7569470/Bulova-Womens-96R153-Precisionist-Stainless-Steel-Diamond-Bezel-Watch-e80ac280-1ba6-4349-850c-bdae9e92f305_600.jpg',
    title: "Bulova 96R153",
    description: "A twirling, diamond-encrusted bezel surrounds the mother of pearl centerpiece dial to style this Precisionist watch from Bulova. This beautiful accessory is finished with a classic, multi-link stainless steel bracelet. ",
    price: 139,
    sale: 'none',
  }),
  new Women({
    imagePath: 'https://ak1.ostkcdn.com/images/products/7972139/Movado-Womens-2100006-Collection-Yellow-Goldplated-Swiss-Quartz-Watch-f9ac70b1-379c-4bbf-a7a2-91f4db1ec3c2_600.jpg',
    secondimagePath: 'https://ak1.ostkcdn.com/images/products/7972139/Movado-Womens-2100006-Collection-Yellow-Goldplated-Swiss-Quartz-Watch-643049e3-810b-4e1a-989e-46112dc00021_600.jpg',
    thirdimagePath: 'https://ak1.ostkcdn.com/images/products/7972139/Movado-Womens-2100006-Collection-Yellow-Goldplated-Swiss-Quartz-Watch-c6c72d66-7be8-48a0-a4fc-742a70b0000c_600.jpg',
    title: "Movado 2100006 Quartz",
    description: "Lend an elegant air to any outfit with this sophisticated watch from Movado. The signature Movado dot and goldtone watch hands provide a polished accent on the smooth black dial. With a rich texture, the black leather strap proves a lush complement to the sleek gold-plated stainless steel case.",
    price: 224,
    sale: 'none',
  }),
  new Women({
    imagePath: 'https://ak1.ostkcdn.com/images/products/10277428/SO-CO-New-York-Womens-SoHo-Crystal-Cut-Dial-Stainless-Steel-Mesh-Watch-f075c583-36d8-48e9-9b83-32369b78ecb2_600.jpg',
    secondimagePath: 'https://ak1.ostkcdn.com/images/products/10277428/SO-CO-New-York-Womens-SoHo-Crystal-Cut-Dial-Stainless-Steel-Mesh-Watch-574b2540-d403-4de5-b563-55f391e3b73a_600.jpg',
    thirdimagePath: 'https://ak1.ostkcdn.com/images/products/10277428/SO-CO-New-York-Womens-SoHo-Crystal-Cut-Dial-Stainless-Steel-Mesh-Watch-c0cf687c-3216-4b18-b022-873eb3d27284_600.jpg',
    title: "SO&CO New York SoHo",
    description: "Show off your trendsetting style with this beautiful crystal-cut dial watch. This watch features a beautiful stainless steel mesh bracelet and a precise quartz movement. The minimalist style with three hands and no time markers shows how simple style can be.",
    price: 60,
    sale: 'show',
  }),
  new Women({
    imagePath: 'https://ak1.ostkcdn.com/images/products/11454290/Fossil-Womens-ES3962-Virginia-White-Grey-Dial-Two-Tone-Stainless-Steel-Bracelet-Watch-a1c5b489-bf41-4e4b-a786-f807e3ced2d4_600.jpg',
    secondimagePath: 'https://ak1.ostkcdn.com/images/products/11454290/Fossil-Womens-ES3962-Virginia-White-Grey-Dial-Two-Tone-Stainless-Steel-Bracelet-Watch-e60f28c3-de59-48b8-9542-ca6221ef5c75_600.jpg',
    thirdimagePath: 'https://ak1.ostkcdn.com/images/products/11454290/Fossil-Womens-ES3962-Virginia-White-Grey-Dial-Two-Tone-Stainless-Steel-Bracelet-Watch-202b9c34-5d1e-4e4a-a5f5-c9142db1b97b_600.jpg',
    title: "Fossil ES3962 Virginia",
    description: "Silver-tone stainless steel case and bracelet with white center links. Crystal accented bezel. White/grey dial with rose gold-tone hands and crystal index hour markers. Roman numerals mark the quarter hour positions. Quartz movement. Minera crystal. Push/pull crown. Case: diameter 30mm thickness 9mm. Band: width 7mm length 7.25in. Pushbutton clasp. Water resistant up to 50 meters/165 feet. Functions: hour, minute, second. Fossil Women's ES3962 Virginia White/Grey Dial Two-Tone Stainless Steel Bracelet Watch.All measurements are approximate and may vary slightly from the listed dimensions.Women's watch bands can be sized to fit 6.5-inch to 7.5-inch wrists.",
    price: 300,
    sale: 'none',
  }),
  new Women({
    imagePath: 'https://ak1.ostkcdn.com/images/products/16363011_ORIGINAL_0_600.jpg',
    secondimagePath: 'https://ak1.ostkcdn.com/images/products/16363011_ORIGINAL_1_600.jpg',
    thirdimagePath: 'https://ak1.ostkcdn.com/images/products/16363011_ORIGINAL_2_600.jpg',
    title: "Michael Kors MK5865",
    description: "Exemplifying elegance and sophistication, this watch and its stainless steel construction ensures a durable and gorgeous addition to any wrist. In the center of the dial sits the Michael Kors logo to truly showcase your obvious fashion sense. No matter the occasion or ensemble, this rose gold watch will complement it effortlessly.",
    price: 169,
    sale: 'none',
  }),
  new Women({
    imagePath: 'https://ak1.ostkcdn.com/images/products/8685344/Michael-Kors-Womens-MK2256-Runaway-Slim-Double-Leather-Watch-0d4b396b-3564-44b2-9b34-3757ddf38a28_600.jpg',
    secondimagePath: 'https://ak1.ostkcdn.com/images/products/8685344/Michael-Kors-Womens-MK2256-Runaway-Slim-Double-Leather-Watch-980a962e-322f-4d88-be42-1755d40b54ce_600.jpg',
    thirdimagePath: 'https://ak1.ostkcdn.com/images/products/8685344/Michael-Kors-Womens-MK2256-Runaway-Slim-Double-Leather-Watch-e6f10a65-6ecc-433e-ab66-583a8ac1a300_600.jpg',
    title: "Michael Kors MK2256",
    description: "Iconic designer Michael Kors is one of the top names in American fashion, with fashion forward styles and bold designs. This gold tone ion plated steel and brown leather watch from the Runway collection features a wraparound strap and a gold dial.",
    price: 125,
    sale: 'none',
  }),
  new Women({
    imagePath: 'https://ak1.ostkcdn.com/images/products/10034130/Seiko-Womens-SZZC42-Stainless-Steel-Two-tone-Black-Dial-Watch-537e33c3-125d-427e-a1f7-8e78f4939625_600.jpg',
    secondimagePath: 'https://ak1.ostkcdn.com/images/products/10034130/Seiko-Womens-SZZC42-Stainless-Steel-Two-tone-Black-Dial-Watch-9cdd6347-9146-4b0a-a6cf-092d84f75e52_600.jpg',
    thirdimagePath: 'https://ak1.ostkcdn.com/images/products/10034130/Seiko-Womens-SZZC42-Stainless-Steel-Two-tone-Black-Dial-Watch-054baf0b-6717-4551-87bd-e19e1da1ae40_600.jpg',
    title: "Seiko SZZC42",
    description: "Add a slim accent to your wrist with this gorgeous design from Seiko. The gold and silver-tone stainless steel bracelet and case accent the black dial with gold-tone embellishments. Quartz movement. Water resistant to 30 meters. This elegant women's watch is perfect for everyday or dressy occasions.",
    price: 80,
    sale: 'show',
  }),
  new Women({
    imagePath: 'https://ak1.ostkcdn.com/images/products/2564415/Geneva-Womens-Platinum-Polished-Bangle-Watch-1279b107-bbf6-49d1-9497-e860edc4902a_600.jpg',
    secondimagePath: 'https://ak1.ostkcdn.com/images/products/2564415/Geneva-Womens-Platinum-Polished-Bangle-Watch-54c5ade6-3799-44bf-8081-b6515d8aef39_600.jpg',
    thirdimagePath: 'https://ak1.ostkcdn.com/images/products/2564415/Geneva-Womens-Platinum-Polished-Bangle-Watch-d2beac8d-dfcc-437b-8a27-c096fd4ccad0_600.jpg',
    title: "Geneva Platinum Bangle",
    description: "A gorgeous combination of function and beauty, this bangle watch looks like a piece of jewelry while keeping the time with excellent Japanese quartz precision. With a round silver-plated case and a graceful hinge cuff, the watch sits elegantly on your wrist. Available in three combinations of black or silver dials and goldtone or silvertone cuffs, the watch gives you more or less chromatic contrast, according to your preferences.",
    price: 40,
    sale: 'show',
  }),
  new Women({
    imagePath: 'https://ak1.ostkcdn.com/images/products/6293772/Burgi-Womens-Crystal-Mesh-Bracelet-Quartz-Watch-c2b38b81-a2f8-4003-9830-199cbcd3e931_600.jpg',
    secondimagePath: 'https://ak1.ostkcdn.com/images/products/6293772/Burgi-Womens-Crystal-Mesh-Bracelet-Quartz-Watch-424339de-7a94-4a7d-944c-91c9a3761f7c.jpg',
    thirdimagePath: 'https://ak1.ostkcdn.com/images/products/6293772/Burgi-Womens-Crystal-Mesh-Bracelet-Quartz-Watch-3ab99cc0-8895-4c0c-b9af-e337b8b2858f.jpg',
    title: "Burgi Crystal Mesh",
    description: "This exceptional, Burgi women's, dazzling, crystal, quartz watch is perfect for any occasion. The bezel features genuine crystals with a sunray and flower pattern dial. ",
    price: 45,
    sale: 'show',
  }),
  new Women({
    imagePath: 'https://ak1.ostkcdn.com/images/products/8700606/Michael-Kors-Womens-MK3192-Darci-Rose-Goldtone-Stainless-Steel-Watch-713723a5-169e-4e2b-8289-4ca8c165cfde_600.jpg',
    secondimagePath: 'https://ak1.ostkcdn.com/images/products/8700606/Michael-Kors-Womens-MK3192-Darci-Rose-Goldtone-Stainless-Steel-Watch-5c9aa796-2b81-4154-9794-7d452994ef38_600.jpg',
    thirdimagePath: 'https://ak1.ostkcdn.com/images/products/8700606/Michael-Kors-Womens-MK3192-Darci-Rose-Goldtone-Stainless-Steel-Watch-0223b74d-93d2-4adc-b117-54048cb8b075_600.jpg',
    title: "Michael Kors MK3192",
    description: "Add a sparkling touch of elegance and glamour to any ensemble with this stunning women's watch from MichaelKors. Made of gorgeous rose goldtone stainless steel, this exquisite watch looks just as fabulous with everyday outfits as it does with evening gowns. Water-resistantconstruction offers peace of mind as you go about your daily activities, while genuine quartz movement ensures you stay on time, all the time.",
    price: 168,
    sale: 'none',
  }),
  new Women({
    imagePath: 'https://ak1.ostkcdn.com/images/products/7618049/Movado-Womens-Amorosa-Stainless-Steel-Swiss-Quartz-Watch-2bae0c7d-4c7d-4522-962e-f944c4501776_600.jpeg',
    secondimagePath: 'https://ak1.ostkcdn.com/images/products/7618049/Movado-Womens-Amorosa-Stainless-Steel-Swiss-Quartz-Watch-775c011f-82c5-45fb-aeff-cf2988a7c08a_600.jpg',
    thirdimagePath: 'https://ak1.ostkcdn.com/images/products/7618049/Movado-Womens-Amorosa-Stainless-Steel-Swiss-Quartz-Watch-700518b1-3bfa-401d-b9a2-9317b2de2e54_600.jpg',
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
