module.exports ={
    Host: "localhost",
    USER: "postgres",
    PASSWORD: "austin13",
    DB: "users",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000

    }
}