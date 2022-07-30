<template>
    <div id="page">
        <div class="header header-fixed header-logo-center">
            <router-link :to="{name: 'home-page'}" class="header-title">Sticky Mobile</router-link>
            <a @click.prevent="$router.go(-1)" href="#" data-back-button class="header-icon header-icon-1"><i class="fas fa-arrow-left"></i></a>
            <!-- <a href="#" data-toggle-theme class="header-icon header-icon-4"><i class="fas fa-lightbulb"></i></a> -->
            <button @click="changeTheme" data-toggle-theme class="header-icon header-icon-4"><i class="fas fa-lightbulb"></i></button>
        </div>

        <div id="footer-bar" class="footer-bar-1">
            <router-link :to="{name: 'home-page'}" :class="active === 'home-page' ? 'active-nav' : ''"><i class="fa fa-home"></i><span>Home</span></router-link>
            <router-link to="#"><i class="fa fa-star"></i><span>Features</span></router-link>
            <router-link to="#"><i class="fa fa-heart"></i><span>Pages</span></router-link>
            <router-link to="#"><i class="fa fa-search"></i><span>Search</span></router-link>
            <router-link :to="{name: 'settings-page'}" data-menu="menu-settings" :class="active === 'settings-page' ? 'active-nav' : ''"><i class="fa fa-cog"></i><span>Settings</span></router-link>
        </div>
        
        <router-view />

    </div>
</template>s

<script>
let pwaName = "Sticky"; //Local Storage Names for PWA
const toggleDark = document.querySelectorAll('[data-toggle-theme]');
function activateDarkMode(){
    document.body.classList.add('theme-dark');
    document.body.classList.remove('theme-light', 'detect-theme');
    for(let i = 0; i < toggleDark.length; i++){
        toggleDark[i].checked="checked"
    }
    localStorage.setItem(pwaName+'-Theme', 'dark-mode');
}
function activateLightMode(){
    document.body.classList.add('theme-light');
    document.body.classList.remove('theme-dark','detect-theme');
    for(let i = 0; i < toggleDark.length; i++){
        toggleDark[i].checked=false
    }
    localStorage.setItem(pwaName+'-Theme', 'light-mode');
}
function removeTransitions(){var falseTransitions = document.querySelectorAll('.btn, .header, #footer-bar, .menu-box, .menu-active'); for(let i = 0; i < falseTransitions.length; i++) {falseTransitions[i].style.transition = "all 0s ease";}}
function addTransitions(){var trueTransitions = document.querySelectorAll('.btn, .header, #footer-bar, .menu-box, .menu-active'); for(let i = 0; i < trueTransitions.length; i++) {trueTransitions[i].style.transition = "";}}
function setColorScheme() {
    /* eslint-disable no-unused-vars */
    const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches
    const isLightMode = window.matchMedia("(prefers-color-scheme: light)").matches
    const isNoPreference = window.matchMedia("(prefers-color-scheme: no-preference)").matches
    /* eslint-enable no-unused-vars */
    window.matchMedia("(prefers-color-scheme: dark)").addListener(e => e.matches && activateDarkMode())
    window.matchMedia("(prefers-color-scheme: light)").addListener(e => e.matches && activateLightMode())
    if(isDarkMode) activateDarkMode();
    if(isLightMode) activateLightMode();
}

export default {
    name: 'LayoutMain',
    data() {
        return {

        }
    },
    mounted(){
        if(localStorage.getItem(pwaName+'-Theme') == "dark-mode"){for(let i = 0; i < toggleDark.length; i++){
            toggleDark[i].checked="checked"
        }
        document.body.className = 'theme-dark';}
        if(localStorage.getItem(pwaName+'-Theme') == "light-mode"){
            document.body.className = 'theme-light';
        }
        if(document.body.className == "detect-theme"){
            setColorScheme();
        }
    },
    computed: {
        active(){
            return this.$route.name
        }
    },
    methods: {
        changeTheme(){
            if(document.body.className == "theme-light") {
                removeTransitions(); activateDarkMode();
            } else if(document.body.className == "theme-dark") {
                removeTransitions(); activateLightMode();
            }
            setTimeout(function(){addTransitions();},350);
        }
    }
}
</script>
