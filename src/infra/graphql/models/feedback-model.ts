import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class FeedbackModel {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  videoId: string;

  @Field(() => String)
  comment: string;

  @Field(() => Number)
  rating: number;

  @Field(() => String)
  username: string;
}