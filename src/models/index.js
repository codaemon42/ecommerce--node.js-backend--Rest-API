const { console } = require('../config');
const Product = require('./products/Product.model');

const Attributes = require('./attributes/Attributes.model');
const AttributeValues = require('./attributes/AttributeValues.model');

const Variations = require('./variations/Variations.model');
const VariationAttributes = require('./variations/VariationAttributes.model');
const VariationDetails = require('./variations/VariationDetails.model');

const Images = require('./uploads/Images.model');

const Reviews = require('./reviews/reviews.model');

const User = require('./users/User.model');
const UserRole = require('./users/UserRole.model');


// // sync 
// Product.sync().then((e)=>{
// 	console('creating Products table');
// });
// Attributes.sync();
// AttributeValues.sync();
// Variations.sync();
// VariationAttributes.sync();
// VariationDetails.sync();
// Images.sync();
// Reviews.sync();
// User.sync({force: true});
// UserRole.sync({force: true});


// relations
// Product.hasMany(Variations, {
// 	foreignKey: 'productId'
// });
// Product.hasMany(Images, {
// 	foreignKey: 'caseId'
// })
// // Variations.belongsTo(Product)
// Variations.hasMany(VariationAttributes, {
// 	foreignKey: 'variationId'
// })


// Variations.hasOne(VariationDetails, {
// 	foreignKey: 'variationId'
// })

// VariationAttributes.hasOne(AttributeValues, {
// 	foreignKey: 'id',
// 	sourceKey: 'attributeValueId'
// })

// Variations.hasMany(Images, {
// 	foreignKey: 'caseId'
// })

// User.hasOne(UserRole, {
// 	foreignKey: 'id',
// 	sourceKey: 'roleId'
// });

// Attributes.hasMany(AttributeValues, {
// 	foreignKey: 'id',
// 	targetKey: 'attributeValuesId'
// })
// AttributeValues.belongsTo(VariationAttributes, {
// 	foreignKey: 'attributeValuesId'
// })



module.exports = {
	Product,
	Attributes,
	AttributeValues,
	Variations,
	VariationAttributes,
	VariationDetails,
	Images,
	Reviews,
	User,
	UserRole
}