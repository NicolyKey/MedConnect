import { UpdateUserDTO } from '@/app/profile/domain/repositories/UserReposirory';
import { api } from '@/shared/http/axiosInstance';
import { UserDTO } from '../dto/UserDTO';

export class UserRemoteDS {
  async getById(id: string): Promise<UserDTO> {
    const { data } = await api.get<UserDTO>(`/user/${id}`);
    return data;
  }

  async update(id: string, payload: Partial<UpdateUserDTO>): Promise<UserDTO> {
    const { data } = await api.put<UserDTO>(`/user/${id}`, payload);
    return data;
  }

  async delete(id: string): Promise<void> {
    await api.delete(`/user/${id}`);
  }
}