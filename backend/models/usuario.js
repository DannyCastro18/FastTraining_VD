const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Persona = require('./Persona'); // Asegúrate de que este modelo existe
const Rol = require('./Rol'); // Asegúrate de que este modelo existe

const Usuario = sequelize.define('Usuario', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
        isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    persona_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
        model: Persona,
        key: 'id',
        },
        onDelete: 'CASCADE',
    },
    rol_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
        model: Rol,
        key: 'id',
        },
        onDelete: 'CASCADE',
    },
    }, {
    tableName: 'usuarios',
    timestamps: true,
})

// Relaciones
Usuario.belongsTo(Persona, { foreignKey: 'persona_id' });
Usuario.belongsTo(Rol, { foreignKey: 'rol_id' });

module.exports = Usuario;