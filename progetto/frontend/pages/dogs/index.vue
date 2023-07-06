<!--
    Page with the list of all the dogs.
    As described in the Card component, the same component was used for both Dog and Location since they have the same structure.
-->
<template>
    <main>
        <!--
            Form used to filter the list by age.
        -->
        
        <h1>OUR TEAM</h1>
        <h2> we are a team of people who invest in the future</h2>
        <div id="card-container">
            <Card v-for = "dog of dogs" :title = "dog.name" :subtitle = "dog.breed" :link = "'/dogs/' + dog.id" :img_link="`_nuxt/assets/img/${dog.name}.jpg`" />
        </div>
    </main>
</template>

<script setup>

 const { data: dogs } = await useFetch(useRuntimeConfig().public.serverURL + '/dogs')


  useHead({
    title: 'All pearson - Venture Innovative',
    meta: [
      {
        name: 'description',
        content: 'All pearson page, the team that currently work in our firm' 
      },
      {
        name: 'keywords',
        content : 'pearson, team'
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
    }

    main
    {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: flex-start;
    }

    h1{
        color:  rgb(27, 103, 202);
    }

    h2{
        color:rgb(11, 139, 182);
    }

</style>