// Using KafkaJs nodejs library
import { Kafka } from 'kafkajs';

// kafka broker running on localhost:9000 default port
const kafkaBroker = 'kafka-service:9092';

// kafka topic used for queue messages
export const kafkaTopic = 'name';

// kafka stream groupId : It will be created automatically
export const kafkaGroupId = 'message-queue-group';

// kafka client with basic config
export const KafkaClient = new Kafka({
  brokers: ['kafka-service:9092','kafka-service:9000']
});

