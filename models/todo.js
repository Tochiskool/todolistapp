module.exports = (sequelize, Datatypes)=>{
    const Todo = sequelize.define("Todo",{
        text: Datatypes.STRING,
        complete: Datatypes.BOOLEAN
    })
    return Todo;
}