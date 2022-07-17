import { Email } from '../../src/entities/Email';

describe('Email validation', () => {
  test('should not accept null strings', () => {
    const email = null;
    expect(Email.validate(email)).toBeFalsy();
  });

  test('should not accept empty strings', () => {
    const email = '';
    expect(Email.validate(email)).toBeFalsy();
  });

  test('should not accept strings larger than 320 chars', () => {
    const email = `${'l'.repeat(64)}@${'d'.repeat(252)}.com`;
    expect(Email.validate(email)).toBeFalsy();
  });

  test('should not accept local part larger than 64 chars', () => {
    const email = `${'l'.repeat(65)}@email.com`;
    expect(Email.validate(email)).toBeFalsy();
  });

  test('should not accept domain part larger than 255 chars', () => {
    const email = `johndoe@${'d'.repeat(252)}.com`;
    expect(Email.validate(email)).toBeFalsy();
  });

  test('should not accept empty local part', () => {
    const email = '@email.com';
    expect(Email.validate(email)).toBeFalsy();
  });

  test('should not accept empty domain part', () => {
    const email = 'johndoe@';
    expect(Email.validate(email)).toBeFalsy();
  });

  test('should not accept domain part with segments larger than 63 chars', () => {
    const email = `johndoe@${'d'.repeat(64)}.com`;
    expect(Email.validate(email)).toBeFalsy();
  });

  test('should not accept local part with invalid chars', () => {
    const email = 'john doe@email.com';
    expect(Email.validate(email)).toBeFalsy();
  });

  test('should not accept an email withou an at-sign', () => {
    const email = 'johndoeemail.com';
    expect(Email.validate(email)).toBeFalsy();
  });

  test('should accept valid email', () => {
    const email = 'johndoe@email.com';
    expect(Email.validate(email)).toBeTruthy();
  });
});
