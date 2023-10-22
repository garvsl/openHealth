export PATH=$PATH:/usr/local/lib/nodejs/node-v18.18.0-linux-x64/bin/

cd /home/openhealth

export NEXT_PUBLIC_POD_IP=$POD_IP
echo $NEXT_PUBLIC_POD_IP
echo $POD_IP

npm run start