<template>
  <div class="container">
    <div class="row">
      <div class="s12">
        <transition-group
        name="staggered-fade"
        tag="div"
        @css="false"
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave"
        appear>
        <div v-for="(bio, index) in bios" :data-index="index" :key="index + '_' + bio.id">
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
import Velocity from 'velocity-animate'

export default {
  name: 'cast-roster',
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
  },
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
  }
}
</script>
