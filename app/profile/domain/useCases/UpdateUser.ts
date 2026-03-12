import { UpdateUserDTO, UserRepository } from '@/app/profile/domain/repositories/UserReposirory';

export class UpdateUser {
  constructor(private readonly repo: UserRepository) {}

  async execute(id: string, data: UpdateUserDTO) {
    if (!data.name || data.name.trim().length < 2) {
      throw new Error('Nome deve ter ao menos 2 caracteres');
    }
    return this.repo.update(id, data);
  }
}