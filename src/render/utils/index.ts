import store from './store'

const isdev = process.env.NODE_ENV === 'development'

export {
  store,
  isdev,
}
