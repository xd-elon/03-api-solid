import { CheckInsRepository } from '@/repositories/check-ins-repository'

interface GetUserMetricsUseCaseRequest {
  userId: string
}

interface GetUseMetricsUseResponse {
  checkInsCount: number
}

export class GetUserMetricsUseCase {
  constructor(private checkInsRepository: CheckInsRepository) {}

  async execute({
    userId,
  }: GetUserMetricsUseCaseRequest): Promise<GetUseMetricsUseResponse> {
    const checkInsCount = await this.checkInsRepository.counterByUserId(userId)

    return {
      checkInsCount,
    }
  }
}
