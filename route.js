const express = require('express');
const routes = express.Router(); // ROUTER es un metodo de Express para crear las rutas





routes.put('/editData/:id', (req, res)=>{
    req.getConnection((err, conn)=>{ 
        
        if (err) {
            return res.send(err) 
        }


        conn.query('UPDATE person set ? WHERE id = ?', [req.body, req.params.id] , (err, rows)=>{ 
            if (err) {
                return res.send(err) 
            }  
            res.send("Persona editada satisfactoriamente!!") 
        }) 


    })
})


routes.get('/dates/:id', (req, res)=>{ 

    req.getConnection((err, conn) => { 
        if (err) return res.status(500).send("Error of service")


        conn.query(`SELECT * FROM person P WHERE P.id = ?  
       `
       , [req.params.id], (err, rows)=>{
            if (err) {
                return res.send(err) 
            }  
            res.json(rows) 
        }) 
    })
})


module.exports = routes; // exportamos ROUTES de esta manera.