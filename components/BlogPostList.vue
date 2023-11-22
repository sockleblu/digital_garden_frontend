<template>
  <div class="container">
    <section class="articles">
      <div class="column is-8 is-offset-2">
        <div
          v-for="article in allArticles.allArticles"
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

//if (this.slug) {
//const query = gql`
//  query ArticleQuery($slug: String!) {
//    article(slug: $slug) {
//      id
//      title
//      slug
//      content
//      user {
//          id
//          username
//          email
//        }
//      }
//    }
//  `
//}
//else {
  const query = gql`
    query AllArticlesQuery {
      allArticles {
        id
        title
        slug
        content
        user {
          username
        }
      }
    }
  `
//}

const { data: allArticles } = await useAsyncQuery(query)
//const articles = allArticles.value.allArticles
//console.log('articles: ' + JSON.stringify(articles))

</script>

<style>
.title {
  padding-top: 2rem;
}
</style>