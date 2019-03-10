<template>
  <div class="container">
    <div class="row">
      <div class="s12">
        <transition-group name="list" tag="div" appear>
          <div v-for="(bio, index) in bios" :key="index + '_' + bio.id">
            <router-link
            class="link"
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
