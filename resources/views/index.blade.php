<!DOCTYPE html>
<!-- Hello my friends!-->
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Vue$$$Laravel</title>
    </head>
    <body>
        <div id="app">
            <!-- Здесь подключаем компоненты Vue к первой странице PHP-->
            <!-- <test-component></test-component> -->
            <main-app></main-app>
            <!-- <example-component></example-component> --> 
        </div>
        <script src="{{mix('/js/app.js')}}"></script>
        <div class="flex-center position-ref full-height">
            @if (Route::has('login'))
                <div class="top-right links">
                    @auth
                        <a href="{{ url('/home') }}">Home</a>
                    @else
                        <a href="{{ route('login') }}">Login</a>

                        @if (Route::has('register'))
                            <a href="{{ route('register') }}">Register</a>
                        @endif
                    @endauth
                </div>
            @endif

            <div class="content">
                <div class="title m-b-md">
                    Vue and Laravel
                </div>
            </div>
        </div>
    </body>
</html>
