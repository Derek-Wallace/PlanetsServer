import { dbContext } from '../db/DbContext'

class StarsService {
  async getAll() {
    const stars = await dbContext.Stars.find()
    return stars
  }

  async create(starData) {
    const star = await dbContext.Stars.create(starData)
    return star
  }
}
export const starsService = new StarsService()
