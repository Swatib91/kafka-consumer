import { kafka } from './kafkaClient.js';

import connectDB from "./db/mongoClient.js";  
import RiderModel  from './db/riderModel.js';
connectDB();
var init = async () => {
    const consumer = kafka.consumer({ groupId: 'rider-1' });
    console.log("Connecting consumer .... ");
    await consumer.connect(); 
    console.log("consumer Connected !");
    // subscribe topic
    await consumer.subscribe({ topics: ['rider-update'], fromBeginning: true });
    await consumer.run({
        eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
            console.log(`${topic} :::::::: ${partition}`);
            console.log({
                key: message.key.toString(),
                value: JSON.parse(message.value),
                headers: message.headers,
            });
            // Insert into db
            const riderModel = new RiderModel({...JSON.parse(message.value)});
            const result =  await riderModel.save();
            console.log("Mongo db result  ===== ", result);
        },
    })
};

init();