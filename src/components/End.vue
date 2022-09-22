<template>
  <div class="row py-14 justify-center">
    <div class="col-md-3 col-lg-3 col-xs-5 col-sm-5 mt-3 justify-center">
      <q-img src="~assets/logo.png" style="width: 50%" class="mx-4" />
      <div class="text-body1 my-3 text-grey-7 mx-4 text-left">
        your address goes here
      </div>
      <div class="text-body1 my-3 text-grey-6 mx-4 text-left">
        demo@example.com
      </div>
      <div class="text-body1 text-grey-6 mx-4 text-left my-3">0123456789</div>
      <div class="text-body1 my-3 mx-4 text-green-500 text-left">
        www.example.com
      </div>
    </div>
    <div class="col-md-2 col-lg-2 col-xs-4 col-sm-4 justify-center">
      <div class="text-h6 my-3 text-black text-left">Who we are</div>
      <div class="text-body1 my-3 text-grey-7 text-left">About Us</div>
      <div class="text-body1 my-3 text-grey-7 text-left">Before you go</div>
      <div class="text-body1 my-3 text-grey-7 text-left">Online check in</div>
      <div class="text-body1 my-3 text-grey-7 text-left">FAQ</div>
    </div>
    <div class="col-md-3 col-lg-3 col-xs-4 col-sm-4 justify-center">
      <div class="text-h6 my-3 text-black text-left">Quick Links</div>
      <div class="text-body1 my-3 text-grey-7 text-left">Pick Up Locations</div>
      <div class="text-body1 my-3 text-grey-7 text-left">Terms of payments</div>
      <div class="text-body1 my-3 text-grey-7 text-left">Privacy Policy</div>
      <div class="text-body1 my-3 text-grey-7 text-left">Where to Find Us</div>
    </div>
    <div class="col-md-2 col-lg-2 col-xs-4 col-sm-4 justify-center">
      <q-card
        class="my-card no-border bg-[#f5f5f5] px-2 my-4"
        style="width: 260px; height: 59%"
        flat
      >
        <q-item-section>
          <div style="width: 80%">
            <div class="text-body2 my-2 mx-2 text-grey-7">
              "The ocean never ceases to amaze!" Feature: Ben Klea
            </div>
            <div class="text-subtitle2 mx-2 text-green-500">https://</div>
            <div class="text-subtitle2 mx-2 text-green-500">https://</div>
          </div>
        </q-item-section>
      </q-card>
      <div class="row">
        <q-icon name="fab fa-twitter" class="mt-4" size="sm" />
        <div class="mx-4">
          <div class="text-h6 my-1 text-black text-left">Unsplash</div>
          <div class="text-body1 my-1 text-grey-7 text-left">May 07,2021</div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
  <q-separator />
  <div class="row py-5">
    <div class="row mt-2">
      <div class="text-body1">© 2021 AeroLand Made with</div>
      <q-icon name="fa fa-heart" color="red" class="mx-2 mt-1" />
      <div class="text-body1">by HasThemes</div>
    </div>
    <q-space />

    <div class="row mx-12">
      <q-icon name="fab fa-square-facebook" class="mx-4" size="lg" />
      <q-icon name="fab fa-square-instagram" class="mx-4" size="lg" />
      <q-icon name="fab fa-square-twitter" class="mx-4" size="lg" />
    </div>
  </div>
  <div></div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "End",
});
</script>
<style>
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
.t1 {
  font-family: "Rubik-bold";
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
