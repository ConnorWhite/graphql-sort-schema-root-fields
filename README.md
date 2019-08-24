# graphql-sort-schema-root-fields
While the graphql lexicographicSortSchema utility will sort your full schema, graphql-sort-schema-root-fields is useful if you only want to sort the direct fields of the query, mutation, and subscription types.
## Example
```js
...

const sortSchemaRootFields = require('graphql-sort-schema-root-fields');

const server = new GraphQLServer({
  schema: sortSchemaRootFields(schema)
});

server.start(() => console.log('Server is running on localhost:4000'));

```
