<template>
  <div class="home">
    <h1 class="home-text">
      <span>
        <span 
          v-for="(char, index) in splitText" 
          :key="index" 
          class="letter" 
          :style="{ whiteSpace: char === ' ' ? 'pre' : 'normal' }"
        >
          {{ char }}
        </span>
      </span>
    </h1>
    <router-link to="/Login">Login</router-link>
  </div>
</template>

<script>
import { onMounted, ref, nextTick } from 'vue';
import gsap from 'gsap';

export default {
  name: 'Home',
  setup() {
    const text = "Welcome to The Midnight Watch";
    const splitText = ref(text.split(""));// Splitting text into letters
    const lettersRef = ref(null); // Reference to the span container

    onMounted(async () => {
      await nextTick(); // Ensures Vue has finished rendering before GSAP runs

      gsap.from(".letter", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.05, // Controls the delay between each letter
      });
    });

    return { splitText, lettersRef };
  },
};
</script>

<style scoped>
.home {
  text-align: center;
  margin-top: 50px;
}
.home-text {
  display: inline-block;
  font-size: 2rem;
  font-weight: bold;
}
.letter {
  display: inline-block;
  opacity: 1;
}
a:-webkit-any-link {
  color: #b9943d;
}
a:-webkit-any-link:hover {
  color: #F8E5AB;
}
</style>
