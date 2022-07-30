<template>
    <div class="page-content header-clear-medium">
        <button @click="logout" class="logout btn btn-m rounded-sm mt-4 mb-4 btn-full bg-green-dark text-uppercase font-900">
            Logout
        </button>
    </div>
</template>

<script>

export default ({
    name: 'Logout',
    mounted() {
        console.log('Settings page')
    },
    methods: {
        logout(){
            const token = localStorage.getItem('access_token');
            if (!token){
                this.$router.push({name: 'login-page'})
            }

            localStorage.removeItem('access_token');
            this.$router.push({name: 'login-page'})
        }
    }
})
</script>

<style>
    button.logout {
        margin: 0 16px;
    }
</style>
