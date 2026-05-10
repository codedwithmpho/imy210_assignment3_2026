<!-- 25199902 - Mpho Makwela -->
<!-- purpose - search posts by title or author -->

<script setup>
const { data: posts } = await useFetch('/api/posts')
const searchQuery = ref('') // what user types
const searchType = ref('title') // 'title' or 'author'

// filters posts based on search input
const searchResults = computed(() => {
  if (!posts.value || !searchQuery.value.trim()) return []
  const query = searchQuery.value.toLowerCase()
  
  return posts.value.filter(post => {
    if (searchType.value === 'title') {
      return post.title.toLowerCase().includes(query)
    } else {
      return post.author.toLowerCase().includes(query)
    }
  })
})
</script>

<!-- ______________________________________________ -->

<template>
  <div class="container">
    <div class="blog-header">
      <h1><NuxtLink to="/">My Blog</NuxtLink></h1>
      <div class="nav-links">
        <NuxtLink to="/">Back to home</NuxtLink>
      </div>
    </div>

    <!-- search input and type selector -->
    <div class="search-bar">
      <input 
        type="text" 
        v-model="searchQuery" 
        placeholder="Search by title or author..."
      />
      <select v-model="searchType">
        <option value="title">Search by Title</option>
        <option value="author">Search by Author</option>
      </select>
    </div>

    <!-- no results message -->
    <div v-if="searchQuery && searchResults.length === 0" class="no-results">
      <p>No posts found for "{{ searchQuery }}"</p>
    </div>

    <!-- displays search results -->
    <div v-for="post in searchResults" :key="post.id" class="post-card">
      <h2><NuxtLink :to="`/post/${post.id}`">{{ post.title }}</NuxtLink></h2>
      <div class="post-meta">
        <span>By {{ post.author }}</span>
        <span class="category-badge">{{ post.category }}</span>
      </div>
      <p>{{ post.snippet }}</p>
    </div>

    <!-- empty state -->
    <p v-if="!searchQuery" style="text-align: center; color: #718096; margin-top: 2rem;">
      Start typing to search for blog posts...
    </p>
  </div>
</template>