// Create a "Language" model that matches up with the database
module.exports = function(sequelize, DataTypes) {
  var Language = sequelize.define("Language", {
    languageID: DataTypes.STRING,
    languageName: DataTypes.STRING
  });
  return Language;
};
