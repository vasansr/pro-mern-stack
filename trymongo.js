'use strict';
const MongoClient = require('mongodb');

function testWithCallbacks() {
  MongoClient.connect('mongodb://localhost/playground', function(err, db) {
    db.collection('employees').insert({id: 1, name: 'A. Callback'}, function(err, result) {
      console.log("Result of insert:", result);
      db.collection('employees').find({id: 1}).toArray(function(err, docs) {
        console.log('Result of find:', docs);
        db.close();
      });
    });
  });
}

function testWithPromises() {
  let db;
  MongoClient.connect('mongodb://localhost/playground').then(connection => {
    db = connection;
    return db.collection('employees').insert({id: 1, name: 'B. Promises'});

  }).then(result => {
    console.log("Result of insert:", result);
    return db.collection('employees').find({id: 1}).toArray();

  }).then(docs => {
    console.log('Result of find:', docs);
    db.close();

  }).catch(err => {
    console.log('ERROR', err);
  });
}

function testWithGenerator() {
  const co = require('co');
  co(function*() {
    const db = yield MongoClient.connect('mongodb://localhost/playground');

    const result = yield db.collection('employees').insert({id: 1, name: 'C. Generator'});
    console.log('Result of insert:', result);

    const docs = yield db.collection('employees').find({id: 1}).toArray();
    console.log('Result of find:', docs);

    db.close();
  }).catch(err => {
    console.log('ERROR', err);
  });
}

function testWithAsync() {
  const async = require('async');
  let db;
  async.waterfall([
    next => {
      MongoClient.connect('mongodb://localhost/playground', next);
    },
    (connection, next) => {
      db = connection;
      db.collection('employees').insert({id: 1, name: 'D. Async'}, next);
    },
    (insertResult, next) => {
      console.log('Insert result:', insertResult);
      db.collection('employees').find({id: 1}).toArray(next);
    },
    (docs, next) => {
      console.log('Result of find:', docs);
      db.close();
      next(null, 'All done');
    }
  ], (err, result) => {
    if (err)
      console.log('ERROR', err);
    else
      console.log(result);
  });
}

function usage() {
  console.log('Usage:');
  console.log('node', __filename, '<option>');
  console.log('Where option is one of:');
  console.log('  callbacks   Use the callbacks paradigm');
  console.log('  promises    Use the Promises paradigm');
  console.log('  generator   Use the Generator paradigm');
  console.log('  async       Use the async module');
}

if (process.argv.length < 3) {
  console.log("Incorrect number of arguments");
  usage();
} else {
  if (process.argv[2] === 'callbacks') {
    testWithCallbacks();
  } else if (process.argv[2] === 'promises') {
    testWithPromises();
  } else if (process.argv[2] === 'generator') {
    testWithGenerator();
  } else if (process.argv[2] === 'async') {
    testWithAsync();
  } else {
    console.log("Invalid option:", process.argv[2]);
    usage();
  }
}
