"use strict";
var AWS = require("aws-sdk");
var async = require("async");
// S3_ACCESS_KEY_ID=AKIASCOG7JVY4KFXUF5A
// S3_SECRET_ACCESS_KEY=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
// S3_REGION=ap-south-1
// S3_BUCKET=medusa-static-assets

module.exports = ({ strapi }) => ({
  async index(ctx) {
    await strapi
    .plugin('migrate-aws')
    .service('migrate')
    .migrateS3Data(ctx.request.body);

    ctx.body = { status: true }
  },
  test(ctx) {
    return { data: "done" };
  },
});
