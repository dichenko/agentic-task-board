import express from "express";

export const app = express();
const tasks: unknown[] = [];

app.get("/health", (_req, res) => {
  res.json({ ok: true });
});

app.get("/tasks", (_req, res) => {
  res.json(tasks);
});
