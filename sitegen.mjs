#!/usr/bin/env node
import yargs from 'yargs'
import {writeFile} from 'fs/promises'
import mysql from "mysql2"
import darknav from "./darknav.mjs"
import darkcss from './darkcss.mjs'
import flexend from './flexend.mjs'
import flexendcss from './flexendcss.mjs'
import dropdown from './dropdown.mjs'
import dropdowncss from './dropdowncss.mjs'
import dropdownjs from './dropdownjs.mjs'
//connection to the database

export const db= mysql.createConnection(
  {
    host:"localhost",
    user:"root",
    password:"@iamLehcsma9",
    database:"cgen"
  }
)
//actually connect to the database
/*
db.connect((error)=>{
  if(error){
    throw error
  }
  console.log("database connected")

})
*/



const {argv}= yargs(process.argv)

if(argv.nav==="dark"){
    console.log("generating dark navBar")
    await writeFile("./html.txt", 
    
    `
   ${darknav}     
    `, { flag: 'a+' }
    )
    await writeFile("./main.css",`${darkcss}
`, { flag: 'a+' })
}

//flex end navbar

else if(argv.nav==="flex-end"){

    console.log("generating navbar")
    await writeFile("./html.txt",`${flexend}`, {flag:"a+"})

await writeFile("./main.css",`${flexendcss}`,{flag:"a"})
}

//drop down navbar
else if(argv.nav==="drop-down"){
    await writeFile("./html.txt",`${dropdown}
   `, {flag:"a"})
await writeFile("./main.css",` ${dropdowncss}
 `, {flag:"a"})
 await writeFile('./main.js',`${dropdownjs}	`,{flag:'a'})
}
else{
    console.log("foreign arguments passed")
}