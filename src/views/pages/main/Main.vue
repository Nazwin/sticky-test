<template>
    <div id="page">
        <router-link :to="{name: 'login-page'}" class="route-link btn btn-m rounded-sm mt-4 mb-4 btn-full bg-green-dark text-uppercase font-900">
            Sign in page
        </router-link>
    </div>
</template>

<script>

export default {
    name: 'Main'
}
</script>

<style>
    .route-link {
        display: inline-block;
        margin: 0 16px;
    }
</style>
