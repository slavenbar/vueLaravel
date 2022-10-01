<template>
    <div class="container">
        <div>
            <b-table striped hover :items="items" :fields="fields"></b-table>
        </div>
    <br>
    <button class="btn btn-danger" @click="sayHello">Hello</button>
    <ExampleComponent></ExampleComponent>
        <div class="row justify-content-center">
            <h2>Hello Laravel + Vue !!!222</h2>
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">TEST Component</div>

                    <div class="card-body">
                        I'm an TEST component!
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ExampleComponent from "./ExampleComponent.vue"
    export default {
        methods: {
            sayHello() {
                console.log('Hello Slava!!!')
            }
        },

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
            ExampleComponent
        },

        mounted() {
            console.log('Component mounted.')
        }
    }
</script>

<style scoped>

</style>