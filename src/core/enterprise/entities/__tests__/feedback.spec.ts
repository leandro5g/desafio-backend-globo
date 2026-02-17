import { Feedback } from "../feedback";

describe("Feedback", () => {
  it("should create an instance of Feedback", () => {
    const feedback = new Feedback({
      userId: "user123",
      comment: "Great product!",
      rating: 5,
    });

    expect(feedback).toBeInstanceOf(Feedback);
  });

  it("should have userId, comment, and rating properties", () => {
    const feedback = new Feedback({
      userId: "user123",
      comment: "Great product!",
      rating: 5,
    });

    expect(feedback.userId).toBe("user123");
    expect(feedback.comment).toBe("Great product!");
    expect(feedback.rating).toBe(5);
  });
});