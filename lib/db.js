import sql from "mssql";

// Database Configuration
const config = {
    user: "sa",
    password: "sqlserver2012",
    database: "HIMS",
    server: "localhost",
    options: {
        encrypt: false,
        trustServerCertificate: true,
    },
};

// Create a connection pool
const poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then((pool) => {
        console.log("✅ Database connected successfully");
        return pool;
    })
    .catch((err) => {
        console.error("❌ Database connection failed", err);
        throw err;
    });

export { sql, poolPromise };

// mongodb+srv://rambaburai911:<db_password>@hospital-website.xrgnu.mongodb.net/?retryWrites=true&w=majority&appName=hospital-website