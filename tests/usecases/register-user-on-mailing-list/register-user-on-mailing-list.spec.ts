import { UserData } from '../../../src/usecases/register-user-on-mailing-list/user-data';

describe('Regiser user on mailing list use case', () => {
  test('should add user with complete data to mailing list', async () => {
    const userData: UserData = { name: '', email: '' };
    console.log(userData);
    // const users: UserData[] = [];
    // console.log(users);
    // const repository: UserRepository = new InMemoryUserRepository(users);
    // const useCase: RegisterUserOnMailingList = new RegisterUserOnMailingList(
    //   repository
    // );

    // const name = 'John Doe';
    // const email = 'johndoe@email.com';

    // const response = await useCase.registerUserOnMailingList({ name, email });
    // const user = await repository.findUserByEmail(email);
    // expect(user.name).toBe(name);
  });
});
