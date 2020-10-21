interface UserProps {
  name?: string;
  age?: number;
}

type Callback = () => void;

export class User {
  events: { [key: string]: Callback[] } = {}

  constructor(private data: UserProps) {}

  get(propName: string): (number | string) {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  on(eventName: string, callback: Callback)  {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];
    !handlers || handlers.length === 0 ? null : handlers.forEach(callback => callback())
  }
}