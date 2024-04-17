<template>
    <div>
        <ul>
            <!-- v-for="(movie, i) in store.movies" :key="i" :movie="movie" -->
            <li v-for="(movie, i) in store.movies" :key="movie.id">
                <h1>{{movie.title}}</h1>
                <h2>{{movie.originalTitle}}</h2>
                <div>
                    <img :src="`https://image.tmdb.org/t/p/w342/${movie.image}`" alt="">
                </div>
                <img class="flag" :src="`/img/${movie.language}.png`" :alt="`${movie.language}`">
                <h4>{{movie.vote}}</h4>
                <p>
                    <font-awesome-icon :icon="['fas', 'star']" />
                    <font-awesome-icon :icon="['far', 'star']" />
                </p>
            </li>
            
        </ul>
        <ul>
            <li v-for="(serie, i) in store.tvSeries" :key="i">
                <h1>{{serie.tvTitle}}</h1>
                <h2>{{serie.tvOriginalTitle}}</h2>
                <div>
                    <img :src="`https://image.tmdb.org/t/p/w342/${serie.tvImage}`" alt="">
                </div>
                <img class="flag" :src="`/img/${serie.tvLanguage}.png`" :alt="`${serie.tvLanguage}`">
                <h4>{{serie. tvVote}}</h4>
                <p>
                    <font-awesome-icon :icon="['fas', 'star']" />
                    <font-awesome-icon :icon="['far', 'star']" />
                </p>
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
        methods:{
            voteWithStars(){
                this.store.movies.vote / 2
                
            }
        },
        mounted(){
            console.log(this.store.movies.vote)
        }
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