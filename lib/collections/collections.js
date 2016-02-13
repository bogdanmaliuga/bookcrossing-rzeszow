Meteor.methods({
    updateUser: function (data) {
        check(data,{
            name:String,
            email:String
        });
        'use strict';

        var user = Meteor.user();
        var update = {};

        if (!!data.email && _.first(user.emails).address !== data.email) {
            update['emails.0.address'] = data.email;
        }


        if (!!data.name && data.name !== user.username) {

            update['username'] = data.name;
            
        }

 
        if (!_.isEmpty(update)) {
            Meteor.users.update({
                _id: user._id
            }, {
                $set: update
            });
        }
    }
});