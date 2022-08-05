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
      'computerProducts',
      [
        {
          name: '5950x AMD CPU',
          price: '$599.99',
          description:
            'Ultra fast brand new CPU from AMD with 16 cores for Multithread workloads',
          review: [
            'Rahmin: This CPU is amazing. Gives me high FPS 10/10 would recommend',
            'Joe: This CPU lets me code at lightspeed. 9.5/10',
            'Blke: I am the cpu. I do not need mortal technologies to execute the power of my brain.',
          ],
          img: 'https://bit.ly/3zi1kVD',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'GeForce RTX 3080Ti',
          price: '$699.99',
          description:
            'Graphics card that provides ultra performance that gamers crave.',
          review: [
            'Rahmin: I have this graphics card myself and I am so pleased with the performance that it provides!',
            'Jason: I upgraded from my 3060 to this and it was the best purchase of my life!',
            'Joe: I got this just to play League of Legends',
            'Blke: I render my own graphics with my eyes.',
          ],
          img: 'https://bit.ly/3Q9G4bz',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Trident Z DDR4 16GB RAM',
          price: '$115.99',
          description:
            'Incredibly fast, high quality RAM running at 3600Mhz clock speeds',
          review: [
            'Rahmin: This is insane RAM! It provides fast speeds and lots of storage for my memory!',
            'Joe: I bought this for League of Legends (and some coding work I guess..)!',
            'Jason: After realizing RAM is important, I went ahead and bought these and was beyond satisfied!',
          ],
          img: 'https://bit.ly/3cTZlzr',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'ASUS PRIME B550m-A Motherboard',
          price: '$179.99',
          description: 'Top of the line, RYZEN ready motherboard',
          review: [
            'Rahmin: I have this motherboard in my PC right now and I have never been more pleased! The components are well made and reliable!',
            'Joe: This motherboard is the shizzz! Its so incredbily fast and has many features that I can use to upgrade my current build!',
            'Blke: I ate this for breakfast this morning to replenish the power cells in my body',
          ],
          img: 'https://bit.ly/3zKzpzf',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Samsung 970 EVO NVMe M.2 2TB ',
          price: '$109.99',
          description:
            'Super fast M.2 NVMe SSD stick that plugs directly into compatible motherboards for ultra fast load times',
          review: [
            'Rahmin: I have two of these in my current build. The load time with them in a RAID setup is insane! So much faster than an SSD!',
            'Jason: I use this to load New World! It used to take me 2 minutes to load the map, now I only wait 5 seconds!',
            "EthanG: League of Legends opens up before I even click the launch icon. It's that fast.",
            'Blke: I take in data and store it in my gigachad brain which negates the need for mere mortal technology.',
          ],
          img: 'https://bit.ly/3zIykry',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'NZXT Kraken Z73 AIO Liquid Cooler',
          price: '$253.99',
          description:
            'The best of the best All-In-One liquid cooler for your CPU. Keeps temperatures at all-time low and provides ultra fast speeds',
          review: [
            'Rahmin: My CPU refuses to go below 50 degrees celsius with this liquid cooler! BEST. PURCHASE. EVER.',
            "Blke: This is something I actually would buy, but I'd hook it up to my brain since that is the best CPU in the world.",
            'Joe: Man, I am seriously so happy I replaced my air cooler with this! My PC runs so much quieter when I play Leauge of Legends.',
          ],
          img: 'https://bit.ly/3OINO31',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Samsung 870 Evo 2TB SSD',
          price: '$189.99',
          description:
            'Fast and reliable Solid State Drive to store all your filing needs',
          review: [
            "Rahmin: This SSD is perfect for storing all my music, movies, files, and games that I don't play as often! It helps keep my M.2 from slowing down!",
            "Jason: I really don't know why I would get this other than more space to store stuff in my PC, but it's fast!",
            "EthanG: Yeah man I got this cause I wanted more space in my PC that's all.",
            "Blke: My alter ego, Blake, tried to steal this from me and learn what my source of power is. Little does he know, it's filled with cat pictures only.",
          ],
          img: 'https://bit.ly/3vlOJj9',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'NZXT H510',
          price: '$89.99',
          description:
            'A sleek, mid-tower PC case perfect for housing all your PC components',
          review: [
            'Rahmin: I have this case and it is one of the best cases I have! Very roomy and perfect for holding an AIO water cooler and multiple hard drives with lots of space for cooling!',
            'Joe: I was looking for a new case ',
            'Jason: My old case was wayyyyy too small and I wanted something bigger and better, and this does the job super well!',
            'Blke: I never understood why you humans put a cage around raw power, rather than harnessing it and using it to its full potential.',
          ],
          img: 'https://bit.ly/3zHdtol',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Corsair TM30 Performance Thermal Paste',
          price: '$7.99',
          description:
            'The perfect thermal paste for transferring heat between your CPU and respective CPU cooler.',
          review: [
            "Rahmin: I love this thermal paste because of the way it facilitates the heat trasnfer! It's also from a very reliable company!",
            'West: I recently had to replace my thermal paste on my CPU, and this did wonders for me!',
            'Blke: I am the thermal paste. ',
          ],
          img: 'https://bit.ly/3BsFhhD',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'NZXT Vertical GPU Mounting Kit',
          price: '$89.99',
          description:
            'Sturdy steel bracket that holds GPUs vertically and prevents sagging',
          review: [
            'Rahmin: This was such an amazing buy! It makes my GPU stand out way more rather than being a horziontal mount!',
            "Joe: I really don't see the point in this, but it looks cool!",
            "Jason: I bought this and it wouldn't fit in my ultra small case. Might as well buy the NZXT H510 case while I'm here!",
            'Blke: I can walk on water.',
          ],
          img: 'https://bit.ly/3vns2ew',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // delete previous seed to prevent duplication of products
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
    await queryInterface.bulkDelete('computerProducts', null, {});
  },
};

