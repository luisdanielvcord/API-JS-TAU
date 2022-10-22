const express = require('express');
const request = require('supertest');
const expect = require('chai').expect;

const app = express();

app.get('/first', (err, res) => {
    res.status(200).json({ "ok": "response" });
})

describe("First test", () => {
    it("OK response", () => {
        request(app)
            .get('/first')
            .end((err, res) => {
                expect(res.statusCode).to.be.equal(200);
            })
    })

    it('Mocky OK response', (done) => {
        request('https://run.mocky.io')
            .get('/v3/d6058ca9-526a-407e-9119-da93fee6e59a')
            .expect(200, done);
    })

})
