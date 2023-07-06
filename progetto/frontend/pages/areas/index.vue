<!--

import CardArea from '~/components/CardArea.vue';
    Page with the list of all the dogs.
    As described in the Card component, the same component was used for both Dog and Location since they have the same structure.
-->
<template>
    <main>
       
        <h1> here you can find our areas of investement</h1>
        <div id="card-container">
            <CardArea v-for = "area of areas" :title = "area.name" :link = "'/areas/' + area.id" />
        </div>
    </main>
</template>

<script setup>

  const { data: areas } = await useFetch(useRuntimeConfig().public.serverURL + '/areas')


  useHead({
    title: 'All areas - Venture Innovative',
    meta: [
      {
        name: 'description',
        content: 'All areas page, the 3 main areas in which we invest' 
      },
      {
        name: 'keywords',
        content : 'areas, economy, tourism, healthcare'
      }
    ]
  });
  </script>

<style>
    #card-container
    {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        align-content: flex-start;
        gap: 20px;
    }

    main
    {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: flex-start;
        gap: 10px;
    }

</style>