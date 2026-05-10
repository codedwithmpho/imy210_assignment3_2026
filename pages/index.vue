<!-- 25199902 - Mpho Makwela -->
<!-- purpose - homepage with category filter -->

<script setup>
const { data: posts } = await useFetch('/api/posts')
const selectedCategory = ref('all') // tracks selected filter

// filters posts based on selected category
const filteredPosts = computed(() => {
  if (!posts.value) return []
  if (selectedCategory.value === 'all') return posts.value
  return posts.value.filter(p => p.category === selectedCategory.value)
})

// creates list of unique categories for dropdown
const categories = computed(() => {
  if (!posts.value) return []
  return ['all', ...new Set(posts.value.map(p => p.category))]
})
</script>

<!-- ______________________________________________ -->

<template>
  <div class="container">
    <div class="blog-header">
      <h1><NuxtLink to="/">My Blog</NuxtLink></h1>
      <div class="nav-links">
        <NuxtLink to="/search">Search posts</NuxtLink>
      </div>
    </div>

    <!-- category filter dropdown -->
    <div class="filter-section">
      <label>Filter by category:</label>
      <select v-model="selectedCategory">
        <option v-for="cat in categories" :key="cat" :value="cat">
          {{ cat === 'all' ? 'All posts' : cat }}
        </option>
      </select>
    </div>

    <!-- no posts message -->
    <div v-if="posts && filteredPosts.length === 0" class="no-results">
      <p>No posts in this category yet.</p>
    </div>

    <!-- displays each blog post -->
    <div v-for="post in filteredPosts" :key="post.id" class="post-card">
      <h2><NuxtLink :to="`/post/${post.id}`">{{ post.title }}</NuxtLink></h2>
      <div class="post-meta">
        <span>By {{ post.author }}</span>
        <span class="category-badge">{{ post.category }}</span>
      </div>
      <p>{{ post.snippet }}</p>
    </div>
  </div>
</template>