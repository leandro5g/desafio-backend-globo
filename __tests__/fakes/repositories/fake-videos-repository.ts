import { Video } from "../../../src/domain/enterprise/entities/video";
import type { UniqueId } from "../../../src/domain/enterprise/object-value/unique-id";
import type { IFindAllVideosResponse, IVideosRepository } from "../../../src/domain/enterprise/repositories/videos-repository";

export class FakeVideosRepository implements IVideosRepository {
  public videos: Video[] = [];

  public async findAll(data: { limit: number; page: number }): Promise<IFindAllVideosResponse> {
    const start = (data.page - 1) * data.limit;
    const end = start + data.limit;
    const videos = this.videos.slice(start, end);
    return {
      total: this.videos.length,
      videos,
    };
  }

  public async findById(id: UniqueId): Promise<Video | null> {
    const video = this.videos.find((video) => video.id === id.toValue);
    return Promise.resolve(video || null);
  }

  public async create(video: Video): Promise<void> {
    this.videos.push(video);
    return Promise.resolve();
  }
}