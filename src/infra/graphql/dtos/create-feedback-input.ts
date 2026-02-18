import { InputType, Field } from "type-graphql";

@InputType()
export class CreateFeedbackInput {
  @Field(() => String)
  videoId: string;

  @Field(() => String)
  comment: string;

  @Field(() => Number)
  rating: number;

  @Field(() => String)
  username: string;
}