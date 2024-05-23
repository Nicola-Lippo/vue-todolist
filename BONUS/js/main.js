'use strict';
console.log('ci sono');
//VUE
const {createApp} = Vue;

createApp({
    //in data vanno tutte le informazioni del mio appliacativo
    data() {
        return {
            title: 'V-todolist',
            //creo un array di oggetti con 2 proprietà text e done
            myArrayTobo: [
                {
                    text: 'Todo 1',
                    done: true,
                },
                {
                    text: 'Todo 2',
                    done: false,
                },
                {
                    text: 'Todo 3',
                    done: true,
                },
                {
                    text: 'Todo 4',
                    done: false,
                },
            ],
            newTobo: ''
        };
    },
    //methods è un oggetto che contiene delle chiavi che sono funzioni
    methods: {
        //funzioni () {}
        removeTobo(indexRicevuto) {
            console.log('rimuovi tobo')
            //.filter è un metodo degli array per non modificare i vecchi e ne restituisce di nuovi
            // 
            this.myArrayTobo = this.myArrayTobo.filter((_, index) => index !== indexRicevuto);
        },

        addTobo() {
            //se il valore e nullo o 0 ritorna, esci della funzione
            if (!this.newTobo) return;

            const myTobo = {
                //.trim rimuove gli spazzi prima e dopo il testo
                text: this.newTobo.trim(),
                done: false,
            };
            //.push metodo degli array
            this.myArrayTobo.push(myTobo);
            //svuotiamo il campo di input dopo aver pushato l elemento
            this.newTobo = null;
        },
        trueFalse(indexRicevuto) {
            console.log('funzioni')
            this.myArrayTobo[indexRicevuto].done = !this.myArrayTobo[indexRicevuto].done;
        }
    },
}).mount('#app');