const express = require('express');
const mongodb = require('mongoose');
const cors = require('cors');
const url = "mongodb://127.0.0.1:27017/user";
let Users = require('./Schema/UserSchema');
const Services = require('./Schema/ServiceSchema');

const app = express();


app.use(express.json()); //this is used to parse the json in your request body


app.use(cors());

app.get('/', (req, res) => {

    res.send('Hello');
});

//SIGNING UP A NEW USER
app.post('/signup', async (req, res) => {

    const User = mongodb.model('User', Users);

    try {
        if (req.body === null || req.body === undefined || Object.keys(req.body).length === 0) {
            return res.status(400).json({error:'Neither of email, username is provided'});
        }
        const { name, email, password } = req.body;

        if (name === null)
            return res.status(400).json({error:'Either username or email or password is empty'});
        else {
            let existuser = await User.findOne({ email: email });

            if (existuser === null) {

                let newuser = new User({
                    name: name,
                    email: email,
                    password: password
                });


                newuser = await newuser.save();
                res.send(newuser);
            }
            else
                return res.status(400).json({error:'User with this email id already exists, please try with another'});
        }
    }
    catch (e) {
        //  console.log("problem" + e.message);
        res.status(400).json({error: e.message+"Internal Server error"});
    }

});

//LOGIN WITH AN EXISTING USER
app.post('/login', async (req, res) => {

    const User = mongodb.model('User', Users);

    try {
        if (req.body === null || req.body === undefined || Object.keys(req.body).length === 0) {
            return res.status(400).send('Neither of email, username is provided');
        }
        const { email, password } = req.body;

        if (email.length === 0 || password.length === 0)
            return res.status(400).send('Either username or email or password is empty');
        else {
            let existuser = await User.findOne({ email: email });

            if (existuser === null) {
                return res.status(400)
                    .send('You have not registered with this account, try with another one');
            }

            if (password === existuser.password) {
                res.status(200).json(existuser);
            }
            else{
                res.status(400).json({error:"Password or email is wrong"});
            }
        }
    }
    catch (e) {
        console.log("problem" + e.message);
        res.status(400).send("Internal Server error");
    }

});


app.post ('/addservice', async (req, res) => {

    const service = mongodb.model('service',Services);
    try{
    let newservice = new service({
        title: req.body.title,
        description: req.body.description,
        moredesc: req.body.moredesc,
        duration: req.body.duration,
        price: req.body.price
    })

    newservice = await newservice.save();

    res.status(200).json(newservice);
}
catch(e){
    res.status(500).json({error: "Failed to add service" + e.message});
}

});

app.get('/geteachservice',async(req,res)=>{

    let service = mongodb.model('service',Services);

    service = await service.find();

    res.status(200).json(service);

});

mongodb.connect(url).then(
    console.log("Connected")
);
app.listen(3000);


