<template>
  <div id="sw-update-info">
    <transition name="slide-fade">
      <div v-if="enabled" @click="reload">
        {{ message }}
      </div>
    </transition>
  </div>
</template>

<script>
import event from "@/utils/app/event.js";
export default {
  name: "SWUpdateInfos",
  data() {
    return {
      updateEvent: null,
      message: "Update available!"
    };
  },
  computed: {
    enabled() {
      return Boolean(this.updateEvent);
    }
  },
  methods: {
    onSWUpdate(e) {
      this.updateEvent = e;
    },
    reload() {
      if (this.updateEvent) {
        this.updateEvent.skipWaiting().then(() => {
          location.reload(true);
        });
        this.updateEvent = null;
      }
    }
  },
  created() {
    event.$on("sw-updated", this.onSWUpdate);
  }
};
</script>

<style lang="stylus" scoped></style>
