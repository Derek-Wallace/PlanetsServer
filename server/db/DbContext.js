import ValueSchema from '../models/Value'
import mongoose from 'mongoose'
import GalaxySchema from '../models/Galaxy'
import MoonSchema from '../models/Moon'
import PlanetSchema from '../models/Planet'
import StarSchema from '../models/Star'

class DbContext {
  Galaxies = mongoose.model('Galaxy', GalaxySchema);
  Moons = mongoose.model('Moon', MoonSchema)
  Planets = mongoose.model('Planet', PlanetSchema);
  Stars = mongoose.model('Sun', StarSchema);
  Values = mongoose.model('Value', ValueSchema);
}

export const dbContext = new DbContext()
