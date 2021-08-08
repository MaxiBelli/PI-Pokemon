const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    return sequelize.define('Type', {
      id:{
        type: DataTypes.UUID,
        allowNull: false, 
        unique: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  };
//   module.exports = (sequelize) => {
//     sequelize.define('type', { //no es necesario pasarle un ID ya que por defecto sequelize lo genera
//         /* id: {
//           type: DataTypes.INTEGER,
//           allowNull: false,
//           primaryKey: true,
//           autoIncrement: true
//         }, */
//         name: {
//           type: DataTypes.STRING, 
//           allowNull: false,
//           unique: true,
//           primaryKey: true //el name va a ser mi id, cuando haga la unión de las dos tablas
//         },
//       });
// }