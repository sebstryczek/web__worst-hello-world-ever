# Usage

# Database

## Usage
package.json - script to use sequelize as local package

Use `npm run sequelize` to see all commands.

Create model with migration
```
npm run sequelize model:generate -- --name Entry --attributes name:string
// types: http://docs.sequelizejs.com/variable/index.html#static-variable-DataTypes
```

Revert migration
```
npm run sequelize db:migrate:undo
```

Revert all migrations
```
npm run sequelize db:migrate:undo:all
```
#

## Directories structure:
`package.json` - stanard npm file, one special script for sequelize:
```
"sequelize": "sequelize --options-path=src/database/sequelize.js",
```
`src/config` - map env to config (also db connection configuration)

`src/database/` - all database files here

#
