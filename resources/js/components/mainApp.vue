<template>
    <div class="container">
        <div class="row justify-content-center">
        <h2>I am Main App</h2>
        </div>
        <div>
            <b-table striped hover :items="items" :fields="fields"></b-table>
        </div>
        <br>
        <div class="d-grid gap-2 col-2 mx-auto">
            <button class="btn btn-primary" type="button">Button</button>
        </div>
        <br>
        <div>
            <testComponent></testComponent>
        </div>
    </div>
</template>

<script>
import testComponent from "./testComponent.vue"
    export default {

        data() {
            return {
        // Note `isActive` is left out and will not appear in the rendered table
                fields: ['first_name', 'last_name', 'age'],
                items: [
                    { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
                    { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
                    { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
                    { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
                ]
            }
        },

        components: {
            testComponent
        },

        mounted() {
            console.log('Component mounted.')
        }
    }
</script>

<style scoped>

</style>