<script setup>
const isMobileNavOpen = ref(false)
</script>

<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <NuxtLink to="/" class="navbar-item has-text-weight-bold is-size-5">
          Digital Garden
        </NuxtLink>
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
        <NuxtLink to="/programming" noPrefetch class="navbar-item has-text-weight-bold is-size-5">
          Programming
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<style></style>