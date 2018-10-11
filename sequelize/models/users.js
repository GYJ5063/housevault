/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	const users = sequelize.define('users', {
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		company_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			references: {
				model: "companies",
				key: "id"
			}
		},
		first_name: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		last_name: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		email: {
			type: DataTypes.STRING(255),
			allowNull: false,
			unique: true
		},
		password: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		remember_token: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: true
		},
		updated_at: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, { tableName: 'users' });
	users.associate = function(models) {
		users.belongsTo(models.companies, { foreignKey: 'company_id', targetKey: 'id' });
	};
};
