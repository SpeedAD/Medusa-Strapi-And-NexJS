'use strict';

/**
 *  article controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::article.article'
, ({ strapi }) =>  ({
        async findOne(ctx) {
            ctx.query = {
                filters: {slug: { '$eq': ctx.params.slug }},
                populate: {
                    // metaData:{
                    //     populate:'*'
                    // },
                    authors:{
                        populate:{
                            author_image:'*',
                            linkedin:'*'
                        }
                    },
                    content:'*',
                    blog_categories:{
                        populate:'*'
                    },
                    featuredImage:'*',
                    featuredImageMob:'*',
                    featuredImageBlock:'*' ,
                    metaData:{
                        populate:'*'
                    },
                }
            }
            const { data } = await super.find(ctx);
            if(data.length) {
                const sanitizedEntity = await this.sanitizeOutput(data);    
                return sanitizedEntity[0];
            }else {
                ctx.status = 404;
                console.log(ctx);
                return ctx.throw(404,"Page not found");
            }
        },
        async find(ctx) {
        const articles = await strapi.db.query('api::article.article').findMany({
            populate: {
                metaData:{
                    populate:{
                        MetaTitle:{
                            populate:"*"
                        }
                    }
                },
                authors: {
                    populate : {
                    author_image:true
                    }
                },
                content: true,
                blog_categories: true,
                featuredImage:true,
                featuredImageMob: true,
                featuredImageBlock: true,
            }
        });
         ////console.log(articles);
        return { data: articles};
        },
    })
);