import { FakeFeedbackRepository } from "../../../../../../../__tests__/fakes/repositories/fake-feedback-repository";
import { FakeVideosRepository } from "../../../../../../../__tests__/fakes/repositories/fake-videos-repository";
import { Video } from "../../../../../enterprise/entities/video";
import { AppError } from "../../../../errors/app-error";
import { CreateFeedbackUseCase } from "../index"

let sut: CreateFeedbackUseCase;
let fakeFeedbackRepository: FakeFeedbackRepository
let fakeVideosRepository: FakeVideosRepository;

describe("CreateFeedbackUseCase", () => {
  beforeEach(() => {
    fakeFeedbackRepository = new FakeFeedbackRepository();
    fakeVideosRepository = new FakeVideosRepository();
    sut = new CreateFeedbackUseCase(fakeFeedbackRepository, fakeVideosRepository);
  });

  it("should be able to create a feedback", async () => {
    const video = {
      id: "video-id",
      title: "Video Title",
      description: "Video Description",
      url: "http://example.com/video.mp4",
      thumbnailUrl: "http://example.com/thumbnail.jpg",
    };

    fakeVideosRepository.videos.push(Video.create(video, video.id));

    const request = {
      videoId: video.id,
      comment: "Great video!",
      rating: 5,
    };

    await sut.execute(request);

    expect(fakeFeedbackRepository.feedbacks).toHaveLength(1);
    expect(fakeFeedbackRepository.feedbacks[0]?.comment).toBe(request.comment);
    expect(fakeFeedbackRepository.feedbacks[0]?.rating).toBe(request.rating);
  });

  it("should not be able to create a feedback for a non-existing video", async () => {
    const request = {
      videoId: "non-existing-video-id",
      comment: "Great video!",
      rating: 5,
    };

    await expect(sut.execute(request)).rejects.toBeInstanceOf(AppError);
    await expect(sut.execute(request)).rejects.toHaveProperty("message", "Video not found");
  });
})