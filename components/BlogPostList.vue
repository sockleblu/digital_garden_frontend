<template>
  <div class="container">
    <section class="articles">
      <div class="column is-8 is-offset-2">
        <div
          v-for="article in articles?.articlesByTags"
          :key="article.slug"
          class="card article"
        >
          <NuxtLink :to="article.slug">
            <section class="blog-post-card card article">
              <div class="media">
                <div class="media-content has-text-centered">
                  <h3 class="title article-title has-text-weight-bold">
                    {{ article.title }}
                  </h3>
                </div>
              </div>
              <div class="card-content">
                <div class="content article-body is-size-5">
                  {{ article.slug }}
                </div>
              </div>
            </section>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>

type Articles = {
  articlesByTags: {
    id?: string;
    title: string;
    slug: string;
    user: {
      username: string;
    }
  }[]
}

const props = defineProps<{
  //articles: String[]
  articles?: {
    type: Articles
  }
}>()
</script>

<style>
.title {
  padding-top: 5rem;
}

.articles {
  padding-top: 10rem;
}
</style>