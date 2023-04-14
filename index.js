//const express = require('express');
import express from 'express';
import {engine} from 'express-handlebars';
const app = express();
app.engine('hahandlebars',engine());
app.set('view engine','handlebars');
app.set('view','./templates');
const students = [
  {
    id: 1,
    name: 'raneem',
    city: 'cairo',
  },
  {
    id: 2,
    name: 'mokhtar',
    city: 'cairo',
  },
  {
    id: 3,
    name:'ahmed',
    city: 'cairo',
  }
]
const studentsfunction = (request,response) =>{

  let output='<ul>'
for(let i=0;i<students.length;i++)
{
  const student=students[i];
  output+='<li>'+student.name+'</li>';
}
  output+='</ul>'
  response.send(output);

};
app.get("/students",studentsfunction);

app.listen(5000);