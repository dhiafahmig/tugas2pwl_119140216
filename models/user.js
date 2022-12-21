'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    //fungsi untuk menambahkan produk
    static tambah ({nama, email, password}){
     return this.create({ nama, email, password }); 
    }

    //fungsi untuk ubah
    static ubah ({nama, email, password}, id){
      return this.update({ nama, email, password }, { where:{id: id} })
    }

    //fungsi untuk hapus
    static hapus(id){
      return this.destroy({ where: { id: id } });
    }

    //fungsi readAll
    static getAll(){
      return this.findAll();
    }

    //fungsi untuk mengambil data produk berdasarkan id
    static getById(id){
      return this.findOne({ where: { id: id } });
    }

  }
  User.init({
    nama: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};