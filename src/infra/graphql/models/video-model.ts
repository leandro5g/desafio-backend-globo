import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class VideoModel {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  title: string;

  @Field(() => String)
  description: string;

  @Field(() => String)
  url: string;

  @Field(() => String)
  thumbnailUrl: string;
}