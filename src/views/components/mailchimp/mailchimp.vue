<template>
  <div class="container-subscribe-box section">
    <div id="mailchimp" class="section-title-group">


      <div class="columns-3 row">

        <!-- hidden trickery -->
        <div class="col s12 l3 hide-on-large-only ">
          <div class="card-content section-subscribe">
            <div class="section-subheading center white-text subscribe-text">
              <br/>
              <br/>
              <br/>
              <div class="card-content grey-text center-align">
                Subscribe with your email address <i class="fab fa-mailchimp fa-1x"></i>
              </div>
            </div>
            <br />
            <br/>

          </div>
        </div>




        <div class="col s12 l9">
          <div class="form-wrapper squeezed">
            <!-- Begin MailChimp Signup Form -->
            <div id="mc_embed_signup">
              <form action="https://generationlatinx.us18.list-manage.com/subscribe/post?u=bbccdb0e0d28f68948b286134&id=681d6d9097" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                <div id="mc_embed_signup_scroll">
                  <label class="acc-adjust-1" for="mce-EMAIL">Subscribe to our mailing list</label>
                  <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
                  <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                  <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_bbccdb0e0d28f68948b286134_681d6d9097" tabindex="-1" value=""></div>
                  <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
                </div>
              </form>
            </div>
            <!--End mc_embed_signup-->
          </div>
        </div>



        <div class="col s12 l3 hide-on-med-and-down">
          <div class="card-content section-subscribe">
            <div class="section-subheading center white-text subscribe-text">
              <br/>
              <br/>
              <br/>
              <div class="card-content grey-text left-align">
                Subscribe with your email address <i class="fab fa-mailchimp fa-1x"></i>
              </div>
            </div>
            <br />
          </div>
        </div>

      </div>


    </div>




  </div>

</template>

<script>
export default {
  name: 'mailchimp'
}
</script>

<style lang="css">
</style>
