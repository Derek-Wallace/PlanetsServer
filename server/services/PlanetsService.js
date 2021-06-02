import { dbContext } from '../db/DbContext'

class PlanetsService {
  async getAll() {
    const planets = await dbContext.Planets.find()
    return planets
  }

  async create(planetData) {
    const planet = await dbContext.Planets.create(planetData)
    return planet
  }
}
export const planetsService = new PlanetsService()
