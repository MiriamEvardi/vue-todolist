const { createApp } = Vue;

createApp({
    data() {
        return {

            newTask: '',

            tasks: [
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

    methods: {

        deleteTask(taskIndex) {
            this.tasks.splice(taskIndex, 1);
        },

        addNewTask() {
            this.tasks.push({
                text: this.newTask,
                done: false
            });

            this.newTask = '';
        },

        toggleTask(taskIndex) {
            this.tasks[taskIndex].done = !this.tasks[taskIndex].done
        }
    },

}).mount("#app");



