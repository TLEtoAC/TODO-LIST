import pool from "../database/db";import { displayAll, NewtaskModel, EdittaskModel, DeletetaskModel } from "../models/userModels";

export const displaytasks = async(req,res) => {
    const response = await displayAll();
    res.json(response);
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
    res.json(response);
}