import { BaseEntity } from "./base-entity";
type UserProps = {
  name: string;
};

export class User extends BaseEntity<UserProps> {
  get name(): string {
    return this.props.name;
  }
}
