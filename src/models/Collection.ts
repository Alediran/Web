import axios, { AxiosResponse } from 'axios';
import { Eventing } from './Events/Eventing';

export class Collection<T, M> {
  models: T[] = [];
  private events: Eventing = new Eventing();

  constructor(public rootUrl: string, public deserialize: (json: M) => T) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(this.rootUrl).then((response: AxiosResponse) => {
      response.data.forEach((value: M) => {
        this.models.push(this.deserialize(value));
      });

      this.trigger('change');
    });
  }
}
