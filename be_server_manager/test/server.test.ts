import app from '../src/server';
import request = require('supertest');

describe('POST /server_log (coonected)', () => {
    it('connected log', (done) => {
        const connected = '[2019-09-17 14:09:45 INFO] Player connected: kotlin1997, xuid: 2535473624588400';
        return request(app).post('/server_log').send({ line: connected }).expect({playerName: 'kotlin1997', xuid: '2535473624588400'}, done)
    });

    it('disconnected log', (done) => {
        const disconnected = '[2019-09-17 14:10:51 INFO] Player disconnected: kotlin1997, xuid: 2535473624588400';
        return request(app).post('/server_log').send({line: disconnected}).expect({playerName: 'kotlin1997', xuid: '2535473624588400'}, done);
    });
});
