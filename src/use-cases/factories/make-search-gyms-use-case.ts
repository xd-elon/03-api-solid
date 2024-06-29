import { SearchGymsUseCase } from '../search-gyms'
import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository'

export function makeFecthUserCheckinHistoryUseCase() {
  const checkInsRepository = new PrismaGymsRepository()
  const useCase = new SearchGymsUseCase(checkInsRepository)

  return useCase
}