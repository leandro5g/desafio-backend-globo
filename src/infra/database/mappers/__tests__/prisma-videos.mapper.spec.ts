import { Video } from "../../../../domain/enterprise/entities/video";
import { PrismaVideosMapper } from "../prisma-videos.mapper";

describe('PrismaVideosMapper', () => {
  it('should map Video to Prisma.VideoUncheckedCreateInput', () => {
    const video = Video.create({
      title: 'Test Video',
      description: 'This is a test video',
      url: 'http://example.com/video.mp4',
      thumbnailUrl: 'http://example.com/thumbnail.jpg',
    });

    const prismaVideo = PrismaVideosMapper.toPrisma(video);

    expect(prismaVideo).toEqual({
      id: video.id,
      title: video.title,
      description: video.description,
      url: video.url,
      thumbnailUrl: video.thumbnailUrl,
    });
  });

  it('should map Prisma.Video to Video', () => {
    const prismaVideo = {
      id: '123',
      title: 'Test Video',
      description: 'This is a test video',
      url: 'http://example.com/video.mp4',
      thumbnailUrl: 'http://example.com/thumbnail.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const video = PrismaVideosMapper.toDomain(prismaVideo);

    expect(video.id).toBe(prismaVideo.id);
    expect(video.title).toBe(prismaVideo.title);
    expect(video.description).toBe(prismaVideo.description);
    expect(video.url).toBe(prismaVideo.url);
    expect(video.thumbnailUrl).toBe(prismaVideo.thumbnailUrl);
  });
})