const { mapObjValues } = require('../utils');

const withAuth = resolverMap =>
  mapObjValues(resolverMap, resolver =>
    mapObjValues(resolver, method =>
      (obj, args, context, info) => {
        if (!context.user) {
          throw new Error('You are not authenticated!')
        }

        return method(obj, args, context, info);
      }
    )
  )

module.exports = withAuth;
