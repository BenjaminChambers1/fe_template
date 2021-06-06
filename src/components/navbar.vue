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
                    <!-- Subtitle -->
                </p>
            </div>
        </div>
    </section>
</div>
</template>

<script>

export default {
	methods: {
        sign_up: function() {
            this.$http.get('/').then(
                succ => {
                    console.log(succ.data);
                },
                error => {console.log(error)}
            );
        },
        sign_in: function(){
        
        }
    }
}
</script>
