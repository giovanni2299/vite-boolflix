<template>
    <div>
        <CardApp  />
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