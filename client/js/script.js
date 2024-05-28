const { createApp } = Vue;

createApp({
    data() {
        return {
            baseApiUrl: "http://localhost:8888/boolean/php-dischi-json/server/",
            myArr: [],

        }
    },
    created() {
        axios.get(this.baseApiUrl + "read.php").then((resp) => {
            this.myArr = resp.data;
            console.log(this.myArr);
        })
            .catch((error) => {
                console.error("Error fetching data: ", error);
            });
    },
    methods: {
        toggleLike(index) {
            // const updatedLike = !disco.like;
            const data = {
                id: index
            };

            axios.post(this.baseApiUrl + "write.php", data, {
                headers: {
                    "Content-type": "multipart/form-data",
                },
            }).then(response => {
                this.dischi = response.data.results;
            })
                .catch(error => {
                    console.error("Error updating like: ", error);
                });
        }
    },
}).mount("#app")

