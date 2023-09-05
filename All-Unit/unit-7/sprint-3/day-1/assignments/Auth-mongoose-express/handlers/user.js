const User = require("../database/schema")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const crypto = require('crypto')

const SECRET_KEY = 'mohim123wedje12hwy'

async function register(req, res) {
    let { name, email, password } = req.body;
    console.log(name, email, password)
    const user = await User.findOne({ email, })
    if (user) {
        return res.send({
            response: 'error',
            message: 'User Registed Already'
        })
    }
    password = bcrypt.hashSync(password, 10)
    await User.create({
        name,
        email,
        password,
        verifyEmailOtp: crypto.randomInt(1000, 9999),
        verifiedEmail: false
    })
    return res.send({
        response: 'success',
        message: 'User Registed Successfully'
    })
}


async function login(req, res) {
    let { email, password } = req.body;

    const user = await User.findOne({
        email,
     })
    if (!user) {
        res.status(404).send({
            response: 'error',
            message: 'email not found'
        })
    }



  
    const matched = bcrypt.compareSync(password, user.password)
    if (matched) {
        const { name, email, verifiedEmail } = user
        const token = jwt.sign({ name, email, verifiedEmail }, SECRET_KEY)
        res.send({
            response: 'Success',
            token,
            user: {
                name,
                email,
                verifiedEmail
            }
        })
    }
    else {
        res.status(400).send({
            response: 'error',
            message: 'invalid password'
        })
    }
}


async function getLogedInUser(req, res) {

}

module.exports = {
    register,
    login,
    getLogedInUser
}