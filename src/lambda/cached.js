exports.handler = async (event, context) => {
  // 86,400 = seconds in 24 hours. Cache result for up to 24 hours in Netlify proxy

  // current timestamp in milliseconds
  let ts = Date.now();

  let date_ob = new Date(ts);
  let date = date_ob.getDate();
  let month = date_ob.getMonth() + 1;
  let year = date_ob.getFullYear();

  // prints date & time in YYYY-MM-DD format
  console.log(year + "-" + month + "-" + date);

  return {
    statusCode: 200,
    headers: { 'Cache-Control': 'max-age=86400, public', },
    body: year + "-" + month + "-" + date
  };
};
