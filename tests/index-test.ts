import { expect } from "chai";
import * as r from "rethinkdb";
import insureTable from "../src";

const DB = "rethinkdb_insuretable_test_db";
const TABLE = "table";

describe("rethinkdb-insuretable", () => {
  let connection: r.Connection;

  before(() =>
    r.connect({ host: "localhost", port: 28015 })
      .then(actual => connection = actual)
      .then(() => r.dbCreate(DB).run(connection))
  );

  it("does not have the table", () =>
    r.db(DB).tableList().run(connection).then((tables: string[]) => expect(tables.indexOf(TABLE)).to.equal(-1))
  );

  it("creates table", () => insureTable(connection, DB, TABLE));

  it("has the table", () =>
    r.db(DB).tableList().run(connection).then((tables: string[]) => expect(tables.indexOf(TABLE)).to.not.equal(-1))
  );

  it("returns table", () => insureTable(connection, DB, TABLE).then(table => expect(table).to.be.ok));
});
