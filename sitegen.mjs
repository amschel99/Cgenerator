#!/usr/bin/env node
import yargs from 'yargs'
import {writeFile} from 'fs/promises'


const {argv}= yargs(process.argv)

if(argv.nav==="dark"){
    console.log("generating dark navBar")
    await writeFile("./index.html", 
    
    `<!DOCTYPE html>
<html>
<body>

<h1>Made by sitegen</h1>
<p>project ongoing</p>

</body>
</html>`, (err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("succesfully generated...")
    }
}
    )
}
else{
    console.log("foreign arguments passed")
}