const config ={
    app:{
        port: process.env.PORT,
        jwtkey: process.env.JWT_KEY
    },
    db:{
        main:{
            host: process.env.DB_HOST,
            database: process.env.DB_NAME,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            connectionLimit: 50
        }

    }
}

export default config