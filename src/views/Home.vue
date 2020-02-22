<template>
  <div class="home">
    <SWUpdateInfo />
    <GamePadSelection />
    <GamePad />
  </div>
</template>

<script>
// @ is an alias to /src
import SWUpdateInfo from "@/components/SWUpdateInfo.vue";
import GamePadSelection from "@/components/GamePadSelection.vue";
import GamePad from "@/components/GamePad.vue";

export default {
  name: "Home",
  components: {
    SWUpdateInfo,
    GamePadSelection,
    GamePad
  }
};
</script>
