import { User } from '../entities/User';

export interface UserRepository {
  getById(id: string): Promise<User>;
  update(id: string, data: Partial<UpdateUserDTO>): Promise<User>;
  delete(id: string): Promise<void>;
}

export type UpdateUserDTO = {
  name: string;
  email: string;
  birthDate: Date;
  avatarUrl?: string;
};