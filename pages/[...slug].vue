<template>
  <main>
    <Main>
      <template v-slot:default>{{ article.article.title }}</template>

      <template v-slot:subtitle>
        <BlogPostMeta
          :author="article.article.author"
          color="dark"
        />
      </template>
    </Main>
    <div class="container">
      <section class="articles">
        <div class="column is-8 is-offset-2">
          <section class="blog-post-card card article">
            <div class="card-content">
              <div class="content article-body is-size-5">
                <span v-html="article.article.content">
                </span>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  </main>
</template>

<script lang="ts" setup>

const { path } = useRoute()
console.log("Path is " + path)
// 
const query = gql`
  query ArticleQuery($slug: String!) {
    article(slug: $slug) {
      id
      title
      slug
      content
        user {
          id
          username
          email
      }
    }
  }
`

const variables = { "slug": path.replace('/', '') }

const { data: article } = await useAsyncQuery(query, variables)

//const article = ref()

//const { onResult, onError } = useQuery(query, variables);

//onResult((result) => (article.value = result.data));
//onError((err) => (article.value = err));

</script>

<style>
.blog-post-card {
  padding-top: 2.5rem;
  padding-bottom: 3rem;
}
.blog-post-card .card-content {
  padding: 2rem;
}
.blog-post-card .title {
  margin-bottom: 1rem;
}
</style>