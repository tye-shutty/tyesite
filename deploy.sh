cd ~/TyeSite
sudo apt install nginx
sudo cp ../Audio/Audio.service /etc/systemd/system/Audio.service
sudo systemctl start Audio
sudo systemctl restart Audio
sudo systemctl enable Audio
sudo cp TyeSite /etc/nginx/sites-available/TyeSite
sudo ln -s /etc/nginx/sites-available/TyeSite /etc/nginx/sites-enabled
# cd ../dist
# ./deploy_files.sh
sudo ln -s /home/azureuser/TyeSite/tye /var/www/html
# cd -
sudo systemctl daemon-reload
sudo systemctl restart nginx
sudo ufw allow 'Nginx Full'
sudo ufw allow 80
sudo ufw allow 443
