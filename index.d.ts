import { GraphQLSchema } from "graphql"

declare const sortSchemaRootFields: {
  /**
   * @param schema - schema to sort
   * 
   */
  
   (schema: GraphQLSchema): GraphQLSchema;

   default: typeof sortSchemaRootFields;
};

export = sortSchemaRootFields;
