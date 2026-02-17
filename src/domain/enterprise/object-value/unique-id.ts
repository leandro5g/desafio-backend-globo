import { randomUUID } from "node:crypto";

export class UniqueId {
  private value: string;

  static create(value?: string): UniqueId {
    return new UniqueId(value);
  }

  constructor(value?: string) {
    this.value = value || randomUUID();
  }

  get toValue(): string {
    return this.value;
  }
}
