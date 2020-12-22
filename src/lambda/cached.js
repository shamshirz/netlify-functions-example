exports.handler = async (event, context) => {
  // 86,400 = seconds in 24 hours. Cache result for up to 24 hours in Netlify proxy
  const dateString = new Date().toDateString
  return {
    statusCode: 200,
    headers: { 'Cache-Control': 'max-age=86400, public', },
    body: dateString
  };
};
