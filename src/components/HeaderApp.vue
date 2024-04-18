<template>
    <header class="header_page">
        <div class="logo">
            <img class="logo_img" src="../../public/img/netflix-logo.png" alt="">
        </div>
        <ul class="ul_header">
                <li class="categories">Categorie
                   <span class="span_icon" @click="changeBooleanValue()"> <font-awesome-icon class="cursor" :icon="['fas', 'chevron-down']" /> </span> 
                   <div class="absolute">
                    <div :class="modal === false ? 'modal_class d-block ' : '' ">
                        <p>
                            <a href="#">
                                Horror
                            </a>
                        </p>
                        <p>
                            <a href="#">
                                Azione
                            </a>
                        </p>
                        <p>
                            <a href="#">
                                Anime
                            </a>
                        </p>
                        <p>
                            <a href="#">
                                Documentari
                            </a>
                        </p>
                        <p>
                            <a href="#">
                                Altro..
                            </a>
                        </p>
                    </div>

                   </div>
                    
                </li>
                <li>Movies</li>
                <li>Series</li>
                <li>Preference</li>
                <li>Download</li>
            </ul>
        <div class="">
            <input @keyup.enter="bothResponse()" class="search" v-model="query" type="text" placeholder="cerca il film..">
            <button class="valid" @click="bothResponse()">invia</button>
        </div>
       
    </header>
</template>

<script>
import axios from 'axios'
import {store} from '../store.js'
    export default {
        data(){
            return{
                modal: false,
                store: store,
                query: store.query,
                api: store.API_KEY,
                // title:[],
                // originalTitle:[],
                // lenguage:[],
                // vote:[],
                

            }
        },
        methods:{
        reponseMovies(){
            axios
            .get('https://api.themoviedb.org/3/search/movie',{
                params:{
                    api_key: this.api,
                    query: this.query
                }
            }).then((res) => {
                this.store.movies = [];
                const data = res.data;
                const results = data.results;
                for(let i = 0; i < results.length; i++){

                    const title = results[i].title
                    const originalTitle = results[i].original_title
                    const language = results[i].original_language
                    const vote = results[i].vote_average
                    const image = results[i].poster_path
                    const description = results[i].overview
                    
                    //store.movies = res.data.results

                    this.store.movies.push({
                        title,
                        originalTitle,
                        language,
                        vote,
                        image,
                        description
                    })
                    

                    //RISULTATO APPAIONO GLI ARRAY CON I VALORI IN FORMATO STRINGA

                    // this.title.push(res.data.results[i].title),

                    // this.originalTitle.push(res.data.results[i].original_title),

                    // this.lenguage.push(res.data.results[i].original_language),

                    // this.vote.push(res.data.results[i].vote_average),
                    
                    // console.log(this.title, this.originalTitle, this.lenguage, this.vote)

                    

                }
                // console.log('array di film: ', res.data.results)
                // console.log('object della ricerca: ',res)
                console.log(this.store.movies)

            })
        },responseSeries(){ //CHIAMATA AL SERVER TRAMITE AXIOS
            axios
            .get('https://api.themoviedb.org/3/search/tv',{
                params:{
                    api_key: this.api,
                    query: this.query
                }
            }).then((response)=> {
                this.store.tvSeries = [];                                       //ALL INTERNO DEL .THEN TI SEI PRESO I VALORI DEL OGGETO CHE TI RESTITUISCE LA CHIAMATA 
                const data2 = response.data;                                   //I DATI DEL OGGETTO + LA RISPOSTA DEL THEN
                const results2 = data2.results;                               // I RISULTATI DEL DATA 
                for(let j = 0; j < results2.length; j++){                    //QUI AI PERCORSO LA LUNGHEZZA DEI TUOI RISULTATI E TI SEI PRESO ALTRI VALORI SINGOLI 
                    const tvTitle = results2[j].name                        //IL NOME 
                    const tvOriginalTitle = results2[j].original_name      //IL 'COGNOME'
                    const tvLanguage = results2[j].original_language      //LA LINGUA
                    const tvVote = results2[j].vote_average              //LA GRADAZIONE
                    const tvImage = results2[j].poster_path             //LA SUA FOTO
                    const tvDescription = results2[j].overview         //LA SUA RECENSIONE

                    this.store.tvSeries.push({
                        tvTitle,
                        tvOriginalTitle,
                        tvLanguage,
                        tvVote,
                        tvImage,
                        tvDescription
                    })
                }
                console.log(this.store.tvSeries)
            })
        },
        bothResponse(){
            this.reponseMovies()
            this.responseSeries()
            this.randomMovie()
            
            
        },
        changeBooleanValue(){
            this.modal = !this.modal
            console.log('ho cliccato')
        },
        randomMovie(){ 
            //PER POPOLARE IL MAIN ANCHE DAL PRIMO CARICAMENTO SENZA SCRIVERE NULLA UTILIZZANDO UN ARRAY E RECUPERANDOTI IL SUO INDICE 
            //CREO L' ARRAY
            const emptyArray = ['a','b','c','d','e','f','g','h','i','l','m','n','o','p','q','r','s','t','u','v','z',]
            //GENEREO UN IDICE RANDOM MOLTIPLICANDOLO PER LA SUA LUNGHEZZA
            const randomI = Math.floor(Math.random() * emptyArray.length);
            //RITORNA L'INDICE RANDOM TROVATO DENTRO L'ARRAY 
            return emptyArray[randomI]
        }



        },
        mounted(){
            // console.log(this.reponseFromTheButton())
            // console.log(this.contacts[1].messages[1].status)
            this.query = this.randomMovie()
            this.bothResponse()
            this.query = ''
        
            
            
        }
    }
</script>

<style lang="scss" scoped>
@use '../style/general';


</style>