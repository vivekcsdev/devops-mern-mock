const request = require('supertest');
const { server, app } = require('../index'); // import from index.js
const mongoose = require('mongoose')

//write test cases
describe('GET api/tasks', () => {
    //status code return 200
    it('it should return 200 ok', async () => { // it should return 200 ok - test case name
        const res = await request(app).get('/api/tasks') // get the data when i request api
        expect(res.statusCode).toBe(200); // same as if condition if(res.statusCode === 200)

    })

    //suppose response return array
    it('it should return array ok', async () => { // it should return array ok - test case name
        const res = await request(app).get('/api/tasks') // get the response data when i request api
        expect(Array.isArray(res.body)).toBe(true); // check if response data is array or not. like if(Array.isArray(responsedata)){}
        console.log(res.body,'DATA SEEDED');
    })

    //suppose response return object like res.json({message:'Data received',tasks});.
    // it('it should return object and object contain tasks propery ok', async () => { // it should return array ok - test case name
    //     const res = await request(app).get('/api/tasks') // get the response data when i request api
    //     expect(typeof res.body).toBe('object');  //check if response data is object or not
    //     //check object contain tasks property
    //     expect(res.body).toHaveProperty('tasks');
    // })
})

//stop the server and mongo
afterAll(async () => {
    await mongoose.connection.close();
    await server.close();
})