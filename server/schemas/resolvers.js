const { User, View, Waves } = require("../models");
const {signToken} = require("../utils/auth");

const resolvers = {
    Query: {
        user: async (parent,args,context) => {
            if (context.user) {
            const user = await User.findById(context.user._id)
         }
        view: async (parent, {user, userName, firstName, lastName, email}) => {
       
    }
}
}
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
