import { Sequelize, Model, DataTypes } from "sequelize";
  
  const sequelize = new Sequelize('cryptonews', 'root', '', {
    host: 'localhost',
    dialect: "mysql"
  });
  
  const db = async ()=>{
        try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  }
  db();
  const User = sequelize.define(
    "Users",
    {
      // Model attributes are defined here
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      role: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
        is: /^[0-9a-f]{64}$/i,
      },
    }
  );

  
 export default User;