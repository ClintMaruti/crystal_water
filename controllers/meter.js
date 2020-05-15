const Meter = require("../models/meter");

const meterController = {
  createNewMeter: (req, res) => {
    const { id } = req.params;

    if (
      !req.body.meter_no ||
      !req.body.previous_reading ||
      !req.body.current_reading
    ) {
      res.status(400).json({ message: "Check Your Field Again!" });
    }

    if (!id) {
      res.status(400).json({ message: "Kindly put the correct client id" });
    }

    const { meter_no, previous_reading, current_reading } = req.body;

    const newMeter = new Meter({
      meter_no,
      previous_reading,
      current_reading,
      client: id,
      date: Date.now(),
    });

    newMeter
      .save()
      .then((results) => {
        res.status(201).json({ message: "One Meter Added!", meter: results });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  },

  fetchAllMeter: (req, res) => {
    Meter.find()
      .then((meters) => {
        res.status(200).json({ meters });
      })
      .catch((error) => {
        res.status(500).json({ error });
      });
  },

  fetchMeterById: (req, res) => {
    const { id } = req.params;
    Meter.findById({ _id: id })
      .exec((err, result) => {
        if (err) {
          res.status(404).json({ error: err.message });
        }
        res.status(200).json({ meter: result });
      });
  },
};

module.exports = meterController;
