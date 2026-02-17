import{ UniqueId } from "../object-value/unique-id";

class BaseEntity<Props> {
  protected _id: UniqueId;
  protected props: Props;

  constructor(props: Props, id?: string) {
    this.props = props;
    this._id = UniqueId.create(id)
  }

  get id(): string {
    return this._id.toValue;
  }
}

export { BaseEntity };