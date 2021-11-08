const { DataTypes} = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', { //creamos un modelo para Pokemon, que es la forma abstracta de representar nuestra tabla
    id: {
      type: DataTypes.UUID, //es un tipo predeterminado de sequelize que genera un ID random con números y letras
      defaultValue: DataTypes.UUIDV4,
      allowNull: false, //este campo no puede ser null
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    createInDb: {
      type: DataTypes. BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    hp: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    attack: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    defense: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    speed: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    height: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    weight: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    sprite: {
      type: DataTypes.STRING
    }
  });
};

