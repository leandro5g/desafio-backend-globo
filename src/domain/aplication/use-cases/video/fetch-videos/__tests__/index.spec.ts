import { FakeVideosRepository } from "../../../../../../../__tests__/fakes/repositories/fake-videos-repository";
import { Video } from "../../../../../enterprise/entities/video";
import { FetchVideosUseCase } from "../index";

let sut: FetchVideosUseCase;
let fakeRepository: FakeVideosRepository;

describe("FetchVideosUseCase", () => {
  beforeEach(() => {
    fakeRepository = new FakeVideosRepository();
    sut = new FetchVideosUseCase(fakeRepository);
  });

  it("should be able to fetch videos", async () => {
    for (let i = 0; i < 15; i++) {
      fakeRepository.videos.push(
        Video.create({
          title: `Video ${i}`,
          description: `Description ${i}`,
          url: `https://www.youtube.com/watch?v=video${i}`,
          thumbnailUrl: `https://img.youtube.com/vi/video${i}/hqdefault.jpg`,
        }),
      );
    }

    const { videos, total, totalPages } = await sut.execute({
      limit: 10,
      page: 2,
    });

    expect(videos).toBeTruthy();
    expect(videos.length).toBe(5);
    expect(total).toBe(15);
    expect(totalPages).toBe(2);
  });
});
