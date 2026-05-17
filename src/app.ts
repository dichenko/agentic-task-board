import express from "express";

type Task = {
  id: string;
  title: string;
  status: "todo" | "in_progress" | "done";
  createdAt: string;
};

export const app = express();
const tasks: Task[] = [];

app.get("/health", (_req, res) => {
  res.json({ ok: true });
});

app.get("/tasks", (_req, res) => {
  res.json(tasks);
});
