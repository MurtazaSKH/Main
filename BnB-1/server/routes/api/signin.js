// const User = require('../../models/User');
// const UserSession = require('../../models/UserSession');
//
// module.exports = (app) => {
//   /*
//    * Sign up
//    */
//   app.post('/api/account/signup', (req, res, next) => {
//     const { body } = req;
//     const {password} = body;
//     const {name} = body;
//     const {phone} = body;
//     console.log(password);
//     let {email} = body;
//
//     if (!email) {
//       return res.send({
//         success: false,
//         message: 'Error: Email cannot be blank.'
//       });
//     }
//     if (!password) {
//       return res.send({
//         success: false,
//         message: 'Error: Password cannot be blank.'
//       });
//     }
//     if (!name) {
//       return res.send({
//         success: false,
//         message: 'Error: Name cannot be blank.'
//       });
//     }
//     if (!phone) {
//       return res.send({
//         success: false,
//         message: 'Error: phone cannot be blank.'
//       });
//     }
//     email = email.toLowerCase();
//     email = email.trim();
//     // Steps:
//     // 1. Verify email doesn't exist
//     // 2. Save
//     User.find({
//       email: email
//     }, (err, previousUsers) => {
//       if (err) {
//         return res.send({
//           success: false,
//           message: 'Error: Server error'
//         });
//       } else if (previousUsers.length > 0) {
//         return res.send({
//           success: false,
//           message: 'Error: Account already exist.'
//         });
//       }
//       // Save the new user
//       const newUser = new User();
//       newUser.email = email;
//       newUser.password = newUser.generateHash(password);
//       newUser.name = name;
//       newUser.phone = phone;
//       // newUser.Name = Name;
//       newUser.save((err, user) => {
//         if (err) {
//           return res.send({
//             success: false,
//             message: 'Error: Server error'
//           });
//         }
//         return res.send({
//           success: true,
//           message: 'Signed up'
//         });
//       });
//     });
//   }); // end of sign up endpoint
//
//   app.post('/api/account/signin',(req,res,next)=> {
//     const {body} = req;
//     const {password} = body;
//     let {email} = body;
//
//     if(!email)
//     {
//       return res.send({
//         success: false,
//         message: 'Error: Email cannot be blank.'
//       });
//     }
//     if (!password)
//     {
//       return res.send({
//         success: false,
//         message: 'Error: Password cannot be blank.'
//       });
//     }
//
//     email = email.toLowerCase();
//     email = email.trim();
//
//     User.find({
//       email:email
//     },
//     (err,users) => {
//       if(err){
//         console.log('err 2:', errr);
//         return res.send({
//           success: false,
//           message: 'Error: server error'
//         });
//       }
//       if(users.length!=1){
//         return res.send({
//           success: false,
//           message: 'Invalid User'
//         });
//       }
//
//       const user=users[0];
//       if(!user.validPassword(password)) {
//         return res.send({
//           success: false,
//           message: 'Invalid User'
//         });
//       }
//
//       // Correct User
//       const userSession= new UserSession();
//       userSession.userId = user._id;
//       // UserSession.Name=Name;
//       userSession.save ((err,doc) => {
//         if(err) {
//           console.log(err);
//           return res.send ({
//             success: false,
//             message: 'Server Error'
//           });
//         }
//
//         return res.send ({
//           success: true,
//           message: 'Signed In',
//           token: doc._id
//         });
//       });
//
//     });
//   });
//
//
//   // logout end point
//
//   app.get('/api/account/logout', (req,res,next) =>{
//     const {query} = req;
//     const {token} = query;
//
//     UserSession.findOneAndUpdate ({
//       _id:token,
//       isDeleted: false
//     },
//     {
//       $set: {
//         isDeleted: true
//       }
//     },null, (err,sessions) =>{
//       if (err) {
//         console.log(err);
//         return res.send ({
//           success: false,
//           message: 'Error: Server error'
//         });
//       }
//       console.log('Logged out successfully');
//       return res.send({
//         success: true,
//         message: 'Logged out!'
//       });
//     });
//   });
//
//   app.get('/api/account/verify',(req,res,next)=> {
//     const {query} = req;
//     const {token} = query;
//
//     UserSession.find ({
//       _id:token,
//       isDeleted:false
//     }, (err,sessions) => {
//       if(err) {
//         console.log(err);
//         return res.send({
//           success:false,
//           message: 'Error: Server Error'
//         });
//       }
//       if(sessions.length !=1) {
//         return res.send ({
//           success: false,
//           message: 'Error: Invalid'
//         });
//       } else {
//         return res.send({
//           success: true,
//           message: 'User is logged in'
//         });
//       }
//     });
//   });
//
//
// };
