<!--
    Contact Page
-->
<template>
    <main>
        <main>
            <h1> Are you interested? these are our contacts:</h1>
                <ul>
                    <li>E-mail: info@VCname.it</li>
                    <li>Tel: 053843721</li>
                </ul>
            <h2> Write to us now in a simple way</h2>
            <form>
                <div>
                    <label for = "name">Name & Surname</label>
                    <input type = "text" id = "name" placeholder = "Name & Surname" required>
                </div>
                <div>
                    <label for = "mail">E-mail</label>
                    <input type = "email" id = "mail" placeholder = "E-mail" required>
                </div>
                <div id = "message-div">
                    <label for = "message">Message</label>
                    <textarea id = "message" placeholder = "Write your message here" required></textarea>  
                </div>
                <button>Send Message</button>
             </form>

        </main>
    </main>
</template>

<script setup>
  useHead({
    title: 'Contact us - Venture Innovative',
    meta: [
      {
        name: 'description',
        content: 'Contac us page: our e-mail, adress, telephone number and a form to send us an e-mail directly from this page' 
      },
      {
        name: 'keywords',
        content : 'contact, name, surname, e-mail, telephone '
      }
    ]
  });
</script>

<style>
    main {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    }

    form {
        width: 600px;
        display: flex;
        flex-direction: column;
        padding: 15px;
        border: 2px rgb(243, 136, 93) dashed;
        border-radius: 5px;
        row-gap: 20px;
    }

    form div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    textarea {
        width: 99%;
        min-height: 5.1em;
        resize: vertical;
    }

    input {
        width: 60%;
    }

    label {
        font-size: 13pt;
        font-weight: bold;
    }

    #message-div {
        flex-direction: column;
    }

    @media screen and (max-width: 650px) {
        form div {
            flex-direction: column;
        }

        input {
            width: 100%;
        }
        
        form {
            width: 90%;
            min-width: 400px;
        }
    }
    
</style>