import { BaseEntity } from "./base-entity";

type FeedbackProps = {
  videoId: string;
  comment: string;
  rating: number;
}

export class Feedback extends BaseEntity<FeedbackProps> {
  get videoId(): string {
    return this.props.videoId;
  }

  get comment(): string {
    return this.props.comment;
  }

  get rating(): number {
    return this.props.rating;
  }
}