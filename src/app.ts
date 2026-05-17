import { randomUUID } from "node:crypto";
import express from "express";

type Task = {
  id: string;
  title: string;
  status: "todo" | "in_progress" | "done";
  createdAt: string;
};

export const app = express();
app.use(express.json());

const tasks: Task[] = [];

export const resetTasks = (): void => {
  tasks.length = 0;
};

app.get("/health", (_req, res) => {
  res.json({ ok: true });
});

app.get("/tasks", (_req, res) => {
  res.json(tasks);
});

app.post("/tasks", (req, res) => {
  const { title } = req.body ?? {};

  if (typeof title !== "string" || title.trim() === "") {
    return res.status(400).json({ error: "Title is required" });
  }

  const task: Task = {
    id: randomUUID(),
    title: title.trim(),
    status: "todo",
    createdAt: new Date().toISOString(),
  };

  tasks.push(task);

  return res.status(201).json(task);
});
