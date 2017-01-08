import { schema } from 'normalizr';

const requestSchema = new schema.Entity('requests', {}, {
  idAttribute: '_key'
});

export const REQUEST = requestSchema;
