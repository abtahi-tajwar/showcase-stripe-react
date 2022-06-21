const headers = {
    'Access-Control-Allow-Origin': process.env.ALLOWED_ORIGINS,
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
    'Content-Type': 'applicaiton/json'
};
const headers_post = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
}
const response = (body, statusCode=null) => ({
    statusCode: statusCode ? statusCode : 200,
    headers,
    body: JSON.stringify(body)
})
const redirect = (url, statusCode=null) => ({
    statusCode: statusCode ? statusCode : 301,
    headers: {
        "Location": url
    }
})
module.exports = { headers, response, redirect, headers_post }