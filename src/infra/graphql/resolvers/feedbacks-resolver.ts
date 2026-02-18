import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";
import { FeedbackModel } from "../models/feedback-model";
import { CreateFeedbackUseCase } from "../../../domain/aplication/use-cases/feedback/create-feedback";
import { FetchFeedbacksByVideoIdUseCase } from "../../../domain/aplication/use-cases/feedback/fetch-feedbacks-by-video-id";
import { CreateFeedbackInput } from "../dtos/create-feedback-input";

@Resolver(() => FeedbackModel)
export class FeedbacksResolver {
  constructor(
    private readonly createFeedbackUseCase: CreateFeedbackUseCase,
    private readonly fetchFeedbacksByVideoId: FetchFeedbacksByVideoIdUseCase,
  ) {}

  @Query(() => [FeedbackModel])
  async feedbacks(
    @Arg("videoId", () => String) videoId: string,
    @Arg("limit", () => Int, { defaultValue: 10 }) limit: number,
    @Arg("page", () => Int, { defaultValue: 1 }) page: number,
  ) {
    return this.fetchFeedbacksByVideoId.execute({
      videoId,
      limit,
      page,
    });
  }

  @Mutation(() => FeedbackModel)
  async createFeedback(@Arg("data", () => CreateFeedbackInput) data: CreateFeedbackInput) {
    return this.createFeedbackUseCase.execute({
      videoId: data.videoId,
      comment: data.comment,
      rating: data.rating,
      username: data.username,
    });
  }
}
