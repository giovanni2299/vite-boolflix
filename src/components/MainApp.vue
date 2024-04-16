<template>
    <div>
        <CardApp :movies="movies"/>
    </div>
</template>

<script>
import CardApp from './CardApp.vue'
import {store} from '../store.js'
    export default {
        components:{
            CardApp,
        },
        props:{
            movies:{
                type:Array
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>