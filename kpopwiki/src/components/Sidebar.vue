<template>
  <div class="sidebar">
    <div class="sidebar-backdrop" @click="toggleSidebar" v-if="isPanelOpen"></div>
    <transition name="slide">
      <div v-if="isPanelOpen"
           class="sidebar-panel">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  computed: {
    isPanelOpen () {
      return this.$store.state.isNavOpen
    }
  },
  methods: {
    toggleSidebar () {
      return this.$store.commit('toggleNav')
    }
  }
}
</script>

<style scoped>
  .slide-enter-active,
  .slide-leave-active
  {
    transition: transform 0.2s ease;
  }

  .slide-enter,
  .slide-leave-to {
    transform: translateX(-100%);
    transition: all 150ms ease-in 0s
  }

  .sidebar-backdrop {
    background-color: whitesmoke;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    cursor: pointer;
  }

  .sidebar-panel {
    overflow-y: auto;
    background-color: white;
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    z-index: 999;
    padding: 3rem 20px 2rem 20px;
    width: 300px;
  }

</style>
