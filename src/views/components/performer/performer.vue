<template>
  <div>
    <div v-if="bio">
      <div class="card hoverable">
        <div v-if="bio.fields['Headshot Image']" class="card-image">
          <img
          :src="bio.fields['Headshot Image'][0]['thumbnails'].large.url || `https://via.placeholder.com/128?text=GLx+Headshot`"
          :alt="`Performer headshot for ${bio.fields['Performer']}`"
          width="100%" />

          <span class="card-title"><span class="nameplate">{{ bio.fields['Performer'] }}</span></span>
        </div>
      </div>
    </div>

    <div v-else-if="playStatus" class="container">
      <div id="facecard" class="row">
        <div class="col l7 push-l5 m10 s12 section-short-bio">
          <div class="card horizontal">
            <div class="card-image hide-on-small-only">
              <img :src="headshot" alt="performer headshot">
            </div>
            <div class="card-content ">
              <h2 class="black-text">
                {{ fullName }}
              </h2>
              <p class="hide-on-small-only">
                <em>{{ adminAssignment }}</em>
              </p>
              <p class="show-on-small-only">
                <em>{{ shortBio }}</em>
              </p>
            </div>
          </div>
        </div>

        <div class="col l5 pull-l7 m12 s12 section-long-bio">
          <div class="card">
            <div class="card-image">
              <img src="@/images/glx_bg_y.jpg" alt="background design in yellow">
              <span class="card-title job-title">{{ adminAssignment || (playStatus !== "Assigned" ? playStatus : "GLx Contributor") }}</span>
            </div>
            <div class="card-content custom-card">
              <p class="let-us-indent">
                {{ longBio }}
              </p>
            </div>
            <div class="card-action">
              Link for
              <a href="#facecard">
                {{ fullName }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PerformerService from '@/services/PerformerService'

export default {
  name: 'performer',
  props: {
    bio: {
      type: Object,
      default: function () {
        return Object.assign({})
      }
    }
  },

  data () {
    return {
      performer: this.$route.params.performer || null,
      performerId: this.$route.params.id,
      playStatus: '',
      longBio: '',
      shortBio: '',
      headshot: 'https://via.placeholder.com/128?text=GLx+Headshot',
      adminAssignment: '',
      fullName: ''
    }
  },
  mounted () {
    if (this.performer !== null) {
      this.getPerformerDetails(this.performerId)

    }
    else {
      if (this.$route.params.id) {
        this.getPerformerDetails(this.performerId)
      }
    }
  },
  methods: {
    hardRightOfList (airlist) {
      let airResource = airlist
      switch (airResource) {
        case airResource === undefined:
          return ''
        case airResource === '':
          return airResource.find(e => e)
        default:
          return ''
      }
    },

    async getPerformerDetails (params) {
      const response = await PerformerService.getPerformerDetails(params)
      let data = response.data.fields
      let adminAssignment = this.hardRightOfList(data['Admin Assignment'])
      // this.fullName = data.get('Performer') TODO: try get
      this.fullName = data.Performer
      this.playStatus = data['Play Status']
      this.longBio = data['Long Bio']
      this.shortBio = data['Short Bio']
      this.headshot = data['Headshot Image'][0].thumbnails.large.url
      this.adminAssignment = adminAssignment
    }
  }
}
</script>

<style>
.custom-card {
  background-color: #FCBE31;
}
.let-us-indent {
  text-indent: 1em;
}

.job-title {
  background-color: rgba(0, 0, 0, 0.5);
  padding: 15px 5px;
}

span.card-title.job-title,
p.let-us-indent,
span.nameplate,
em
{
  font-family: 'Roboto Condensed', 'Helvetica Neue', Helvetica, sans-serif
}

</style>
