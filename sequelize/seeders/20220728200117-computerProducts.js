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
  await queryInterface.bulkInsert('computerProducts', [
    {
      name: "5950x AMD CPU",
      price: "$599.99",
      description: "Ultra fast brand new CPU from AMD with 16 cores for Multithread workloads",
      review: ["Rahmin: This CPU is amazing. Gives me high FPS 10/10 would recommend",
    "Joe: This CPU lets me code at lightspeed. 9.5/10",
    "Blke: I am the cpu. I do not need mortal technologies to execute the power of my brain."],
      createdAt: new Date(),
      updatedAt: new Date()
    },
     // delete previous seed to prevent duplication of products
  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('computerProducts', null, {});
  }
};
