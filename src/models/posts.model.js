const db = require("@/configs/db");
const { buildInsertQuery, buildUpdateQuery } = require("@/utils/queryBuilder");

exports.findAll = async () => {
  const [posts] = await db.query("select * from posts");
  return posts;
};
exports.findById = async (id) => {
  const [posts] = await db.query(`select * from posts where id = ?`, [id, id]);
  return posts[0];
};

exports.create = async (data) => {
  const { columns, placeholders, values } = buildInsertQuery(data);

  const query = `INSERT INTO posts (${columns}) VALUES (${placeholders});`;
  const [{ insertId }] = await db.query(query, values);

  return {
    id: insertId,
    ...data,
  };
};

exports.update = async (id, data) => {
  const { setClause, values } = buildUpdateQuery(data);

  values.push(id);

  const query = `UPDATE posts SET ${setClause} WHERE id = ?;`;
  await db.query(query, values);

  return {
    id,
    ...data,
  };
};

exports.remove = async (id) => {
  const [{ affectedRows }] = await db.query(`delete from posts where id = ?`, [
    id,
  ]);
  return affectedRows > 0;
};
exports.findAll = async ({ page = 1, limit = 10 } = {}) => {
  const offset = (page - 1) * limit;

  const [[{ total }]] = await db.query("SELECT COUNT(*) as total FROM posts");

  const [items] = await db.query("SELECT * FROM posts LIMIT ? OFFSET ?", [
    limit,
    offset,
  ]);

  const last_page = Math.ceil(total / limit);

  return {
    items,
    pagination: {
      current_page: page,
      per_page: limit,
      total,
      last_page,
    },
  };
};
