    Template.editProfile.events({
        'submit': function (event) {
            event.preventDefault();

            var data = {
                name: event.target.name.value,
                email: event.target.email.value,


            };

            Meteor.call('updateUser', data);
        }



    });