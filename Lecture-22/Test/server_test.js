const {expect} = require('chai')
const {app} = require('../server')
const axois = require('axios')
// start the server to check it
let srv
before(()=>{
    srv = app.listen(4444)
})
const URL = 'http://localhost:4444'

describe('Group1',()=>{
    it('should be 25 for 0km,0min',(done)=>{
        axois.get(`${URL}/fare?km=0&min=0`)
            .then((response)=>{
                console.log(response.data.fare)
                expect(response.data.fare).to.equal(25)
                done()
            })
            .catch((err)=>{
                done(err)
            })
    })
    it('should be 33 for 3km,0min',(done)=>{
        axois.get(`${URL}/fare?km=3&min=0`)
            .then((response)=>{
                console.log(response.data.fare)
                expect(response.data.fare).to.equal(33)
                done()
            })
            .catch((err)=>{
                done(err)
            })
    })
    it('should be 38 for 3km,20min',(done)=>{
        axois.get(`${URL}/fare?km=3&min=20`)
            .then((response)=>{
                console.log(response.data.fare)
                expect(response.data.fare).to.equal(38)
                done()
            })
            .catch((err)=>{
                done(err)
            })
    })
})

after(()=>{
    srv.close()
})