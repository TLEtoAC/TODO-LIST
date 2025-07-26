import pool from "../database/db.js";
import { displayAll, NewtaskModel, EdittaskModel, DeletetaskModel } from "../models/userModels.js";

export const displaytasks = async (req, res) => {
    const limit = req.query.limit;
    const page = req.query.page;
    try {
        const response = await displayAll();
        console.log(response);
        res.json(response);
    }
    catch (err) {
        console.log("todolist data could not be fetched from database");
    }
}

export const editTasks = async (req,res) => {
    const id = parseInt(req.params.id);
    const { title, content } = req.body;
    const response = await EdittaskModel(id,title,content);
    res.json(response);
}

export const deleteTask = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await DeletetaskModel(id);
    res.json(response);
}

export const newTask = async (req, res) => {
    const { title, content } = req.body;
    const response = await NewtaskModel(title,content);
    console.log(response);
}