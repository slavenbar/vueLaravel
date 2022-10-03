<template>
    <header class="p-3 text-bg-dark">
        <h2>Main Header!</h2>
        <div class="container">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
            </a>

                <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li v-for="link in links">
                        <a :href="link.href" class="nav-link px-2 text-dark">{{ link.title }}</a>
                    </li>
                </ul>

            <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <input type="search" class="form-control form-control-dark text-bg-dark" placeholder="Поиск..." aria-label="Search">
            </form>

            <div class="text-end">
                <button type="button" class="btn btn-outline-light me-2">Логин</button>
                <button type="button" class="btn btn-warning">Регистрация</button>
            </div>
            </div>
            <router-view></router-view>
        </div>
    </header>
</template>

<script>
    export default {
        data() {
            return {
                links: [
                    {
                        title: 'Главная',
                        href: "/"
                    },
                    {
                        title: 'Блог',
                        href: "/blog"
                    }
                ]
            }
        },

        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
