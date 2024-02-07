import { Kafka } from 'kafkajs';

const kafka = new Kafka({
    clientId: "RiderApp",
    brokers: ["192.168.0.195:9092"]
});

export { kafka };
