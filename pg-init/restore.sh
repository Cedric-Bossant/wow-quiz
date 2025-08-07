#!/bin/bash
set -e

echo "🔄 Attente que Postgres soit prêt..."
until pg_isready -U "$POSTGRES_USER" -d "$POSTGRES_DB"; do
  sleep 1
done

echo "📦 Import du dump..."
pg_restore --no-owner --username="$POSTGRES_USER" --dbname="$POSTGRES_DB" /docker-entrypoint-initdb.d/strapi_dump.pg16.backup
