<template>
  <div id="app">
      <md-toolbar class="md-primary">
        <div class="md-toolbar-section-start">
          <md-button class="md-icon-button" @click="showMainNav = true">
            <md-icon>menu</md-icon>
          </md-button>
          <h3 class="md-title">Material in Vue</h3>
        </div>

        <div class="md-toolbar-section-end">
          <md-button @click="showDialog = true">
            Modal
          </md-button>

          <md-button class="md-icon-button" @click="navigateToRepo()">
            <md-icon>code</md-icon>
          </md-button>
        </div>
    </md-toolbar>

    <md-drawer :md-active.sync="showMainNav">
      <md-list>
        <md-list-item to="/" v-on:click="showMainNav = false">
          <span class="md-list-item-text">Lyrics</span>
        </md-list-item>

        <md-list-item to="/table" v-on:click="showMainNav = false">
          <span class="md-list-item-text">Table</span>
        </md-list-item>

        <md-list-item to="/form" v-on:click="showMainNav = false">
          <span class="md-list-item-text">Form</span>
        </md-list-item>

      </md-list>
    </md-drawer>

    <md-dialog :md-active.sync="showDialog">
          <md-dialog-title>This is an Example of a Modal</md-dialog-title>
          <md-dialog-content>Modals are a great way to communicate a focused message, bringing the user's attention to something important - generally a step in a workflow, or a message that indicates they're about to something that will have consequences.</md-dialog-content>
          <md-dialog-actions>
              <md-button class="md-primary" @click="showDialog = false">Disagree</md-button>
              <md-button class="md-primary" @click="showDialog = false">Agree</md-button>
          </md-dialog-actions>
    </md-dialog>

    <div class="md-content">
        <router-view/>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default-dark.css'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)
Vue.use(VueMaterial)

export default {
  name: 'App',
  data: () => ({
    showMainNav: false,
    showDialog: false
  }),
  methods: {
    navigateToRepo() {
      window.location = 'https://github.com/colinjlacy/material-in-action';
    }
  }
}
</script>

<style scoped>
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}

.md-content {
  padding: 1rem 2rem;
}
</style>
