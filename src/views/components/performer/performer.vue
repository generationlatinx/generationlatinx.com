<template>
  <div>
    <div v-if="bio">
      <!-- wrapping click/touch-function -->
      <div  class="card hoverable">
        <div v-if="bio.fields['Headshot Image']" class="card-image">
          <img  :src="bio.fields['Headshot Image'][0]['thumbnails'].large.url || `https://via.placeholder.com/128?text=GLx+Headshot`"
          alt=""
          width="100%" />
          <span class="card-title"><span class="nameplate">{{bio.fields['Performer']}}</span></span>
        </div>
      </div>
    </div>

    <div  v-else-if="playStatus" class="container ">
      <!-- FACECARD -->
      <div id="facecard" class="row">
        <!-- <div class="col s12 m6 section-short-bio"> -->
          <!-- This div is 7-columns wide on pushed to the right by 5-columns.           -->
        <div class="col l7 push-l5 m10 s12 section-short-bio">
          <div class="card horizontal">
            <div class="card-image hide-on-small-only">
              <img :src="headshot" alt="performer headshot">
            </div>
            <div class="card-content ">
              <h2 class="black-text">{{fullName}}</h2>
              <!-- GIVE instead a SHORT BIO ON MOBILE USERS ON-THE-GO -->
              <p class="hide-on-small-only"><em>{{adminAssignment}}</em></p>
              <p class="show-on-small-only"><em>{{shortBio}}</em></p>
            </div>
          </div>
        </div>



          <!-- BIO-TEXT CARD  -->
          <!-- 5-columns wide pulled to the left by 7-columns.           -->
        <!-- <div class="col s12 m6 section-long-bio">           -->
        <div class="col l5 pull-l7 m12 s12 section-long-bio">
          <div class="card">
            <div class="card-image">
              <img src="@/images/glx_bg_y.jpg" alt="background design in yellow">
              <span class="card-title job-title">{{ adminAssignment || (playStatus !== "Assigned" ? playStatus : "GLx Contributor") }}</span>
            </div>
            <div class="card-content custom-card">
              <p class="let-us-indent">{{longBio}}</p>
            </div>
            <div class="card-action">
              Link for <a href="#facecard">{{fullName}}</a>
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
  name: "performer",
  data() {
    return {
      performer: this.$route.params.performer || null,
      performerId: this.$route.params.id,
      playStatus: '',
      longBio: '',
      shortBio: '',
      headshot: 'https://via.placeholder.com/128?text=GLx+Headshot',
      adminAssignment: '',
      fullName: '',
    }
  },
  mounted () {

    // console.log(4, this.$router.currentRoute)
    if (this.performer !== null) {
      this.getPerformerDetails(this.performerId)
      // console.log(2, `We were mounted first with ${this.performerId}`)
    } else {
      if (this.$route.params.id) {
        this.getPerformerDetails(this.performerId)

      }

    }



  },

  methods: {
    hardRightOfList(airlist) {

      // return airResource.length() > 0 ?  : ''
      let airResource = airlist
      switch (airResource) {
        case airResource === undefined:
          console.log( 'empty airtable cell')
          return ''
          break;
        case airResource === '':
          console.log('something in here, here being #{airResource}')
          // NOTE: May need to update these conditions in future?, or just have consumed by Vuex
          return airResource.find(e => e)
        default:
          return ''
      }
    },



    async getPerformerDetails (params) {
      const response = await PerformerService.getPerformerDetails(params)
      let data = response.data.fields
      let adminAssignment = this.hardRightOfList(data["Admin Assignment"])

      // console.log(3, response.data)
      this.fullName = data["Performer"]
      // console.log(5, this.fullName)
      this.playStatus = data["Play Status"]
      this.longBio = data["Long Bio"]
      this.shortBio = data["Short Bio"]
      this.headshot = data["Headshot Image"][0].thumbnails.large.url
      this.adminAssignment = adminAssignment

      // console.log(4, this.playStatus, " <- PlayStatus")
    }
  },
  props: {
    bio: Object
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
