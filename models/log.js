module.exports = (sequelize, DataTypes) => {
    const Log = sequelize.define('log', {
        nameOfExercise: {
            type: DataTypes.STRING,
            allowNull: false
        },
        repCount: {
            type: DataTypes.STRING,
        },
        weight: {
            type: DataTypes.STRING
        }
    })
    return Log;
}