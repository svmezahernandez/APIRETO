module.exports = (sequelize, DataTypes) => {
    const Persona = sequelize.define("persona", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      nombre: {
        type: DataTypes.STRING
      },
      edad: {
        type: DataTypes.INTEGER
      },
      fechaNacimiento:{
        type: DataTypes.DATE
      },
    },{        
        timestamps: false, 
        paranoid: true,
        underscored: true,
        freezeTableName: true,
        tableName: 'persona'
      });
  
    return Persona;
  };