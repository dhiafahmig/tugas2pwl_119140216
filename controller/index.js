const { User } = require('../models');

module.exports = {

  retrieveAll: (req, res) => {
    User.getAll()
      .then((users) => res.json(users))
      .catch((err) => res.json(err));
  },

  retrieveById: (req, res) => {
    User.getById(req.params.id)
      .then((user) => res.json(user))
      .catch((err) => res.json(err));
  },

  tambah: (req, res) => {
    User.tambah(req.body)
      .then((user) => res.json({ message: `User berhasil ditambahkan` }))
      .catch((err) => res.json(err));
  },

  hapus: (req, res) => {
    User.hapus(req.params.id)
      .then(() => res.json({ msg: `User berhasil dihapus` }))
      .catch((err) => res.json(err));
  },

  update: (req, res) => {
    User.ubah(req.body, req.params.id)
      .then(() => res.json({ msg: 'Update user berhasil' }))
      .catch((err) => res.json(err));
  },  

};
