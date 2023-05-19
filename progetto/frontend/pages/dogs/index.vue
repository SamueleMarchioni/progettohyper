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
            <Card v-for = "dog of filtered" :title = "dog.name" :subtitle = "dog.breed" :link = "'/dogs/' + dog.id" />
        </div>
    </main>
</template>

<script setup>
    // useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
    const { data: dogs } = await useFetch(useRuntimeConfig().public.serverURL + '/dogs')
    /*
        In order to implement a filter, we use the computed property.
        This allows to have a cached value that contains the filtered list.
        Instead of using the normal list for the cards, we used the computed property directly.
    */
    const age = ref(0);

    const filtered = computed(() => {
        // Checking for values where the full list is provided
        if(age.value == 0 || age.value == "")
            return dogs.value

        const arr = []

        // Filtering the list
        for(let dog of dogs.value) {
            if(dog.age < age.value)
                arr.push(dog)
        }

        // Returning the filtered list
        return arr
    })
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

    .form-container {
        width: 90%;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-content: flex-start;
    }

    h1{
        color:  rgb(27, 103, 202);
    }

    h2{
        color:rgb(11, 139, 182);
    }

</style>