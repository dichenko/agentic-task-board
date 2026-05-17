import request from "supertest";
import { beforeEach, describe, expect, it } from "vitest";

import { app, resetTasks } from "../src/app.js";

describe("tasks API", () => {
  beforeEach(() => {
    resetTasks();
  });

  it("returns an empty array by default", async () => {
    const response = await request(app).get("/tasks").expect(200);

    expect(response.body).toEqual([]);
  });

  it("creates a task", async () => {
    const response = await request(app)
      .post("/tasks")
      .send({ title: "Buy milk" })
      .expect(201);

    expect(response.body).toEqual({
      id: expect.any(String),
      title: "Buy milk",
      status: "todo",
      createdAt: expect.any(String),
    });
    expect(Number.isNaN(Date.parse(response.body.createdAt))).toBe(false);
  });

  it("trims the title before saving", async () => {
    const response = await request(app)
      .post("/tasks")
      .send({ title: "  Buy milk  " })
      .expect(201);

    expect(response.body.title).toBe("Buy milk");
  });

  it("returns created tasks from GET /tasks", async () => {
    const createResponse = await request(app)
      .post("/tasks")
      .send({ title: "Buy milk" })
      .expect(201);

    const listResponse = await request(app).get("/tasks").expect(200);

    expect(listResponse.body).toEqual([createResponse.body]);
  });

  it("returns 400 when title is missing", async () => {
    const response = await request(app).post("/tasks").send({}).expect(400);

    expect(response.body).toEqual({ error: "Title is required" });
  });

  it("returns 400 when title is empty after trimming", async () => {
    const response = await request(app)
      .post("/tasks")
      .send({ title: "   " })
      .expect(400);

    expect(response.body).toEqual({ error: "Title is required" });
  });

  it("returns 400 when title is not a string", async () => {
    const response = await request(app)
      .post("/tasks")
      .send({ title: 123 })
      .expect(400);

    expect(response.body).toEqual({ error: "Title is required" });
  });
});
