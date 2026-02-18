import { RegisterVideoUseCase } from "..";
import { FakeVideosRepository } from "../../../../../../../__tests__/fakes/repositories/fake-videos-repository";

let fakeVideosRepository: FakeVideosRepository;
let sut: RegisterVideoUseCase;

describe("RegisterVideoUseCase", () => {
  beforeEach(() => {
    fakeVideosRepository = new FakeVideosRepository();
    sut = new RegisterVideoUseCase(fakeVideosRepository);
  });

  it("should be able to register a video", async () => {
    const request = {
      title: "Video Title",
      description: "Video Description",
      url: "http://example.com/video.mp4",
      thumbnailUrl: "http://example.com/thumbnail.jpg",
    };

    const video = await sut.execute(request);

    expect(video).toHaveProperty("id");
    expect(video.title).toBe(request.title);
    expect(video.description).toBe(request.description);
    expect(video.url).toBe(request.url);
    expect(video.thumbnailUrl).toBe(request.thumbnailUrl);
  });
});
