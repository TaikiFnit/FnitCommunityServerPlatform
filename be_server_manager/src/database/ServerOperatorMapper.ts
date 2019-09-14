import ServerOperatorGateway from '../domain/ServerOperatorGateway';
import DB from './FnitCommunityDatabase';
import Player from '../entities/Player';
import DiscordAuthor from '../entities/DiscordAuthor';
import ReceiptModel from "../model/ReceiptModel";
import ReceiptModelMapper from "./ReceiptModelMapper";
import DiscordAuthorModel from "../model/DiscordAuthorModel";
import PlayerModel from "../model/PlayerModel";

export default class ServerOperatorMapper implements ServerOperatorGateway {
    async inquiryReceipt(receiptNumber: string): Promise<ReceiptModel> {
        const snapshot = await DB.collection('receipts').where('number', '==', receiptNumber).get();

        if (!snapshot.empty) {
            const doc = snapshot.docs[0];
            const receipt = doc.data();
            return new ReceiptModel(receipt, new ReceiptModelMapper());
        }

        throw new Error('Receipt Not Found');
    }

    async registerDiscordAccount(discordAccount: DiscordAuthor, playerUid: string): Promise<DiscordAuthor> {
        const newDocRef = DB.collection('discord_accounts').doc(playerUid);

        await newDocRef.set({...discordAccount, uid: playerUid});
        const doc = await newDocRef.get();

        if (doc.exists) {
            return new DiscordAuthorModel(doc.data());
        }

        throw new Error('Cannot create discord author');
    }

    async fetchPlayerById(uid: string): Promise<Player> {
        const doc = await DB.collection('players').doc(uid).get();

        if (!doc.exists) {
            throw new Error('User Not Found');
        }

        return new PlayerModel(doc.data());
    }

    async fetchPlayerByName(name: string): Promise<Player> {
        const snapshot = await DB.collection('players').where('name', '==', name).get();

        if (!snapshot.empty) {
            const doc = snapshot.docs[0];
            return new PlayerModel(doc.data());
        }

        throw new Error('User Not Found');
    }

    async saveWhitelistTransaction(type: 'add' | 'remove', target: Player, executer: DiscordAuthor): Promise<boolean> {
        const newDocRef = await DB.collection('whitelist_transactions').add({
            type,
            target_uid: target.uid,
            target_name: target.name,
            executer_uid: executer.uid,
            executer_name: executer.username,
            created_at: new Date()
        });

        const doc = await newDocRef.get();
        return doc.exists;
    }
}
