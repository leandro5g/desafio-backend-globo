import type { IPaginationProps } from "../../../../enterprise/dtos/pagination-props";
import type { Video } from "../../../../enterprise/entities/video";
import type { IVideosRepository } from "../../../../enterprise/repositories/videos-repository";

type IResponse = Video[];

export class FetchVideosUseCase {
  constructor(private videosRepository: IVideosRepository) {}

  public async execute({ limit, page }: IPaginationProps): Promise<IResponse> {
    const videos = await this.videosRepository.findAll({ limit, page });
    return videos;
  }
}
