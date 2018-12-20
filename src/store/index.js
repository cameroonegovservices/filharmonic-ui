import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import { favori } from '@/store/modules/favori'
import { authentication } from '@/store/modules/authentication'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    authentication: authentication,
    favori: favori
  },
  plugins: [createLogger()]
})

export async function createStore (options = {}) {
  const api = options.api
  if (!api) {
    throw new Error('Missing `api` option')
  }

  // expose the API to the store
  store.$api = api

  // expose the store to the API
  api.store = store

  return store
}
