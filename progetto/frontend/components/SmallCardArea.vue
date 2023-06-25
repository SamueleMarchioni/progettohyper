<template>
    <div class="card">
        <span class="title">{{ title }}</span>
        <NuxtLink :to = "link" ><button>Open description</button></NuxtLink>
    </div>
</template>

<script>
    export default {
        props: [
            'title',
            'link'
        ]
    }
</script>

<style>
    .image-container
    {
        display: flex;
        justify-content: center;
        padding: 2px;
        width: 250px;
        height: 250px;
    }

    .card
    {
        display: flex;
        flex-flow: column;
        padding: 20px;
        width: fit-content;
        height: fit-content;
    }

    .title
    {
        font-size: 2em;
        font-weight: bold;
    }
</style>