exports.handler = async (event) => {
    const name = "Kalai Arasi Jayakumar"; 
    const keyword = event.queryStringParameters && event.queryStringParameters.keyword ? event.queryStringParameters.keyword : "default";

    const responseMessage = `${name} says ${keyword}`;

    return {
        statusCode: 200,
        body: JSON.stringify(responseMessage),
    };
};
