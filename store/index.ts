import { getAccessorType } from 'typed-vuex'

export const state = () => ({})
export type RootState = ReturnType<typeof state>
export const getters = {}
export const mutations = {}
export const actions = {}

export const accessorType = getAccessorType({
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
  modules: {},
})
