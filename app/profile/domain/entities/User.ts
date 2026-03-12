export class User {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly email: string,
    readonly birthDate: Date,
    readonly avatarUrl?: string,
  ) {}

  get age(): number {
    const today = new Date();
    const birth = new Date(this.birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  }
}