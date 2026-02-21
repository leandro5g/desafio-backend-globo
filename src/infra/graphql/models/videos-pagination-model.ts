import { Field, Int, ObjectType } from "type-graphql";
import { VideoModel } from "./video-model";

@ObjectType()
export class VideosPaginationModel {
  @Field(() => Int)
  total!: number;

  @Field(() => Int)
  totalPages!: number;

  @Field(() => [VideoModel])
  videos!: VideoModel[];
}