import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'

export async function profile(
  request: FastifyRequest,
  reply: FastifyReply,
) {

  /* 
  
  try {
    const authenticateUseCase = makeAuthenticateUseCase()

    await authenticateUseCase.execute({
      email,
      password,
    })
  } catch (error) {
    if (error instanceof InvalidCredentialsError) {
      return reply.status(400).send({ message: error.message })
    }

    throw error
  }

  */


  return reply.status(201).send()
}
