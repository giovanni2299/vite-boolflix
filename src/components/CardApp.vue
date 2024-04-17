<template>
        
        <!-- v-for="(movie, i) in store.movies" :key="i" :movie="movie" -->
        <li class="col" v-for="(movie, i) in store.movies" :key="movie.id">
            
            <div>
                <img class="show_info" :src="`https://image.tmdb.org/t/p/w342/${movie.image}`" alt="">
            </div>
            
           
            <div class="d-none">

                <h1>{{movie.title}}</h1>
                <p>{{movie.originalTitle}}</p>

                <img class="flag" :src="`/img/${movie.language}.png`" :alt="`${movie.language}`">
                <!-- <h4>{{movie.vote}}</h4> -->
                <!-- <h4 >{{ newVote(movie.vote)}}</h4> -->

                <p>
                    <font-awesome-icon class="star" :icon="['fas', 'star']"  v-for="star in newVote(movie.vote) "/>
                    <font-awesome-icon :icon="['far', 'star']" v-for="star in regularStars(movie.vote) "/>
                </p>
            </div>
        </li>


        <li class="col" v-for="(serie, i) in store.tvSeries" :key="i">
            
            <div>
                <img class="show_info" :src="`https://image.tmdb.org/t/p/w342/${serie.tvImage}`" alt="">
            </div>
            
           
            <div class="d-none">

                <h1>{{serie.tvTitle}}</h1>
                <p>{{serie.tvOriginalTitle}}</p>

                <img class="flag" :src="`/img/${serie.tvLanguage}.png`" :alt="`${serie.tvLanguage}`">

                <!-- <h4>{{serie. tvVote}}</h4> -->
                <!-- <h4>{{newVoteTv(serie.tvVote)}}</h4> -->

                <p>
                    <font-awesome-icon :icon="['fas', 'star']" v-for="star in newVote(serie.tvVote) "/>
                    <font-awesome-icon :icon="['far', 'star']" v-for="star in regularStars(serie.tvVote) "/>
                </p>
            </div>

        </li>
        
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
.d-none{
    display: none;
}

.col:hover .d-none{
    display: block;
    
}
.col:hover .show_info{
    display: none;
    
}
.star{
    color: yellow;
}
</style>