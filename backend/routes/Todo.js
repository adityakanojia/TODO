import express from 'express';
import {TODO} from '../models/ToDoSchema.js';
const router = express.Router();


// router to create  new todo
router.post("/tasks",async(req,res)=>{
    try {
        if(!req.body.title
            ||!req.body.description
            ||!req.body.todo
        ){return res.status(404).send("please enter the required fields")}
        const newtodo={
            title:req.body.title,
            description:req.body.description,
            todo:req.body.todo,
        }
        const todocreated = await TODO.create(newtodo);
        res.status(200).json(todocreated);
    } catch (error) {
        res.status(400).json({message:error})
        console.log(error)
    }
})

//router to show all the totodos present
router.get("/",async(req,res)=>{
    try {
        const alltodos = await TODO.find({});
        res.status(200).json({
            count:alltodos.length,
            data : alltodos
        });
    } catch (error) {
        res.status(404).send("server side error")
    }
})

//route to find a single todo
router.get("/:id",async(req,res)=>{
    try {
        const  {id} = req.params;
        const result = await TODO.findById(id);
        if(!result) return res.status(200).send("no such todo exists")
        return res.status(200).json(result)
    } catch (error) {
        console.log(error);
        res.status(400).send("server side error")
    }
})

//route to update router by id
router.put("/:id",async(req,res)=>{
    try {
        const {id}=req.params;
        const updatetodo = await TODO.findByIdAndUpdate(id,req.body);
        if(!updatetodo) return res.status(400).send("no such todo exists");
        return res.status(200).send("book updates successfully")
        } catch (error) {
            console.log(error)
            return res.status(400).send("server side error")
        }
})

//route to delete  todo by by 
router.delete("/:id",async(req,res)=>{
    try {
        const {id} = req.params;
        const deletedtodo = await TODO.findByIdAndDelete(id);
        if(!deletedtodo) return res.status(400).send("no such todo exists");
        return res.status(200).send("todo deleted sucessfully")
    } catch (error) {
        console.log(error);
        res.status(400).send("server side error");
    }
})
export default router;