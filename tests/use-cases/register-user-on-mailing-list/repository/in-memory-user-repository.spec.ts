import { InMemoryUserRepository } from '../../../../src/use-cases/register-user-on-mailing-list/repository/in-memory-user-repository';
import { UserData } from '../../../../src/use-cases/register-user-on-mailing-list/user-data';

describe('In memory user repository', () => {
  test('should return null if user is not null', async () => {
    const users: UserData[] = [];
    const userRepo = new InMemoryUserRepository(users);
    const user = await userRepo.findByEmail('johndoe@email.com');
    expect(user).toBe(null);
  });
});
