#!/usr/bin/env node

var amqp = require('amqplib/callback_api');

/**
 * @return {number}
 * Возвращает случайное число
 */
function GetRandomNumber() {
    let low_boundary = 1, high_boundary = 10;
    let number = Math.random() * (high_boundary - low_boundary) + low_boundary;
    return Math.round(number);
}

/**
 * @return {number}
 * Возвращает случайное время
 */
function GetRandomTime() {
    let duration = 10000;
    let low_boundary = 2000;
    let time = Math.random() * duration + low_boundary;
    return Math.round(time);
}

function SendRandomNumber(number, ch, q) {
    let next_number = GetRandomNumber();
    let time = GetRandomTime();
    console.log(" [x] Send %f. Next sending will be after %f s", number, time / 1000);
    ch.sendToQueue(q, Buffer.from(number.toString()));
    setTimeout(SendRandomNumber, time, next_number, ch, q);
}

setTimeout(() => {
    amqp.connect('amqp://rabbit', function(err, conn) {
        conn.createChannel(function(err, ch) {
            var q = 'chanel 1';
            let number = GetRandomNumber();
            let time = GetRandomTime();

            ch.assertQueue(q, {durable: false});
            setTimeout(SendRandomNumber, time, number, ch, q);
        });
    });
}, 30000);  //30s - время до запуска, чтобы успел настроиться и запуститься rabbit
