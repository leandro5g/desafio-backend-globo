import type { IPaginationProps } from "../../../../enterprise/dtos/pagination-props";
import type { Feedback } from "../../../../enterprise/entities/feedback";
import { UniqueId } from "../../../../enterprise/object-value/unique-id";
import type { IFeedbacksRepository } from "../../../../enterprise/repositories/feedbacks-repository";
import type { IVideosRepository } from "../../../../enterprise/repositories/videos-repository";
import { AppError } from "../../../errors/app-error";

type IRequest = IPaginationProps & {
  videoId: string;
};

type IResponse = {
  feedbacks: Feedback[];
  total: number;
  totalPages: number;
};

export class FetchFeedbacksByVideoIdUseCase {
  constructor(
    private readonly feedbacksRepository: IFeedbacksRepository,
    private readonly videosRepository: IVideosRepository,
  ) {}

  public async execute({ videoId, limit, page }: IRequest): Promise<IResponse> {
    const uniqueVideoId = UniqueId.create(videoId);

    const video = await this.videosRepository.findById(uniqueVideoId);

    if (!video) {
      throw new AppError("Video not found");
    }

    const { feedbacks, total } = await this.feedbacksRepository.findByVideoId({
      videoId: uniqueVideoId,
      limit,
      page,
    });

    const totalPages = Math.ceil(total / limit);

    return {
      feedbacks,
      total,
      totalPages,
    };
  }
}
