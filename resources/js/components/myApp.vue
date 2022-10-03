<template>
    <div class="container">
        <div class="row justify-content-center">
        <h2>I am MY App</h2>
        </div>
        <div>
            <b-table table-dark striped hover :items="items" :fields="fields"></b-table>
        </div>
        <br>
        </div>
    </div>
</template>

<script>
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

        mounted() {
            console.log('Component mounted.')
        }
    }
</script>

<style scoped>

</style>