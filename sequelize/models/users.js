/* jshint indent: 1 */
const bcrypt = require('bcrypt-nodejs');

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
		createdAt: {
			field: 'created_at',
			type: DataTypes.DATE,
			allowNull: true
		},
		updatedAt: {
			field: 'updated_at',
			type: DataTypes.DATE,
			allowNull: true
		}
	}, { tableName: 'users' });

	users.associate = function(models) {
		users.belongsTo(models.companies, { foreignKey: 'company_id', targetKey: 'id' });
	};

	users.validPassword = function(password, hash) {
		// TODO: use es6 async/await instead of callbacks
		bcrypt.compare(password, hash, function(err, res) {
			if (err) console.error(err);
			return res;
		});
	};

	users.hook('beforeCreate', function(user, options) {
		return new Promise((resolve, reject) => {
			var salt = bcrypt.genSaltSync(12);

			bcrypt.hash(user.password, salt, null, function(err, hash) {
				if (err) reject(err);

				user.password = hash;
				resolve(user);
			});
		});
	});

	return users;
};