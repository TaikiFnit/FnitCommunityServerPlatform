import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin'

admin.initializeApp(functions.config().firebase);

let db = admin.firestore();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const publishReceiptNumber = functions.https.onRequest(async (request, response) => {
    response.send(await generateUniqueReceiptNumber());
});

async function generateUniqueReceiptNumber(): Promise<string> {
    const number: string = generate4DigitsStringNumber();

    const is_duplicated: boolean = await is_number_duplicated(number);

    if(!is_duplicated) {
        return number;
    }

    return (await generateUniqueReceiptNumber());
}

function generate4DigitsStringNumber(): string {
    const number = getRandomInt(9999);
    return `000${number}`.slice(-4);
}

function getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
}

async function is_number_duplicated(number: string): Promise<boolean> {
    let receiptRef = db.collection('receipts');
    const snapshot = await receiptRef.where('number', '==', number).get();

    return !snapshot.empty;
}
