<template>
    <div>
        <CardApp v-for="(movie, i) in store.movies" :key="i" :movie="movie"/>
    </div>
</template>

<script>
import CardApp from './CardApp.vue'
import {store} from '../store.js'
    export default {
        data(){
            return{
                store: store,
            }
        },
        components:{
            CardApp,
        },
        
    }
</script>

<style lang="scss" scoped>

</style>