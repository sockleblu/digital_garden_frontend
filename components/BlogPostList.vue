<template>
  <div class="container">
    <section class="articles">
      <div class="column is-8 is-offset-2">
        <div
          v-for="article in articlesByTags.articlesByTags"
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

const props = defineProps<{
  tags: String[]
}>()

const tagsInput = []

for (const tag of props.tags) { tagsInput.push({"tag": tag})}

const variables = { "tagsInput": tagsInput}

const query = gql`
  query ArticlesByTags($tagsInput: [TagInput!]!) {
        articlesByTags(tagsInput: $tagsInput) {
            id
            title
            slug
            user {
                username
            }
        }
    }
`

const { data: articlesByTags } = await useAsyncQuery(query, variables)
const articles = articlesByTags
console.log('articles: ' + JSON.stringify(articles))
</script>

<style>
.title {
  padding-top: 2rem;
}
</style>