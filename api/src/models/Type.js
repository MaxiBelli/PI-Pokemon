const {DataTypes} = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('type', { //no es necesario pasarle un ID ya que por defecto sequelize lo genera
        /* id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        }, */
        name: {
          type: DataTypes.STRING, 
          allowNull: false,
          unique: true,
          primaryKey: true //el name va a ser mi id, cuando haga la unión de las dos tablas
        },
      });
}