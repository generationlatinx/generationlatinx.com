<template>
  <div id="app">
    <div :class="$style.container">
      <div class="main-content">
        <div id="header-nav" class="nav-bars top main-and-sidenav">
          <navbar></navbar>
          <hero-section />
        </div>
        <router-view />
        <div class="section footer">
          <div class="footer accent">
            <ul class="unordered-list footer-text">
              <li>© 2018-{{ updatedYear }} GENERATION LATINX LLC. All rights reserved.</li>
              <li>Directed by: <a href="https://www.imdb.com/name/nm3112631/" class="indigo-text indigo-darken-2 link-director-page">Mishell Livio</a></li>
              <li><strong>Follow us below:</strong></li>
            </ul>


            <div class="container">
              <div class="row">
                <div class="col s12">
                  <div class="container-all-icons">
                    <div class="float-right">
                      <a href="https://www.facebook.com/GenerationLatinX/" class="social-icon" aria-label="facebook for generation latinx"><i aria-hidden="true" class="fab fa-facebook fa-2x blue-grey-text"></i></a>
                      <a href="https://twitter.com/GenLatinX" class="social-icon" aria-label="twitter for generation latinx"><i aria-hidden="true" class="fab fa-twitter fa-2x blue-grey-text"></i></a>
                      <a href="https://www.instagram.com/generationlatinx/" class="social-icon" aria-label="instagram for generation latinx"><i aria-hidden="true" class="fab fa-instagram fa-2x blue-grey-text"></i></a>
                      <a href="https://www.snapchat.com/add/GenLatinX" class="social-icon" aria-label="snapchat for genration latinx"><i aria-hidden="true" class="fab fa-snapchat fa-2x blue-grey-text"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <sidebar />
    <sidebar-toggle />
  </div>
</template>

<script>
import Sidebar from '@/views/components/Sidebar.vue'
import SidebarToggle from '@/views/components/SidebarToggle.vue'
import Navbar from '@/views/components/navbar'
import HeroSection from '@/views/components/hero-section'

export default {
  name: 'app',
  data() {
    return {
      updatedYear: '2019'
    }
  },
  components: {
    Sidebar,
    SidebarToggle,
    Navbar,
    HeroSection
  }
}
</script>

<!-- CSS libraries -->
<style src="normalize.css/normalize.css"></style>

<style>
:root{
  --accent-color: rgb(19, 156, 135);
  --primary-color: #9a30ae;
  --dark-color: #2E294E;
}

* {
  box-sizing: border-box;
}
</style>

<style module>
.container {
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  background-color: var(--primary-color);
  overflow-y: scroll; /* has to be scroll, not auto */
  -webkit-overflow-scrolling: touch;

}

</style>

<style src='@/views/styles/styles.css'></style>
<style src='materialize-css/dist/css/materialize.css'></style>
