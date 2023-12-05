<template>
  <div class="container">
    <section class="articles">
      <div class="column is-8 is-offset-2">
        <div
          v-for="article in articlesByTags?.articlesByTags"
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
  //articlesByTags: Object[]
}>()

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

const cache = false

const options = { 
  fetchPolicy: 'network-only',
  prefetch: false
}

const tagsInput = []

for (const tag of props.tags) { tagsInput.push({"tag": tag})}

const variables = { "tagsInput": tagsInput}

const articleByTags = ref()

const { result: articlesByTags } = useQuery<Articles>( query, variables, { fetchPolicy: 'network-only', prefetch: false } )

//const articles = articlesByTags
console.log('articles: ' + JSON.stringify(articlesByTags))
</script>

<style>
.title {
  padding-top: 5rem;
}

.articles {
  padding-top: 10rem;
}
</style>