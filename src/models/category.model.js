const db = require("@/configs/db");
const { buildInsertQuery, buildUpdateQuery } = require("@/utils/queryBuilder");

exports.findAll = async () => {
  const [categories] = await db.query("select * from category");
  return categories;
};

exports.findById = async (id) => {
  const [category] = db.query(`select * from category where id = ?`, [id]);
  return category[0];
};
exports.create = async (data) => {
  const { columns, placeholders, values } = buildInsertQuery(data);
  const query = `INSERT INTO category (${columns}) VALUES (${placeholders});`;
  const [{ insertId }] = await db.query(query, values);

  return {
    id: insertId,
    ...data,
  };
};
exports.update = async (id, data) => {
  const { setClause, values } = buildUpdateQuery(data);

  values.push(id);

  const query = `UPDATE category SET ${setClause} WHERE id = ?;`;

  return {
    id,
    ...data,
  };
};
exports.remove = async (id) => {
  const [{ affectedRows }] = await db.query(`delete from users where id = ?`, [
    id,
  ]);
  return affectedRows > 0;
};
