theServer=df-prod
theFolder=/var/www/html/homepage/

echo "will deploy to folder"$theFolder

echo "start building"
# npm run build

echo "start rsync file"
rsync -azPv --delete --progress ./dist/ $theServer:$theFolder

echo "deploy to ${theFolder} finished"
