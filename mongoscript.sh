#[mongodb-org-3.2]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/3.2/x86_64/
gpgcheck=0
enabled=1

sudo yum install -y mongodb-org-3.2.1 mongodb-org-server-3.2.1 mongodb-org-shell-3.2.1 mongodb-org-mongos-3.2.1 mongodb-org-tools-3.2.1