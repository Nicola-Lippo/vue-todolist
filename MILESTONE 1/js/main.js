'use strict';
console.log('ci sono');
//VUE
const {createApp} = Vue;

createApp({
    data(){
        return {
            title: 'V-todolist',
            //creo un array di oggetti con 2 proprietà text e done
            myArrayTodo: [
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
        };
    },
}).mount('#app');