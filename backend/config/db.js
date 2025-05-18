import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv"

dotenv.config()

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env

//this create a SQL connection using our env variables
export const sql = neon(
    `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require`
)


//this sql function we export is used as a tagged template literal, which allow us to write sql queries safely