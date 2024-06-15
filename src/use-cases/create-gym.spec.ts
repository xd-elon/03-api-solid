import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { expect, describe, it, beforeEach } from 'vitest'
import { CreateGymCase } from './create-gym'

let gymsRepository: InMemoryGymsRepository
let sut: CreateGymCase

describe('Create Gym use Case', () => {
  beforeEach(() => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new CreateGymCase(gymsRepository)
  })

  it('should be able to register', async () => {
    const { gym } = await sut.execute({
      title: 'js gym',
      description: null,
      phone: null,
      latitude: -11.473005,
      longitude: -41.5174731,
    })

    expect(gym.id).toEqual(expect.any(String))
  })
})
