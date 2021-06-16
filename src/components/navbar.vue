<template>
<div>
    <section class="hero is-info is-fullheight">
        <div class="hero-head">
            <nav class="navbar">
                <div class="container">
                    <div id="navbarMenuHeroB" class="navbar-menu">
                        <div class="navbar-start">
                            <a class="navbar-item is-active">
                                Home
                            </a>
                            <a class="navbar-item">
                                About
                            </a>
                            <a class="navbar-item">
                                Documentation
                            </a>
                        </div>
                        <div class="navbar-end">
                            <span class="navbar-item">
                                <a class="button is-rounded is-info is-light" @click="sign_up()">
                                    <span>
                                        Sign Up
                                    </span>
                                </a>
                            </span>
                            <span class="navbar-item">
                                <a class="button is-rounded is-link"  @click="sign_in()">
                                    <span>
                                        Sign In
                                    </span>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

        <div class="hero-body">
            <div class="container has-text-centered">
                <p class="title">
                    Home Page
                </p>
                <p class="subtitle">
                </p>
            </div>
        </div>
        <div class="button" @click="get_users()">
            get users
        </div>
    </section>
</div>
</template>

<script>

export default {
	methods: {
        sign_up: function() {
            this.$http.post('/users/sign-up', {
                username: 'benji',
                password: 'password'
            }).then(
                succ => {
                    console.log(succ.data);
                },
                error => {console.log(error)}
            );
        },
        sign_in: function(){
            this.$http.post('/users/log-in', {
                username: 'benji',
                password: 'password'
            }).then(
                succ => {
                    console.log(succ.data);
                    if (succ.data.access_token) {
                        this.$store.state.access_token = succ.data.access_token;
                        console.log(this.$store.state.access_token);
                    }
                },
                error => {console.log(error)}
            );
        },
        get_users: function(){
            this.$http.get('/users/get-users').then(
                succ => {
                    console.log(succ.data);
                },
                error => {console.log(error)}
            );
        }
    }
}
</script>
