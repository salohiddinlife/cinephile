import { defineStore } from 'pinia'
import { apiKey } from '@/url'
import axios from 'axios'

export const usePopular = defineStore({
    id: 'popular',
    state: () => ({
        url: 'https://api.themoviedb.org/3/',
        popularMovies:null,
        popularTvs:null
    }),
    actions:{
      async getPopular({type, page = 1}){
        try {
           const res = await axios.get(`${this.url}${type}/popular?language=en-US&page=${page}&api_key=${apiKey}`)
           const data = res.data.results
           if (type == 'movie') {
                this.popularMovies = data
           } else {
                this.popularTvs = data
           }
        }catch (error){
            console.error("error while getting popular movies", error)
        }
      }
    },
    getters:{}
})