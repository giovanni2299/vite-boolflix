<template>
    <div>
        <ul>
            <!-- v-for="(movie, i) in store.movies" :key="i" :movie="movie" -->
            <li v-for="(movie, i) in store.movies" :key="i">
                <h1>{{movie.title}}</h1>
                <h2>{{movie.original_title}}</h2>
                <h3 :class="movie.language" ><img :src="movie.language" alt=""> {{movie.language}}</h3>
                <h4>{{movie.vote}}</h4>
            </li>
            
        </ul>
        <ul>
            <li v-for="(serie, i) in store.tvSeries" :key="i">
                <h1>{{serie.title}}</h1>
                <h2>{{serie.original_title}}</h2>
                <h3 :class="serie.language">{{serie.language}}</h3>
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
.en{
    // background: blue;
    background-image: url(../../public/img/england.png);
    background-size: cover;
    border-radius: 5px;
    width: 50px;
}
.it{
    // background: green;
    background-image: url(../../public/img/italy.png);
    border-radius: 5px;
    background-size: cover;
    width: 50px;
}
.es{
    // background: red;
    background-image: url(../../public/img/spanish.png);
    background-size: cover;
    border-radius: 5px;
    width: 50px;
}
</style>