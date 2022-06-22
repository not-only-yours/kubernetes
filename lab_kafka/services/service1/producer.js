import { KafkaClient, kafkaTopic } from "./kafka-config.js";





export const sendMessageToQueue = async (message) => {



const admin = KafkaClient.admin()

await admin.connect()


await admin.createTopics({
    topics: [{ topic: 'name', replicationFactor: 1 }
]
})

await admin.disconnect()


  const producer = KafkaClient.producer();
  await producer.connect();
  console.info('Sending Message: ', message);
  await producer.send({
    allowAutoTopicCreation: false,
    topic: kafkaTopic,
    messages: [
      {
        value: message // Your message data goes here
      }
    ]
  });
  // Disconnect producer once message sending is done.
  await producer.disconnect();
};

