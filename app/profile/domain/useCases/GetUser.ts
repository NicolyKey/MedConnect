
import { UserRepository } from '@/app/profile/domain/repositories/UserReposirory';

export class GetUser {
  constructor(private readonly repo: UserRepository) {}

  async execute(id: string) {
    return this.repo.getById(id);
  }
}