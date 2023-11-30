<template>
  <main>
    <Main>
        <template v-slot:default>Mandolin and Rhythm</template>
        <template v-slot:subtitle></template>
    </Main>
    <div class="container">
      <section class="articles">
        <div class="column is-8 is-offset-2">
          <section class="blog-post-card card article">
            <div class="card-content">
              <div class="content article-body is-size-5">
                <h1>Plans for this page</h1>
                <span v-html="CONTENT"></span>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
const CONTENT = "Growing up playing percussion taught me a lot about rhythm, but not much about reading and playing notes. As an adult I've picked up the mandolin, and would like to share resources I've come across and music I play here, as well as create some tools to help me learn. Namely flashcards to help memorize the fretboard and a metronome. I'm sure I'll find some other things handy to build and integrate as I learn. Anyway, this will be a place to share that journey as well.<br><br>"
</script>