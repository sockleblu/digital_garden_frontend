<template>
    <main>
      <Main></Main>
      <BlogPostList :articles="articlesByTags"></BlogPostList>
    </main>
  </template>

<script lang="ts" setup>

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

const tagsInput = [{"tag": "programming"}, {"tag": "digiden"}]

//for (const tag of props.tags) { tagsInput.push({"tag": tag})}

const variables = { "tagsInput": tagsInput}

const { data: articlesByTags } = await useAsyncQuery<Articles>( query, variables )

//const articles = articlesByTags
console.log('articles: ' + JSON.stringify(articlesByTags))
</script> 