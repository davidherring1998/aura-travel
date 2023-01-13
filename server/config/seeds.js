const db = require("./connection");
const { User, View, Waves} = require("../models");

db.once("open", async () => {

  await View.deleteMany();

  const views = await View.insertMany([
    {
      viewText:
        "Hey this is working// Lorem Ipewrwersum is simply dummy text of the printing and typesetting industry",
    },
    {
      viewText:
        "Lorem Iewwerpsum is simply dummy text of the printing and typesetting industry",
    },
    {
      viewText:
        "Lorem Ipsuewrewm is simply dummy text of the printing and typesetting industry",
    },
    {
      viewText:
        "Lorem Ipserweum is simply dummy text of the printing and typesetting industry",
    },
    {
      viewText:
        "Lorem Ipwerewsum is simply dummy text of the printing and typesetting industry",
    },
  ]);

  console.log("view is Seeded");

  await User.deleteMany();

  await User.create({
    userName: "hey",
    firstName: "fname",
    lastName: "lname",
    email: "email@you.com",
    password: "abc12345",
  });
  await User.create({
    userName: "testUserTwo",
    firstName: "fname",
    lastName: "lname",
    email: "emailTwo@email.com",
    password: "abc12345",
  });
  await User.create({
    userName: "testUserThree",
    firstName: "fname",
    lastName: "lname",
    email: "emailThree@email.com",
    password: "abc12345",
  });
  await User.create({
    userName: "testUserFour",
    firstName: "fname",
    lastName: "lname",
    email: "emailFour@email.com",
    password: "abc12345",
  });

  console.log("users seeded");

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

  process.exit();
});
