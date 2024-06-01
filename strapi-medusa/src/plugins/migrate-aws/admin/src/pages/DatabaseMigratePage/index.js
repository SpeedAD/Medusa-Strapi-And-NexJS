// @ts-nocheck
/*
 *
 * DatabaseMigratePage
 *
 */

import React, { useState } from "react";
// import PropTypes from 'prop-types';
import pluginId from "../../pluginId";
import {
  TextInput,
  Button,
  Box,
  Typography,
  Combobox,
  ComboboxOption,
  Link,
  BaseHeaderLayout,
} from "@strapi/design-system";
import { ArrowLeft } from "@strapi/icons";
const DatabaseMigratePage = () => {
  const [file, setFile] = useState("");
  const [databaseName, setDatabaseName] = useState("");
  const [databaseType, setDatabaseType] = useState("");
  const [migrationStarted, setMigrationStarted] = useState(false);
  const [migrationCompleted, setMigrationCompleted] = useState(false);

  const handleMigration = async () => {
    // Send the inputted access keys and secret keys to your Strapi backend
    const migrationData = {
      file,
      databaseName,
      databaseType,
    };
    console.log("handling : : ", migrationData);
    setMigrationStarted(true);
  };
  return (
    <Box padding={10} shadow="filterShadow">
      <BaseHeaderLayout
        navigationAction={
          <Link startIcon={<ArrowLeft />} to="/plugins/migrate-aws">
            Go back
          </Link>
        }
        title="Database Migration"
        as="h1"
      />
      <div>
        <Box padding={4}>
          <Typography variant="beta">Dump file</Typography>
          <br />
          <br />

          <input
            type="file"
            label="Db dump file"
            // name="Db dump file"
            value={file}
            onChange={(e) => setFile(e.target.value)}
            placeholder=""
          />
          <br />
          <br />
          <br />
          <br />
          <Combobox
            placeholder="Database type to migrate to"
            label="Datbase type"
            disabled={false}
            onChange={(e) => setDatabaseType(e.target.value)}
          >
            <ComboboxOption value={databaseType}>Postgres</ComboboxOption>
            <ComboboxOption value={databaseType}>MySQL</ComboboxOption>
          </Combobox>
          <br />
          <br />
          <TextInput
            type="text"
            label="Database Name"
            name="Database_Name"
            value={databaseName}
            onChange={(e) => setDatabaseName(e.target.value)}
            placeholder="Database Name"
          />
        </Box>
      </div>
      <Box padding={4}>
        {migrationStarted ? (
          <Button variant="success-light" onClick={handleMigration} loading>
            Migrating
          </Button>
        ) : migrationCompleted ? (
          <Button variant="success" onClick={handleMigration} disbaled>
            Migrated Successfully
          </Button>
        ) : (
          <Button variant="default" onClick={handleMigration}>
            Start Migration
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default DatabaseMigratePage;
