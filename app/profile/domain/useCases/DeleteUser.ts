import { UserRepository } from '@/app/profile/domain/repositories/UserReposirory';

export class DeleteUser {
  constructor(private readonly repo: UserRepository) {}

  async execute(id: string) {
    return this.repo.delete(id);
  }
}