 Accounts.ui.config({
        passwordSignupFields: 'USERNAME_AND_EMAIL'
    });

Template._loginButtonsLoggedInDropdown.events({
        'click #login-buttons-edit-profile': function (event) {
            event.preventDefault();
            Router.go('editProfile');
        }
    });