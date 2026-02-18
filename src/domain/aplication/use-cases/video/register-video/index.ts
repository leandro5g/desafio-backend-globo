import { Video } from "../../../../enterprise/entities/video";
import { IVideosRepository } from "../../../../enterprise/repositories";

type RegisterVideoUseCaseRequest = {
  title: string;
  description: string;
  url: string;
  thumbnailUrl: string;
};

export class RegisterVideoUseCase {
  constructor(private readonly videosRepository: IVideosRepository) {}

  public async execute(request: RegisterVideoUseCaseRequest): Promise<Video> {
    const { title, description, url, thumbnailUrl } = request;

    const video = Video.create({
      title,
      description,
      url,
      thumbnailUrl,
    });

    await this.videosRepository.create(video);

    return video;
  }
}
