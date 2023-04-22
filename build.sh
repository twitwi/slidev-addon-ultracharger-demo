#!/bin/bash

set -e

alert() {
    echo "#### $@"
}

repo=$(git remote get-url origin | sed -e 's@.*/@@g' -e 's@\.git$@@g')
git branch --show-current | grep main
git diff HEAD > ",,save-diff-$(date --iso-8601=seconds)"


rm -rf dist/
slidev build --base=/"$repo"/
git switch gh-pages
{
    git ls-files | grep -ve '^\.gitignore$' | xargs git rm
    cp -rf dist/* .
    git add .
    git commit -m "Scripted build for gh-pages on $(date --iso-8601=seconds)"
    git push
    git switch main
} || {
    alert "NB: Cannot commit and push... switching back to main"
    git switch main
}
alert ALL OK

