<template>
  <div class="home">
    <GamePadSelection />
    <GamePad />
  </div>
</template>

<script>
// @ is an alias to /src
import GamePadSelection from "@/components/GamePadSelection.vue";
import GamePad from "@/components/GamePad.vue";

export default {
  name: "Home",
  components: {
    GamePadSelection,
    GamePad
  }
};
</script>
