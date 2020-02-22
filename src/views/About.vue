<template>
  <div>
    <SWUpdateInfo />
    <div id="about">
      <h1>GamePad API made with Vue.js.</h1>
      <p>
        This demo shows how to integrate the HTML5 Gamepad API in a Vue.js application. Features
        included:
        <ul>
          <li>vue-router</li>
          <li>vuex</li>
          <li>webpack</li>
          <li>fontawesome</li>
        </ul>
      </p>
    </div>
  </div>
</template>

<script>
import SWUpdateInfo from "@/components/SWUpdateInfo.vue";
export default {
  name: "About",
  components: {
    SWUpdateInfo,
  },
}
</script>

<style lang="stylus" scoped></style>
