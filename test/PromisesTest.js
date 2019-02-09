var chai = require('chai')
var expect = chai.expect;
var assert = chai.assert;
var should = chai.should();
var PromisesEx = require('../PromisesEx')
describe('Lets Test Promises',() => {
    it('Simple Promise Test', (done) =>{
        PromisesEx.getUsers().then((response) => {
            expect(response).to.equal('RAKESH')}
            ).then(()=> done())
    })
})