<template>
  <div class="justify-center py-12" id="about">
    <div class="t1 text-h2 text-[#2e3280] text-center q-mt-xl q-my-md">
      Expand Your Business
    </div>
    <div class="t2 text-h6 text-[#949097] text-center q-mt-sm q-my-xl">
      Plan ahead to make progress and leasd the trend.
    </div>
    <div class="row justify-center mx-16">
      <!-- column-1 -->
      <div class="col-md-2 col-lg-2 col-xs-8 col-sm-6 justify-center">
        <q-img src="~assets/research.png" class="mx-5" style="width: 80%" />
        <div
          class="t2 text-h6 text-black text-center hover:text-[#ae9df3]"
          style="width: 100%"
        >
          Social Media Boost
        </div>
      </div>
      <q-separator vertical class="gt-sm" style="height: 150px" />
      <!-- column-2 -->
      <div class="col-md-2 col-lg-2 col-xs-8 col-sm-6 mx-12 justify-center">
        <q-img src="~assets/research.png" class="mx-5" style="width: 80%" />
        <div class="t2 text-h6 text-center text-black" style="width: 100%">
          In-depth reserach analysis
        </div>
      </div>
      <q-separator vertical class="gt-sm" style="height: 150px" />
      <!-- column-3 -->
      <div class="col-md-2 col-lg-2 col-xs-8 col-sm-6 mx-16 justify-center">
        <q-img src="~assets/progress.png" class="mx-6" style="width: 80%" />
        <div class="t2 text-h6 text-black text-center" style="width: 100%">
          Scientifically proven progress
        </div>
      </div>
    </div>
  </div>
  <div class="t1 text-h2 text-[#2e3280] text-center q-mt-xl q-my-xl">
    Receive real-time business analytics
  </div>
  <div class="row justify-center">
    <q-icon name="fa fa-circle-play" size="lg" color="green" />
    <div class="t2 text-h5 text-[#949097] text-center mx-4">
      INTRO & DEMO VIDEO
    </div>
  </div>
  <div class="row my-16">
    <!-- COLUMN-1 -->
    <div class="col-md-5 col-lg-5 col-xs-12 col-sm-12 lg:mx-16 justify-right">
      <q-img src="~assets/feature.png" style="height: 100%" />
    </div>
    <!-- COLUMN-2 -->
    <div class="col-md-5 col-lg-5 col-xs-10 col-sm-10 mx-16 justify-center">
      <!-- FIRST FEATURE -->
      <q-card
        class="my-card my-12 rounded-md mx-16 ml-auto opacity-75 shadow-lg shadow-gray-300 hover:shadow-[#bbb0e5] transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none ..."
        style="width: 75%; height: 25%"
      >
        <q-item>
          <q-item-section avatar>
            <img src="~assets/cross-browser.png" />
          </q-item-section>
          <q-item-section>
            <div class="my-6">
              <div class="text-h6 my-3">Cross-browser Compatible Design</div>
              <div class="text-subtitle2">
                Apps are built based on highly compatible design for all kinds
                of Internet browsers.
              </div>
            </div>
          </q-item-section>
        </q-item>
      </q-card>
      <!-- SECOND FEATURE -->
      <q-card
        class="my-card rounded-md my-12 mx-16 ml-auto opacity-75 shadow-lg shadow-gray-300 hover:shadow-[#bbb0e5] transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none ..."
        style="width: 65%; height: 25%"
      >
        <q-item>
          <q-item-section avatar>
            <img src="~assets/tools.png" />
          </q-item-section>
          <q-item-section>
            <div class="my-6">
              <div class="text-h6 my-3">Highly Responsive Tools</div>
              <div class="text-subtitle2">
                Apps are built based on highly compatible design for all kinds
                of Internet browsers.
              </div>
            </div>
          </q-item-section>
        </q-item>
      </q-card>
      <!-- THIRD FEATURE -->
      <q-card
        class="my-card rounded-md opacity-75 mx-16 ml-auto shadow-lg shadow-gray-300 hover:shadow-[#bbb0e5] transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none ..."
        style="width: 75%; height: 25%"
      >
        <q-item>
          <q-item-section avatar>
            <img src="~assets/mobile.png" />
          </q-item-section>
          <q-item-section>
            <div class="my-6">
              <div class="text-h6 my-3">Completely Mobile Ready</div>
              <div class="text-subtitle2">
                Apps are built based on highly compatible design for all kinds
                of Internet browsers..
              </div>
            </div>
          </q-item-section>
        </q-item>
      </q-card>
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
