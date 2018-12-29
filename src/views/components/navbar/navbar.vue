<template>
  <div class="inner-nav-content">
    <nav id="nav" class="white hide-on-med-only hide-on-small-only brand-heading">
      <div class="nav-wrapper">
        <router-link to="/" class="brand-logo">
          <div class="row">
            <div class="col s3 image-logo-wrapper">
              <img src="@/images/avatar.png" alt="glx avatar logo" class="responsive-img image-logo z-depth-1">
            </div>
            <!-- banner of text -->
            <div class="col s9">
              <img src="@/images/glx-text-banner.png" alt="generation latin x"
              srcset="@/images/glx-text-banner-p-500.png 500w, @/images/glx-text-banner.png 780w"
              sizes="(max-width: 767px) 100vw, 151px"
              class="image-header">
            </div>
          </div>
        </router-link>

        <!-- start right hand large-screen links -->
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><router-link to="/" class="black-text sidenav-close">Home</router-link></li>
          <li><a href="https://www.youtube.com/channel/UCfM0UQHLagZcqNdzxu0ea6g" class="black-text sidenav-close" alt="videos open in a new window">Videos</a></li>
          <!-- <li><router-link to="/assigned" class="black-text sidenav-close">Meet the Directors</router-link></li> -->
          <!-- <li><router-link to="/press" class="black-text sidenav-close">Press</router-link></li>           -->
          <li><router-link to="/contact" class="black-text sidenav-close">Contact</router-link></li>

          <!-- SECONDARY PRIORITY -->
          <!-- <li><router-link :to="nextShow" class="black-text sidenav-close">
          <div class="glx-red chip white-text">
          <span>Shows on Tuesdays at 10pm</span>
        </div>
      </router-link>
    </li> -->

      <!-- SECONDARY PRIORITY -->
      <li>
        <div class="glx-red chip white-text showData">
          <a href="https://www.ioimprov.com/shows/generation-latinx/">
          <span>
            <!-- My stored Show data:{{ show.id }} {{pendingShowsCount}} -->
            Tuesdays at 10pm
          </span>
        </a>
        </div>
      </li>
      <li>
        <div class="chip">
        <!-- {{getShowById(1).isComingUp}} -->
      </div>
    </li>
  </ul>
</div>
</nav>
</div>
</template>

<script>
  export default {
    name: 'navbar',
    data () {
      return {
        nextShow: 'Tues, 12/10 8pm'
      }
    },
    methods: {
      getShowById(id) {
        // this is now a method, so it can't go in computed section, nor is it cached
        return this.$store.getters.getShowById(id)
      }
    },
    computed: {
      count() {
        return this.$store.state.shows.count
      },
      pendingShows() {
        return this.$store.getters.pendingShows
      },
      pendingShowsCount() {
        return this.$store.getters.pendingShowsCount
      }
    }
  }
</script>
