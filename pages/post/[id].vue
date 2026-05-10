<!-- 25199902 - Mpho Makwela -->
<!-- purpose - to show blog post based on the URL ID-->

<script setup>
  const route = useRoute() //about the current URL
  const id = route.params.id

  const { data: posts } = await useFetch('/api/posts')
  //looks for th post that matches the ID
  const post = posts.value?.find(p => p.id === parseInt(id))
</script>


<!-- ______________________________________________ -->
<template>
  <div class="container">

    <div class="blog-header">
      <h1><NuxtLink to="/">My Blog</NuxtLink></h1>
    </div>

    <!-- when post actually exists  -->
    <div v-if="post" class="post-content">
       <!-- post title -->
      <h1>{{ post.title }}</h1>

      <!-- author + category -->
      <div class="post-meta">
        <span>By {{ post.author }}</span>
        <span class="category-badge">{{ post.category }}</span>
      </div>
      <div class="post-body" v-html="post.content"></div>

      <!-- Link back to homepage -->
      <NuxtLink to="/" class="back-link">Back to all posts</NuxtLink>
    </div>

    <!-- when post DOES NOT exist  -->
    <div v-else class="no-results">
      <h2>Post not found</h2>
      <p>No post with ID {{ id }}</p>
      <NuxtLink to="/" class="btn" style="margin-top: 1rem; display: inline-block;">Back home</NuxtLink>
    </div>
  </div>
</template>