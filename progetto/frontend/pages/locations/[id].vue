<!--

import SmallCardArea from '~/components/smallCardArea.vue';

import { SmallCard } from '~/.nuxt/components';

import SmallCardArea from '~/components/smallCardArea.vue';
    Page description for a single location.
    As described in the SmallCard component, the same component was used for both Dog and Location since they have the same structure.
-->
<template>
    <main>
        <div class = "info-group">
            <img id = "main-img" src = "~/assets/img/progetto.png" />
            <div id = "data-container">
                <p class = "data">Name: <span>{{ location.name }}</span></p>
                <p class = "data">Area: <span>{{ location.city }}</span></p>
            </div>
        </div>

        <p id = "description" v-html = "newLineOnFullStop(location.description)"></p>

        <h1 id="proj">area of concern:</h1>
        
        <div id = "dog-card-container">
           <SmallCardArea :title = "location.area.name" :link = "'/areas/' + location.area.id" />
        </div>

        <h1 id="proj">supervisor:</h1>
        
        <div id = "dog-card-container">
          <SmallCard :title = "location.dog.name" :subtitle = "location.dog.breed" :link = "'/dogs/' + location.dog.id" />
        </div>
        
    </main>
</template>

<script setup>
   
   const route = useRoute()
   const id = route.params.id
    // useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
   const { data: location } = await useFetch(useRuntimeConfig().public.serverURL + '/locations/' + id)
   
   useHead({
    title: "project - Venture innovative " ,
    meta: [
      {
        name: 'description',
        content: 'single project page, information about a specific project' 
      },
      {
        name: 'keywords',
        content : 'project, supervisor, areav'
      }
    ]
  });

</script>

<style>
    #dog-card-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 10px
    }

    #main-img {
    width: 30%;
    height: auto;
    }

    main {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .info-group {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 40px;
    }

    .data {
        font-weight: bolder;
        font-size: 20pt
    }

    .data span {
        font-weight: 100;
        font-size: 15pt;
    }

    #description {
        padding: 0 20px 0 20px;
        font-size: 15pt;
    }
</style>