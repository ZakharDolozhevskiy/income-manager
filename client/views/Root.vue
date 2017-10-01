<template>
  <div>
    <md-toolbar class="toolbar">
      <md-menu ref="menu">
        <md-button md-menu-trigger class="md-icon-button">
          <md-icon>menu</md-icon>
        </md-button>
        <md-menu-content>
          <md-menu-item>
            <router-link to="/balance" v-on:click="closeMenu">
              <span @click="closeMenu">Balance</span>
            </router-link>
          </md-menu-item>
          <md-menu-item>
            <router-link to="/categories" v-on:click="closeMenu">
              <span @click="closeMenu">Categories</span>
            </router-link>
          </md-menu-item>
        </md-menu-content>
      </md-menu>
      <h2 class="md-title" style="flex: 1" @click="openMenu">{{ capitalize(pageTitle) }}</h2>
    </md-toolbar>
    <router-view></router-view>
  </div>
</template>

<script>
  import capitalize from 'lodash/capitalize';

  export default {
    props: ['pageTitle'],
    methods: {
      capitalize,
      closeMenu() { this.$refs.menu.close() },
      openMenu() { this.$refs.menu.open() }
    }
  }
</script>

<style scoped>
  .toolbar {
    background-color: #30525A !important;
  }
</style>