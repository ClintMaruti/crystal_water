const Client = require("../models/client");

const clientController = {
  createClient: (req, res) => {
    if (
      !req.body.name ||
      !req.body.id_number ||
      !req.body.phone_number ||
      !req.body.meter_no ||
      !req.body.previous_reading ||
      !req.body.current_reading
    ) {
      res.status(400).json({ message: "Check Your Field Again!" });
    }

    const {
      name,
      id_number,
      phone_number,
      meter_no,
      previous_reading,
      current_reading,
    } = req.body;

    const units = (previous_reading - current_reading) * 100;

    const newClient = new Client({
      name,
      id_number,
      phone_number,
      meter_no,
      previous_reading,
      current_reading,
      units,
      date: Date.now(),
    });
    newClient
      .save()
      .then((results) => {
        res.status(201).json({ message: "One Client Added!", client: results });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  },

  fetchAllClients: (req, res) => {
    Client.find({})
      .exec((err, clients) => {
        if (err) {
          res.status(500).json({ error: err.message });
        }
        res.status(200).json({ clients });
      });
  },

  fetchOneClient: (req, res) => {
    const { id } = req.params;
    Client.findById({ _id: id })
      .exec((err, result) => {
        if (err) {
          res.status(404).json({ error: err.message });
        }
        res.status(200).json({ client: result });
      });
  },

  deletOneClient: (req, res) => {
    const { id } = req.params;
    Client.findByIdAndRemove({ _id: id }, (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
      }
      res.status(204).json({ message: "One Client Deleted!" });
    });
  },

  updateOneClient: (req, res) => {
    const { id } = req.params;
    Client.findByIdAndUpdate(
      { _id: id },
      { $set: req.body },
      { runValidators: true },
      (err, results) => {
        if (err) {
          res.status(400).json({ error: err.message });
        }
        res
          .status(202)
          .json({ message: "One Client Updated!", client: results });
      }
    );
  },
};

module.exports = clientController;
