import { BaseEntity } from "./base-entity";

type FeedbackProps = {
  userId: string;
  comment: string;
  rating: number;
}

export class Feedback extends BaseEntity<FeedbackProps> {
  get userId(): string {
    return this.props.userId;
  }

  get comment(): string {
    return this.props.comment;
  }

  get rating(): number {
    return this.props.rating;
  }
}