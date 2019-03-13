<template>

  <div>
    <!-- NOTE: this shows up on 'home' -->

    <div v-if="bio">
      <div class="card hoverable">
        <div v-if="bio.fields['Headshot Image']" class="card-image">
          <img
          :src="bio.fields['Headshot Image'][0]['thumbnails'].large.url || `https://via.placeholder.com/128?text=GLx+Headshot`"
          :alt="`${ bio.fields['Performer']} performer headshot`"
          width="100%" />

          <span class="card-title"><span class="nameplate">{{ bio.fields['Performer'] }}</span></span>
        </div>
      </div>
    </div>

    <!-- end what shows up on 'home' -->

    <div v-else-if="performerSelected" class="container">


      <div id="facecard" class="row">

        <div class="col s12">
          <br />

          <div class="card">
            <div class="card-image hide-on-med-and-up valign-wrapper">
                <img v-if="show" :src="srcLarge" :srcSet="getImgSrcSet" :alt="`${performerName} performer headshot`">

            </div>

          </div>

        </div>


        <div class="col l7 push-l5 m10 s12 section-short-bio">
          <div class="card horizontal">
            <div class="card-image hide-on-small-only valign-wrapper">
              <img :src="srcLarge" :srcSet="getImgSrcSet" :alt="`${performerName} performer headshot`">
            </div>

            <div class="card-content ">
              <h2 class="black-text">
                {{ performerName }}
              </h2>
              <p class="hide-on-small-only">
                <strong class="orange-text">{{ administrativeAssignment }}</strong>
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
              <span class="card-title job-title">{{ ensembleStatus || administrativeAssignment }} at GLx</span>
            </div>
            <div class="card-content custom-card">
              <p class="let-us-indent">
                {{ longBio }}
              </p>
            </div>
            <div class="card-action">
              Link for
              <a href="#facecard">
                {{ performerName }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="performerSummary || error">
      <span class="hide">{{ performerSummary || error }}</span>
    </div>

  </div>

</template>

<script>
import PerformerService from '@/services/PerformerService'

export default {
  name: 'performer',
  props: {
    bio: {
      type: Object
    }
  },
  data () {
    return {
      show: true,

      performerData: '',
      performerSelected: false,
      performerName: '',
      administrativeAssignment: 'Ensemble Member',
      shortBio: '',
      longBio: '',
      ensembleStatus: '',

      // headshot defaults and more
      hasHeadshot: false,
      headshotPlaceholder: 'https://via.placeholder.com/128?text=GLx+Headshot',
      srcSmall: '',
      srcSmallWidth: '',
      srcMedium: '',
      srcMediumWidth: '',
      srcLarge: '',
      srcLargeWidth: '',

      error: null
    }
  },
  computed: {
    getImgSrcSet () {
      let srcSet = `${this.srcMedium} ${this.srcMediumWidth}w, ${this.srcLarge} ${this.srcLargeWidth}w`
      return this.hasHeadshot ? srcSet : this.headshotPlaceholder
    },
    performer () {
      return this.$route.params.performer
    },
    performerId () {
      return this.$route.params.id
    },
    performerSummary () {
      let allowedPictureSize = 10000
      let allowedPictureWidth = 1000


      if (this.performerData) {
        this.performerName = this.performerData.fields.Performer
        if ( this.performerData.fields['Admin Assignment'] ) {
          this.administrativeAssignment = this.performerData.fields['Admin Assignment'].reduce((a, v) => a + ' ' + v)
        }

        this.shortBio = this.performerData.fields['Short Bio']
        this.longBio = this.performerData.fields['Long Bio']
        this.ensembleStatus = this.performerData.fields['Ensemble Status']

        // use srcset in images to let computer decide resolution fit
        if (this.performerData.fields['Headshot Image'][0].size >= allowedPictureSize) {
          this.srcSmall = this.performerData.fields['Headshot Image'][0].thumbnails.small.url
          this.srcSmallWidth = this.performerData.fields['Headshot Image'][0].thumbnails.small.width
          this.srcMedium = this.performerData.fields['Headshot Image'][0].thumbnails.large.url
          this.srcMediumWidth = this.performerData.fields['Headshot Image'][0].thumbnails.large.width
          this.srcLarge = this.performerData.fields['Headshot Image'][0].url
          this.srcLargeWidth = allowedPictureWidth
          this.hasHeadshot = true
        }
        return this.performerData
      }

      return ''
    }
  },
  created () {
    this.$router.onReady(() => {
      if (this.$route.name !== 'Home') {
        this.getPerformerData()
      }
    })
  },
  methods: {
    async getPerformerData () {
      const res = await PerformerService.getPerformerById({ id: this.$route.params.id })
      this.performerData = res.data
      this.performerSelected = true
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
