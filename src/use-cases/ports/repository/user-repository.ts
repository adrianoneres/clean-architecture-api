import { UserData } from '../../register-user-on-mailing-list/user-data';

export interface UserRepository {
  add(user: UserData): Promise<void>;
  findByEmail(email: string): Promise<UserData>;
  findAll(): Promise<UserData[]>;
  exists(user: UserData): Promise<boolean>;
}