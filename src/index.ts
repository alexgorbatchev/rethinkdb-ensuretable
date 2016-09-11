import * as r from "rethinkdb";

export default function ensureTable(connection: r.Connection, db: string, table: string): Promise<r.Table> {
  return r.db(db).tableList().run(connection)
    .then((tables: string[]) => {
      if (tables.indexOf(table) === -1) {
        return r.db(db).tableCreate(table).run(connection);
      }
    })
    .then(() => r.db(db).table(table))
    ;
}
