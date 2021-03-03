'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable('products', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            },
            description: {
                type: Sequelize.STRING
            },
            price: {
                type: Sequelize.INTEGER
            },
            stock: {
                type: Sequelize.INTEGER
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE
            }
        }).then(() => {
            // Add an index to a column
            queryInterface.addIndex("products", {
                fields: ['created_at']
            })
        });
    },
    down: async (queryInterface, Sequelize) => {
        return queryInterface.dropTable('products');
    }
};
