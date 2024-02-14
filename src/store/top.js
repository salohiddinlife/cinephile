import { defineStore } from 'pinia'
import { apiKey } from '@/url'
import axios from 'axios'

export const useTop = defineStore({
    id: 'top',
    state: () => ({
        url: 'https://api.themoviedb.org/3/movie/top_rated',
        top: null
    }),
    actions:{
      async getTop(){
        try {
          const res = await axios.get(`${this.url}?language=en-US&api_key=${apiKey}`)
          const array = res.data.results
          const data = array.slice(0, 10)
          this.top10 = data
          console.log(res);
        }catch (error){
            console.error('Error while getting Top movies', error)
        }
      }
    },
    getters:{
        
    }
})