import { InputType, Field } from "type-graphql";

@InputType()
export class CreateFeedbackInput {
  @Field()
  videoId: string;

  @Field()
  comment: string;

  @Field()
  rating: number;
}