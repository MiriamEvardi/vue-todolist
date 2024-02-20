const { createApp } = Vue;

createApp({
    data() {
        return {

            toDoList: [
                {
                    text: "Fare la spesa",
                    done: false
                },
                {
                    text: "Studiare JavaScript",
                    done: true
                },
                {
                    text: "Fare esercizio fisico",
                    done: false
                }
            ]

        }
    },

}).mount("#app");



