import { InMemoryUserRepository } from '../../../../src/use-cases/register-user-on-mailing-list/repository/in-memory-user-repository';
import { UserData } from '../../../../src/use-cases/register-user-on-mailing-list/user-data';

describe('In memory user repository', () => {
  test('should return null if user is not null', async () => {
    const users: UserData[] = [];
    const sut = new InMemoryUserRepository(users);
    const user = await sut.findByEmail('johndoe@email.com');
    expect(user).toBeUndefined();
  });

  test('should return user if it is found in the repository', async () => {
    const users: UserData[] = [];
    const name = 'John Doe';
    const email = 'johndoe@email.com';
    const sut = new InMemoryUserRepository(users);
    await sut.add({ name, email });
    const user = await sut.findByEmail('johndoe@email.com');
    expect(user.name).toBe(name);
    expect(user.email).toBe(email);
  });

  test('should return all users in the repository', async () => {
    const users: UserData[] = [
      { name: 'John Doe', email: 'johndoe@email.com' },
      { name: 'Jane Doe', email: 'janedoe@email.com' }
    ];
    const sut = new InMemoryUserRepository(users);
    const returnedUsers = await sut.findAll();
    expect(returnedUsers.length).toBe(2);
  });
});
