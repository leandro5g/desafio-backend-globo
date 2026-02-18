import type { Prisma } from "../../../../generated/prisma/client";
import type { Video as PrismaVideo } from "../../../../generated/prisma/client";
import { Video } from "../../../domain/enterprise/entities/video";

export class PrismaVideosMapper {
  static toPrisma(video: Video): Prisma.VideoUncheckedCreateInput {
    return {
      id: video.id,
      title: video.title,
      description: video.description,
      url: video.url,
      thumbnailUrl: video.thumbnailUrl,
    };
  }

  static toDomain(video: PrismaVideo): Video {
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
