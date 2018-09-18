import { findPath, prop } from '@serverless/utils'
import { resolve } from 'path'
import newContext from './newContext'

const createContext = async (options) => {
  const cwd = resolve(findPath(prop('cwd', options), process.cwd()))
  return newContext({
    cwd
  })
}

export default createContext