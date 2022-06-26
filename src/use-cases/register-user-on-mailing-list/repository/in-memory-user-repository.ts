import { UserRepository } from '../ports/user-repository';
import { UserData } from '../user-data';

export class InMemoryUserRepository implements UserRepository {
  constructor(private repository: UserData[]) {}

  async add(user: UserData): Promise<void> {
    const exists = await this.exists(user);
    if (!exists) {
      this.repository.push(user);
    }
  }

  async findByEmail(email: string): Promise<UserData> {
    return this.repository.find(user => user.email === email);
  }

  async findAll(): Promise<UserData[]> {
    return this.repository;
  }

  async exists(user: UserData): Promise<boolean> {
    return !!(await this.findByEmail(user.email));
  }
}
