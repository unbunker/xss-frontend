<script setup lang="ts">
import LOGO from '../components/Logo.vue'
import { ref, shallowRef, computed, onMounted } from 'vue';
import sidebarItems from './sidebar/SidebarItem';
import NavHeader from './sidebar/NavHeader.vue';
import NavItem from './sidebar/NavItem.vue';
import { useTheme} from 'vuetify'
import { useRouter } from 'vue-router'


const sidebarMenu = shallowRef(sidebarItems);
const drawer = ref();

const theme = useTheme()

const router = useRouter()

function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
  localStorage.setItem("theme", theme.global.name.value);
}

function toLogin() {
    router.push('/login');
    localStorage.clear();
}

onMounted(() => {
    let currentTheme = localStorage.getItem("theme");

    if (currentTheme) {
        theme.global.name.value = currentTheme
    }
});

</script>

<template>
    <v-navigation-drawer left elevation="2"  app class="sideBar bg-navBackground"  v-model="drawer">
        <div @click="toLogin"  class="d-flex" style="cursor: pointer; padding-left: 20px; padding-top: 20px" >
            <LOGO/>
            <div class="flex-column justify-center" style="padding-top: 7px;">Unbunker</div>
        </div>
        <div>
            <v-list class="pa-6 bg-navBackground">
                <template v-for="(item, i) in sidebarMenu">
                    <NavHeader :item="item" v-if="item.header" :key="item.title" />
                    <NavItem :item="item" v-else />
                </template>
            </v-list>

        </div>
    </v-navigation-drawer>
     <v-app-bar class="bg-background" elevation="0" height="70">
        <div class="d-flex align-center justify-space-between w-100">
            <div>
                <v-btn class="bg-background hidden-lg-and-up ms-md-3 ms-sm-5 ms-3 text-muted" @click="drawer = !drawer" icon variant="flat"
                    size="small">
                    <v-icon  size="x-large">mdi-menu</v-icon>
                </v-btn>

                <v-btn icon variant="text"  class="custom-hover-primary ml-0 ml-md-5 text-muted">
                    <v-badge dot color="primary" offset-x="-5" offset-y="-3">
                        <v-icon>mdi-bell</v-icon>
                    </v-badge>
                </v-btn>

                <v-btn @click="toggleTheme" icon variant="text"  class="custom-hover-primary ml-0 ml-md-5 text-muted">
                    <v-icon ize="x-large">mdi-weather-night</v-icon>
                </v-btn>

            </div>
        </div>
    </v-app-bar>
    <v-main>
        <v-container fluid class="page-wrapper">
            <div class="maxWidth">
                <RouterView />
            </div>
        </v-container>
    </v-main>
</template>
