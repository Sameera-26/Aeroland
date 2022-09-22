<template>
  <q-page>
    <homeBranding />

    <aboutBranding />

    <requirementsBranding />

    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      animated
      swipeable
      vertical
      navigation
      navPos
      height="600px"
      control-color="primary"
      class="rounded-borders mt-16"
    >
      <q-carousel-slide name="team-members">
        <!-- column-1 -->
        <div class="row">
          <div class="col-md-6 col-lg-6 col-xs-10 col-sm-10 text-right">
            <q-img
              src="~assets/team-member.png"
              class="ml-auto gt-sm mx-16"
              style="width: 86%"
            />
            <q-img
              src="~assets/team-member.png"
              class="ml-auto lt-md mx-16"
              style="width: 55%"
            />
          </div>
          <!-- column-2 -->
          <div
            class="col-md-5 col-lg-5 col-xs-14 col-sm-12 q-px-xl justify-left"
          >
            <q-card
              class="my-card max-w-xl h-5xl rounded-lg ml-auto my-10 shadow-2xl shadow-gray-300"
            >
              <q-item>
                <q-item-section>
                  <!-- FOR MEDIUM SCREENS -->
                  <div class="my-3 gt-md mx-8 mb-6">
                    <div class="t2 text-h4 mt-4">
                      Visionary Creative Team Members
                    </div>
                    <div class="t2 text-h6 text-grey-6 q-my-sm">
                      We bring on like-minded and talented members to help you
                      grow a stronger business for fiercely reaching towards
                      higher goals every day. We try to form an all-star team
                      that deeply investigates your company culture to advertise
                      about it.
                    </div>
                  </div>

                  <div class="my-6 lt-md mx-8">
                    <div class="t1 text-h5 my-3">
                      Visionary Creative Team Members
                    </div>
                    <div class="t2 text-body1 text-body2-xs text-grey-6">
                      We bring on like-minded and talented members to help you
                      grow a stronger business for fiercely reaching towards
                      higher goals every day. We try to form an all-star team
                      that deeply investigates your company culture to advertise
                      about it.
                    </div>
                  </div>
                </q-item-section>
              </q-item>
            </q-card>
          </div>
        </div>
      </q-carousel-slide>
      <!-- SLIDE-2 -->
      <q-carousel-slide name="big-picture" class="justify-center">
        <!-- column-1 -->
        <div class="row">
          <div class="col-md-6 col-lg-6 col-xs-8 col-sm-8 text-right">
            <q-img
              src="~assets/big-picture.png"
              class="ml-auto gt-sm mx-16"
              style="width: 590px"
            />
            <q-img
              src="~assets/big-picture.png"
              class="ml-auto lt-md"
              style="width: 62%"
            />
          </div>
          <!-- column-2 -->
          <div
            class="col-md-5 col-lg-5 col-xs-14 col-sm-12 q-px-xl justify-left"
          >
            <q-card
              class="my-card max-w-xl rounded-lg ml-auto my-10 shadow-2xl shadow-gray-300"
            >
              <q-item>
                <q-item-section>
                  <div class="my-6 gt-sm mx-8">
                    <div class="t1 text-h4 my-3">
                      How to Fit into The Big Picture
                    </div>
                    <div class="t2 text-h6 text-grey-6">
                      Our branding professionals have unique ways to avoid the
                      well-worn path. They can get on a new original one for
                      finding resolutions by imagining your company as a piece
                      and study how to make it fit into the big picture.
                    </div>
                  </div>
                  <div class="my-6 lt-md mx-8">
                    <div class="t1 text-h5 my-3">
                      How to Fit into The Big Picture
                    </div>
                    <div class="t2 text-body1 text-grey-6">
                      Our branding professionals have unique ways to avoid the
                      well-worn path. They can get on a new original one for
                      finding resolutions by imagining your company as a piece
                      and study how to make it fit into the big picture.
                    </div>
                  </div>
                </q-item-section>
              </q-item>
            </q-card>
          </div>
        </div>
      </q-carousel-slide>
      <!-- SLIDE-3 -->
      <q-carousel-slide name="website" class="justify-center">
        <!-- column-1 -->
        <div class="row">
          <div class="col-md-6 col-lg-6 col-xs-8 col-sm-8 text-right">
            <q-img
              src="~assets/website.png"
              class="ml-auto gt-sm mx-16"
              style="width: 590px"
            />
            <q-img
              src="~assets/website.png"
              class="ml-auto lt-md"
              style="width: 62%"
            />
          </div>
          <!-- column-2 -->
          <div
            class="col-md-5 col-lg-5 col-xs-14 col-sm-12 q-px-xl justify-left"
          >
            <q-card
              class="my-card max-w-xl rounded-lg ml-auto my-10 shadow-2xl shadow-gray-300"
            >
              <q-item>
                <q-item-section>
                  <div class="my-6 gt-sm mx-8">
                    <div class="t1 text-h4 my-3">
                      Build Enticing & Professional Website
                    </div>
                    <div class="t2 text-h6 text-grey-6">
                      Putting together all of your business's data, rearrange
                      and present in an appealing way to highlight your core
                      values, services, and visions in the local area. Your
                      online website would be a stepping stone for expanding
                      company's visibility.
                    </div>
                  </div>
                  <div class="my-6 lt-md mx-8">
                    <div class="t1 text-h5 my-3">
                      Build Enticing & Professional Website
                    </div>
                    <div class="t2 text-body1 text-grey-6">
                      Putting together all of your business's data, rearrange
                      and present in an appealing way to highlight your core
                      values, services, and visions in the local area. Your
                      online website would be a stepping stone for expanding
                      company's visibility.
                    </div>
                  </div>
                </q-item-section>
              </q-item>
            </q-card>
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
    <div class="row py-12 justify-center">
      <div class="col-md-4 col-lg-4 col-xs-8 col-sm-10 justify-center">
        <div class="row">
          <div class="col-md-6 col-lg-6 col-xs-8 col-sm-5 text-right">
            <q-img
              src="~assets/95.png"
              class="ml-auto mx-16"
              style="width: 160px"
            />
          </div>
          <div class="col-md-3 col-lg-6 col-xs-8 col-sm-4 text-right">
            <div class="text-h4 my-3 text-[#2e3280] text-left">
              Digital Marketing
            </div>
            <div class="text-h6 my-3 text-grey-7 text-left">Website audit</div>
            <div class="text-h6 my-3 text-grey-7 text-left">Marketing, SEO</div>
            <div class="text-h6 my-3 text-grey-7 text-left">Social Media</div>
            <div class="text-h6 my-3 text-grey-7 text-left">Social Media</div>
            <div class="text-h6 my-3 text-grey-7 text-left">
              On-page SEO Audit
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-lg-4 col-xs-8 col-sm-10 justify-center">
        <div class="row">
          <div class="col-md-6 col-lg-6 col-xs-8 col-sm-5 text-right">
            <q-img
              src="~assets/75.png"
              class="ml-auto mx-16"
              style="width: 160px"
            />
          </div>
          <div class="col-md-6 col-lg-6 col-xs-8 col-sm-4 text-right">
            <div class="text-h4 my-3 text-[#2e3280] text-left">
              Digital Marketing
            </div>
            <div class="text-h6 my-3 text-grey-7 text-left">Website audit</div>
            <div class="text-h6 my-3 text-grey-7 text-left">Marketing, SEO</div>
            <div class="text-h6 my-3 text-grey-7 text-left">Social Media</div>
            <div class="text-h6 my-3 text-grey-7 text-left">Social Media</div>
            <div class="text-h6 my-3 text-grey-7 text-left">
              On-page SEO Audit
            </div>
          </div>
        </div>
      </div>
    </div>
    <svg
      data-v-2f282228
      x="0px"
      y="0px"
      viewBox="0 0 3841 120"
      xml:space="preserve"
      style="overflow: scroll"
    >
      <path
        data-v-2f282228
        d="M 3360.5 97.739 c -242 0 -480 -48.375 -480 -48.375 S 2647.5 0.5 2400.5 0.5 s -480 48.375 -480 48.375 s -238 48.864 -480 48.864 s -480 -48.375 -480 -48.375 S 727.5 0.5 480.5 0.5 S 0.5 48.875 0.5 48.875 V 108 h 1920 h 1920 V 48.875 C 3840.5 48.875 3602.5 97.739 3360.5 97.739 Z"
        style="fill: rgb(246, 245, 249); stroke-miterlimit: 10"
      ></path>
    </svg>

    <pricingBranding />

    <partnersBranding />

    <Join />

    <End />
  </q-page>
</template>
<script>
import { defineComponent } from "vue";
import homeBranding from "../components/home.vue";
import aboutBranding from "../components/about.vue";
import requirementsBranding from "../components/requirements.vue";
import pricingBranding from "../components/pricing.vue";
import partnersBranding from "../components/partners.vue";
import Join from "../components/Join.vue";
import End from "../components/End.vue";
export default {
  name: "Landing",
  data() {
    return {
      slide: "team-members",
    };
  },
  components: {
    homeBranding,
    aboutBranding,
    requirementsBranding,
    pricingBranding,
    partnersBranding,
    Join,
    End,
  },
};
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
</style>
