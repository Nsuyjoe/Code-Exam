const app = new Vue({

    el: '#toDo',

    data: {
        result: " ",
        responseAvailable: false,
        apiKey: '<YOUR_RAPIDAPI_KEY>'
    },

    methods: {
        fetchAPIData() {
            this.responseAvailable = false;

            fetch("https://illfatedlavendermemoryallocator--jabez007.repl.co/",
                {
                    "method": "GET", //or PUT or POST or DELETE
                    "headers": {
                        "x-rapidapi-host": "GET/api/todo",
                        "x-rapidapi-key": this.apiKey
                        
                    }
                })
                .then(response => {
                    if (response.ok) {
                        return response.json()
                    } else {
                        alert("Server returned " + response.status + " : " + response.statusText);
                    }
                })
                .then(response => {
                    this.result = response.task;
                    this.responseAvailable = true;
                })
                .catch(err => {
                    console.log(err);
                });

        }
    }

})
