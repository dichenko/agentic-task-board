import request from "supertest";
import { describe, expect, it } from "vitest";

import { app } from "../src/app.js";

describe("GET /tasks", () => {
  it("returns an empty array by default", async () => {
    const response = await request(app).get("/tasks").expect(200);

    expect(response.body).toEqual([]);
  });
});
