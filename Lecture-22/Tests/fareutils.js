const {expect} = require('chai')
const {calculateFare} = require('../fare_logic')
describe('group1',()=>{
    it('should be a number',()=>{
        expect(23).to.be.a('number')
    })
    it('should be a string',()=>{
        expect('name').to.be.a('string')
    })
})

describe('fare test group',()=>{
    it('should be 25 for 0km,0min',()=>{
        let fare = calculateFare(0,0)
        expect(fare).to.be.a('number')
        expect(fare).to.equal(25)
    })
    it('should be 33 for 3km,0min',()=>{
        let fare = calculateFare(3,0)
        expect(fare).to.be.a('number')
        expect(fare).to.equal(33)
    })
    it('should be 38 for 3km,20min',()=>{
        let fare = calculateFare(3,20)
        expect(fare).to.be.a('number')
        expect(fare).to.equal(38)
    })
})