import { FetchUserCheckInsHistoryCase } from '../fecth-user-check-ins-history'
import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-check-ins-repository'

export function makeFecthUserCheckinHistoryUseCase() {
  const checkInsRepository = new PrismaCheckInsRepository()
  const useCase = new FetchUserCheckInsHistoryCase(checkInsRepository)

  return useCase
}