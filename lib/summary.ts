import { getDbConnection } from "./database"

export async function getSummaries(userId: string) {
    const sql=await getDbConnection();
    const summaries=await sql`SELECT * FROM pdf_summary WHERE user_id = ${userId} ORDER BY created_at DESC`;
    return summaries;
}