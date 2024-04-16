<template>
    <div>
        <ul>
            <li  v-for="movie in movies">
                <h1>{{movie.title}}</h1>
                <h2>{{movie.original_title}}</h2>
                <h3>{{movie.language}}</h3>
                <h5>{{movie.vote}}</h5>
            </li>
            
        </ul>
    </div>
</template>

<script>
import {store} from '../store.js'
    export default {
        props:{
            movies:{
                type:Array
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>