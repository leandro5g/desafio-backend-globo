import type { IPaginationProps } from "../dtos/pagination-props";
import type { Video } from "../entities/video";
import type { UniqueId } from "../object-value/unique-id";

export interface IFindAllVideosResponse {
  total: number;
  videos: Video[];
}

export interface IVideosRepository {
  findById(id: UniqueId): Promise<Video | null>;
  findAll(props: IPaginationProps): Promise<IFindAllVideosResponse>;
  create(video: Video): Promise<void>;
}