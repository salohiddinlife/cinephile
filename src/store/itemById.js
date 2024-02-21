import {
    defineStore
} from 'pinia'
import {
    apiKey
} from '@/url'
import axios from 'axios'

export const useItemById = defineStore({
    id: 'itemById',
    state: () => ({
        url: 'https://api.themoviedb.org/3/',
        itemById:null
    }),
    actions: {
        async getItemById({type, id}) {
            try {
                const res = await axios.get(`${this.url}${type}/${id}?api_key=${apiKey}&language=en-US`)
                itemById = res
            } catch (error) {
                console.error("error while getting items by id :(", error)
            }
        }
    },
    getters: {}
})