import type { Feedback } from "../entities/feedback";
import type { UniqueId } from "../object-value/unique-id";

export interface IFeedbacksRepository {
  create(feedback: Feedback): Promise<void>;
  findByVideoId(videoId: UniqueId): Promise<Feedback[]>;
}