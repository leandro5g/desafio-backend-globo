import { Feedback } from "../feedback";

describe("Feedback", () => {
  it("should create an instance of Feedback", () => {
    const feedback = new Feedback({
      videoId: "video123",
      comment: "Great product!",
      rating: 5,
      username: "john_doe",
    });

    expect(feedback).toBeInstanceOf(Feedback);
  });

  it("should have videoId, comment, and rating properties", () => {
    const feedback = new Feedback({
      videoId: "video123",
      comment: "Great product!",
      rating: 5,
      username: "john_doe",
    });

    expect(feedback.videoId).toBe("video123");
    expect(feedback.comment).toBe("Great product!");
    expect(feedback.rating).toBe(5);
    expect(feedback.username).toBe("john_doe");
  });
});