import { type SchemaTypeDefinition } from 'sanity'
import { author } from './author'
import { plantup } from './plantup'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, plantup],
}
