import { PrismaClient } from "../../../../generated/prisma/client";
import { IPaginationProps } from "../../../domain/enterprise/dtos/pagination-props";
import { Video } from "../../../domain/enterprise/entities/video";
import { UniqueId } from "../../../domain/enterprise/object-value/unique-id";
import { IVideosRepository } from "../../../domain/enterprise/repositories";

export class PrismaVideosRepository implements IVideosRepository {
  constructor(private readonly prisma: PrismaClient) {}

  public async findAll(props: IPaginationProps): Promise<Video[]> {
    const videos = await this.prisma.video.findMany({
      skip: (props.page - 1) * props.limit,
      take: props.limit,
    });

    return videos.map((video) =>
      Video.create(
        {
          title: video.title,
          description: video.description,
          url: video.url,
          thumbnailUrl: video.thumbnailUrl,
        },
        video.id,
      ),
    );
  }

  public async findById(id: UniqueId): Promise<Video | null> {
    const video = await this.prisma.video.findUnique({
      where: { id: id.toValue },
    });

    if (!video) {
      return null;
    }

    return Video.create(
      {
        title: video.title,
        description: video.description,
        url: video.url,
        thumbnailUrl: video.thumbnailUrl,
      },
      video.id,
    );
  }
}
