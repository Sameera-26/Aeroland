<template>
  <div class="relative">
    <img src="~assets/branding.jpg" />
    <div
      class="absolute t1 gt-sm text-6xl text-[#333333] top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2"
      style="width: 40%"
    >
      Executive branding campaign
    </div>
    <div
      class="absolute t1 lt-md text-2xl text-[#333333] top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2"
      style="width: 40%"
    >
      Executive branding campaign
    </div>
    <div
      class="absolute t2 text-h6 gt-sm text-grey-6 top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2"
      style="width: 40%"
    >
      True branding starts from within. We create and adopt unique branding
      resolution to strengthen your business.
    </div>
    <div
      class="absolute t2 text-body2 my-3 mx-2 lt-md text-grey-6 top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2"
      style="width: 60%"
    >
      True branding starts from within. We create and adopt unique branding
      resolution to strengthen your business.
    </div>
    <div data-v-3ea064a0 class="t2 text-h6">
      <q-btn
        data-v-3ea064a0
        class="ht-btn ht-btn-md mx-[5%] gt-sm -mt-[40%] capitalize"
        >Get a Demo</q-btn
      >
    </div>
    <div data-v-3ea064a0 class="t2 text-h6">
      <q-btn
        size="md"
        data-v-3ea064a0
        class="ht-btn ht-btn-md mx-[5%] -my-12 lt-md -mt-[40%] capitalize"
        >Get a Demo</q-btn
      >
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "homeBranding",
});
</script>
<style>
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
.t1 {
  font-family: "Rubik-bold";
  font-weight: bold;
}
.t2 {
  font-family: "Rubik";
  font-weight: bold;
}
.ht-btn,
.ht-btn:active,
.ht-btn:focus,
.ht-btn:hover {
  color: #fff;

  background: linear-gradient(218deg, #5e61e7, #9c7af2 50%, #5e61e7);
}
.a,
button,
img,
input,
span {
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.ht-btn.ht-btn-md {
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 54px;
  height: 54px;
}
.ht-btn {
  font-size: 15px;
  font-weight: 500;
  border-style: solid;
  border-radius: 5px;
  border-color: transparent;
  padding: 0 36px;
  text-align: center;
  background-size: 200% auto;
  background-position: 0;
  border-width: 1px;
  -webkit-transform: translateY(0);
  transform: translateY(0);
}
</style>
