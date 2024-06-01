// @ts-nocheck
/*
 *
 * HomePage
 *
 */

import React from "react";
// import PropTypes from 'prop-types';
import { LinkButton, Box, Typography, Flex, BaseHeaderLayout } from "@strapi/design-system";

const HomePage = () => {
  return (
    <Box padding={10} shadow="filterShadow">
      <BaseHeaderLayout title="Your daily data Migrator" subtitle="We like to Migrate-Migrate, you like to? Migrate!" as="h1" />
      <Box padding={4} style={{textAlign: "center"}}>
        <Typography variant="alpha">
          What would you like to migrate today?
        </Typography>
      </Box>
      <Box padding={4}>
      <Flex gap={10} style={{justifyContent: "center"}}>
          <LinkButton variant="secondary" to="/plugins/migrate-aws/migrate-s3">Migrate S3 bucket objects</LinkButton>
          <LinkButton variant="secondary" to="/plugins/migrate-aws/migrate-database">Migrate database</LinkButton>
          <LinkButton variant="secondary" to="/plugins/migrate-aws/migrate-cdn">Update CDN URLs</LinkButton>
        </Flex>
      </Box>
    </Box>
  );
};

export default HomePage;
