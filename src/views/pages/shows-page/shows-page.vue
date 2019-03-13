<template>
  <div>
    <!-- add loading bar -->
    <div v-if="loading" class="loading-container container">
      <div class="progress show-on-sm pbar purple">
        <div class="indeterminate teal accent-3" />
      </div>
    </div>

    <!-- add error notify -->
    <div v-else-if="error" class="error">
      <a href="#" class="btn red etoast">{{ error }}</a>
    </div>

    <!-- other show app contents -->
    <div v-else>
      <!-- app modules -->
      <div class="section cast-section">
        <!-- NOTE: we might want to keep this list, and axios for pulling singular performer -->
        <cast-roster :bios="bios" />
      </div>

      <div class="section section-subscribe">
        <mailchimp />
      </div>
    </div>
  </div>
</template>

<script>
import CastRoster from '@/views/components/cast-roster'
import Mailchimp from '@/views/components/mailchimp'
import Airtable from 'airtable'
import { airtableConfig } from '@/services/config.js'

export default {
  name: 'shows-page',
  components: {
    CastRoster,
    Mailchimp
  },
  data () {
    return {
      loading: false,
      error: null,
      airtable: {
        apiKey: null,
        readOnlyApiKey: null || airtableConfig.readonlyKey
      },
      bios: [],
      biosPerformerId: ''
    }
  },
  created () {
    this.airtable.apiKey = this.findAirtableApiKey();
    if (this.airtable.apiKey) {
      let apiKey = this.airtable.apiKey
      this.biosApi = new Airtable({ apiKey }).base(airtableConfig.workspaceBios)
      this.showsApi = new Airtable({ apiKey }).base(airtableConfig.workspaceGigs)
      // bios
      if (!this.biosPerformerId) {
        this.getBiosTables();
      }
      else {
        this.selectPerformer(this.biosPerformerId);
      }
    }
  },
  methods: {
    getBiosTables: function () {
      this.loading = true
      this.error = null

      // call to the api
      this.biosApi.table('Bios').select({
        maxRecords: 55,
        view: 'Splash Only'
      }).firstPage().then(res => {
        // provide a biosTableId now
        this.bios = res
      }).catch(err => {
        this.error = err.toString()
      }).finally(() => {
        this.loading = false;
        // this.biosPerformerId = this.biosPerformerId !== '' ? this.biosPerformerId : "recrr5inRysIqgvQL" // Director hard-code, ufn
      })
    },
    findAirtableApiKey () {
      let apiKey = this.airtable.readOnlyApiKey;
      return apiKey
    }
  }
}
</script>
