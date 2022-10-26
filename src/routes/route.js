const express = require('express');
const router=express.Router()

let {createCollege,getCollege} = require('../Controllers/CollegeControllers')
let {createIntern} = require('../Controllers/InternControllers')

router.post('/functionup/colleges',createCollege)
router.post('/functionup/interns',createIntern)
router.get('/functionup/collegeDetails',getCollege)


router.all("/**", function (req, res) {
    res.status(400).send({
      status: false,
      msg: "The api you are requesting is not available",
    });
  });

  
module.exports = router;
