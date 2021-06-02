import { dbContext } from '../db/DbContext'

class MoonsService {
  async getAll() {
    const moons = await dbContext.Moons.find()
    return moons
  }

  async create(moonData) {
    const moon = await dbContext.Moons.create(moonData)
    return moon
  }
}
export const moonsService = new MoonsService()
