import { User } from "../user";

describe("User", () => {
  it("should create an instance of User", () => {
    const user = new User({
      name: "John Doe",
    });
    expect(user).toBeInstanceOf(User);
  });

  it("should have a name property", () => {
    const user = new User({
      name: "John Doe",
    });

    expect(user.name).toBe("John Doe");
  });
});
