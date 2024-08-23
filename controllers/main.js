const jwt=require('jsonwebtoken');
const {BadRequestError}=require('../errors');

const login =async(req,res)=>{
    const {username,password}=req.body;
    //Data Validation 
    if(!username || !password){
        throw new BadRequestError('Please provide email and password');
    }
//for demo
    const id=new Date().getDate();

// for better experience for user keep the payload small
    const token=jwt.sign({id,username},process.env.JWTSECRET,{expiresIn:'30d'});

    res.status(200).json({msg:'user created',token})
}
const dashboard= async (req,res)=>{
    console.log(req.user)
    const luckyNnumber = Math.floor(Math.random()*100)
    res.status(200).json({msg:`Hello ${req.user.username}`, secret:`Here is your data, your lucky number is ${luckyNnumber}`})

}
module.exports={
    login,
    dashboard
}