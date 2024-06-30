// const fs = require("fs");
const Tour = require("../models/tourModel");

// const tours = JSON.parse(
//   fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
// );

//* TOURS CONTROLLERS
// exports.checkID = (req, res, next, val) => {
//   console.log(`Tour id is: ${val}`);

//   if (req.params.id * 1 > tours.length) {
//     return res.status(404).json({
//       status: "fail",
//       message: "Invalid ID",
//     });
//   }
//   next();
// };

exports.checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: "fail",
      message: "Missing name or Price!",
    });
  }
  next();
};
(exports.getAllTours = (req, res) => {
  console.log(req.requestTime);
  res.status(200).json({
    requestedAt: req.requestTime,
    status: "success",
    //   results: tours.length,
    //   data: {
    //     tours,
    //   },
  });
}),
  (exports.getSingleTour = (req, res) => {
    // console.log(req.params.id);
    const id = req.params.id * 1;
    // const tour = tours.find((el) => el.id === id);

    // res.status(200).json({
    //   status: "success",
    //   data: tour,
    // });
  }),
  (exports.createTour = (req, res) => {
    res.status(201).send({
      status: "success",
      // data: {
      //   tour: newTour,
      // },
    });
  }),
  (exports.updateTour = (req, res) => {
    res.status(200).json({
      status: "success",
      data: {
        tour: "<Updated tour here...>",
      },
    });
  }),
  (exports.deleteTour = (req, res) => {
    res.status(204).json({
      status: "success",
      data: null,
    });
  });
