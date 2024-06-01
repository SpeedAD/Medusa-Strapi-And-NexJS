"use strict";
var AWS = require("aws-sdk");
var async = require("async");
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
