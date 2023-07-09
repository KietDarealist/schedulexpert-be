import pg from "pg";
const { Client } = pg;
const client = new Client({
    host: "localhost",
    port: 5432,
    database: "employeedb",
    user: "huynhngoctuankiet",
    password: "password",
});
const connectToLocalDataBase = async () => {
    try {
        await client.connect();
        // const result = await client.query("Select * from mt_employee");
        // console.log("Query result", result?.rows);
        console.log("Connect to database successfully");
    }
    catch (error) {
        console.log("Error when connect to database", error);
    }
};
export { connectToLocalDataBase };
