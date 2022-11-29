const fetch = require('isomorphic-unfetch');

const SHORTCUT_TOKEN = process.env.SHORTCUT_TOKEN;

const commonHeader = { 'Content-Type': 'application/json', 'Shortcut-Token': SHORTCUT_TOKEN };

const updateBulkStories = (ids) => async (data) => {
  const response = await fetch('https://api.app.shortcut.com/api/v3/stories/bulk', {
    method: 'put',
    body: JSON.stringify({
      story_ids: ids,
      ...data,
    }),
    headers: commonHeader,
  });

  console.log(`response is `, await response.json());
};

module.exports = updateBulkStories;
