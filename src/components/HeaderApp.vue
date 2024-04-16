<template>
    <div>
        <input type="text" placeholder="cerca il film..">
        <button @click="reponseFromTheButton()">invia</button>
        <ul>
            <li>{{}}</li>
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
                console.log(res.data.results)
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