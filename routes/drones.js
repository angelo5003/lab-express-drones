const express = require("express");
const router = express.Router();
// const droneSeeds = require("../seeds/drones.seed");
const DroneModel = require("../models/Drone.model");

// require the Drone model here

router.get("/drones", (req, res) => {
  // Iteration #2: List the drones
  DroneModel.find()
    .then((allDronesFromDB) => {
      console.log(allDronesFromDB);
      res.render("drones/list", { drones: allDronesFromDB });
    })
    .catch((err) => {
      console.log(`Something went wrong`, err);
    });
});

router.get("/drones/create", (req, res) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render("drones/create-form");
});

router.post("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const { name, propellers, maxSpeed } = req.body;

  DroneModel.create({
    name,
    propellers,
    maxSpeed,
  })
    .then((newDrone) => {
      console.log("newDrone:", newDrone);
      res.redirect("/drones");
    })
    .catch((err) => {
      console.log(
        `Oopsie, there went something wrong with creating a new drone ${err}`,
        res.render("drones/create-form")
      );
    });
});

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
