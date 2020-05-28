import { CollectionView } from './Base/CollectionView';
import { User, UserProps } from '../models/Users';
import { UserShow } from './UserShow';

export class UserList extends CollectionView<User, UserProps> {
  renderItem(model: User, itemParent: Element): void {
    new UserShow(itemParent, model).render();
  }
}
