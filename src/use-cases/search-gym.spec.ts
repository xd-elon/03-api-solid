import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { expect, describe, it, beforeEach } from 'vitest'
import { SearchGymsUseCase } from './search-gyms'

let gymsRepository: InMemoryGymsRepository
let sut: SearchGymsUseCase

describe('Search gyms use Case', () => {
  beforeEach(() => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new SearchGymsUseCase(gymsRepository)
  })

  it('should be able to search for gyms', async () => {
    await gymsRepository.create({
      title: 'Javascript gym',
      description: null,
      phone: null,
      latitude: -11.473005,
      longitude: -41.5174731,
    })

    await gymsRepository.create({
      title: 'Typescript gym',
      description: null,
      phone: null,
      latitude: -11.473005,
      longitude: -41.5174731,
    })

    const { gyms } = await sut.execute({
      query: 'Javascript',
      page: 1
    })

    expect(gyms).toHaveLength(1)
    expect(gyms).toEqual([
      expect.objectContaining({ gym_id: 'gym-01' })
    ])
  })

  it.skip('should be able to search for gyms', async () => {
    for (let i = 1; i <= 22; i++) {
      await gymsRepository.create({
        title: `Javascript gym ${i}`,
        description: null,
        phone: null,
        latitude: -11.473005,
        longitude: -41.5174731,
      })
    }

    const { gyms } = await sut.execute({
      query: 'Javascript',
      page: 1
    })

    expect(gyms).toHaveLength(1)
    expect(gyms).toEqual([
      expect.objectContaining({ gym_id: 'gym-21' }),
      expect.objectContaining({ gym_id: 'gym-22' })
    ])
  })
})
