'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  await queryInterface.bulkInsert(
    'babyProducts',
    [
      {
        name: 'diapers',
        price: '$24.99',
        description: '60 top tier baby diapers',
        review: [
          'Joe: I bought these diapers and will only use these from now on. 10/10',
          'Blke: What are these man? They gave me rashes I hate these. -10/10 please discontinue',
          "West: After reading Blke's review, I think I'll pass...",
        ],
        img: 'https://bit.ly/3Ji4hKh',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Baby Nasal Aspirator',
        price: '$19.99',
        description: "Suck the snot out of your baby's nose",
        review: [
          "West: I enjoy sucking the snot out of my baby's nose. There is no better suction quality! 10/10!",
          "Joe: What kind of sorcery is this.. It's fun though! 7.5/10",
          'Blke: The seal around my lips are emaculate. Really enjoy this product. 11/10',
        ],
        img: 'https://bit.ly/3SdOznO',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Baby Pacifier',
        price: '$5.99',
        description: 'If your baby is crying, put this in their mouth.',
        review: [
          'West: This really saved me a lot of headaches while I was in the cohort!',
          'Joe: I should really start investing in these soon!',
          'Blke: yes I quite like this alot actually. It helps me concentrate and focus my powers when I am about to lose control.',
          "EthanG: It's like a pillow in my mout- I mean in my baby's mouth!",
        ],
        img: 'https://bit.ly/3cO4Mjd',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Baby Crib',
        price: '$69.99',
        description: 'A comfy crib for your baby to sleep in',
        review: [
          'West: My baby loves the crib I bought! It even has a safty latch so the wall does not collapse!',
          'Joe: I got mine from Jason for half the price so sucks for all of you who have to pay full price hahahahahahahaha',
          "Blke: I thought this was a mini house when I bought this, what a scam. You'll hear from my lawyers soon.",
        ],
        img: 'https://bit.ly/3BrGQMH',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Baby Monitor',
        price: '$59.99',
        description:
          'A baby monitor that will allow you to listen and view the room your baby is in!',
        review: [
          "Andrea: I use this to distract my cats and make them think I'm in a different room",
          'West: This is an amazing product and I use it daily to keep an eye on my baby!',
          'Blke: I use this to spy on my enemies so I know their every move.',
        ],
        img: 'https://bit.ly/3BrGQMH',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Baby Formula',
        price: '$29.99',
        description:
          'The perfect blend of nutrition your baby needs to nurture and grow!',
        review: [
          'West: I use this to keep my baby nice and healthy everyday!',
          'Joe: I can code something similar to this and would be better than this stuff..',
          'Blke: My source of power is on sale?!',
        ],
        img: 'https://bit.ly/3zCfZeH',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Stroller',
        price: '$49.99',
        description: 'A stroller to take your baby wherever you go!',
        review: [
          'West: My wife and I use this whenever we go on walks or out doing errands and want to take our baby with us!',
          'Joe: This is gonna be great when Little Joe comes into this world!',
          'Blke: My new source of transportation awaits. No one will stop me in the BlkeMobile.',
        ],
        img: 'https://bit.ly/3biLodQ',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Baby Lotion',
        price: '$19.99',
        description: "Keep your baby's skin smooth and rash free",
        review: [
          'Blke: I use this to smooth my skin so my enemies lose their grip on me. ',
        ],
        img: 'https://bit.ly/3PMIIUD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Baby Bottle",
        price: "$5.99",
        description: "Perfect for feeding your baby when it's food time!",
        review: [
          "West: This bottle is so good! I hand it to my baby and he holds it in his mouth and drinks all the milk!",
          "Blke: I fill this with the blood of my enemies after I have slain them to absorb their strength.",
          "Joe: I think using a different function here would be beneficial for the baby's ease of consuming milk, but that's just me though."
        ],
        img: "https://bit.ly/3OFrCqp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Car Seat",
        price: "$299.99",
        description: "A very normal priced car seat for your baby to be safe in a car!",
        review: [
          "West: Yeah this was really expensive for no reason.. but it works!",
          "Joe: THREE HUNDRED DOLLARS?!?!?!?!?!?!?!?!?",
          "Blke: I refuse to use a car seat because I can use the power of levitation to fly to places I need to be."
        ],
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],
    {}
  );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('babyProducts', null, {});
  }
};
