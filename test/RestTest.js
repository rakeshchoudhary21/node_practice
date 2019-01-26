var chai = require('chai')
var expect = chai.expect;
var assert = chai.assert;
var should = chai.should();
var fetch = require('node-fetch')

describe('Lets Test REST',() => {
    it('Rest get test Student API', (done) =>{
        var result = fetch('http://localhost:3000/students').then(res => res.json());

        result.then(body => {
            console.log(body)
            done()
        });
       
       
        
    })
})