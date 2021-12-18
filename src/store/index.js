import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        heroes: [],
        heroes_backup: []
    },

    getters: {
        heroes (state) {
            return state.heroes
        },

        heroes_backup (state) {
            return state.heroes_backup
        }
    },

    mutations: {
        SET_HEROES (state, heroes) {
            state.heroes = heroes
        },

        SET_ADD_HEROES(state, heroe){
            state.heroes.push(heroe)
        },

        DELETE_HEROE(state, index){
            state.heroes.splice(index, 1)
        },

        BACKUP_HEROES(state){
            state.heroes_backup = Object.assign([], state.heroes)
        },

        RESTORE_HEREOS_BACKUP(state){
            state.heroes = Object.assign([], state.heroes_backup)
        },
    },

    actions: {
        cleanHeroes({commit}) {
            commit( 'SET_HEROES', [] )
        },        

        initalLoadHeroes({commit}) {
            commit( 'SET_HEROES', 
                [
                    {
                        id: 1,
                        name: 'Batman',
                        power: 'Dinero',
                        url: 'https://i.pinimg.com/550x/b6/d6/13/b6d61308f9e84af4f8d73a2b15f48fec.jpg'
                    },
                    {
                        id: 2,
                        name: 'Superman',
                        power: 'Volar',
                        url: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2021/06/superman-2354819.jpg?itok=kz9feCvA'
                    },
                    {
                        id: 3,
                        name: 'Flash',
                        power: 'SuperVelocidad',
                        url: 'https://i0.wp.com/chevere.life/wp-content/uploads/2021/09/Flash.jpg?fit=768%2C573&ssl=1'
                    }
                ]
            )
            commit( 'BACKUP_HEROES')
        },

        addHeroe({commit, state}, heroe) {
            let heroes_ids = state.heroes.map(heroe => { return heroe.id })

            if (heroes_ids.includes(Number(heroe.id))) {
                return false
            } else {
                commit( 'SET_ADD_HEROES', heroe)
            }
        },

        deleteHeroe({commit}, index) {
            commit( 'DELETE_HEROE', index)
        },

        searchHeroes({commit, state}, power) {
            let filter_heroes =  state.heroes.filter(heroe => heroe.power == power)

            commit( 'BACKUP_HEROES')
            commit( 'SET_HEROES', filter_heroes)
        },

        restoreHeroesBackup({commit}) {
            commit( 'RESTORE_HEREOS_BACKUP')
        }
    }
})
