# rethinkdb-ensuretable

A helper method to ensure RethinkDB table exists.

* If table is not present, creates and returns it
* If table present, returns it

## Installation

```
npm install rethinkdb-ensuretable
```

## Usage

```js
import ensureTable from "rethinkdb-ensuretable";
ensureTable(connection, "db_name", "table_name").then(table => table.insert(...));
```

## License

MIT
