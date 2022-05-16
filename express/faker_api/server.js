import { faker } from '@faker-js/faker';
const express = require("express");
const app = express();
const port = 8000;

// we can create a function to return a random / fake "Product"
const createUser = () => {
    const newFake = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.imei(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        
    };
    return newFakeUser;
};
    
const newFakeUser = createUser();
console.log(newFakeUser);

const createCompany = () => {
    const newFakeCompany = {
        _id: faker.finance.pin(),
        name: faker.company.companyName(),
        address: faker.address.streetAddress() + ' ' + faker.address.city() + ', ' + faker.address.state() + ' ' + faker.address.zipCode() + ' ' + faker.address.country()

    };
    return newFakeCompany;
};
    
const newFakeCompany = createCompany();
console.log(newFakeCompany);


//request and response

app.get("/api/users/new", (req,res) => {

    res.json({message:"New User: " + createUser});
})

app.get("/api/companies/new", (req,res) => {

    res.json({message:"New User: " + createCompany});
})
app.get("/api/user/company", (req,res) => {

    res.json({message:"New User: " + createUser + ' ' + "New company: " + createCompany});
})




app.listen( port, () => console.log(`Listening on port: ${port}`) );