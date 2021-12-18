const { query } = require("src/db");

const handler = async (req, res) => {
  const { text } = req.body;
  console.log(text);
  const results = await query(`INSERT INTO posts(text) VALUES("${text}")`);
  console.log(results);
  return results;
};

export default handler;
