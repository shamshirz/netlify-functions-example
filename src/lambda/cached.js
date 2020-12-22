exports.handler = async (event, context) => {
  // 86,400 = seconds in 24 hours. Cache result for up to 24 hours in Netlify proxy
  return {
    statusCode: 200,
    headers: { 'Cache-Control': 'max-age=86400, public', },
    body: new Date().toDateString
  };
};
