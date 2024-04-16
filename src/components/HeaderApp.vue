<template>
    <div>
        <input v-model="query" type="text" placeholder="cerca il film..">
        <button @click="reponseFromTheButton()">invia</button>
        <ul>
            <li>{{title}}</li>
            <li>{{lenguage}}</li>
            <li>{{vote}}</li>
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
                title:[],
                originalTitle:[],
                lenguage:[],
                vote:[],

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
                    this.title.push(res.data.results[i].title)
                    this.originalTitle.push(res.data.results[i].original_title)
                    this.lenguage.push(res.data.results[i].original_language)
                    this.vote.push(res.data.results[i].vote_average)
                    
                    console.log(this.title, this.originalTitle, this.lenguage, this.vote)


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