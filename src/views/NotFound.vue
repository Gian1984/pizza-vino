<template>
  <div class="min-h-screen bg-gray-900 flex flex-col justify-center relative" style="background-image: url('/img/header-def.jpg'); background-size: cover; background-position: center;">
    <!-- Dark overlay -->
    <div class="absolute inset-0 bg-black bg-opacity-60"></div>

    <div class="relative z-10 text-center px-4 sm:px-6 lg:px-8">
      <h1 class="text-6xl font-extrabold text-white drop-shadow-lg">404</h1>
      <p class="mt-4 text-2xl text-white">Oops! The page you’re looking for doesn’t exist.</p>
      <p class="mt-2 text-lg text-gray-200">Maybe you typed the wrong address… or the pizza you’re after is already gone! 🍕</p>

      <!-- Home button -->
      <div class="mt-8">
        <router-link
          to="/"
          class="inline-flex items-center border-2 border-black text-black bg-white rounded-full p-1 pr-2 hover:bg-gray-300 transition-colors"
        >
          <span class="px-3 py-0.5 text-xs font-semibold leading-5 uppercase tracking-wide bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full">
            Back to Home
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound"
}
</script>

