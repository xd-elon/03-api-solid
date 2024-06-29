import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repositorie'
import { GetUserProfileUseCase } from '../get-user-profile'

export function makeGetUserProfileUseCase() {
  const usersRepository = new PrismaUsersRepository()
  const getUserProfileUserCase = new GetUserProfileUseCase(usersRepository)

  return getUserProfileUserCase
}