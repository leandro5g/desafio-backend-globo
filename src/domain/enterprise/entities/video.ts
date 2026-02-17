import { BaseEntity } from "./base-entity";

interface VideoProps {
  title: string;
  description: string;
  url: string;
  thumbnailUrl: string;
}

export class Video extends BaseEntity<VideoProps> {
  get title(): string {
    return this.props.title;
  }

  get description(): string {
    return this.props.description;
  }

  get url(): string {
    return this.props.url;
  }

  get thumbnailUrl(): string {
    return this.props.thumbnailUrl;
  }

  static create(props: VideoProps, id?: string): Video {
    const video = new Video(props, id);

    return video;
  } 
}