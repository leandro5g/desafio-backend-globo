import type { IPaginationProps } from "../../../../enterprise/dtos/pagination-props";
import type { Feedback } from "../../../../enterprise/entities/feedback";
import { UniqueId } from "../../../../enterprise/object-value/unique-id";
import type { IFeedbacksRepository } from "../../../../enterprise/repositories/feedbacks-repository";
import type { IVideosRepository } from "../../../../enterprise/repositories/videos-repository";
import { AppError } from "../../../errors/app-error";

type IRequest = IPaginationProps & {
  videoId: string;
}

export class FetchFeedbacksByVideoIdUseCase {
  constructor(
    private readonly feedbacksRepository: IFeedbacksRepository,
    private readonly videosRepository: IVideosRepository,
  ) {}

  public async execute({ videoId, limit, page }: IRequest): Promise<Feedback[]> {
    const uniqueVideoId = UniqueId.create(videoId);

    const video = await this.videosRepository.findById(uniqueVideoId);

    if (!video) {
      throw new AppError("Video not found");
    }

    const feedbacks =
      await this.feedbacksRepository.findByVideoId({
        videoId: uniqueVideoId,
        limit,
        page,
      });

    return feedbacks;
  }
}
