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
  await queryInterface.bulkInsert('freeJunks', [
    {
      name: "Chair",
      price: "free",
      description: "it's a free chair just take it please.",
      review: ["Joe: Man I love free stuff! 10/10",
      "Stacy: Yeah I really enjoyed this product! It really helped me sit. 9/10",
      "EthanG: Yeah man this chair is sweet. I love it. Allows me to put my butt somewhere. 10/10"],
      createdAt: new Date(),
      updatedAt: new Date()
    } // delete previous seed in order to prevent duplicate items
  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('freeJunks', null, {});
  }
};
