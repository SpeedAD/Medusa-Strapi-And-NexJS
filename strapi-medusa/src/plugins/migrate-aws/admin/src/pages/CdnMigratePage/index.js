// @ts-nocheck
/*
 *
 * CdnMigratePage
 *
 */

import React, { useState } from "react";
// import PropTypes from 'prop-types';
import pluginId from "../../pluginId";
import { TextInput, Button, Box, Typography } from "@strapi/design-system";

const CdnMigratePage = () => {
  const [sourceAccessKey, setSourceAccessKey] = useState("");
  const [sourceSecretKey, setSourceSecretKey] = useState("");
  const [sourceBucketName, setSourceBucketName] = useState("");
  const [targetAccessKey, setTargetAccessKey] = useState("");
  const [targetSecretKey, setTargetSecretKey] = useState("");
  const [targetBucketName, setTargetBucketName] = useState("");
  const [migrationStarted, setMigrationStarted] = useState(false);
  const [migrationCompleted, setMigrationCompleted] = useState(false);

  const handleMigration = async () => {
    // Send the inputted access keys and secret keys to your Strapi backend
    const migrationData = {
      sourceAccessKey,
      sourceSecretKey,
      sourceBucketName,
      targetAccessKey,
      targetSecretKey,
      targetBucketName
    };
    console.log("handling : : ", migrationData)
    setMigrationStarted(true);

    try {
      const response = await fetch(`http://localhost:1337/${pluginId}/api/v1/migrate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(migrationData),
      });

      if (response) {
        // Handle success
        setMigrationStarted(false);
        setMigrationCompleted(true);
        setTimeout(() => {
          setMigrationCompleted(false);
        }, 5000);
      } else {
        // Handle error
        setMigrationStarted(false);
      }
    } catch (error) {
      // Handle error
    }
  };
  return (
    <Box padding={10} shadow="filterShadow">
      <Typography variant="alpha">S3 Data Migration</Typography>
      <div>
        <Box padding={4}>
          <Typography variant="beta">Source S3 Account</Typography>
          <TextInput
            type="text"
            label="Access Key"
            name="Access_Key"
            value={sourceAccessKey}
            onChange={(e) => setSourceAccessKey(e.target.value)}
            placeholder="Access Key"
          />
          <TextInput
            type="password"
            placeholder="Secret Key"
            label="Secret Key"
            name="Secret Key"
            value={sourceSecretKey}
            onChange={(e) => setSourceSecretKey(e.target.value)}
          />
          <TextInput
            type="text"
            placeholder="Bucket Name"
            label="Bucket Name"
            name="Bucket Name"
            value={sourceBucketName}
            onChange={(e) => setSourceBucketName(e.target.value)}
          />
        </Box>
      </div>
      <div>
        <Typography variant="beta">Target S3 Account</Typography>
        <Box padding={4}>
          <TextInput
            type="text"
            placeholder="Access Key"
            label="Access Key"
            name="Access Key"
            value={targetAccessKey}
            onChange={(e) => setTargetAccessKey(e.target.value)}
          />
          <TextInput
            type="password"
            placeholder="Secret Key"
            label="Secret Key"
            name="Secret Key"
            value={targetSecretKey}
            onChange={(e) => setTargetSecretKey(e.target.value)}
          />
          <TextInput
            type="text"
            placeholder="Bucket Name"
            label="Bucket Name"
            name="Bucket Name"
            value={targetBucketName}
            onChange={(e) => setTargetBucketName(e.target.value)}
          />
        </Box>
      </div>
      <Box padding={4}>
        {migrationStarted ? <Button variant="success-light" onClick={handleMigration} loading>
        Migrating
        </Button> : migrationCompleted ? <Button variant="success" onClick={handleMigration} disbaled>
        Migrated Successfully
        </Button> : <Button variant="default" onClick={handleMigration}>
        Start Migration
        </Button>}
      </Box>
    </Box>
  );
};

export default CdnMigratePage;
