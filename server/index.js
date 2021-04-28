const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const mysql = require('mysql')

const db = mysql.createPool({
    host: "localhost",
    user: "mysql",
    password: "mysql",
    database: "distant_planets"
})

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

const serverHost = 5000
app.listen(serverHost, () => {
    console.log(`server start on port ${serverHost}`)
})

app.get("/api/get", (req, res) => {
    const sqlSelect = "SELECT * FROM `planet`"

    db.query(sqlSelect, (err, rows, fields) => {
        if (err) {
            console.log("Failed to query for users: " + err)
            res.sendStatus(500)
            return
        }
        console.log("I think we fetched users successfully")

        const users = rows.map((row) => {
                return { id: row.id, name: row.name, shot_discription: row.shot_discription, planet_image: row.planet_image  }
        })

        res.json(users)
    })
})

app.get("/api/:id", (req, res) => {
    console.log("Fetching user with id: " + req.params.id)

    const userId = req.params.id
    const sqlOneSelect = "SELECT * FROM `planet` where id = ?"

    db.query(sqlOneSelect, [userId], (err, rows) => {
        if (err) {
            console.log("Failed to query for users: " + err)
            res.sendStatus(500)
            return
          }
          console.log("I think we fetched users successfully")
          console.log("ID is: ", req.params.id)
        
          const users = rows.map((row) => {
            return {id:row.id,
                name: row.name,
                long_discription_1: row.long_discription_1, 
                long_discription_2: row.long_discription_2,
                long_discription_3: row.long_discription_3,
                long_discription_4: row.long_discription_4,
                planet_image: row.planet_image
            }
          })
        
          res.json(users)
    })
})