mkdir ../TyeSite
cp deploy.sh https_certification.sh TyeSite ../TyeSite
cp -r tyesite2/build ../TyeSite
cp favicon.ico ../TyeSite/build
mv ../TyeSite/build ../TyeSite/tye
scp -i ../ChexyAIHost_key.pem -r ../TyeSite azureuser@52.138.36.161:~
rm -r ../TyeSite
ssh -i ../ChexyAIHost_key.pem azureuser@52.138.36.161

# then on server: cd TyeSite
# chmod +x deploy.sh http_certification.sh
# ./deploy.sh
# ./http_certification.sh
