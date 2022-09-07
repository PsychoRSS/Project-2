const router = require('express').Router();
const Customer = require('../../models/customer');
const data = req.body;

//Login
router.post('/login', async (req, res) => {
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
router.post ('/', async (req, res) => {
  const data = req.body;
  const schema = Joi.object().keys({
      first_name: Joi.string().required(),
      last_name: Joi.string().required(),
      email: Joi.string().email(),
      password: Joi.string().required(),
      address: Joi.string().required(),
      phone_number: Joi.number().required(),
  })
  //validating the data entry fits the database schema properly.
  Joi.validate(data, schema, async (err, value) => {

      if (err){
          res.status(422)({
              status: 'Error',
              message: "Invalid data input format",
              data: data,
          });

          //check for existing email in database. ensures each customer has a unique email address.
      } else {
          let customer = await Customer.findOne({
              where: {email: data.email}
          })
          if(customer){
              res.status(422).json({
                  status: "Error",
                  message: "Email Address is already in use.",
                  data: data,
              })
          } else {
              //creating the new customer in the customer table
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
          }
      }
  })
})

module.exports = router;
    
