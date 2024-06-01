"use strict";
var AWS = require("aws-sdk");
var async = require("async");

module.exports = ({ strapi }) => ({
  getWelcomeMessage() {
    return "Welcome to Strapi 🚀";
  },
  migrateS3Data(body) {
    return new Promise((resolve, reject) => {
      //get constants from request body
      // todo: validate request body as this is POST route
      const {
        sourceAccessKey,
        sourceSecretKey,
        sourceBucketName,
        targetAccessKey,
        targetSecretKey,
        targetBucketName,
      } = body;

      try {
        // initiate source and target S3 classes
        let S3_Source = new AWS.S3({
          apiVersion: "2006-03-01",
          credentials: {
            secretAccessKey: sourceSecretKey,
            accessKeyId: sourceAccessKey,
          },
        });

        let S3_Target = new AWS.S3({
          apiVersion: "2006-03-01",
          credentials: {
            secretAccessKey: targetSecretKey,
            accessKeyId: targetAccessKey,
          },
        });

        // list and download everything from S3_Source

        S3_Source.listObjects(
          {
            Bucket: sourceBucketName,
          },
          (err, data) => {
            if (err) {
              console.log(err);
            }
            //asynchronous file uploader
            async.eachSeries(
              data.Contents,
              function (fileObj, callback) {
                //Download file from source
                var key = fileObj.Key;
                console.log("Downloading: " + key);

                var fileParams = {
                  Bucket: sourceBucketName,
                  Key: key,
                };

                S3_Source.getObject(fileParams, function (err, fileContents) {
                  if (err) {
                    callback(err);
                  } else {
                    console.log("Downloaded: " + key);
                    // upload the file to target S3
                    S3_Target.upload(
                      {
                        Key: key,
                        Bucket: targetBucketName,
                        Body:
                          fileContents.Body ||
                          Buffer.from(fileContents.Body.toString(), "binary"),
                      },
                      (err, data) => {
                        if (err) console.log(err);
                        if (data) {
                          console.log(
                            "Uploaded file: " + key + " to: " + targetBucketName
                          );
                          callback();
                        }
                      }
                    );
                  }
                });
              },
              function (err) {
                if (err) {
                  console.log("Failed: " + err);
                } else {
                  console.log("Finished");
                  resolve();
                }
              }
            );
          }
        );
      } catch (error) {
        reject(error);
      }
    });
  },
});
