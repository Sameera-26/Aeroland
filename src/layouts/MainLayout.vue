<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-white py-6 q-pa-md q-px-xl">
        <q-img src="~assets/logo.png" style="width: 2450px" />

        <!-- MENU ITEMS -->
        <div class="gt-sm mx-[10%]">
          <!-- hidden for medium screens -->
          <div class="ti text-grey-5 text-sm space-x-16">
            <a href="#" class="hover:text-secondary">LANDING</a>
            <a href="#" class="hover:text-secondary">HOME</a>
            <a href="#" class="hover:text-secondary">ABOUT</a>
            <a href="#" class="hover:text-secondary">REQUIREMENTS</a>
            <a href="#" class="hover:text-secondary">PRICING</a>
            <a href="#" class="hover:text-secondary">PARTNERS</a>
          </div>
        </div>
        <q-space />
        <q-icon name="search" color="grey-7" class="hover:color-priamry mx-12" size="lg"></q-icon>
        <q-btn outline color="primary" label="Hire Us Now" style="width:140%; height:50px"/>

        <q-btn
          color="primary"
          size="md"
          icon="fa  fa-bars"
          flat
          class="mx-4 lt-md mb-10 bg-grey-2 h-14"
        >
          <q-menu
            auto-close
            transition-show="jump-down"
            transition-hide="jump-up"
          >
            <q-list class="text-h6 text-center" style="min-width: 500px">
              <q-item clickable>
                <q-item-section>LANDING</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable>
                <q-item-section>HOME</q-item-section>
              </q-item>

              <q-item clickable>
                <q-item-section>ABOUT</q-item-section>
              </q-item>

              <q-item clickable>
                <q-item-section>REQUIREMENTS</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable>
                <q-item-section>PRICING</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section>PARTNERS</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",
});
</script>
<style>
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
.ti {
  font-family: "Sen-bold";
  font-weight: bold;
}
.t2 {
  font-family: "Sen";
  font-weight: bold;
}
</style>
