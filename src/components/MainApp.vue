<template>
    <main class="main_page">
        <div class="container">
            <div class="row">
                <ul class="ul_row">
                    <CardApp/>

                </ul>
            </div>
        </div>
    </main>
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
@use '../style/general'

</style>