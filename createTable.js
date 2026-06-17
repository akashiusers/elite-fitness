const { Client } = require('pg');

const client = new Client({
  connectionString: "postgres://postgres.qogbjekttngbosplfzny:CvhD0mbW3Uc2w0rQ@aws-1-us-east-1.pooler.supabase.com:5432/postgres",
  ssl: {
    rejectUnauthorized: false
  }
});

async function run() {
  try {
    await client.connect();
    await client.query(`
      CREATE TABLE IF NOT EXISTS subscriptions (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        "fullName" TEXT NOT NULL,
        email TEXT NOT NULL,
        "planName" TEXT NOT NULL,
        "planPrice" FLOAT NOT NULL,
        "createdAt" TIMESTAMPTZ DEFAULT NOW()
      );
    `);
    console.log("Table created successfully");
  } catch (err) {
    console.error("Error:", err);
  } finally {
    await client.end();
  }
}
run();
