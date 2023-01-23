const db = require("./connection");
const { User, View, Waves } = require("../models");

db.once("open", async () => {
  await View.deleteMany();

  const views = await View.insertMany([
    {
      viewText: "Hey this is my view about my trip",
    },
    {
      viewText: "Alright let me talk about my trip to Colorado",
    },
    {
      viewText: "Let me share my journey to Florida and the theme parks",
    },
    {
      viewText:
        "My trip was not great heres where it went wrong and what could be better",
    },
    {
      viewText: "Trip to Alaska was really killer!!!!",
    },
    {
      viewText: "Drive was absolutely terrible do not recommend!!",
    },
  ]);

  console.log("view is Seeded");

  await Waves.deleteMany();

  const wave = await Waves.insertMany([
    {
      waveBody:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      waveBody:
        "Loresdaagfm Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      waveBody:
        "Loresdaagfm Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      waveBody:
        " this is working Loresdaagfm Ipsum is simply dummy text of the printing and typesetting industry",
    },
  ]);

  console.log("waves seeded..");

  await User.deleteMany();

  await User.create({
    userName: "crunkichu",
    firstName: "Jeremiah",
    lastName: "Swearingen",
    email: "jswearingen18@gmail.com",
    password: "abc12345",
    views: {
      viewText: views[2].viewText,
      wave: wave[3]._id,
    },
  });
  await User.create({
    userName: "david@herring",
    firstName: "David",
    lastName: "Herring",
    email: "david.herring@gmail.com",
    password: "abc12345",
    views: [
      {
        viewText: views[3].viewText,
        wave: wave[0]._id,
      },
    ],
  });
  await User.create({
    userName: "Linz",
    firstName: "Lindsay",
    lastName: "Bae",
    email: "Lindsay.bae@gmail.com",
    password: "abc12345",
    views: [
      {
        viewText: views[0].viewText,
        wave: wave[1]._id,
      },
    ],
  });
  await User.create({
    userName: "Shelby.Bridwell",
    firstName: "Shelby",
    lastName: "Bridwell",
    email: "Shelby.Bridwell@gmail.com",
    password: "abc12345",
    views: [
      {
        viewText: views[1].viewText,
        wave: wave[2]._id,
      },
    ],
  });

  console.log("users seeded");

  process.exit();
});
