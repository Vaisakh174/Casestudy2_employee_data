const mongoose = require("mongoose");//init

//schema definition
const schema = mongoose.Schema;

const employee_detail = new schema({
    name: String,
    location: String,
    position: String,
    salary: Number


})

const employeeData = mongoose.model("datas", employee_detail); //for atlas need prural form

module.exports = employeeData;