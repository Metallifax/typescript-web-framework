type Callback = () => void;

export class Eventing {
  events: { [key: string]: Callback[]; } = {};

  on(eventName: string, callback: Callback) {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];
    !handlers || handlers.length === 0 
      ? null 
      : handlers.forEach(callback => callback());
  }
}