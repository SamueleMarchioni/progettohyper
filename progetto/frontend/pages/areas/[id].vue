<!--
    Page description for a single dog.
    As described in the SmallCard component, the same component was used for both Dog and Location since they have the same structure.
-->
<template>
    <main>
        <div class = "info-group">
            <img id = "main-img" src = "~/assets/img/economia.jpg" />
            <div id = "data-container">
                <p class = "data"> <span>{{ area.name }}</span></p>
            </div>
        </div>
        <p id = "description" v-html = "newLineOnFullStop(area.description)"></p>
        <!--
            v-html allows us to change the structure of a HTML element.
            It used because of the 'newLineOnFullStop' function that returns a string with the <br> tags.
            This function is a composable that is available anywhere, without requiring to be imported.
        -->
        <div id = "dog-card-container">
            <SmallCard v-for = "location of area.locations" :link = "'/locations/' + location.id" :title = "location.name" :subtitle = "location.city"/>
        </div>
    </main>
</template>

<script setup>
   const route = useRoute()
   const id = route.params.id
    // useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
   const { data: area } = await useFetch(useRuntimeConfig().public.serverURL + '/areas/' + id)
    
   useHead({
    title: "area - Venture innovative " ,
    meta: [
      {
        name: 'description',
        content: 'single area page, information about that spaific area, projects related' 
      },
      {
        name: 'keywords',
        content : 'area, projects'
      }
    ]
  });
    
</script>

<style>
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