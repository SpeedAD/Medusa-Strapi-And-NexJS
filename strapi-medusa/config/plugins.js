module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: 's3-cloudfront',
     providerOptions: {
        accessKeyId: env('AWS_ACCESS_KEY_ID'),
        secretAccessKey: env('AWS_ACCESS_SECRET'),
        region: env('AWS_REGION'),
        params: {
          Bucket: env('AWS_BUCKET'),
        },
        cdn : env('CDN_DOMAIN')
      }, 
    },
  },
  'migrate-aws': {
    enabled: true,
    resolve: './src/plugins/migrate-aws'
  },
  // ...
});