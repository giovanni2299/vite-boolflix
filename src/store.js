//CREO DUE VARIABILI E GLI ASEGO:
let query = 'futuro' //AD UNA LA STRINGA COME VALORE DI RICERCA 
let API_KEY = '055b4855dfc1ff9aaef6958a812ad594' //E AD UN ALTRA LA MIA CHIAVE PERSONALE DELLE API 

axios.get('https://api.themoviedb.org/3/search/movie',{
    params:{
        API_KEY: API_KEY,
        query: query
    }
})