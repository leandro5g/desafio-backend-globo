import { Video } from "../../../src/domain/enterprise/entities/video";
import type { UniqueId } from "../../../src/domain/enterprise/object-value/unique-id";
import type { IVideosRepository } from "../../../src/domain/enterprise/repositories/videos-repository";

export class FakeVideosRepository implements IVideosRepository {
  public videos: Video[] = [];

  public async findAll(data: { limit: number; page: number }): Promise<Video[]> {
    const start = (data.page - 1) * data.limit;
    const end = start + data.limit;
    return this.videos.slice(start, end);
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