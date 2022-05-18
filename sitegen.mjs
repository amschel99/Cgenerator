#!/usr/bin/env node
import yargs from 'yargs'
import {writeFile} from 'fs/promises'
import mysql from "mysql2"
//connection to the database
let darknav
const db= mysql.createConnection(
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
//read dark navbar code
const getDark= ()=>{
    const promise = new Promise((resolve, reject) => {
        db.query("SELECT dark from navbar", (err, res, fields) => {
            if (err) reject(err);

            resolve(res);
        });
    });
    return promise;
}
//async
 const wait=async()=> {

    try{
        const data = await getDark();
        //console.log(data)
        darknav=data
        
       // console.log(darknav)
        return darknav
    } catch(e) {
        console.log(e);
    }
}

 await wait()
//console.log(  darknav[0].dark)




const {argv}= yargs(process.argv)

if(argv.nav==="dark"){
    console.log("generating dark navBar")
    await writeFile("./html.txt", 
    
    `
   ${darknav[0].dark}     
    `, { flag: 'a+' }
    )
    await writeFile("./main.css",`body {
  margin: 0;
}
.header-fixed {
    position: fixed;
    top: 0;
    z-index: 1;
    width: 100%;
    background-color: rgba(21, 21, 21, 1);
    box-shadow: 1px 1px 4px 1px rgba(0,0,0,0.1);
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    line-height: 60px;
}

.navbar .logo {
    flex: 3; 
}

.navbar .logo a {
    display: block;
    font-size: 30px;
    font-weight: bold;
    color: #fff;
    text-decoration: none;
}
.navbar .logo a:hover {
  color: #777777;
}

.navbar nav {
    flex: 8;
}

.navbar label {
  user-select: none;
  cursor: pointer;
  padding: 28px 20px;
  position: relative;
  z-index: 3;
}

.navbar label i {
  height: 2px;
  position: relative;
  transition: background .2s ease-out;
  width: 18px;
  font-style: normal;
  font-weight: normal;
}
.navbar label i:before,
.navbar label i:after {
  content: '';
  height: 100%;
  position: absolute;
  transition: all .2s ease-out;
  width: 100%;
}
.navbar label i,
.navbar label i:before,
.navbar label i:after {
  display: block;
  background: #eee;  
}
.navbar label i:before {
  top: 5px;
}
.navbar label i:after {
  top: -5px;
}

.navbar #navbar-toggle {
  display: none;
}

.header #navbar-toggle:checked ~ .menu {
  visibility: visible;
  opacity: 0.99;
}
.header #navbar-toggle:checked ~ label {
  background: #212121;
  border-radius: 50%;    
}
.header #navbar-toggle:checked ~ label i {
  background: transparent;
}
.header #navbar-toggle:checked ~ label i:before {
  transform: rotate(-45deg);
}
.header #navbar-toggle:checked ~ label i:after {
  transform: rotate(45deg);
}
.header #navbar-toggle:checked ~ label:not(.steps) i:before,
.header #navbar-toggle:checked ~ label:not(.steps) i:after {
  top: 0;
}

@media (max-width: 768px) {
    .navbar nav {
      visibility: hidden;
      opacity: 0;
      z-index: 2;
      position: fixed;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      transition: all 0.3s ease-out;
      display: table;
      background: #ddd;
    }
    .navbar nav ul {
      margin: 0;
      padding: 20px 0;
      display: table-cell;
      vertical-align: middle;
    }
    .navbar nav li {
      display: block;
      text-align: center;
      padding: 20px 0;
      text-align: center;
      font-size: 50px;
      min-height: 50px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease-out;
    }
    .navbar nav li:hover {
      background: #212121;
    }
    .navbar nav li:hover a {
      color: #fff;
      transition: all 0.3s ease-out;
    }
    .navbar nav li a {
      color: #212121;
    }
}

@media (min-width: 768px) {
    .navbar nav ul {
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: space-around;
      text-align: center;
      list-style: none;
    }
    .navbar nav li {
      flex: 1;
    }
    .navbar nav li a {
      display: block;
      padding: 0 8px;
      font-size: 16px;
      line-height: 60px;
      color: #fff;
      text-decoration: none;
    }
    .navbar nav li.active {
      background: #555;  
    }
    .navbar nav li:hover {
      background: #333;
    }
    .navbar label {
      display: none;
    }
}

`, { flag: 'a+' })
}

//flex end navbar

else if(argv.nav==="flex-end"){

    console.log("generating navbar")
    await writeFile("./html.txt",`<!-- flex end nav bar starts here, copy this code-->
     <div class="nav">
  <input type="checkbox" id="nav-check">
  <div class="nav-header">
    <div class="nav-title">
      JoGeek
    </div>
  </div>
  <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div class="nav-links">
    <a href="//github.io/jo_geek" target="_blank">Github</a>
    <a href="http://stackoverflow.com/users/4084003/" target="_blank">Stackoverflow</a>
    <a href="https://in.linkedin.com/in/jonesvinothjoseph" target="_blank">LinkedIn</a>
    <a href="https://codepen.io/jo_Geek/" target="_blank">Codepen</a>
    <a href="https://jsfiddle.net/user/jo_Geek/" target="_blank">JsFiddle</a>
  </div>
</div>`, {flag:"a+"})

await writeFile("./main.css",`* {
  box-sizing: border-box;
}

body {
  margin: 0px;
  font-family: 'segoe ui';
}

.nav {
  height: 50px;
  width: 100%;
  background-color: #4d4d4d;
  position: relative;
}

.nav > .nav-header {
  display: inline;
}

.nav > .nav-header > .nav-title {
  display: inline-block;
  font-size: 22px;
  color: #fff;
  padding: 10px 10px 10px 10px;
}

.nav > .nav-btn {
  display: none;
}

.nav > .nav-links {
  display: inline;
  float: right;
  font-size: 18px;
}

.nav > .nav-links > a {
  display: inline-block;
  padding: 13px 10px 13px 10px;
  text-decoration: none;
  color: #efefef;
}

.nav > .nav-links > a:hover {
  background-color: rgba(0, 0, 0, 0.3);
}

.nav > #nav-check {
  display: none;
}

@media (max-width:600px) {
  .nav > .nav-btn {
    display: inline-block;
    position: absolute;
    right: 0px;
    top: 0px;
  }
  .nav > .nav-btn > label {
    display: inline-block;
    width: 50px;
    height: 50px;
    padding: 13px;
  }
  .nav > .nav-btn > label:hover,.nav  #nav-check:checked ~ .nav-btn > label {
    background-color: rgba(0, 0, 0, 0.3);
  }
  .nav > .nav-btn > label > span {
    display: block;
    width: 25px;
    height: 10px;
    border-top: 2px solid #eee;
  }
  .nav > .nav-links {
    position: absolute;
    display: block;
    width: 100%;
    background-color: #333;
    height: 0px;
    transition: all 0.3s ease-in;
    overflow-y: hidden;
    top: 50px;
    left: 0px;
  }
  .nav > .nav-links > a {
    display: block;
    width: 100%;
  }
  .nav > #nav-check:not(:checked) ~ .nav-links {
    height: 0px;
  }
  .nav > #nav-check:checked ~ .nav-links {
    height: calc(100vh - 50px);
    overflow-y: auto;
  }
}`,{flag:"a"})
}

//drop down navbar
else if(argv.nav==="drop-down"){
    await writeFile("./html.txt",`
    <!--drop down nav code-->
    <section class="navigation">
  <div class="nav-container">
    <div class="brand">
      <a href="#!">Logo</a>
    </div>
    <nav>
      <div class="nav-mobile"><a id="navbar-toggle" href="#!"><span></span></a></div>
      <ul class="nav-list">
        <li>
          <a href="#!">Home</a>
        </li>
        <li>
          <a href="#!">About</a>
        </li>
        <li>
          <a href="#!">Services</a>
          <ul class="navbar-dropdown">
            <li>
              <a href="#!">Sass</a>
            </li>
            <li>
              <a href="#!">Less</a>
            </li>
            <li>
              <a href="#!">Stylus</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#!">Portfolio</a>
        </li>
        <li>
          <a href="#!">Category</a>
          <ul class="navbar-dropdown">
            <li>
              <a href="#!">Sass</a>
            </li>
            <li>
              <a href="#!">Less</a>
            </li>
            <li>
              <a href="#!">Stylus</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#!">Contact</a>
        </li>
      </ul>
    </nav>
  </div>
</section>`, {flag:"a"})
await writeFile("./main.css",` @import url('https://fonts.googleapis.com/css?family=Roboto');
body{
    margin: 0;
     padding: 0;
     font-family: 'Roboto', sans-serif;
}
 .navigation {
     height: 55px;
     background: linear-gradient(45deg, #4199fe, #74b4fe);
}
 .brand {
     position: absolute;
     padding-left: 20px;
     float: left;
     line-height: 55px;
     text-transform: uppercase;
     font-size: 1.4em;
}
 .brand a, .brand a:visited {
     color: #ffffff;
     text-decoration: none;
}
 .nav-container {
     max-width: 1000px;
     margin: 0 auto;
}
 nav {
     float: right;
}
 nav ul {
     list-style: none;
     margin: 0;
     padding: 0;
}
 nav ul li {
     float: left;
     position: relative;
}
 nav ul li a,nav ul li a:visited {
     display: block;
     padding: 0 20px;
     line-height: 55px;
     color: #fff;
     background: #262626 ;
     text-decoration: none;
}
 nav ul li a{
     background: transparent;
     color: #FFF;
}
 nav ul li a:hover, nav ul li a:visited:hover {
     background: #2581DC;
     color: #ffffff;
}
 .navbar-dropdown li a{
     background: #2581DC;
}
 nav ul li a:not(:only-child):after, nav ul li a:visited:not(:only-child):after {
     padding-left: 4px;
     content: ' E';
}
 nav ul li ul li {
     min-width: 190px;
}
 nav ul li ul li a {
     padding: 15px;
     line-height: 20px;
}
 .navbar-dropdown {
     position: absolute;
     display: none;
     z-index: 1;
     background: #fff;
     box-shadow: 0 0 35px 0 rgba(0,0,0,0.25);
}
/* Mobile navigation */
 .nav-mobile {
     display: none;
     position: absolute;
     top: 0;
     right: 0;
     background: transparent;
     height: 55px;
     width: 70px;
}
 @media only screen and (max-width: 800px) {
     .nav-mobile {
         display: block;
    }
     nav {
         width: 100%;
         padding: 55px 0 15px;
    }
     nav ul {
         display: none;
    }
     nav ul li {
         float: none;
    }
     nav ul li a {
         padding: 15px;
         line-height: 20px;
         background: #262626;
    }
     nav ul li ul li a {
         padding-left: 30px;
    }
     .navbar-dropdown {
         position: static;
}
 @media screen and (min-width:800px) {
     .nav-list {
         display: block !important;
    }
}
 #navbar-toggle {
     position: absolute;
     left: 18px;
     top: 15px;
     cursor: pointer;
     padding: 10px 35px 16px 0px;
}
 #navbar-toggle span, #navbar-toggle span:before, #navbar-toggle span:after {
     cursor: pointer;
     border-radius: 1px;
     height: 3px;
     width: 30px;
     background: #ffffff;
     position: absolute;
     display: block;
     content: '';
     transition: all 300ms ease-in-out;
}
 #navbar-toggle span:before {
     top: -10px;
}
 #navbar-toggle span:after {
     bottom: -10px;
}
 #navbar-toggle.active span {
     background-color: transparent;
}
 #navbar-toggle.active span:before, #navbar-toggle.active span:after {
     top: 0;
}
 #navbar-toggle.active span:before {
     transform: rotate(45deg);
}
 #navbar-toggle.active span:after {
     transform: rotate(-45deg);
}
 `, {flag:"a"})
 await writeFile('./main.js',`	(function($) { 
  $(function() { 

    //  open and close nav 
    $('#navbar-toggle').click(function() {
      $('nav ul').slideToggle();
    });


    // Hamburger toggle
    $('#navbar-toggle').on('click', function() {
      this.classList.toggle('active');
    });


    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.navbar-dropdown').slideToggle("slow");

      // Close dropdown when select another dropdown
      $('.navbar-dropdown').not($(this).siblings()).hide("slow");
      e.stopPropagation();
    });


    // Click outside the dropdown will remove the dropdown class
    $('html').click(function() {
      $('.navbar-dropdown').hide();
    });
  }); 
})(jQuery); `,{flag:'a'})
}
else{
    console.log("foreign arguments passed")
}