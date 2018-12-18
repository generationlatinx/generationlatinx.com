<template>
  <!-- PRIMARILY ON TABLET AND ABOVE -->
  <div class="hero-banner">
    <div>
      <div class="container-init-hero hide-on-med-and-down container">
        <img src="@/images/GLx-Logo-Expanded-White.png"
        srcset="@/images/GLx-Logo-Expanded-White-p-500.png 500w, @/images/GLx-Logo-Expanded-White.png 1200w"
        sizes="(max-width: 767px) 100vw, 451.20001220703125px"
        alt="Generation Latinx Logo Mobile"
        class="responsive-img image-white-banner hide-on-med-only hide-on-med-and-down hide-on-small-only">
      </div>
    </div>

    <div class="container-wrap-hero container">
      <div>
        <!-- primary header attaches here -->
        <h1 class="hero-heading hide-on-small-only"></h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroSection"
}
