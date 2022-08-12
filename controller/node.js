module.exports = {
    s3: {
    key: process.env.DB_USERNAME,
    secret: process.env.AWS_SECRET_ACCESS_KEY,
    bucket: process.env.S3_MLL_BUCKET_NAME,
    destination: '/backups/database',
    encrypt: false,
    region: process.env.AWS_REGION,
    },
};
