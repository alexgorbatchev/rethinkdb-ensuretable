# rethinkdb-insuretable

Insures that a RethinkDB table is present.

* If table is not present, creates and returns it
* If table present, returns it

## Installation

```
npm install rethinkdb-insuretable
```

## Usage

```js
import insureTable from "rethinkdb-insuretable";
insureDb(connection, "db_name", "table_name").then(table => table.insert(...));
```

## License

MIT
