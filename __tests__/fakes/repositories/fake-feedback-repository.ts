import { Feedback } from "../../../src/domain/enterprise/entities/feedback"
import { UniqueId } from "../../../src/domain/enterprise/object-value/unique-id";

export class FakeFeedbackRepository {
  public feedbacks: Feedback[] = [];

  async create(feedback: Feedback): Promise<void> {
    this.feedbacks.push(feedback);
  }

  async findByVideoId(videoId: UniqueId): Promise<Feedback[]> {
    return this.feedbacks.filter((feedback) => feedback.videoId === videoId.toValue);
  }
}