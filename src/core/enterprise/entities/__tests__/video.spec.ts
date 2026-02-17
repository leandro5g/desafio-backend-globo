import { Video } from "../video";

describe("Video", () => {
  it("should create an instance of Video", () => {
    const video = new Video({
      title: "Test Video",
      description: "This is a test video.",
      url: "https://example.com/video.mp4",
      thumbnailUrl: "https://example.com/thumbnail.jpg",
    });

    expect(video).toBeInstanceOf(Video);
  });

  it("should have title, description, url, and thumbnailUrl properties", () => {
    const video = new Video({
      title: "Test Video",
      description: "This is a test video.",
      url: "https://example.com/video.mp4",
      thumbnailUrl: "https://example.com/thumbnail.jpg",
    });

    expect(video.title).toBe("Test Video");
    expect(video.description).toBe("This is a test video.");
    expect(video.url).toBe("https://example.com/video.mp4");
    expect(video.thumbnailUrl).toBe("https://example.com/thumbnail.jpg");
  });
});