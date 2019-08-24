const { GraphQLSchema, GraphQLObjectType, isObjectType } = require('graphql');

const { GraphQLSchema, GraphQLObjectType } = require('graphql');

function sortFields(fields) {
  return Object.keys(fields).sort().map((key) => ({ key, field: fields[key] })).reduce((retval, item) => {
    retval[item.key] = item.field;
    return retval;
  }, {});
}

function sortTypes(schemaConfig) {
  let types = schemaConfig.types;
  let rootTypes = [schemaConfig.query, schemaConfig.mutation, schemaConfig.subscription];
  return types.map((type) => {
    if(rootTypes.includes(type)) {
      let typeConfig = type.toConfig();
      return new GraphQLObjectType({
        ...typeConfig,
        fields: () => sortFields(typeConfig.fields)
      });
      return type;
    } else {
      return type;
    }
  });
}

function replaceType(type, types) {
  return types.find((newType) => newType.name == type.name);
}

const sortSchemaRootFields = (schema) => {
  const schemaConfig = schema.toConfig();
  let sortedTypes = sortTypes(schemaConfig);
  return new GraphQLSchema({
    ...schemaConfig,
    types: sortedTypes,
    query: replaceType(schemaConfig.query, sortedTypes),
    mutation: replaceType(schemaConfig.mutation, sortedTypes),
    subscription: replaceType(schemaConfig.subscription, sortedTypes),
  });
}

module.exports = sortSchemaRootFields;
