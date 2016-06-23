var config = require("./config"),
    mongoose = require("mongoose");

var options = {
  db: { 
    native_parser: true 
  },
  server: { 
    poolSize: 200,
    auto_reconnect: true,    
    strategy: 'ping',
    socketOptions: {
        connectTimeoutMS: 1000,
        keepAlive: 10,        
        socketTimeoutMS: 0
    }
  },
  replSet: {
     // readPreference: 'nearest',
     readPreference: 'nearest',
      rs_name: 'ReplicaSet',
      socketOptions:  {keepAlive: 10},
      strategy: 'ping',
      //readPreference: 'nearest',
      poolSize: 100,
      w:0,
      slaveOk: true
    
  },
  mongos: {}
  
  //replset: { rs_name: 'myReplicaSetName' },
  //user: 'myUserName',
  //pass: 'myPassword'
};

var connectionString = process.env.DEBUG === "true" ?
    config.debug.database.connectionString :
    config.database.connectionString;

mongoose.connect(connectionString,options);

mongoose.connection.on("connected", function() {
    console.log("Connected to " + connectionString);
});

mongoose.connection.on("error", function(error) {
    console.log("Connection to " + connectionString + " failed:" + error);
});

mongoose.connection.on("disconnected", function() {
    console.log("Disconnected from " + connectionString);
});

mongoose.connection.on("disconnect", function() {
    console.log("Disconnected from " + connectionString);
});

mongoose.connection.on("close", function() {
    console.log("Closed from " + connectionString);
});

mongoose.connection.on("parseError", function() {
    console.log("parseError from " + connectionString);
});

mongoose.connection.on("timeout", function() {
    console.log("Timeout from " + connectionString);
});

process.on("SIGINT", function() {
    mongoose.connection.close(function() {
        console.log("Disconnected from " + connectionString + " through app termination");
        process.exit(0);
    });
});