import { Field, Int, ObjectType } from "type-graphql";
import { FeedbackModel } from "./feedback-model";

@ObjectType()
export class FeedbacksPaginationModel {
  @Field(() => Int)
  total!: number;

  @Field(() => Int)
  totalPages!: number;

  @Field(() => [FeedbackModel])
  feedbacks!: FeedbackModel[];
}