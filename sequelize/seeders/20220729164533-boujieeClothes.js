'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
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
      'boujieeClothes',
      [
        {
          name: 'The Blke Suit',
          price: '$4,700.00',
          description:
            'Made from the finest cashmere on this planet, The Blke Suit will make you feel like you are the man himself, Blke.',
          review: [
            "Blke: Yeah I made this so I'm allowed tor eview my own product, it's amazing. Plain and simple.",
            "Carlos: I have the beard to be 'The Blke', so I bought this suit, and oh my gosh, I am Blke.",
            "Blke: I'm placing another review, cause i can, but in reference to Carlos, you cannot be me.",
          ],
          img: 'https://bit.ly/3zlFKPX',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'The Blke Loafers',
          price: '$3,400.00',
          description:
            "In order to be 'The Blke', you must walk like 'The Blke'",
          review: [
            'Carlos: These are the most insane loafers I have ever worn.',
            'Joe: Who would buy these?! *clicks add to cart*',
            'West: Blke has taken over my whole closet.',
          ],
          img: 'https://bit.ly/3PQDuaK',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'The Blke Scarf',
          price: '$450.00',
          description:
            'The only scarf Blke would ever wear, this scarf bolsters immense strength and confidence, as you know you are wearing something "The Blke"',
          review: [
            'Rahmin: This scarf is so smooth I love it! It makes me feel like a real man.',
            'Joe: I was given this scarf by Blke himself as a parting gift, it is fantastic! I love it!',
            'EthanG: Man Blke really hit it out of the park with this one!',
          ],
          img: 'https://bit.ly/3OH8Q1T',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'The Blke Belt',
          price: '$750.00',
          description:
            'The best of the best. The Blke Belt lets you hold your pants up with a premium leather belt.',
          review: [
            'Joe: This belt is amazing! The grip of it is perfect and the material it is made out of is fantastic',
            'EthanG: The amount of love I have for this belt is insane. It goes really well with my outfits!',
            'Jason: I wore this to my job interview and was instantly stopped and given the job. The power of Blke.',
          ],
          img: 'https://bit.ly/3cSL3yZ',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'The Blke Socks',
          price: '$330.00',
          description:
            'The only socks Blke would ever wear. These socks will make you feel like you are on Cloud9.',
          review: [
            'Joe: I secretly wear these during the cohort so Blke can feel my prescence',
            'EthanG: So comfy and such an amazing design. Blke never fails to amaze me with his collection.',
            "Carlos: I've never felt anything more comfy in my life....",
          ],
          img: 'https://bit.ly/3OLpQ7e',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'The Blke Watch',
          price: '$10,000.00',
          description:
            'You want to be like Blke? You need to tell time like Blke. The sleek design will go slenderly well with any suit!',
          review: [
            "Carlos: Instead of checking my phone for the time, I check on 'The Blke Watch' forever now.",
            'Joe: I feel like Thanos with the infinity gauntlet, only this is a watch',
            'West: I never wore any watches until my eyes fell upon this watch...',
          ],
          img: 'https://bit.ly/3zjhSg6',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'The Blke Flower',
          price: '$70.00',
          description:
            'The Blke Flower is a stylish addetive to any suit it touches!',
          review: [
            'Joe: James Bond? More like Blke Bond!',
            "EthanG: The flower really brings the suit's elegancy to a whole different level. I love it!",
          ],
          img: 'https://bit.ly/3zk0AiX',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'The Blke Cufflinks',
          price: '$525.00',
          description:
            'Blke would not be seen in public without his cufflinks on his suit. These would go stylish with any suit you may own!',
          review: [
            "Joe: I put these on my suit, and to be quite honest, I don't see the point in them.",
            'Blke: Hey Joe, take that back right now.',
          ],
          img: 'https://bit.ly/3oIe2rW',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'The Blke Pants',
          price: '$6,000.00',
          description:
            'The Blke Pants is the perfect completion to the Blke Suit. This will bring the outfit full circle so you can truly feel like Blke',
          review: [
            'Joe: I love these pants I feel like a bossman whenever I wear them!',
          ],
          img: 'https://bit.ly/3BxFX5o',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
