#!/usr/bin/env node

var amqp = require('amqplib/callback_api');

setTimeout(function () {
    amqp.connect('amqp://rabbit', function(err, conn) {
        conn.createChannel(function (err, ch) {
            var q = 'chanel 1';

            ch.assertQueue(q, {durable: false});
            console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q);
            ch.consume(q, function (msg) {
                console.log(" [x] Received number %s", msg.content.toString());
            }, {noAck: true});
        });
    });
}, 30000);  //30s - время до запуска, чтобы успел настроиться и запуститься rabbit
