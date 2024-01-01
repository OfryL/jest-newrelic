const newRelic = require('newrelic');

global.describePatch = global.describe;
global.describe = async (name, fn) => newRelic.startWebTransaction(`suit/${name}`, async () => {
  const transaction = newRelic.getTransaction();
  const res = await global.describePatch(name, fn);
  if (transaction) transaction.end();
  return res;
});

global.itConcurrentPatch = global.it.concurrent;
global.itPatch = global.it;

global.it = (name, fn) => newRelic
  .startSegment(name, true, () => global.itPatch(name, fn));

global.it.concurrent = (name, fn) => newRelic
  .startSegment(name, true, () => global.itConcurrentPatch(name, fn));
