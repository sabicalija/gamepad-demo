<template>
  <div id="gamepad">
    <GamePadInfo />
    <GamePadAxes />
    <GamePadJoysticks />
    <GamePadButtons />
    <GamePadVibrationActuator />
  </div>
</template>

<script>
import GamePadInfo from "@/components/GamePadInfo.vue";
import GamePadAxes from "@/components/GamePadAxes.vue";
import GamePadJoysticks from "@/components/GamePadJoysticks.vue";
import GamePadButtons from "@/components/GamePadButtons.vue";
import GamePadVibrationActuator from "@/components/GamePadVibrationActuator.vue";
export default {
  name: "GamePad",
  components: {
    GamePadInfo,
    GamePadAxes,
    GamePadJoysticks,
    GamePadButtons,
    GamePadVibrationActuator
  }
};
</script>

<style lang="stylus" scoped></style>
