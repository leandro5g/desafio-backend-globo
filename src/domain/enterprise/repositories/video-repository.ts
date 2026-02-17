import type { IPaginationProps } from "../dtos/pagination-props";
import type { Video } from "../entities/video";

export interface IVideoRepository {
  findAll(props: IPaginationProps): Promise<Video[]>;
}