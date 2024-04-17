<template>
    <div>
        <input v-model="query" type="text" placeholder="cerca il film..">
        <button @click="bothResponse()">invia</button>
       
    </div>
</template>

<script>
import axios from 'axios'
import {store} from '../store.js'
    export default {
        data(){
            return{
                store: store,
                query: store.query,
                api: store.API_KEY,
                // title:[],
                // originalTitle:[],
                // lenguage:[],
                // vote:[],
                

            }
        },
        methods:{
        reponseMovies(){
            axios
            .get('https://api.themoviedb.org/3/search/movie',{
                params:{
                    api_key: this.api,
                    query: this.query
                }
            }).then((res) => {
                const data = res.data;
                const results = data.results;
                for(let i = 0; i < results.length; i++){

                    const title = results[i].title
                    const originalTitle = results[i].original_title
                    const language = results[i].original_language
                    const vote = results[i].vote_average
                    
                    // store.movies = res.data.results

                    this.store.movies.push({
                        title,
                        originalTitle,
                        language,
                        vote
                    })
                    

                    //RISULTATO APPAIONO GLI ARRAY CON I VALORI IN FORMATO STRINGA

                    // this.title.push(res.data.results[i].title),

                    // this.originalTitle.push(res.data.results[i].original_title),

                    // this.lenguage.push(res.data.results[i].original_language),

                    // this.vote.push(res.data.results[i].vote_average),
                    
                    // console.log(this.title, this.originalTitle, this.lenguage, this.vote)

                    

                }
                // console.log('array di film: ', res.data.results)
                // console.log('object della ricerca: ',res)
                console.log(this.store.movies)

            })
        },responseSeries(){
            axios
            .get('https://api.themoviedb.org/3/search/tv',{
                params:{
                    api_key: this.api,
                    query: this.query
                }
            }).then((response)=> {
                const data2 = response.data;
                const results2 = data2.results;
                for(let j = 0; j < results2.length; j++){
                    const tvTitle = results2[j].name
                    const tvOriginalTitle = results2[j].original_name
                    const tvLanguage = results2[j].original_language
                    const tvVote = results2[j].vote_average

                    this.store.tvSeries.push({
                        tvTitle,
                        tvOriginalTitle,
                        tvLanguage,
                        tvVote
                    })
                }
                console.log(this.store.tvSeries)
            })
        },
        bothResponse(){
            this.reponseMovies()
            this.responseSeries()
        }

        },
        mounted(){
            // console.log(this.reponseFromTheButton())
            
        }
    }
</script>

<style lang="scss" scoped>

</style>