import { User, UserProps } from '../models/Users';
import { View } from './generic/View';

export class UserShow extends View<User, UserProps> {
  template(): string {
    return `
    <div>
      <h1>User Detail</h1>
      <div>Use Name: ${this.model.get('name')}</div>
      <div>Age: ${this.model.get('age')}</div>
    </div>`;
  }
}
