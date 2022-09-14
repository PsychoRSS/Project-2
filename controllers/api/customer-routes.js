const { Customer } = require('../../models');
const router = require('express').Router();


//Login
router.post('/login', async (req, res) => {
  const data = req.body;
  console.log(data.email)
  try {
    const customerData = await Customer.findOne({
      where: {
        email : data.email,
      },
    });
    if (!customerData) {
      res.status(400).json({
        message: 'Invalid Login'
      }); return;
    }
    const validPassword = await customerData.checkPassword(data.password);
    if (!validPassword) {
      res.status(400).json({
        message: 'Invalid Login'
      }); return;
    }
    req.session.save(() => {
      req.session.loggedIn = true;
      res.status(200).json({
        user: customerData,
        message: 'You are now logged in.'
      });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Logout
router.post('/logout', (req, res) => {
  if(req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// adding a new customer
router.post ('/create', async (req, res) => {
  console.log('made it to create')
  const data = req.body;
              try {
                  const newCustomer = await Customer.create({
                      first_name: data.first_name,
                      last_name: data.last_name,
                      email: data.email,
                      password: data.password,
                      address: data.address,
                      phone_number: data.phone_number,
                  });
                  req.session.save(() => {
                    req.session.loggedIn = true;
                  res.status(200).json(newCustomer);
                  });
              } catch (error) {
                  res.status(500).json({
                      status: "error",
                      message: "Failed to create new customer.",
                      data: data.email
                  });
              }
            });

            
          
     

module.exports = router;
    
