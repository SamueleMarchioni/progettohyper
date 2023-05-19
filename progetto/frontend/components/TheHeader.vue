<!--
    Header of the page
-->
<template>
    <header>
        <NuxtLink to = "/"> <img id="img" src='~/assets/img/shield.png' /> </NuxtLink>
        <nav>
            <NuxtLink to = "/dogs" class="linksyle">PEOPLE</NuxtLink>
            <NuxtLink to = "/locations" class="linksyle">PROJECTS</NuxtLink>
            <NuxtLink to = "/areas" class="linksyle">AREAS</NuxtLink>
            <NuxtLink to = "/about" class="linksyle">ABOUT US</NuxtLink>
            <NuxtLink to = "/contact" class="linksyle">CONTACT US</NuxtLink>
        </nav>
    </header>
</template>

<style>
    header
    {
        background-color: rgb(11, 139, 182);
    }

    header
    {
        padding: 0px 20px 0px 20px;
        margin-bottom: 5px;
        border-bottom: 5px solid rgb(16, 16, 139);
        
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    nav {
        display: flex;
        gap: 40px;
        font-size: 17pt;
        font-weight: bold;
        color: white;
    
    }
    #img{
        max-width: 100%;
        max-height: 100%;
        height: 50px;
        width: 50px;
        margin: auto;
    }
    .linksyle:hover{
        color:rgb(142, 205, 226);

        
    }
    .linksyle{
        color: white;
        text-decoration: none;
    }
</style>