/**
    Attraverso l’apposita API di Boolean
    https://flynn.boolean.careers/exercises/api/random/mail
    generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
    **Bonus**
    Creare un loading e far comparire gli indirizzi email solamente quando sono stati TUTTI generati.
 */



    const {createApp} = Vue;


    createApp({
        data(){
            return {
                title: 'Email List',
                emailList: [],
                apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
            }
        },
        methods: {
            getApi(){
                for (i = 0; i < 10; i++){
                    axios.get(this.apiUrl)
                    .then( result => {
                        console.log(result.data.response);
                        this.emailList.push(result.data.response)
                    })
                }
            }
        },
        mounted(){
            this.getApi()
        }
    }).mount('#app')