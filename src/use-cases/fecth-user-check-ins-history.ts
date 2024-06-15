import { CheckInsRepository } from '@/repositories/check-ins-repository'
import { CheckIn } from '@prisma/client'

interface FetchUserCheckInsHistoryCaseRequest {
  userId: string
}

interface FetchUserCheckInsHistoryCaseResponse {
  checkIns: CheckIn[]
}

export class FetchUserCheckInsHistoryCase {
  constructor(private checkInsRepository: CheckInsRepository) {}

  async execute({
    userId,
  }: FetchUserCheckInsHistoryCaseRequest): Promise<FetchUserCheckInsHistoryCaseResponse> {
    const checkIns = await this.checkInsRepository.findManyByUserId(userId)

    return {
      checkIns,
    }
  }
}
