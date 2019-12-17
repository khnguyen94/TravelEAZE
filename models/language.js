// Create a "Language" model that matches up with the database
module.exports = function(sequelize, DataTypes) {
  var Language = sequelize.define(
    "Language",
    {
      languageAbb: DataTypes.STRING,
      languageName: DataTypes.STRING,
      LanguageCont: DataTypes.STRING,
      LanguageCap: DataTypes.STRING,
      LanguageCurr: DataTypes.STRING,
      LanguageCode: DataTypes.STRING
    },
    {
      timestamps: false
    }
  );
  return Language;
};
