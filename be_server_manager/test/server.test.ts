import app from "../src/server";
import request = require("supertest");

describe("POST /server_log", () => {
    it("should return 200 OK", (done) => {
        return request(app).post("/server_log").expect(200, done);
    });
});
