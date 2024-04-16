<template>
    <div>
        <input type="text" placeholder="cerca il film..">
        <button>invia</button>
    </div>
</template>

<script>
import axios from 'axios'
import {store} from '../store.js'
    export default {
        data(){
            return{
                query: store.query,
                key_result: store.API_KEY
            }
        },
        mounted(){
            axios.get('https://api.themoviedb.org/3/search/movie?',{
                params:{
                    api_key: this.key_result,
                    query: this.query
                }
                

            })

            
        }
    }
</script>

<style lang="scss" scoped>

</style>