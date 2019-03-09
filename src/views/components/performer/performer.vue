<template>
  <div>
    <!-- NOTE: this shows up on 'home' -->

    <div v-if="bio">
      <div class="card hoverable">
        <div v-if="bio.fields['Headshot Image']" class="card-image">
          <img
          :src="bio.fields['Headshot Image'][0]['thumbnails'].large.url || `https://via.placeholder.com/128?text=GLx+Headshot`"
          :alt="performerName"
          width="100%" />

          <span class="card-title"><span class="nameplate">{{ bio.fields['Performer'] }}</span></span>
        </div>
      </div>
    </div>

    <!-- end what shows up on 'home' -->

    <div v-else-if="performerSelected" class="container">
      <div id="facecard" class="row">
        <div class="col l7 push-l5 m10 s12 section-short-bio">
          <div class="card horizontal">
            <div class="card-image hide-on-small-only valign-wrapper">
              <img :src="headshot" alt="performer headshot">
            </div>
            <!-- <div class="card-image show-on-large-only">
              <img :src="headshot" alt="performer headshot">
            </div> -->

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
              <span class="card-title job-title">{{ administrativeAssignment || ( featureStatus ? featureStatus : "" ) }}</span>
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

    <!-- HACK:YAY BREAD -->
    <nav>
      <div class="nav-wrapper">
        <div class="col s12">
          <a href="#!" class="breadcrumb blue-text">{{ performerSummary || error }}</a>
        </div>
      </div>
    </nav>

  </div>
</template>

<script>
import PerformerService from '@/services/PerformerService'

export default {
  name: 'performer',
  props: {
    bio: {
      type: Object
    },
  },

  data () {
    return {
      performerData: '',  // v-model is SOT
      performerSelected: false,
      performerName: '',
      administrativeAssignment: '',
      shortBio: '',
      longBio: '',
      featureStatus: '',

      headshot: 'https://via.placeholder.com/128?text=GLx+Headshot',
      error: null,

    }
  },
  computed: {
    performer () {
      return this.$route.params.performer
    },
    performerId () {
      return this.$route.params.id
    },
    performerSummary () {
      if (this.performerData) {
        this.performerName = this.performerData.fields["Performer"]
        this.administrativeAssignment = this.performerData.fields["Admin Assignment"].reduce((a,v) => a + ' ' + v)
        this.shortBio = this.performerData.fields["Short Bio"]
        this.longBio = this.performerData.fields["Long Bio"]
        this.featureStatus = this.performerData.fields["Feature Status"]
        // console.log(1,this.administrativeAssignment)
        return this.performerData
      }

      return ''
    },
  },

  created() {
    // console.log(1, this.$route.params)
    // console.log(4, this.$route.name)

    this.$router.onReady(() => {
      if (this.$route.name !== "Home") {
        this.getPerformerData()
      }
    }
    )
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
