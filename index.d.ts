import { GraphQLSchema } from "graphql"

declare const sortSchemaRootFields: {
  /**
   * @param schema - scheam to sort
   * 
   */
  
   (schema: GraphQLSchema): GraphQLSchema;

   default: typeof sortSchemaRootFields;
};

export = sortSchemaRootFields;
