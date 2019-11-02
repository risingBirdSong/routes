const Qouter = require('../../models/qoute.js');

module.exports = function (app) {

  app.get('/', (req, res) => {
    res.render('index');
  })

  app.get('/quotes', (req, res) => {
    let myQuotes = [];
    Qouter.find()
      .then(d => {
        myQuotes = d;
        console.log(myQuotes);
        res.render('quotes', { myQuotes: myQuotes })
      });
  })

  app.post('/new', (req, res) => {
    let qouter = new Qouter();
    qouter.name = req.body.name;
    qouter.quote = req.body.quote;
    qouter.date = Date.now("mm-dd-yyyy");
    qouter.save();
    res.redirect('/quotes');
  })

  app.get('/delete', (req, res) => {
    Qouter.deleteMany({})
      .then(r => {
        console.log('removed _____', r);
        res.redirect('/');
      });

  })
}