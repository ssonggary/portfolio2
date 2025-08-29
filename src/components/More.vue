<script setup>
import { ref, onMounted } from "vue";
import { useTrigger } from "@/composables/useTrigger";

const moreSection = ref(null);
const projects = [
  {
    type: "Healthcare",
    label: "밝은세상안과 서울/부산 홈페이지 리뉴얼",
    stack: ["Web", "GSAP", "다국어"],
    year: "2024",
    href: "https://iloveeye.com/index.do",
  },
  {
    type: "Finance",
    label: "부산은행 모바일뱅킹 웹접근성 대응 개발",
    stack: ["App", "Web", "웹접근성"],
    year: "2024",
    href: "https://play.google.com/store/apps/details?id=kr.co.busanbank.mbp&hl=ko",
  },
  {
    type: "Public",
    label: "디지털플랫폼정부 테스트베드 홈페이지 구축",
    stack: ["Web", "jQuery"],
    year: "2023",
    href: "https://dpgtestbed.kr/",
  },
  {
    type: "Finance",
    label: "전북은행 디지털 유니버설 뱅킹 대응 및 UXUI 개선",
    stack: ["App", "Gulp"],
    year: "2023",
    href: "https://play.google.com/store/apps/details?id=kr.co.jbbank.privatebank&hl=ko",
  },
  {
    type: "Foundation",
    label: "현대차 정몽구 재단 홈페이지 재구축",
    stack: ["Web", "GSAP"],
    year: "2023",
    href: "https://www.hyundai-cmkfoundation.org/",
  },
  {
    type: "Corporate",
    label: "포스코플로우 스마트물류전문포탈 구축",
    stack: ["Web", "ERP", "IBSheet"],
    year: "2023",
    href: "https://smartportal.poscoflow.com/cpc01p-web-portal/cpc01p0100.html",
  },
  {
    type: "Finance",
    label: "국민은행 빌드배포 자동화시스템 프로젝트",
    stack: ["Web", "React", "TypeScript", "AntDesign"],
    year: "2022",
    href: null,
  },
  {
    type: "Finance",
    label: "한국평가데이터 평가상품 K-rating 디지털전환 구축",
    stack: ["Web", "웹접근성"],
    year: "2022",
    href: "https://www.krating.co.kr/main.do",
  },
  {
    type: "Commerce",
    label: "SK Stoa 운영 지원",
    stack: ["Web"],
    year: "2022",
    href: "https://www.skstoa.com/index",
  },
  {
    type: "Finance",
    label: "신한은행 기업 뱅킹 비대면 서비스 채널 고도화",
    stack: ["App", "퍼블리싱검수"],
    year: "2022",
    href: "https://bizbank.shinhan.com/main.html",
  },
];

useTrigger({
  trigger: moreSection,
});
</script>

<template>
  <section id="more" class="section" ref="moreSection">
    <div class="title-wrap border-none">
      <h2 class="title">More</h2>
    </div>
    <ul class="project-list">
      <li v-for="(item, i) in projects" :key="i" class="project-list__item">
        <a
          v-if="item.href"
          :href="item.href"
          target="_blank"
          rel="noopener noreferrer"
          class="project-list__link"
        >
          <div class="project-list__type">{{ item.type }}</div>
          <dl class="project-list__desc">
            <dt class="project-list__title">{{ item.label }}</dt>
            <dd class="project-list__stack">
              <span v-for="(tech, i) in item.stack" :key="i">#{{ tech }}</span>
            </dd>
            <dd class="project-list__year">{{ item.year }}</dd>
          </dl>
        </a>

        <div v-else class="project-list__link disabled">
          <div class="project-list__type">{{ item.type }}</div>
          <dl class="project-list__desc">
            <dt class="project-list__title">{{ item.label }}</dt>
            <dd class="project-list__stack">
              <span v-for="(tech, i) in item.stack" :key="i">#{{ tech }}</span>
            </dd>
            <dd class="project-list__year">{{ item.year }}</dd>
          </dl>
        </div>
      </li>
    </ul>
  </section>
</template>

<style scoped></style>
