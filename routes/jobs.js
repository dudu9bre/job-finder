const express = require("express")
const router = express.Router()
const Job = require("../models/Job")

router.get("/teste", (req, res) => {
    res.send("Deu certo")
})

// adicionar job via post
router.post("/add", (req, res) => {
    let {
        title
        , salary
        , company
        , description
        , email
        , new_job
    } = req.body

    // inserir dados
    Job.create({
        title
        , salary
        , company
        , description
        , email
        , new_job
    })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
})

module.exports = router