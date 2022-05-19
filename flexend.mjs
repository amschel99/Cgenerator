import { db } from "./sitegen.mjs";
let darknav
const getDark= ()=>{
    const promise = new Promise((resolve, reject) => {
        db.query("SELECT flexend from navbar", (err, res, fields) => {
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
 export default darknav[0].dark
//console.log(  darknav[0].dark)