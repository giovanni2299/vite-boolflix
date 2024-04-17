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
                <!-- <h4>{{movie.vote}}</h4> -->
                <h4 >{{ newVote(movie.vote)}}</h4>
                <p>
                    <font-awesome-icon :icon="['fas', 'star']"  v-for="star in newVote(movie.vote) "/>
                    <font-awesome-icon :icon="['far', 'star']" v-for="star in regularStars(movie.vote) "/>
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
                <!-- <h4>{{serie. tvVote}}</h4> -->
                <h4>{{newVoteTv(serie.tvVote)}}</h4>
                <p>
                    <font-awesome-icon :icon="['fas', 'star']" v-for="star in newVote(serie.tvVote) "/>
                    <font-awesome-icon :icon="['far', 'star']" v-for="star in regularStars(serie.tvVote) "/>
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
            newVote(voto){
                const newVoto = Math.floor(voto / 2)
                return newVoto
                
            },
            newVoteTv(votoTv){
                const newVotoTv = Math.floor(votoTv / 2)
                return newVotoTv

            },
            regularStars(voto){
                const result = 5 - (Math.floor(voto / 2))
                return result

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