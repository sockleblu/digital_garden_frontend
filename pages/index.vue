<template>
  <main>
    <Main>
        <template v-slot:default>Welcome to my Digital Garden</template>

        <template v-slot:subtitle></template>
    </Main>
    <div class="container">
      <section class="articles">
        <div class="column is-8 is-offset-2">
          <section class="blog-post-card card article">
            <div class="card-content">
              <div class="content article-body is-size-5">
                <h1>What is a Digital Garden?</h1>
                <span v-html="WHAT_CONTENT"></span>
                <span v-html="WHY_CONTENT"></span>
                <span v-html="HOW_CONTENT"></span>
                <nuxt-link to="/an_unexpected_journey" >An Unexpected Journey</nuxt-link>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
const WHAT_CONTENT = "A digital garden is a personal part of the internet where we can share our interests with the world. The term stems from Mark Bernstein's use of the term 'Hypertext Garden' in 1998.<br><br>"

const WHY_CONTENT = "I became uninterested in social media several years ago and have since disable all my accounts on many sites. Building this site gives me a place to share my ... but also allows me to aggregate the experience I might have from other sites as well. I hope to be able to visit my sight like I might open a newspaper each day and have all the information I'm looking for currated to my wants and needs.<br><br>"

const HOW_CONTENT = "For more information on the making of this site as well I'm documenting the evolution of it in the link below.<br><br>"
</script>

<style scoped>
</style>