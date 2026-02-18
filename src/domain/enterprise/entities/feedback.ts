import { BaseEntity } from "./base-entity";

type FeedbackProps = {
  videoId: string;
  comment: string;
  rating: number;
  username: string;
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

  get username(): string {
    return this.props.username;
  }

  static create(props: FeedbackProps, id?: string): Feedback {
    return new Feedback(props, id);
  }
}