<template>
    <div>
        <input type="text" placeholder="cerca il film..">
        <button @click="reponseFromTheButton()">invia</button>
    </div>
</template>

<script>
import axios from 'axios'
import {store} from '../store.js'
    export default {
        data(){
            return{
                api: store.API_KEY,
                query: store.query
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
            })

        }
        },
        mounted(){
            console.log(this.reponseFromTheButton())
            
        }
    }
</script>

<style lang="scss" scoped>

</style>