cd dist

git init
git checkout -b main
git add -A
git coimmit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:ezestom/resume.git main:gh-pages