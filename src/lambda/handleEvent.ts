export function handler(event: Object): Object {
    console.log('event 👉', event);

    return {
        body: JSON.stringify({ message: 'Successful lambda invocation' }),
        statusCode: 200,
    };
}
