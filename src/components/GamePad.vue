<template>
  <div id="gamepad">
    <GamePadInfo />
    <GamePadAxes />
    <GamePadButtons />
    <GamePadVibrationActuator />
  </div>
</template>

<script>
import GamePadInfo from "@/components/GamePadInfo.vue";
import GamePadAxes from "@/components/GamePadAxes.vue";
import GamePadButtons from "@/components/GamePadButtons.vue";
import GamePadVibrationActuator from "@/components/GamePadVibrationActuator.vue";
export default {
  name: "GamePad",
  components: { GamePadInfo, GamePadAxes, GamePadButtons, GamePadVibrationActuator }
};
</script>

<style lang="stylus" scoped></style>
