<template>

    <!-- v-model directive to create binding on form input on search-->
    <Search v-model="search" />

    <!-- use of v-for to loop over data -->
    <div class="row" v-for="post in posts.data" :key="post.id">

        <div class="col-12 col-md-4" v-for="event in filteredBlogs" :key="event.id">

            <div class="card my-3">
            <img class="card-img-top" :src="event.images.original" :alt="event.title + ' image'">
                <div class="card-body">
                    <h5 class="card-title fw-bold">{{ event.title }}</h5>
                        <div v-for="dateTime in event.instances" :key="dateTime.id">
                            <p class="card-text fw-bold my-2"><span id="dateNew">{{ moment(dateTime.date_time).format(" ddd Do MMM YYYY" + " | " + "LT") }}</span></p>
                        </div>
                    <p id="description" class="card-text elipse"><span v-html=event.short_description></span></p>
                    <a href="#" class="btn btn-primary w-100 skyButton py-3" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</a>
                </div>
            </div>

        </div>

    </div>

</template>

<script>

import Search from './Search';

/* Moments Library */
var moment = require('moment');

export default {
    name: "Events",

    /* Create empty posts array for data */
    data() {
        return {
        moment: moment,
        search: "",
        posts: []
        };
    },

    /* Register Search */
    components: {
        Search
    },
   
    /* Use axios to get response data - https://axios-http.com/docs/intro */
    mounted () {
        const axios = require('axios').default;
        axios
        /* Get event data */
        .get('http://localhost:8081/events.json')
        .then(response => (this.posts = response))
    },

    /* Filter post title and post body - to lower case for consistency and to prevent capitals being entered */
    computed: {
        filteredBlogs: function(){
            return this.posts.data.data.getEvents.filter(event =>{
                return event.title.toLowerCase().includes(this.search.toLowerCase()) ||  event.short_description.toLowerCase().includes(this.search.toLowerCase()) ;
            })
        }
    }

    

};

</script>



