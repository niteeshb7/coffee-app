import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";
import { marshall } from "@aws-sdk/util-dynamodb";
import { createNewOrderNumber } from './utils.js';
const dynamoDb = new DynamoDBClient({ region: "eu-west-2" });

export async function handler (newOrderEvent) {
    console.log('Received new order event:', newOrderEvent);

    const newOrderPayload = {
        orderId: createNewOrderNumber(),
        orderedItems: newOrderEvent.orderedItems,
        customerFullName: newOrderEvent.customerFullName,
        customerEmail : newOrderEvent.customerEmail,
        status: 'Accepted'
    };

    const dbResp = await dynamoDb.send(new PutItemCommand({TableName: "customer_orders", Item: marshall(newOrderPayload)}));
    console.log('Saved order response : ');
    return newOrderPayload;
};