<template>
  <div :class="$style.sidebar">  <!-- init med and small non-nav header -->

    <br/>
    <router-link to="/" class="black-text">
      <div class="row valign-wrapper">
        <div class="col s3 column-nav-images">
          <img src="@/images/avatar.png" alt="glx avatar logo" class="responsive-img image-logo">
        </div>

        <div class="col s9 column-nav-images ">
          <img src="@/images/aLTERED-WHITE-glx-logo-expanded-horizontal-white.png" alt="" class="responsive-img image-header">
        </div>
      </div>
    </router-link>

    <!-- set of links -->
    <br/>
    <br />


    <ul class="right-align container">
      <!-- one line here -->
      <div class="row">
        <li>
          <router-link to="/" class="white-text">
            <div class="col s2 center-align">
              <i class="fas fa-home"></i>
            </div>
            <div class="col s10">
              Home
            </div>
          </router-link>
        </li>
      </div>

      <!-- two -->
      <div class="row">
        <li>
          <router-link to="/videos" class="white-text">
            <div class="col s2 center-align">
              <i class="fas fa-video"></i>
            </div>
            <div class="col s10">
              Videos
            </div>
          </router-link>
        </li>
      </div>

      <!-- one line here -->
      <div class="row">
        <li>
          <router-link to="/assigned" class="white-text">
            <div class="col s2 center-align">
              <i class="fas fa-bullhorn"></i>
            </div>
            <div class="col s10">
              Meet the Directors
            </div>
          </router-link>
        </li>
      </div>

      <!-- one line here -->
      <div class="row">
        <li>
          <router-link to="/contact" class="white-text">
            <div class="col s2 center-align">
              <i class="fas fa-at"></i>
            </div>
            <div class="col s10">
              Contact
            </div>
          </router-link>
        </li>
      </div>

      <!-- <li><router-link to="/" class="white-text sidenav-close">Home</router-link></li> -->
      <!-- <li><router-link to="/videos" class="white-text sidenav-close">Videos</router-link></li> -->
      <!-- <li><router-link to="/assigned" class="white-text sidenav-close">Meet the Directors</router-link></li> -->
      <!-- <li><router-link to="/" class="white-text sidenav-close">Contact</router-link></li> -->
    </ul>
  </div>
</template>

<script>

  import { TweenMax, Power4 } from 'gsap';


export default {
  name: 'sidebar',
  mounted() {
    TweenMax.set(this.$el, {
      x: this.$el.offsetWidth
    })
  },
  computed: {
    open() {
      return this.$store.state.ui.sidebarOpen
    }
  },
  watch: {
    open: function (open) {
      const dX = open ? 0 : this.$el.offsetWidth
      TweenMax.to(this.$el, 0.6, {
        x: dX,
        ease: Power4.easeOut
      })
    }
  }
}
</script>

<style module>

  .sidebar {
    position: fixed;
    right: 0;
    top: 0;
    width: 300px;
    height: 100vh;
    max-width: 90vw;
    background-color: var(--accent-color);


  }
</style>
