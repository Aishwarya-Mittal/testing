sudo mongod --master --dbpath data/db --port 27017
sudo mongod --slave --source localhost:27017 --port 27016
node Db.js
node super.js
