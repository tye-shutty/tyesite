#can be run with printf '1\n2\n' | ./https_certification.sh after the first time
sudo add-apt-repository ppa:certbot/certbot
sudo apt install python-certbot-nginx
sudo certbot --nginx -d tyeshutty.tk
