<template>
    <div class="page-content header-clear-medium">

        <div class="card card-style">
            <div class="content mt-4 mb-1">
                <h1 class="text-center font-800 font-40 pt-2 mb-1">Sign In</h1>
                <p class="color-highlight text-center font-12 mb-3">Let's get you logged in</p>
                <validation-observer
                    ref="loginForm"
                    #default="{invalid}"
                >
                    <validation-provider
                        #default="{ errors, failedRules }"
                        name="Name"
                        vid="name"
                        :rules="{
                            required: true,
                        }"
                    >
                        <div class="input-style no-borders has-icon validate-field mb-4">
                            <i class="fa fa-user"></i>
                            <input type="name" v-model="form.login" class="form-control validate-name" id="form1a" placeholder="Name">
                            <label for="form1a" class="color-blue-dark font-10 mt-1">Name</label>
                            <i class="fa fa-times disabled invalid color-red-dark"></i>
                            <i class="fa fa-check disabled valid color-green-dark"></i>
                            <em>(required)</em>
                        </div>
                        <span class="color-red-dark" v-if="!Object.keys(failedRules).length">{{ errors[0] }}</span>
                        <span class="color-red-dark" v-if="'required' in failedRules">Name is required</span>
                    </validation-provider>

                    <validation-provider
                        #default="{ errors, failedRules }"
                        name="Password"
                        vid="password"
                        :rules="{
                            required: true,
                        }"
                    >
                        <div class="input-style no-borders has-icon validate-field mb-4">
                            <i class="fa fa-lock"></i>
                            <input type="password" v-model="form.password" class="form-control validate-password" id="form3a" placeholder="Password">
                            <label for="form3a" class="color-blue-dark font-10 mt-1">Password</label>
                            <i class="fa fa-times disabled invalid color-red-dark"></i>
                            <i class="fa fa-check disabled valid color-green-dark"></i>
                            <em>(required)</em>
                        </div>
                        <span class="color-red-dark" v-if="!Object.keys(failedRules).length">{{ errors[0] }}</span>
                        <span class="color-red-dark" v-if="'required' in failedRules">Password is required</span>
                    </validation-provider>

                    <!-- <a href="#" class="btn btn-m rounded-sm mt-4 mb-4 btn-full bg-green-dark text-uppercase font-900">Login</a> -->
                    <button
                        class="login btn btn-m rounded-sm mt-4 mb-4 btn-full bg-green-dark text-uppercase font-900"
                        type="submit"
                        variant="primary"
                        :disabled="invalid"
                        @click="login"
                    >
                        Login
                    </button>

                </validation-observer>
                <div class="divider"></div>

                <a href="#" class="btn btn-icon btn-m rounded-sm btn-full shadow-l bg-facebook text-uppercase font-900 text-start"><i class="fab bg-transparent fa-facebook-f text-center"></i>Login with Facebook</a>
                <a href="#" class="btn btn-icon btn-m rounded-sm mt-2 btn-full shadow-l bg-twitter text-uppercase font-900 text-start"><i class="fab bg-transparent fa-twitter text-center"></i>Login with Twitter</a>

                <div class="divider mt-4 mb-3"></div>

                <div class="d-flex">
                    <div class="w-50 font-11 pb-2 color-theme opacity-60 pb-3 text-start"><a href="page-signup-1.html" class="color-theme">Create Account</a></div>
                    <div class="w-50 font-11 pb-2 color-theme opacity-60 pb-3 text-end"><a href="page-forgot-1.html" class="color-theme">Forgot Credentials</a></div>
                </div>
            </div>

        </div>
        
        <Footer />

    </div>
</template>

<script>
import Footer from '../../components/Footer.vue'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules'
extend('required', required)
// import { required, min, max, password } from 'vee-validate/dist/rules';

export default {
  name: 'Login',
  components: {
    Footer,
    ValidationProvider, ValidationObserver
  },
  props: {
    msg: String
  },
  data() {
    return {
        form: {
            login: 'username',
            password: 'password' 
        },
        // validation rules
        required
    }
  },
  mounted() {
    console.log('Login page')
  },
  methods: {
    login() {

        if(this.form.login === 'username' && this.form.password === 'password'){
            const rand = Math.random().toString(16).substr(2, 8);
            localStorage.setItem('access_token', rand);
            this.$router.push({name: 'home-page'})
        } else {
            this.$refs.loginForm.setErrors({name: 'Wrong login or password', password: 'Wrong login or password'});
        }
    },
  }
}
</script>

<style>
.login {
    width: 100%;
}
</style>
