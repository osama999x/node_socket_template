const responseStatusCodes = {
    OK: 200, // Success
    CREATED: 201, // Resource created successfully
    ACCEPTED: 202, // Request accepted but processing is not complete

    BAD_REQUEST: 400, // Client-side error (invalid request)
    UNAUTHORIZED: 401, // Authentication required
    FORBIDDEN: 403, // Access denied
    NOT_FOUND: 404, // Resource not found
    CONFLICT: 409, // Conflict with the current state of the resource
    UNPROCESSABLE_ENTITY: 422, // Validation errors

    INTERNAL_SERVER_ERROR: 500, // Generic server error
    NOT_IMPLEMENTED: 501, // Functionality not implemented
    BAD_GATEWAY: 502, // Invalid response from an upstream server
    SERVICE_UNAVAILABLE: 503, // Server temporarily unavailable
    GATEWAY_TIMEOUT: 504, // Upstream server timeout
};

module.exports = responseStatusCodes;
