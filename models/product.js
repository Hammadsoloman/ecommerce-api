const Sequelize = require("sequelize");
const sequelize = require("../config/sequelize.config");


 
 
//  const createProduct = (sequelize, DataTypes) => {
    // const {INTEGER, STRING, DATE, TEXT, DECIMAL, UUID, UUIDV4} = DataTypes;

    // const Product = sequelize.define('products', {
        module.exports = sequelize.define('products', {
        id: { 
            type: Sequelize.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: Sequelize.STRING(50),
            allowNull: false,
        },

        description: {
            type: Sequelize.TEXT,
        },
        
        price: {
            type: Sequelize.DECIMAL(20, 2),
            allowNull: false,
        },

        stock: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
        },
        createdAt: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: new Date(),
            field: 'created_at'
        },
        updatedAt: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: new Date(),
            field: 'updated_at'
        },
       }, {
        timestamps: false,
        tableName: 'products',
    });

  

/*
    Product.associate = (models) => {

        // here is how we add defaultScope programmatically
        Product.addScope('defaultScope', {
                include: [{
                    required: false,
                    model: models.ProductImage,
                    as: 'images',
                    attributes: ['id', 'filePath'],
                }]
            },
            {// defaultScope already exists, to avoid the error pass override
                override: true,
            });

        Product.hasMany(models.Comment);
        Product.hasMany(models.ProductImage, {as: 'images'});
        // Product.hasMany(models.ProductCategory);
        Product.belongsToMany(models.Category, {
            through: models.ProductCategory,
            foreignKey: 'productId',
            otherKey: 'categoryId',
        });

        // Product.hasMany(models.ProductTag);
        Product.belongsToMany(models.Tag, {
            through: models.ProductTag,
            foreignKey: 'productId',
            otherKey: 'tagId'
        });

    }; */

//     Product.beforeBulkUpdate(product => {
//         product.attributes.updateTime = new Date();
//         return product;
//     });

//     return Product;
// };

// module.exports=createProduct ;