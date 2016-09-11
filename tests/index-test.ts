import { expect } from "chai";
import * as r from "rethinkdb";
import ensureTable from "../src";

const DB = "rethinkdb_ensuretable_test_db";
const TABLE = "table";

describe("rethinkdb-ensuretable", () => {
  let connection: r.Connection;

  before(() =>
    r.connect({ host: "localhost", port: 28015 })
      .then(actual => connection = actual)
      .then(() => r.dbCreate(DB).run(connection))
  );

  it("does not have the table", () =>
    r.db(DB).tableList().run(connection).then((tables: string[]) => expect(tables.indexOf(TABLE)).to.equal(-1))
  );

  it("creates table", () => ensureTable(connection, DB, TABLE));

  it("has the table", () =>
    r.db(DB).tableList().run(connection).then((tables: string[]) => expect(tables.indexOf(TABLE)).to.not.equal(-1))
  );

  it("returns table", () => ensureTable(connection, DB, TABLE).then(table => expect(table).to.be.ok));
});
