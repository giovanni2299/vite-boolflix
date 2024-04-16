<template>
    <div>
        <input v-model="query" type="text" placeholder="cerca il film..">
        <button @click="reponseFromTheButton()">invia</button>
        <ul>
            <li>{{this.title}}</li>
            <li>{{this.originalTitle}}</li>
            <li>{{this.lenguage}}</li>
            <li>{{this.vote}}</li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
import {store} from '../store.js'
    export default {
        data(){
            return{
                query: store.query,
                api: store.API_KEY,
                // title:[],
                // originalTitle:[],
                // lenguage:[],
                // vote:[],
                movie:[]

            }
        },
        methods:{
        reponseFromTheButton(){
            axios
            .get('https://api.themoviedb.org/3/search/movie',{
                params:{
                    api_key: this.api,
                    query: this.query
                }
            }).then((res) => {
                for(let i = 0; i < res.data.results.length; i++){

                    const title = res.data.results[i].title

                    const originalTitle = res.data.results[i].original_title

                    const lenguage = res.data.results[i].original_title

                    const vote = res.data.results[i].vote_average

                    this.movie.push({
                        title,
                        originalTitle,
                        lenguage,
                        vote
                    })
                    // this.title.push(res.data.results[i].title),

                    // this.originalTitle.push(res.data.results[i].original_title),

                    // this.lenguage.push(res.data.results[i].original_language),

                    // this.vote.push(res.data.results[i].vote_average),
                    
                    // console.log(this.title, this.originalTitle, this.lenguage, this.vote)

                    

                }
                // console.log('array di film: ', res.data.results)
                // console.log('object della ricerca: ',res)

            })

        }
        },
        mounted(){
            // console.log(this.reponseFromTheButton())
            
        }
    }
</script>

<style lang="scss" scoped>

</style>