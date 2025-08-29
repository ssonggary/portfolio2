<script setup>
const navItems = [
  { link: "about", name: "About" },
  { link: "project", name: "Project" },
  { link: "more", name: "More" },
  { link: "contact", name: "Contact" },
];

const goToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    if (id === "project") {
      section.classList.add("active");
    }
    window.location.href = `#${id}`;
  }
};
</script>

<template>
  <header class="header">
    <h1 class="logo">
      <a href="#" class="logo__link">Ssong's Portforio</a>
    </h1>
    <nav class="nav">
      <ul class="nav__list">
        <li v-for="item in navItems" :key="item.link" class="nav__item">
          <a
            :href="`#${item.link}`"
            class="nav__link"
            @click.prevent="goToSection(item.link)"
          >
            {{ item.name }}</a
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped></style>
