import { UserRepository } from '../ports/user-repository';
import { UserData } from '../user-data';

export class InMemoryUserRepository implements UserRepository {
  constructor(private repository: UserData[]) {}

  add(user: UserData): Promise<void> {
    throw new Error('Method not implemented.');
  }

  findByEmail(email: string): Promise<UserData> {
    return null;
  }

  findAll(): Promise<UserData[]> {
    throw new Error('Method not implemented.');
  }

  exists(user: UserData): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
