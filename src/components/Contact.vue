<script setup>
import Footer from "./Footer.vue";
</script>

<template>
  <section id="contact" class="section">
    <div class="title-wrap">
      <h2 class="title">Contact</h2>
    </div>
    <article class="contact-info">
      <p class="contact-info__text">
        함께 성장하고 새로운 가치를 만들어나갈 웹 퍼블리셔를 찾고 계신가요?
      </p>
      <span class="contact-info__title">tty282@gmail.com</span>
      <p class="contact-info__text sub">
        저에게 궁금하신 점이 있으시다면 연락주세요 :) 확인하는 대로 빠른
        회신드릴께요.
      </p>
      <div class="contact-info__links">
        <a href="mailto:tty282@gmail.com" class="contact-info__email"
          >메일보내기</a
        >
        <a
          href="https://github.com/ssonggary"
          target="_blank"
          rel="noopener noreferrer"
          class="contact-info__github"
          >GITHUB</a
        >
      </div>
    </article>
    <Footer />
  </section>
</template>

<style scoped></style>
