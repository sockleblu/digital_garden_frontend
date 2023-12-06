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
                <nuxt-link to="https://github.com/sockleblu/digital_garden_frontend">DigiDen Frontend GitHub</nuxt-link>
                <br><br>
                <nuxt-link to="https://github.com/sockleblu/digital_garden_backend">DigiDen Backend GitHub</nuxt-link>
                <br><br>
                <span v-html="IAC_CONTENT"></span>
                <br><br>
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

const WHY_CONTENT = "Having become uninterested in the experience of social media several years ago that felt forced and devisive I have set out to create my own space where I can cultivate an individual experience and share with others. My intent is for each page of this site to have a personal feel that is molded by the topic. Travel having a map of places visited and places yet to explore. Music being a place where I can learn and sharpen my skills while also sharing content and the journey itself. Books being a shelf of what I've read and want to read still, likely integrating with my Goodreads account. In the end I'd like a site that I want to visit daily, with updates from feeds and other content creators. A site that grows and adapts as I do.<br><br>"

const HOW_CONTENT = "Ultimately each page will likely have a space where I'm sharing something, and with that comes the blog post functionality, which is what I'm focusing on first. As this site is built top-to-bottom by myself, and I'm learning a lot about full stack engineering and new languages and frameworks, I also want to share my experience of learning how to create this very same site. I think it will be cool to look back and watch it evolve as I learn and grow with it.<br><br>To follow along I'm sharing the code on GitHub below. You can also follow the blog post series starting with the very first post at the bottom. Thanks for visiting my site!<br><br>"

const IAC_CONTENT = "The infrastructure for this site is built entirely by code, which I'll share here soon as well. I leverage a combination of CINC (FOSS version of Chef), Vagrant, and GitLab Pipelines, though my plan is to move this to a cloud native architecture and document the process on this site.<br><br>I've dubbed the project DigiDen - short for Digital Garden - and you can follow the series of posts on the Programming page, or you can visit the very first post below."
</script>

<style scoped>
</style>