import mysql from "serverless-mysql";

const db = mysql({
  config: {
    host: process.env.MYAQL_HOST,
    user: process.env.MYAQL_USER,
    password: process.env.MYAQL_PASSWORD,
    database: process.env.MYAQL_DATABASE,
  },
});

export const query = async (q) => {
  try {
    const results = await db.query(q);
    await db.end();
    return results;
  } catch (error) {
    return { error };
  }
};
