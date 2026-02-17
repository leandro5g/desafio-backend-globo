import type { IPaginationProps } from "../dtos/pagination-props";
import type { Video } from "../entities/video";

export interface IVideosRepository {
  findAll(props: IPaginationProps): Promise<Video[]>;
}