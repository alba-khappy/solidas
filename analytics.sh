echo 'start analytics'
value=$(cat ./seo.html)
escaped_value=$(printf '%s\n' "$value" | sed -e 's/[\/&]/\\&/g')
sed -i '' 's/<body>/<body>'"$escaped_value"'/g' ./dist/**/index.html
sed -i '' 's/<body>/<body>'"$escaped_value"'/g' ./dist/index.html
echo 'finish analytics'