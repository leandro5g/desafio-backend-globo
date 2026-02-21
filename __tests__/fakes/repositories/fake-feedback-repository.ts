import { Feedback } from "../../../src/domain/enterprise/entities/feedback"
import type { IFeedbacksRepository, IFindByVideoIdProps, IFindyByVideoIdResponse } from "../../../src/domain/enterprise/repositories/feedbacks-repository";

export class FakeFeedbackRepository implements IFeedbacksRepository {
  public feedbacks: Feedback[] = [];

  async create(feedback: Feedback): Promise<void> {
    this.feedbacks.push(feedback);
  }

  async findByVideoId(props: IFindByVideoIdProps): Promise<IFindyByVideoIdResponse> {
    const { videoId, limit, page } = props;
    const feedbacks = this.feedbacks.filter((feedback) => feedback.videoId === videoId.toValue);
    const total = feedbacks.length;
    const paginatedFeedbacks = feedbacks.slice((page - 1) * limit, page * limit);
    return {
      feedbacks: paginatedFeedbacks,
      total,
    };
  }
}