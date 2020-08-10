import Knex from "knex";

export function up(knex: Knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("lastname").notNullable();
    table.string("email").notNullable();
    table.string("password").notNullable();
    table.string("avatar");
    table.string("whatsapp");
    table.string("bio");
  });
}

export function down(knex: Knex) {
  return knex.schema.dropTable("users");
}
