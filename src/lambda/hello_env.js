const { GREETING } = "Hi";

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: GREETING
  };
};
