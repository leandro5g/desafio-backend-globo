import { Arg, Query, Resolver } from "type-graphql";
import { VideoModel } from "../models/video-model";
import { FetchVideosUseCase } from "../../../domain/aplication/use-cases/video/fetch-videos";

@Resolver(() => VideoModel)
export class VideosResolver {
  constructor(private fetchVideos: FetchVideosUseCase) {}

  @Query(() => [VideoModel])
  async videos(
    @Arg("limit", { defaultValue: 10 }) limit: number,
    @Arg("page", { defaultValue: 1 }) page: number,
  ) {
    return this.fetchVideos.execute({ limit, page });
  }
}
