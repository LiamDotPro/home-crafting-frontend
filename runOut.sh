#!/usr/bin/env bash
cd ~/home-crafting-frontend/ && yarn run build &&
cd /var/www/my-website && rm -r * && echo "Belkinlr93." | sudo -S cp -a ~/home-crafting-frontend/dist/. ./ &&
sudo restorecon -r /var/www/my-website