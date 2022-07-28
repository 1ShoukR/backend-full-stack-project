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
  await queryInterface.bulkInsert('boujieeClothes', [
    {
      name: "The Blke Collection for Men",
      price: "$Priceless",
      description: "The best of the best. Nothing can compare to anything created by the hands of Blke.",
      review: ["Blke: I am the only one allowed to review this product, yet I still hate it."],
      createdAt: new Date(),
      updatedAt: new Date()
    } // delete previous seed to prevent duplication
  ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  await queryInterface.bulkDelete('boujieeClothes', null, {});
  }
};
