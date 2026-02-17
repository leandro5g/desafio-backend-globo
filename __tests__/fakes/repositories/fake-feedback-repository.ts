import { Feedback } from "../../../src/domain/enterprise/entities/feedback"
import type { IFeedbacksRepository, IFindByVideoIdProps } from "../../../src/domain/enterprise/repositories/feedbacks-repository";

export class FakeFeedbackRepository implements IFeedbacksRepository {
  public feedbacks: Feedback[] = [];

  async create(feedback: Feedback): Promise<void> {
    this.feedbacks.push(feedback);
  }

  async findByVideoId(props: IFindByVideoIdProps): Promise<Feedback[]> {
    const { videoId, limit, page } = props;
    const feedbacks = this.feedbacks.filter((feedback) => feedback.videoId === videoId.toValue);
    return feedbacks.slice((page - 1) * limit, page * limit);
  }
}