import { UserData } from '../user-data';

export interface UserRepository {
  add(user: UserData): Promise<void>;
  findByEmail(email: string): Promise<UserData>;
  findAll(): Promise<UserData[]>;
  exists(user: UserData): Promise<boolean>;
}
