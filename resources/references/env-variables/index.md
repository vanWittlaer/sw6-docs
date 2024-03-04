---
nav:
  title: Environment Variables
  position: 25

---

# Environment Variables

## Overview

Many features of Shopware are controlled by environment variables.

Refer to the [Symfony docs](https://symfony.com/doc/current/configuration.html#configuration-based-on-environment-variables) for a detailed explanation of how environment variables are set and processed.

The purpose of this chapter is to give you a comprehensive overview of all the environment variables, how they are used and what their possible values are within Shopware.

### Default Values
Note that environment variables by itself do not have default values. It is a good practice to initialize all environment variables in the `.env` file of your project. 

## Build and Installation

| Variable | Values | Description                          |
| :--- | :--- |:----------------------------------------------|
| SHOPWARE_SKIP_ASSEST_COPY | (boolean) | Whether to skip the copy of assets during the `build-administration.sh` and `build-storefront.sh` commands.
| SHOPWARE_SKIP_THEME_COMPILE | (boolean) |
| SHOPWARE_SKIP_BUNDLE_DUMP | (boolean) |
| SHOPWARE_SKIP_FEATURE_DUMP | (boolean) |


## Shopware Runtime

| Variable | Values                                | Description                                                                                                                                   |
| :--- |:--------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------|
| APP_ENV | (string)                              | Defines the environment configuriation to be used. Usually one of 'prod*, 'stage' or 'dev' or another, user defined environment.
| APP_SECRET | (string)                              | Used by Symfony to encrypt sensitive data internally. Make sure to use unique secrets on your web servers, in particular in production, and keep them secret. Usually the APP_SECRET is generated during system installation. Otherwies use a command like `openssl rand -hex 32` to generate a new value.
| APP_URL | (string)                              | Defines the base url to be used by your Shopware installation.<br/>Possible values: 'prod', 'stage' or 'dev', or a user defined environment.
| INSTANCE_ID | (string)                              | Generated during system installation. Do not change.
| SHOPWARE_CACHE_ID | (string)                              ||
| SHOPWARE_CDN_STRATEGY_DEFAULT | 'id'\|'filename'\|'physical_filename' || 

## ElasticSearch

| Variable | Values | Description |
| :--- | :--- | :--- |
| OPENSEARCH_URL | (string) ||
| SHOPWARE_ES_ENABLED | (boolean) ||
| SHOPWARE_ES_INDEXING_ENABLED | (boolean) ||
| SHOPWARE_ES_INDEX_PREFIX | (string) ||
| SHOPWARE_ES_THROW_EXCEPTION | (boolean) ||

## Symfony

Variable | Values   | Description                                                                                                                                   |
| :--- |:---------|:--------
| LOCK_DSN | (string) | Recommended value: 'flock' (file locking)