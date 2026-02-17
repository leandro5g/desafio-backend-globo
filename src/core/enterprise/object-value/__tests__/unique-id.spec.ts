import { UniqueId } from "../unique-id";

describe("UniqueId", () => {
  it("should create a unique id", () => {
    const uniqueId1 = UniqueId.create();
    const uniqueId2 = UniqueId.create();

    expect(uniqueId1.id).toBeDefined();
    expect(uniqueId2.id).toBeDefined();
    expect(uniqueId1.id).not.toBe(uniqueId2.id);
  });

  it("should create a unique id with a given value", () => {
    const value = "custom-id";
    const uniqueId = UniqueId.create(value);

    expect(uniqueId.id).toBe(value);
  });
});
