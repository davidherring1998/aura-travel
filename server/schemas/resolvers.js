const { User, View, Waves } = require("../models");
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    user: async () => {
      return await User.find();
    },
    wave: async () => {
      return await Waves.find();
    },
    view: async () => {
      return await View.find();
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      // return {  user };
      return { token, user };
    },
    addView: async (parent, args) => {
      const view = await View.create(args);
      const updateUser = await User.findByIdAndUpdate({ _id: context.user._id }, { $push: { views: view._id } }, { new: true })
      return { updateUser };
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("User is not logged in!");
    },
    updateView: async (parent, { _id }) => {
      return await View.findByIdAndUpdate(_id, { new: true });
    },
    login: async (parent, { userName, password }) => {
      const user = await User.findOne({ userName });

      if (!user) {
        throw new AuthenticationError("Incorrect password or user name!");
      }

      const correctPW = await user.isCorrectPassword(password);

      if (!correctPW) {
        throw new AuthenticationError("Incorrect password or user name!");
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;

//  User:() => db.Users.list(),
//    UserById:(root,args,context,info) => {
//    return db.User.get(args.id);
//  }
// }
// const User = {
//     fullName:(root,args,context,info) => {
//        return root.firstName+":"+root.lastName
//     }
//  }
// //const View = {

//  //   }
// // }//const Waves = {
//  //   }
// // }
// // module.exports = resolvers;
