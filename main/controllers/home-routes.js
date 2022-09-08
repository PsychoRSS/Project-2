const router = require('express').Router();

router.get('/', async (req, res) => {
  res.render('all');
});

router.get('/login', async (req, res) => {
    res.render('login');
  });

router.get('/create', async (req, res) => {
    res.render('create');
  });

router.get('/home', async (req, res) => {
    res.render('home');
  });


module.exports = router;