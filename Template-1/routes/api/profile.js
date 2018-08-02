const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
// Load validation
const validateProfileFields = require('../../validation/profile');
const validateExperienceFields = require('../../validation/experience');
const validateEducationFields = require('../../validation/education');

const Profile = require('../../models/Profile');
// Load user Profile
const User = require('../../models/User');

router.get('/test',(req,res)=> { res.json({message: 'Profile Works!'});

});

router.get('/',passport.authenticate('jwt',{session: false}), (req,res) =>{
  const errors ={};
  Profile.findOne({user: req.user.id})
    .populate('user',['name','avatar'])
    .then(profile => {
      if(!profile) {
        errors.noprofile = 'There is no profile';
        return res.status(404).json(errors);
      }
      res.json(profile);
    })
    .catch(err => res.status(404).json(err));
});

// Get ALl Profiles

router.get('/all', (req,res) => {
  const errors ={};
  Profile.find()
  .populate('user',['name','avatar'])
  .then(profile => {
    if(!profile) {
      errors.noprofile = 'There is no profile';
      return res.status(404).json(errors)
    }

    res.json(profile);
  })
  .catch(err => res.status(404).json(err));
});

// Get profile by Handle

router.get('/handle/:handle', (req,res) => {
  const errors = {};
  Profile.findOne({handle:req.params.handle})
    .populate('users',['name','avatar'])
    .then(profile=> {
      if(!profile) {
        errors.profile="There is no profile for this user";
        return res.status(404).json(errors);
      }

      res.json(profile);
    })
    .catch(err => res.status(404).json({profile:"No Profile for this user!"}));
});

// Get profile by user ID

router.get('/user/:user_id', (req,res) => {
  const errors = {};
  Profile.findOne({user:req.params.user_id})
    .populate('users',['name','avatar'])
    .then(profile=> {
      if(!profile) {
        errors.profile="There is no profile for this user";
        return res.status(404).json(errors);
      }

      res.json(profile);
    })
    .catch(err => res.status(404).json({profile:"No Profile for this user!"}));
});

router.post('/', passport.authenticate('jwt',{session:false}), (req,res) => {
  // Validation
  const {errors,isValid} = validateProfileFields(req.body);
  if(!isValid){

    return res.status(400).json(errors);
  }
  // Get Fields
  const profileFields ={};
  profileFields.user = req.user.id;
  if(req.body.handle) profileFields.handle=req.body.handle;
  if(req.body.company) profileFields.company=req.body.company;
  if(req.body.website) profileFields.website=req.body.website;
  if(req.body.location) profileFields.location=req.body.location;
  if(req.body.status) profileFields.status=req.body.status;
  // Skills - split into array
  if(typeof req.body.skills !== 'undefined'){
    profileFields.skills=req.body.skills.split(',');
  }
  if(req.body.bio) profileFields.bio=req.body.bio;
  if(req.body.githubusername) profileFields.githubusername=req.body.githubusername;
  // social
  profileFields.social= {};
  if(req.body.youtube) profileFields.social.youtube=req.body.youtube;
  if(req.body.twitter) profileFields.social.twitter=req.body.twitter;

  Profile.findOne({user: req.user.id})
    .then(profile => {
      if(profile) {
        // Update
        Profile.findOneAndUpdate({user:req.user.id},{$set:profileFields},{new: true})
          .then(profile => res.json(profile));
      } else {
        // Create

        // Check to see if handle exists
        Profile.findOne({handle: profileFields.handle})
          .then(profile => {
            if (profile) {
              errors.handle = 'That handle already exists';
              res.status(400).json(error);
            }

            // Save profile
            new Profile(profileFields).save().then(profile => res.json(profile));
          });
      }
    });

});

// Add experience to profile

router.post('/experience',passport.authenticate('jwt',{session:false}), (req,res) => {
  const {errors,isValid} = validateExperienceFields(req.body);
  if(!isValid){

    return res.status(400).json(errors);
  }
  Profile.findOne({user: req.user.id})
    .then(profile => {
      const newExp = {
        title: req.body.title,
        company: req.body.company,
        location: req.body.location,
        from: req.body.from,
        to: req.body.to,
        current: req.body.current,
        description: req.body.description,
      }

      // Add to experience array
      profile.experience.unshift(newExp);
      profile.save().then(profille => res.json(profile));
    })
});

// Add education to profile

router.post('/education',passport.authenticate('jwt',{session:false}), (req,res) => {
  const {errors,isValid} = validateEducationFields(req.body);
  if(!isValid){

    return res.status(400).json(errors);
  }
  Profile.findOne({user: req.user.id})
    .then(profile => {
      const newEdu = {
        school: req.body.school,
        degree: req.body.degree,
        fieldofstudy: req.body.fieldofstudy,
        from: req.body.from,
        to: req.body.to,
        current: req.body.current,
        description: req.body.description,
      }

      // Add to education array
      profile.education.unshift(newEdu);
      profile.save().then(profille => res.json(profile));
    });
});
// Delete experience from profile
router.delete(
  '/experience/:exp_id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id })
      .then(profile => {
        // Get remove index
        const experiences = profile.experience.map( item => item.id);
        // console.log(experiences +"+"+req.params.exp_id );
        if(experiences.includes(req.params.exp_id))
        {
          const removeIndex = profile.experience
            .map(item => item.id)
            .indexOf(req.params.exp_id);

          // Splice out of array
          profile.experience.splice(removeIndex, 1);

          // Save
          profile.save().then(profile => res.json(profile));
        } else {
          return res.status(404).json({tempError: 'Experience does not exist'});
        }

      })
      .catch(err => res.status(404).json(err));
  }
);

// Delete education from profile
router.delete(
  '/education/:exp_id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id })
      .then(profile => {
        // Get remove index
        const edcuations = profile.education.map( item => item.id);
        // console.log(experiences +"+"+req.params.exp_id );
        if(edcuations.includes(req.params.exp_id))
        {
          const removeIndex = profile.education
            .map(item => item.id)
            .indexOf(req.params.exp_id);

          // Splice out of array
          profile.education.splice(removeIndex, 1);

          // Save
          profile.save().then(profile => res.json(profile));
        } else {
          return res.status(404).json({tempError: 'Education does not exist'});
        }

      })
      .catch(err => res.status(404).json(err));
  }
);

  // Alternate solution for Delete
  // profile.experience.remove({_id:req.params.exp_id});
  // profile.save()
  //   .then(profile => res.json(profile))
  //   .catch(err => res.status(404).json(err));

  // @route   DELETE api/profile
  // @desc    Delete user and profile
  // @access  Private
  // router.delete(
  //   '/',
  //   passport.authenticate('jwt', { session: false }),
  //   (req, res) => {
  //     Profile.findOneAndRemove({ user: req.user.id }).then(() => {
  //       User.findOneAndRemove({ _id: req.user.id }).then(() =>
  //         res.json({ success: true })
  //       );
  //     });
  //   }
  // );

// Delete education from profile
module.exports = router;
