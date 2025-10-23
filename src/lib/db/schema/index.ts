import * as auth from './auth'
import * as lists from './lists'

export * from './auth'
export * from './lists'

const schema = {
  ...auth,
  ...lists,
}

export default schema
