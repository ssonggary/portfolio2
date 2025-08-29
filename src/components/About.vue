<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useTrigger } from "@/composables/useTrigger";

gsap.registerPlugin(ScrollTrigger);

const careerYears = new Date().getFullYear() - 2022;
const aboutSection = ref(null);
const introduction = ref(null);
const profileImg = ref(null);
const profileText = ref(null);
const skillsWrap = ref(null);
const skills = [
  { name: "HTML", percent: 95 },
  { name: "CSS", percent: 95 },
  { name: "JavaScript", percent: 85 },
  {
    name: "Another",
    percent: null,
    icons: [
      { src: "/public/img/icon_vue.png", alt: "vue 로고" },
      { src: "/public/img/icon_react.png", alt: "react 로고" },
    ],
  },
];

function animateCounter() {
  document.querySelectorAll(".skills__percent").forEach((el) => {
    const target = parseInt(el.getAttribute("data-percent"), 10);
    gsap.fromTo(
      el,
      { innerText: 0 },
      {
        innerText: target,
        duration: 1.5,
        ease: "power3.out",
        onUpdate() {
          el.innerText = Math.round(el.innerText) + "%";
        },
      }
    );
  });
}

useTrigger({
  trigger: aboutSection,
  start: "200px top",
  pin: false,
  pinMobile: false,
  once: true,
  animations: (tl) => {
    tl.to(skillsWrap.value, {
      opacity: 1,
      duration: 2,
      onStart: animateCounter,
    });
  },
});

onMounted(() => {
  gsap.from(profileImg.value, {
    y: 50,
    opacity: 0,
    duration: 1.5,
    ease: "power3.out",
  });
  gsap.from(profileText.value, {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: "power3.out",
  });
});
</script>

<template>
  <section id="about" class="section" ref="aboutSection">
    <div class="title-wrap pin">
      <h2 class="title">About</h2>
    </div>
    <article class="introduction" ref="introduction">
      <div class="img-wrap" ref="profileImg">
        <img class="profile" src="/public/img/profile01.png" alt="" />
      </div>
      <div class="text-wrap" ref="profileText">
        <p>
          안녕하세요. {{ careerYears }}년차 웹퍼블리셔
          <strong class="name">송가혜</strong> 입니다.<br />
          저는 소통과 협력을 중요시하며, 기획과 디자인 의도를 정확하게 구현하고
          사용자 경험을 향상시키는 작업에 열정을 가지고 있습니다.<br />
          HTML, CSS, JavaScript뿐만 아니라 React, Vue등 다양한 프레임워크를
          활용하여 효율적인 퍼블리싱을 위해 끊임없이 학습하고 있습니다.<br />
          변화하는 트렌드에 맞춰 새로운 기술을 시도하며, 팀과 함께 성장하는
          퍼블리셔가 되기 위해 노력하고 있습니다.
        </p>
      </div>
    </article>
    <article class="skills" ref="skillsWrap">
      <ul class="skills__content">
        <li class="skills__item" v-for="(skill, i) in skills" :key="i">
          <span class="skills__title"> {{ skill.name }}</span>
          <div
            v-if="skill.percent"
            class="skills__percent"
            :data-percent="skill.percent"
          >
            0%
          </div>
          <div v-else class="skills__another">
            <img
              v-for="(icon, i) in skill.icons"
              :key="i"
              class="icon"
              :src="icon.src"
              :alt="icon.alt"
            />
          </div>
        </li>
      </ul>
    </article>
  </section>
</template>

<style scoped></style>
