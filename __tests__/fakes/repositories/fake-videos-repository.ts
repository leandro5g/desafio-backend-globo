import { Video } from "../../../src/domain/enterprise/entities/video";
import type { IVideosRepository } from "../../../src/domain/enterprise/repositories/videos-repository";

export class FakeVideosRepository implements IVideosRepository {
  public videos: Video[] = [];

  async findAll(data: { limit: number; page: number }): Promise<Video[]> {
    const start = (data.page - 1) * data.limit;
    const end = start + data.limit;
    return this.videos.slice(start, end);
  }
}