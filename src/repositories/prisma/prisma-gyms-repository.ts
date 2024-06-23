import { Gym, Prisma } from "@prisma/client";
import { GymsRepository } from "../gyms-repository";
import { prisma } from "@/lib/prisma";

export class PrismaGymsRepository implements GymsRepository {
  async findById(id: string) {
    const gym = await prisma.gym.findUnique({
      where: {
        id,
      }
    })

    return gym
  }

  searchMany(query: string, page: number): Promise<Gym[]> {
    throw new Error("Method not implemented.");
  }

  async create(data: Prisma.GymCreateInput): Promise<Gym> {
    const gym = await prisma.gym.create({
      data,
    })

    return gym
  }
  
}