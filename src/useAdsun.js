import { onMounted, shallowRef } from "vue";

export function useAdsun(blockId, debug = false) {
  const ctrl = shallowRef();
  onMounted(() => { ctrl.value = window.Adsun?.init({ blockId, debug }); });
  const show = () => ctrl.value ? ctrl.value.show() : Promise.reject("SDK not loaded");
  return { show };
}
