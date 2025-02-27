const express=require("express");
const Ticket=require("../models/ticket.model");
const auth=require("../middleware/authmiddleware");
const router=express.Router();
// create
router.post("/",auth,async(req,res)=>{
 try {
        const ticket = new Ticket({...req.body,userId:req.user.id});
        await ticket.save();
        res.status(201).json(ticket);
    } catch (err) {
        res.status(400).json({ msg: err.message })
    }
});
// get user
router.get("/",auth,async(req,res)=>{
    try {
           const tickets = await Ticket.find({userId:req.user.id});
           res.status(201).json(tickets);
       } catch (err) {
           res.status(400).json({ msg: err.message })
       }
   });   
   module.exports=router;