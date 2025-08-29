import { onMounted, onBeforeUnmount } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

/**
 * 공통 ScrollTrigger 훅
 * @param {Object} options
 * @param {Ref<HTMLElement>} options.trigger
 * @param {string|Function} [options.start="-50px top"]
 * @param {string|Function} [options.end="+=50%"]
 * @param {boolean} [options.pin=true]
 * @param {boolean} [options.scrub=true]
 * @param {Function} [options.onEnter]
 * @param {Function} [options.onLeave]
 * @param {Function} [options.onEnterBack]
 * @param {Function} [options.onLeaveBack]
 * @returns {{ timeline: gsap.core.Timeline | null }}
 */

export function useTrigger({
  trigger,
  start = "-50px top",
  end = "+=50%",
  pin = true,
  pinMobile = false,
  scrub = true,
  animations, // 👈 (tl) => { tl.to(...).from(...); }
  ...rest
}) {
  let mm = null;
  const asValueOrFn = (v) => (typeof v === "function" ? () => v() : v);

  onMounted(() => {
    if (!trigger?.value) return;

    mm = gsap.matchMedia();

    const setup = (cfg) => () => {
      const st = cfg.start ?? start;
      const ed = cfg.end ?? end;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: trigger.value,
          start: asValueOrFn(st),
          end: asValueOrFn(ed),
          pin: cfg.pin,
          scrub,
          // 나머지 옵션 전달 (markers, pinSpacing 등)
          ...rest,
        },
      });
      animations?.(tl); // 👈 여기서 바로 빌드
      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    };

    mm.add("(max-width: 768px)", setup({ pin: pinMobile }));
    mm.add("(min-width: 769px)", setup({ pin: pin }));
  });

  onBeforeUnmount(() => {
    mm?.revert();
  });
}
