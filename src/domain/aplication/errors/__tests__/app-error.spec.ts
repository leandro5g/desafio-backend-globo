import { AppError } from "../app-error";

describe("AppError", () => {
  it("should be able to create an AppError with default status code", () => {
    const error = new AppError("An error occurred");

    expect(error.message).toBe("An error occurred");
    expect(error.statusCode).toBe(400);
  });

  it("should be able to create an AppError with a custom status code", () => {
    const error = new AppError("Not found", 404);

    expect(error.message).toBe("Not found");
    expect(error.statusCode).toBe(404);
  });
})