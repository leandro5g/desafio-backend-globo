import { BaseEntity } from "../base-entity";

const sut = new BaseEntity({ name: "Test Entity" });

describe("BaseEntity", () => {
  it("should create an instance of BaseEntity", () => {
    expect(sut).toBeInstanceOf(BaseEntity);
  });

  it("should have an id property", () => {
    expect(sut.id).toBeDefined();
  });

  it("should generate a unique id if not provided", () => {
    const sut1 = new BaseEntity({ name: "Test Entity 1" });
    const sut2 = new BaseEntity({ name: "Test Entity 2" });

    expect(sut1.id).toBeDefined();
    expect(sut2.id).toBeDefined();
    expect(sut1.id).not.toBe(sut2.id);
  });

  it("should use the provided id if given", () => {
    const customId = "custom-id";
    const sutWithCustomId = new BaseEntity(
      { name: "Test Entity with Custom ID" },
      customId,
    );

    expect(sutWithCustomId.id).toBe(customId);
  });
});
