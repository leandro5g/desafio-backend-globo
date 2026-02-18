import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";
import { VideoModel } from "../models/video-model";
import { FetchVideosUseCase } from "../../../domain/aplication/use-cases/video/fetch-videos";
import { RegisterVideoUseCase } from "../../../domain/aplication/use-cases/video/register-video";
import { RegisterVideoInput } from "../dtos/register-video-input";

@Resolver(() => VideoModel)
export class VideosResolver {
  constructor(
    private readonly fetchVideosUseCase: FetchVideosUseCase,
    private readonly registerVideoUseCase: RegisterVideoUseCase,
  ) {}

  @Query(() => [VideoModel])
  async videos(
    @Arg("limit", () => Int, { defaultValue: 10 }) limit: number,
    @Arg("page", () => Int, { defaultValue: 1 }) page: number,
  ) {
    return this.fetchVideosUseCase.execute({
      limit,
      page,
    });
  }

  @Mutation(() => VideoModel)
  async registerVideo(
    @Arg("data", () => RegisterVideoInput) data: RegisterVideoInput,
  ) {
    return await this.registerVideoUseCase.execute({
      title: data.title,
      description: data.description,
      url: data.url,
      thumbnailUrl: data.thumbnailUrl,
    });
  }
}
