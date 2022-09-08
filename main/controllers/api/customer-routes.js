const { Customer } = require('../../models');
const router = require('express').Router();


//Login
router.post('/login', async (req, res) => {
  const data = req.body;
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
  const data = req.body;
              try {
                  let newCustomer = await Customer.create({
                      first_name: data.first_name,
                      last_name: data.last_name,
                      email: data.email,
                      password: data.password,
                      address: data.address,
                      phone_number: data.phone_number,
                  })
                  res.status(200).json({
                      status: 'Success',
                      message: "Customer created successfully!",
                      data: newCustomer.get({plain: true})
                  });
              } catch (error) {
                  res.status(500).json({
                      status: "error",
                      message: "Failed to create new customer.",
                      data: data.email
                  });
              }
          })
     

module.exports = router;
    
