import { Feedback } from "../../../../enterprise/entities/feedback";
import { UniqueId } from "../../../../enterprise/object-value/unique-id";
import type { IFeedbacksRepository } from "../../../../enterprise/repositories/feedbacks-repository";
import type { IVideosRepository } from "../../../../enterprise/repositories/videos-repository";
import { AppError } from "../../../errors/app-error";

type CreateFeedbackUseCaseRequest = {
  videoId: string;
  comment: string;
  rating: number;
};

export class CreateFeedbackUseCase {
  constructor(
    private readonly feedbacksRepository: IFeedbacksRepository,
    private readonly videosRepository: IVideosRepository,
  ) {}

  public async execute(request: CreateFeedbackUseCaseRequest): Promise<void> {
    const { videoId, comment, rating } = request;

    const uniqueVideoId = UniqueId.create(videoId);

    const video = await this.videosRepository.findById(uniqueVideoId);

    if (!video) {
      throw new AppError("Video not found");
    }

    const feedback = Feedback.create({
      videoId: uniqueVideoId.toValue,
      comment,
      rating,
    });

    await this.feedbacksRepository.create(feedback);
  }
}