<template>
  <div
    class="mt-12 py-14 bg-gradient-to-r from-[#5e60e7] to-[rgb(155,120,242)] .."
  >
    <div class="mt-12">
      <div class="t1 text-h3 text-white text-center">
        493 businesses signed up
      </div>
      <div class="t1 text-h3 text-white text-center my-2">
        last week. Join them!
      </div>
    </div>
    <div class="row justify-center mt-16">
      <input
        class="rounded-md bg-[#7364da] w-1/6 mx-2 placeholder-white"
        placeholder="Your Name"
      />
      <input
        for="email"
        type="email"
        class="rounded-lg bg-[#7364da] mx-2 h-14 w-1/6 placeholder-white"
        placeholder="Email"
      />
      <q-btn
        color="white"
        class="capitalize no-border mx-2 text-h6 w-1/7 h-2 mt-1 text-blue-8"
        size="lg"
        label="Subscribe"
      />
    </div>
    <div class="row justify-center mt-16">
      <div class="t1 text-h5 text-white text-center my-2">
        What’s next in AeroLand?
      </div>
      <div class="t1 text-h5 text-green-500 text-center my-2">Learn More</div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Join",
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
.t2 {
  font-family: "Rubik";
  font-weight: bold;
}
</style>
