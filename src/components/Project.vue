<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { useTrigger } from "@/composables/useTrigger";

const projectSection = ref(null);
const items = [
  {
    label: "JB Bravo Korea",
    desc: "전북은행 외국인 전용 앱 고도화 프로젝트.\n 외국인 고객이 금융 서비스와 커뮤니티를 더 쉽고 편리하게 이용할 수 있도록 React 기반의 반응형 앱으로 최적화.",

    stack: ["App", "React"],
    href: "https://play.google.com/store/apps/details?id=kr.co.jbbank.bravokorea&pli=1",
  },
  {
    label: "SK shieldus",
    desc: "차세대 ERP/BSS 통합 시스템 구축.\n Vue3, TailwindCSS, AG Grid로 대규모 데이터 처리와 직관적인 업무 화면을 구현.",
    stack: ["Web", "Vue3", "TailwindCSS", "AG Grid"],
    href: "https://www.skshieldus.com/kor/index.do",
  },
  {
    label: "NH Members",
    desc: "NH 멤버스 채널 고도화 프로젝트.\n HTML, SCSS, JavaScript 기반의 반응형 환경으로 다양한 멤버십 서비스와 제휴 포인트 기능을 강화.",
    stack: ["App", "Web", "HTML", "SCSS", "JavaScript"],
    href: "https://www.nhmembers.co.kr/",
  },
  {
    label: "Dongasocio HR",
    desc: "동아쏘시오 채용 홈페이지 구축.\n 화려한 인터랙션과 반응형 UI/UX로 지원자가 몰입할 수 있는 채용 경험을 제공.",
    stack: ["Web", "HTML", "SCSS", "JavaScript"],
    href: "https://talent.dongasocio.com/kr/main",
  },
];

// ✅ 반응형 뷰포트 폭
const vw = ref(typeof window !== "undefined" ? window.innerWidth : 1024);
const onResize = () => {
  vw.value = window.innerWidth;
};

onMounted(() => window.addEventListener("resize", onResize, { passive: true }));
onBeforeUnmount(() => window.removeEventListener("resize", onResize));

const hovered = ref(null);

function onEnter(i) {
  hovered.value = i;
}
function onLeave() {
  hovered.value = null;
}

/**
 * 매핑 전략:
 * 인덱스 0: top-left  -> cols: 2fr 1fr , rows: 2fr 1fr
 * 인덱스 1: top-right -> cols: 1fr 2fr , rows: 2fr 1fr
 * 인덱스 2: bot-left  -> cols: 2fr 1fr , rows: 1fr 2fr
 * 인덱스 3: bot-right -> cols: 1fr 2fr , rows: 1fr 2fr
 */
const gridStyle = computed(() => {
  if (vw.value <= 768) {
    return {
      gridTemplateColumns: "1fr",
      gridTemplateRows: `repeat(${items.length}, auto)`,
    };
  }
  if (hovered.value === null) {
    return {
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "1fr 1fr",
    };
  }
  const i = hovered.value;
  const cols = i === 0 || i === 2 ? "2fr 1fr" : "1fr 2fr";
  const rows = i === 0 || i === 1 ? "2fr 1fr" : "1fr 2fr";
  return { gridTemplateColumns: cols, gridTemplateRows: rows };
});

useTrigger({
  trigger: projectSection,
  onEnter: () => projectSection.value.classList.add("active"),
  onLeave: () => projectSection.value.classList.remove("active"),
  onEnterBack: () => projectSection.value.classList.add("active"),
  onLeaveBack: () => projectSection.value.classList.remove("active"),
});
</script>

<template>
  <section id="project" class="section full" ref="projectSection">
    <div class="title-wrap">
      <h2 class="title">Project</h2>
    </div>
    <div class="project-grid" :style="gridStyle">
      <div
        v-for="(item, i) in items"
        :key="i"
        class="project-grid__item"
        @pointerenter="onEnter(i)"
        @pointerleave="onLeave"
      >
        <span class="project-grid__title">{{ item.label }}</span>
        <div class="project-grid__content">
          <p class="project-grid__desc">{{ item.desc }}</p>
          <ul class="project-grid__stack">
            <li v-for="(tech, i) in item.stack" :key="i" class="stack-item">
              #{{ tech }}
            </li>
          </ul>
          <a
            :href="item.href"
            target="_blank"
            rel="noopener noreferrer"
            class="project-grid__link"
            >바로가기</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
