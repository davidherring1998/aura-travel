const db = require("./connection");
const { User, View, Waves } = require("../models");

db.once("open", async () => {
  await View.deleteMany();

  const views = await View.insertMany([
    {
      viewText: "My time in Colorado was really great!",
    },
    {
      viewText:
        "This restaurant was not great if your ever in New York don't go here ",
    },
    {
      viewText:
        "Florida is way to populated but a lot of amusement parks avoid the beaches",
    },
    {
      viewText: "Alaska was amazing a beautiful trip",
    },
    {
      viewText: "You should visit Chattanooga Tn the views are incredible",
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
    {
      waveBody:
        " this is working Loresdaagfm Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      waveBody:
        " this is working Loresdaagfm Ipsum is simply dummy text of the printing and typesetting industry",
    },
  ]);

  console.log("waves seeded..");

  await User.deleteMany();

  await User.create({
    userName: "jswearingen",
    firstName: "Jeremiah",
    lastName: "Swearingen",
    email: "jswearingen18@gmail.com",
    password: "abc12345",
    views: [
      {
        viewText: views[2].viewText,
        wave: wave[3]._id,
      },
    ],
  });
  await User.create({
    userName: "LINZ",
    firstName: "Lindsay",
    lastName: "Bae",
    email: "LINZB@gmail.com",
    password: "abc12345",
    views: [
      {
        viewText: views[3].viewText,
        wave: wave[0]._id,
      },
    ],
  });
  await User.create({
    userName: "DHerring",
    firstName: "David",
    lastName: "Herring",
    email: "emailThree@email.com",
    password: "abc12345",
    views: [
      {
        viewText: views[0].viewText,
        wave: wave[1]._id,
      },
    ],
  });
  await User.create({
    userName: "ShelB",
    firstName: "Shelby",
    lastName: "Bridwell",
    email: "emailFour@email.com",
    password: "abc12345",
    views: [
      {
        viewText: views[1].viewText,
        wave: wave[2]._id,
      },
    ],
  });
  await User.create({
    userName: "crunkichu",
    firstName: "Crunk",
    lastName: "Pichachu",
    email: "email5@email.com",
    password: "abc12345",
    views: [
      {
        viewText: views[4].viewText,
        wave: wave[4]._id,
      },
    ],
  });

  console.log("users seeded");

  process.exit();
});
