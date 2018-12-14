
#!/bin/bash
wget https://cli-assets.heroku.com/branches/stable/heroku-linux-amd64.tar.gz
sudo mkdir -p /usr/local/lib /usr/local/bin
sudo tar -xvzf heroku-linux-amd64.tar.gz -C /usr/local/lib
sudo ln -s /usr/local/lib/heroku/bin/heroku /usr/local/bin/heroku

cat > ~/.netrc << EOF
machine api.heroku.com
  login $HEROKU_LOGIN
  password $HEROKU_API_KEY
EOF

cat >> ~/.ssh/config << EOF
VerifyHostKeyDNS yes
StrictHostKeyChecking no
EOF

## setup buildpack order manually (if necessary)
# heroku buildpacks:set heroku/nodejs
# heroku buildpacks:add heroku/ruby

# Might have to set the manually via heroku cli
cat >> ~/.env << EOF
POI_APP_READONLY_KEY=$POI_APP_READONLY_KEY
POI_APP_WORKSPACE_BIOS=$POI_APP_WORKSPACE_BIOS
POI_APP_WORKSPACE_GIGS=$POI_APP_WORKSPACE_GIGS
EOF


# Add heroku.com to the list of known hosts
ssh-keyscan -H heroku.com >> ~/.ssh/known_hosts
