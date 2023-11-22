<script setup>
const isMobileNavOpen = ref(false)
</script>

<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link to="/" class="navbar-item has-text-weight-bold is-size-5">
          Digital Garden
        </nuxt-link>
        <nuxt-link to="/music" class="navbar-item has-text-weight-bold is-size-5">
          Music
        </nuxt-link>
        <nuxt-link to="/scuba" class="navbar-item has-text-weight-bold is-size-5">
          Scuba
        </nuxt-link>
        <nuxt-link to="/travel" class="navbar-item has-text-weight-bold is-size-5">
          Travel
        </nuxt-link>
        <nuxt-link to="/books" class="navbar-item has-text-weight-bold is-size-5">
          Books
        </nuxt-link>
        <nuxt-link to="/news" class="navbar-item has-text-weight-bold is-size-5">
          News
        </nuxt-link>
        <nuxt-link to="/programming" class="navbar-item has-text-weight-bold is-size-5">
          Programming
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<style></style>