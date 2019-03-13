<template>
  <div class="container">
    <div class="row">
      <div class="s12">
        <transition-group
        name="staggered-fade"
        tag="div"
        v-bind:css="false"
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:leave="leave"
        appear
        >
        <div v-for="(bio, index) in bios" :key="index + '_' + bio.id" v-bind:data-index="index">
          <router-link
          :to="{

            name: 'Performer',
            params: {
              id: bio.id,
              performer: bio.fields.Performer,
              performerSlug: bio.fields.Performer.replace(/\W+/g, '-').toLowerCase()
              } }">
              <div class="grid-fours">
                <performer :bio="bio"></performer>
              </div>
            </router-link>
          </div>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
import Performer from '@/views/components/performer'

export default {
  name: 'cast-roster',
  methods: {
    beforeEnter: function (el) {
      el.style.opacity = 0

    },
    enter: function (el, done) {
      var delay = el.dataset.index * 125
      setTimeout(function () {
        Velocity(
          el,
          { opacity: 1},
          { complete: done }
        )
      }, delay)
    },
    leave: function (el, done) {
      var delay = el.dataset.index * 150
      setTimeout(function () {
        Velocity(
          el,
          { opacity: 0 },
          { complete: done }
        )
      }, delay)
    }
  },
  components: {
    Performer
  },
  props: {
    bios: {
      type: Array,
      default: function () {
        return []
      }
    }
  }
}
</script>
