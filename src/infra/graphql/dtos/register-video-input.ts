import { Field, InputType } from "type-graphql";

@InputType()
export class RegisterVideoInput {
  @Field(() => String)
  title: string;

  @Field(() => String)
  description: string;

  @Field(() => String)
  url: string;
  
  @Field(() => String)
  thumbnailUrl: string;
}