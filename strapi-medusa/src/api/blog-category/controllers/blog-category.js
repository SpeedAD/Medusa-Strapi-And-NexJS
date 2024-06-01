'use strict';

/**
 *  blog-category controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

//module.exports = createCoreController('api::blog-category.blog-category');
module.exports = createCoreController('api::blog-category.blog-category', ({ strapi }) => ({

    async find(ctx) {
        ctx.query = {
            populate: {
                metaData:{
                    populate:"*"
                }
            }
        }
        const {data, meta} = await super.find(ctx)
        if(data.length){
            return {data, meta}
        }else {
            ctx.status = 404;
            console.log(ctx);
            return ctx.throw(404,"Page not found");
        }
    }
}))