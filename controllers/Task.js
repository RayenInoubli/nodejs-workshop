import Task from "../models/Task.js";

export const getTasks = async (req, res, next) => {
  console.log(req.params.id);
  const tasks = await Task.find();

  res.status(200).json({ data: tasks, msg: "success" });
};

export const getTask = async (req, res, next) => {
  console.log(req.params.id);
  const task = await Task.findOne({ _id: req.params.id });

  res.status(200).json({ data: task, msg: "success" });
};

export const createTask = async (req, res, next) => {
  console.log(req.body);
  const task = new Task(req.body);
  await task.save();

  res.status(200).json({ data: req.body, msg: "created" });
};

export const updateTask = (req, res, next) => {
  console.log(req.body);
  console.log(req.params.id);

  res.status(200).json({ data: req.body, msg: "updated" });
};

export const deleteTask = async (req, res, next) => {
  console.log(req.params.id);
  await Task.deleteOne({});
  res.status(200).json({ msg: "deletes" });
};