<template>
  <div>


  <div v-if="bio">
    <!-- wrapping click/touch-function -->
    <div  class="card hoverable">
      <div v-if="bio.fields['Headshot Image'][0]['thumbnails'].large || '' " class="card-image">
        <img  :src="bio.fields['Headshot Image'][0]['thumbnails'].large.url || `https://via.placeholder.com/128?text=GLx+Headshot`"
        alt=""
        width="100%" />
        <span class="card-title"><span class="nameplate">{{bio.fields['Performer']}}</span></span>
      </div>
    </div>
  </div>


<div  v-else-if="playStatus" class="container ">


  <div class="row">


    <div class="col s12 m6 section-short-bio">
      <div class="card horizontal">
        <div class="card-image">
          <img :src="headshot" alt="performer headshot">

        </div>
        <div class="card-content ">
          <h2 class="black-text">{{fullName}}</h2>
          <p><em>{{shortBio || adminAssignment}}</em></p>
        </div>
        <!-- <div class="card-action">
          <a href="#">This is a link w meta pics</a>
        </div> -->
      </div>
    </div>



    <div class="col s12 m6 section-long-bio">
      <div class="card">
        <div class="card-image">
          <img src="@/images/glx_bg_y.jpg" alt="background design in yellow">
          <span class="card-title job-title">{{ adminAssignment || (playStatus !== "Assigned" ? playStatus : "GLx Contributor") }}</span>

        </div>
        <div class="card-content custom-card">
          <p class="let-us-indent">{{longBio}}</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link w meta pics</a>
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


    if (this.performer !== null) {
      this.getPerformerDetails(this.performerId)
      console.log(2, `We were mounted first with ${this.performerId}`)
    }


  },

  methods: {
    async getPerformerDetails (params) {
      const response = await PerformerService.getPerformerDetails(params)
      let data = response.data.fields
      console.log(3, response.data)
      this.fullName = data["Performer"]
      console.log(5, this.fullName)
      this.playStatus = data["Play Status"]
      this.longBio = data["Long Bio"]
      this.shortBio = data["Short Bio"]
      this.headshot = data["Headshot Image"][0].thumbnails.large.url
      this.adminAssignment = data["Admin Assignment"][0]

      console.log(4, this.playStatus, " <- PlayStatus")
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
