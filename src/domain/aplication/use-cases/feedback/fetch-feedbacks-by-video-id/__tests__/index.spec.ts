import { FakeFeedbackRepository } from "../../../../../../../__tests__/fakes/repositories/fake-feedback-repository";
import { FakeVideosRepository } from "../../../../../../../__tests__/fakes/repositories/fake-videos-repository";
import { Feedback } from "../../../../../enterprise/entities/feedback";
import { Video } from "../../../../../enterprise/entities/video";
import { AppError } from "../../../../errors/app-error";
import { FetchFeedbacksByVideoIdUseCase } from "../index";

let sut: FetchFeedbacksByVideoIdUseCase;
let fakeFeedbackRepository: FakeFeedbackRepository;
let fakeVideosRepository: FakeVideosRepository;

describe("FetchFeedbacksByVideoIdUseCase", () => {
  beforeEach(() => {
    fakeFeedbackRepository = new FakeFeedbackRepository();
    fakeVideosRepository = new FakeVideosRepository();
    sut = new FetchFeedbacksByVideoIdUseCase(
      fakeFeedbackRepository,
      fakeVideosRepository,
    );
  });

  it("should be able to fetch feedbacks by video id", async () => {
    const video = {
      id: "video-id",
      title: "Video Title",
      description: "Video Description",
      url: "http://example.com/video.mp4",
      thumbnailUrl: "http://example.com/thumbnail.jpg",
    };

    fakeVideosRepository.videos.push(Video.create(video, video.id));

    const feedback = {
      id: "feedback-id",
      videoId: video.id,
      comment: "Great video!",
      rating: 5,
    };

    fakeFeedbackRepository.feedbacks.push(
      Feedback.create(feedback, feedback.id),
    );

    const request = {
      videoId: video.id,
      limit: 10,
      page: 1,
    };

    const response = await sut.execute(request);

    expect(response).toHaveLength(1);
    expect(response[0]?.comment).toBe(feedback.comment);
    expect(response[0]?.rating).toBe(feedback.rating);
  });

  it("should return paginated feedbacks", async () => {
    const video = {
      id: "video-id",
      title: "Video Title",
      description: "Video Description",
      url: "http://example.com/video.mp4",
      thumbnailUrl: "http://example.com/thumbnail.jpg",
    };

    fakeVideosRepository.videos.push(Video.create(video, video.id));

    for (let i = 1; i <= 15; i++) {
      const feedback = {
        id: `feedback-id-${i}`,
        videoId: video.id,
        comment: `Great video! ${i}`,
        rating: 5,
      };

      fakeFeedbackRepository.feedbacks.push(
        Feedback.create(feedback, feedback.id),
      );
    }

    const request = {
      videoId: video.id,
      limit: 10,
      page: 2,
    };

    const response = await sut.execute(request);

    expect(response).toHaveLength(5);
    expect(response[0]?.comment).toBe("Great video! 11");
    expect(response[0]?.rating).toBe(5);
  });

  it("should throw an error if video does not exist", async () => {
    const request = {
      videoId: "non-existing-video-id",
      limit: 10,
      page: 1,
    };

    await expect(sut.execute(request)).rejects.toBeInstanceOf(AppError);
    await expect(sut.execute(request)).rejects.toHaveProperty(
      "message",
      "Video not found",
    );
  });
});
