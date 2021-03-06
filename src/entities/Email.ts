export class Email {
  static validate(email: string): boolean {
    if (!email) {
      return false;
    }

    if (email.length > 320) {
      return false;
    }

    const emailRegex = /^[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
    if (!emailRegex.test(email)) {
      return false;
    }

    const [local, domain] = email.split('@');

    if (local.length === 0 || local.length > 64) {
      return false;
    }

    if (domain.length === 0 || domain.length > 255) {
      return false;
    }

    const domainSegments = domain.split('.');
    if (domainSegments.some(segment => segment.length > 63)) {
      return false;
    }

    return true;
  }
}
