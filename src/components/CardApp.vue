<template>
    <div>
        <ul>
            <!-- v-for="(movie, i) in store.movies" :key="i" :movie="movie" -->
            <li v-for="(movie, i) in store.movies" :key="movie.id">
                <h1>{{movie.title}}</h1>
                <h2>{{movie.original_title}}</h2>
                <img class="flag" :src="`/img/${movie.language}.png`" :alt="`${movie.language}`">
                <h4>{{movie.vote}}</h4>
            </li>
            
        </ul>
        <ul>
            <li v-for="(serie, i) in store.tvSeries" :key="serie.id">
                <h1>{{serie.name}}</h1>
                <h2>{{serie.original_name}}</h2>
                <img class="flag" :src="`/img/${serie.language}.png`" :alt="`${serie.language}`">
                <h4>{{serie.vote}}</h4>
            </li>
        </ul>
    </div>
</template>

<script>
import {store} from '../store.js'
    export default {
        data(){
            return{
                store: store
            }
        },
        // props:{
        //     movie:{
        //         type:Object,
        //     },
        //     serie:{
        //         type:Object
        //     }
        // }
    }
</script>

<style lang="scss" scoped>
.flag{
    width: 30px;
    border-radius: 5px;
}
</style>