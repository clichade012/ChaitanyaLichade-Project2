const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route')
const app = express();
const { default: mongoose } = require('mongoose');
const moment = require('moment');
mongoose.connect("mongodb+srv://raj_3028:kWaM507ps0Icsdg0@cluster0.pw23ckf.mongodb.net/Project23", {
    useNewUrlParser: true
})

.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )



app.use(bodyParser.json());



//===================== Global Middleware =====================//
app.use(
    function globalMiddleWare(req, res, next) {
        const today = moment();
        const formatted = today.format('YYYY-MM-DD hh:mm:ss');
        console.log("----------------")
        console.log("Date:-", formatted);
        console.log("API Route Info:-", req.originalUrl);
        next()
    }
)
app.use('/', route);


app.listen( 3001, function () {
    console.log('Express app running on port ' + (3001))
});



