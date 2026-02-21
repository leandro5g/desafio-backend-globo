import type { IPaginationProps } from "../dtos/pagination-props";
import type { Feedback } from "../entities/feedback";
import type { UniqueId } from "../object-value/unique-id";

export type IFindByVideoIdProps = IPaginationProps & {
  videoId: UniqueId;
};

export type IFindyByVideoIdResponse = {
  feedbacks: Feedback[];
  total: number;
};

export interface IFeedbacksRepository {
  create(feedback: Feedback): Promise<void>;
  findByVideoId(props: IFindByVideoIdProps): Promise<IFindyByVideoIdResponse>;
}