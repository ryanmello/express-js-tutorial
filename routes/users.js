const express = require("express");
const router = express.Router();

router.use(logger)

router.get("/", (req, res) => {
  res.send("User List");
});

router.get("/new", (req, res) => {
  req.query.name
  res.render("users/new");
});

router.post('/', (req, res) => {
    const isValid = false
    if(isValid){
        users.push({ firstName: req.body.firstName })
        res.redirect(`users/${users.length - 1}`)
    } else {
        console.log('error')
        res.render('users/new', { firstName: req.body.firstName })
    }
})

router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user)
    res.send(`Get user with id ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Put User ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete User ${req.params.id}`);
  });

const users = [{ name: "Kyle" }, { name: "Sally" }]
router.param("id", (req, res, next, id) =>{
    req.user = users[id]
    next()
})

function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

module.exports = router;
