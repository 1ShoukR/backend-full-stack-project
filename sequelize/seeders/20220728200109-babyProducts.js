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
  await queryInterface.bulkInsert('babyProducts', [
    {
      name: 'diapers',
      price: '$24.99',
      description: '60 top tier baby diapers',
      review: [
        'Joe: I bought these diapers and will only use these from now on. 10/10',
        'Blke: What are these man? They gave me rashes I hate these. -10/10 please discontinue',
        "West: After reading Blke's review, I think I'll pass...",
      ],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Baby Nasal Aspirator',
      price: '$19.99',
      description: "Suck the snot out of your baby's nose",
      review: ["West: I enjoy sucking the snot out of my baby's nose. There is no better suction quality! 10/10!",
    "Joe: What kind of sorcery is this.. It's fun though! 7.5/10",
    "Blke: The seal around my lips are emaculate. Really enjoy this product. 11/10"],
      createdAt: new Date(),
      updatedAt: new Date(),
    }, // delete previous seeds to prevent duplicates of the same item
  ]);
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
