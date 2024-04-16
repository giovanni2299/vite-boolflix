<template>
    <div>
        <ul>
            <li >
                <h1>{{movie.title}}</h1>
                <h2>{{movie.original_title}}</h2>
                <h3 :class="movie.language" >.</h3>
                <h5>{{movie.vote}}</h5>
            </li>
            
        </ul>
    </div>
</template>

<script>
import {store} from '../store.js'
    export default {
        props:{
            movie:{
                type:Object,
            }
        }
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