import { UniqueId } from "../unique-id";

describe("UniqueId", () => {
  it("should create a unique id", () => {
    const uniqueId1 = UniqueId.create();
    const uniqueId2 = UniqueId.create();

    expect(uniqueId1.toValue).toBeDefined();
    expect(uniqueId2.toValue).toBeDefined();
    expect(uniqueId1.toValue).not.toBe(uniqueId2.toValue);
  });

  it("should create a unique id with a given value", () => {
    const value = "custom-id";
    const uniqueId = UniqueId.create(value);

    expect(uniqueId.toValue).toBe(value);
  });
});
