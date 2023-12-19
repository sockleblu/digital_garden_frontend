<template>
  <main>
    <Main>
        <template v-slot:default>There and Back Again</template>
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
const CONTENT = "As an avid reader I like to keep track of what books I want to read next, and for some reason I'm not into reviewing books for others viewing like on Goodreads, but maybe I'll be more inclined to write about books as I read them here. It'd be fun to digest them as I read too or maybe pull in some insight from other people too. I don't normally re-read books, but I've picked up Game of Thrones again (in anticipation of book 6, which will definitely drop soon...right?), and it's been fun to muse over the little tidbits and hints that are dropped so very early in the story from what we know now. Might be posting here could help me digest the Malazar series too. I'd need all the help I can get."
</script>