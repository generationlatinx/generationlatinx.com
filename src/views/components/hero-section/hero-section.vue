<template>
  <div class="hero-banner">
    <!-- NOTE: start breadcrumb links -->
    <nav class="transparent z-depth-0">
      <div class="nav-wrapper container nav-breadcrumb">
        <div class="col s12">
          <router-link :to="{ name: 'Home'}" exact>
            GLx Home
          </router-link>

          <a v-if="this.$route.params.performer" :href="this.$route.fullPath" class="breadcrumb">{{ this.$route.params.performer }}</a>

          <a v-if="this.$route.name === 'Mailchimp'" :href="this.$route.fullPath" class="breadcrumb">Contact for {{ this.$route.name }}</a>
        </div>
      </div>
    </nav>
    <!-- end breadcrumbs -->

    <div>
      <div class="container-init-hero hide-on-med-and-down container">
        <img src="@/images/GLx-Logo-Expanded-White.png"
        srcset="@/images/GLx-Logo-Expanded-White-p-500.png 500w, @/images/GLx-Logo-Expanded-White.png 1200w"
        sizes="(max-width: 767px) 100vw, 451.20001220703125px"
        alt="Generation Latinx Logo Mobile"
        class="responsive-img image-white-banner hide-on-med-only hide-on-med-and-down hide-on-small-only">
      </div>
    </div>



    <div class="container-wrap-hero">
      <div class="container">
        <a href="/" alt="homepage"><h1 class="hero-heading vertical-align" alt="image Generation Latinx Banner"></h1></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hero-section'
}
