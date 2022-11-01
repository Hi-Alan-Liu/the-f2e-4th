set -e
npm run build
cd dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:Hi-Alan-Liu/the-f2e-4th.git master:gh-pages
cd -