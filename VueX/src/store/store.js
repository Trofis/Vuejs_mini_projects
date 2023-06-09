import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        counter:0,
        value:0
    },
    getters:{
        doubleCounter: state => {
            return state.counter
        },
        stringCounter: state => {
            return state.counter + ' Clicks'
        },
    },
    mutations:{
        increment: (state, payload) => {
            state.counter +=payload
        },
        decrement: (state, payload) => {
            state.counter -=payload
        },
        updateValue: (state, payload) => {
            state.value = payload
        }
    },
    actions:{
        increment: ({commit}, payload) => {
            commit('increment', payload)
        },
        decrement: ({commit}, payload) => {
            commit('decrement', payload)
        },
        asyncIncrement: ({commit}, payload) => {
            setTimeout(() => {
                commit('increment', payload.by)
            }, payload.duration) 
        },
        asyncDecrement: ({commit}, payload) => {
            setTimeout(() => {
                commit('decrement', payload.by)
            }, payload.duration) 
        }
    }
})