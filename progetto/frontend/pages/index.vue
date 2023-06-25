<!--
     Home page
-->
<template>
    <main>
        <h2>
            descrizione della VC capital per home page...
        </h2>
        <img id = "main-img" src = "~/assets/img/home.jpg" />

        <NuxtLink to = "/mostrelevant" class="linksyle"> 
            <div id="most_st">
               <h1> to see our top ranked projects, click here</h1>
            </div>
        </NuxtLink> 
        


    </main>
</template>

<style>
    #main-img {
    width: 80%;
    max-width: 1000px;
    height: auto;
    }

    main {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    #most_st
    {
        display: flex;
        flex-flow: column;
        padding: 10px;
        border: solid blue;
        width: fit-content;
        height: fit-content;
        background-color: rgb(245, 193, 96);
    }
    .linksyle{
        color: white;
        text-decoration: none;
    }
</style>