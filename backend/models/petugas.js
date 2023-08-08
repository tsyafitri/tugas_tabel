import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const petugas = db.define('petugas',{
    id_petugas: DataTypes.INTEGER,
    nama_petugas: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    telp: DataTypes.STRING,
    level: DataTypes.ENUM('admin','petugas')
},{
    freezeTableName: true
});

export default petugas;

(async()=>{
    await db.sync();
})();