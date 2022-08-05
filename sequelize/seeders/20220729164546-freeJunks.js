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
    'freeJunks',
    [
      {
        name: 'chair',
        price: 'Free',
        description:
          'This is just a random free chair. Please take it off our hands..',
        review: ['Joe: I LOVE FREE STUFF!!!'],
        img: 'https://bit.ly/3zJZnTl',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'table',
        price: 'Free',
        description:
          'This is just a random free table. Please take it off our hands..',
        review: ['Joe: WOW MORE FREE STUFF!!'],
        img: 'https://bit.ly/3PL8QPO',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Record Player',
        price: 'Free',
        description: 'This probably doesn',
        review: [
          'Joe: Whoever stole my free record player, not cool man.',
          'Jason: This record player looks great on my shelf thank you!',
        ],
        img: 'https://bit.ly/3PQoIAE',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Old Fridge',
        price: 'Free',
        description: 'An old free fidge if you want I guess...',
        review: [
          'Jason: Why does it not work?',
          'Joe: Hey jason, thanks for letting me take it off your hands. I wrote code to fix it haha get rekt nerd!',
        ],
        img: 'https://bit.ly/3vqBv4s',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Washing Machine',
        price: 'Free',
        description:
          'A washing machine we found somewhere. Take it please we do not want this.',
        review: [
          'Joe: Man this does not work at all, but it was free, so I LOVE IT!!',
        ],
        img: 'https://bit.ly/3Q328o8',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Monitor',
        price: 'Free',
        description: 'An old monitor that hopefully still works..',
        review: [
          'Jason: Yeah I hooked up New World to it and, it plays, but this some poopy quality.',
        ],
        img: 'https://bit.ly/3Jhaia6',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '',
        price: 'Free',
        description: '',
        review: [''],
        img: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Recliner',
        price: 'Free',
        description:
          'A reclining chair I found in my attic please get it off my hands. It might have lice..',
        review: [
          "West: I'LL TAKE THAT GAMBLE ANY DAY THANK YOU FOR THE FREE CHAIR WOOOOOO",
          'West: update, I have lice now.',
        ],
        img: 'https://bit.ly/3zE9Iz9',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Basketball Hoop',
        price: 'Free',
        description: 'An old basketball hoop. Rusty, but works!',
        review: [
          'Carlos: I absolutely dunked on some kid while playing with this thing, and the rim snapped completely off..',
        ],
        img: 'https://bit.ly/3zJOq45',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '',
        price: 'Free',
        description: '',
        review: [''],
        img: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Cabinet',
        price: 'Free',
        description: 'An old cabinent that can store a bunch of things',
        review: [
          "Jason: I stored all 200 of my rasberry Pi's in there. Pretty solid if you ask me",
        ],
        img: 'https://bit.ly/3PONOQi',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
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
    await queryInterface.bulkDelete("freeJunks", null, {})
  }
};
