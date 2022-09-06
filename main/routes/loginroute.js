const {models} = require('../models/customer');
exports.loginCustomer = (req, res) => {
    const data = req.body;
    models.Customer.findOne({
        where: {
          email: data.email
        }
      }).then(data => {
        if (!data) {
          res.status(400).json({ message: 'No user account found!' });
          return;
        }
    
        const validPassword = data.checkPassword(data.password);
    
        if (!validPassword) {
          res.status(400).json({ message: 'Incorrect password!' });
          return;
        }
        req.session.save(() => {
          req.session.email = data.email;
          req.session.loggedIn = true;
      
          res.json({ user: dbUserData, message: 'You are now logged in!' });
        });
      });
    }
