import { Feedback } from "../../../../enterprise/entities/feedback";
import { UniqueId } from "../../../../enterprise/object-value/unique-id";
import type { IFeedbacksRepository } from "../../../../enterprise/repositories/feedbacks-repository";
import type { IVideosRepository } from "../../../../enterprise/repositories/videos-repository";
import { AppError } from "../../../errors/app-error";

type CreateFeedbackUseCaseRequest = {
  videoId: string;
  comment: string;
  rating: number;
  username: string;
};

export class CreateFeedbackUseCase {
  constructor(
    private readonly feedbacksRepository: IFeedbacksRepository,
    private readonly videosRepository: IVideosRepository,
  ) {}

  public async execute(request: CreateFeedbackUseCaseRequest): Promise<Feedback> {
    const { videoId, comment, rating, username } = request;

    const uniqueVideoId = UniqueId.create(videoId);

    const video = await this.videosRepository.findById(uniqueVideoId);

    if (!video) {
      throw new AppError("Video not found");
    }

    const feedback = Feedback.create({
      videoId: uniqueVideoId.toValue,
      comment,
      rating,
      username,
    });

    await this.feedbacksRepository.create(feedback);

    return feedback
  }
}