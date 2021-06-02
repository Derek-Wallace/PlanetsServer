import { dbContext } from '../db/DbContext'

class GalaxiesService {
  async getAll() {
    const galaxies = await dbContext.Galaxies.find().populate
    return galaxies
  }

  async getOne(id) {
    const galaxy = await dbContext.Galaxies.findById(id)
    return galaxy
  }

  async create(galaxyData) {
    const galaxy = await dbContext.Galaxies.create(galaxyData)
    return galaxy
  }
}
export const galaxiesService = new GalaxiesService()
