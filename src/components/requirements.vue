<template>
  <div id="requirements" class="bg-[#f5f7fd]">
    <div class="row">
      <div class="col-md-6 col-lg-6 col-xs-12 col-sm-12 lt-md justify-left">
        <q-img
          src="~assets/both-laptop.png"
          class="-mt-4 -mx-6"
          style="height: 100%"
        />
        <div class="my-16"></div>
      </div>
      <div class="col-md-5 col-lg-5 col-xs-12 col-sm-12 mx-16 justify-right">
        <div class="t1 text-h2 text-[#2e3280] justify-left q-mt-xl q-my-xl">
          Meeting all of your requirements for SEOs
        </div>
        <div class="t2 text-body1 text-[#949097] text-left q-mt-xl q-my-xl">
          AeroLand creates a prominent advantage for your business with strong
          features
        </div>
        <div class="row">
          <q-icon name="check" size="md" color="green" />
          <div class="t2 text-body1 text-[#949097] text-center mx-2 my-2">
            Customer First Content-focused Displaying Effects
          </div>
        </div>
        <div class="row">
          <q-icon name="check" size="md" color="green" />
          <div class="t2 text-body1 text-[#949097] text-center mx-2 my-2">
            High Definition Full-screen Sliders & Backgrounds
          </div>
        </div>
        <div class="row">
          <q-icon name="check" size="md" color="green" />
          <div class="t2 text-body1 text-[#949097] text-center mx-2 my-2">
            Fast Loading, Reader Friendly Navigation Style
          </div>
        </div>
        <q-btn
          color=""
          class="mt-8 ht-btn ht-btn-md"
          size="md"
          label="Learn More"
        />
      </div>
      <div class="col-md-6 col-lg-6 col-xs-8 col-sm-8 gt-sm justify-left">
        <q-img
          src="~assets/both-laptop.png"
          class="-mt-4 -mx-6"
          style="height: 100%"
        />
        <div class="my-16"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "aboutBranding",
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
