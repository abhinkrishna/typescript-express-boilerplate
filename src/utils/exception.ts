export class Exception extends Error {
    public statusCode: number;
    public statusMessage: string;
    public message: string;
    public error: any;
    constructor(statusCode: number, statusMessage: string, message: string, error?: any) {
        super(message);
        this.statusCode = statusCode;
        this.statusMessage = statusMessage;
        this.message = message;
        this.error = error || null;
        Error.captureStackTrace(this, Exception);
    }
}

/** Error Responses */
export class Exception400 extends Exception {
    // The server did not understand the request.
    constructor(message: string, error?: any) {
        super(400, "Bad Request", message, error ? error : {});
    }
}

export class Exception401 extends Exception {
    // The requested page needs a username and a password.
    constructor(message: string, error?: any) {
        super(401, "Unauthorized", message, error ? error : {});
    }
}

export class Exception402 extends Exception {
    // You can not use this code yet.
    constructor(message: string, error?: any) {
        super(402, "Payment Required", message, error ? error : {});
    }
}

export class Exception403 extends Exception {
    // Access is forbidden to the requested page.
    constructor(message: string, error?: any) {
        super(403, "Forbidden", message, error ? error : {});
    }
}

export class Exception404 extends Exception {
    // The server can not find the requested page.
    constructor(message: string, error?: any) {
        super(404, "Not Found", message, error ? error : {});
    }
}

export class Exception405 extends Exception {
    // The method specified in the request is not allowed.
    constructor(message: string, error?: any) {
        super(405, "Method Not Allowed", message, error ? error : {});
    }
}

export class Exception406 extends Exception {
    // The server can only generate a response that is not accepted by the client.
    constructor(message: string, error?: any) {
        super(406, "Not Acceptable", message, error ? error : {});
    }
}

export class Exception407 extends Exception {
    // You must authenticate with a proxy server before this request can be served.
    constructor(message: string, error?: any) {
        super(407, "Proxy Authentication Required", message, error ? error : {});
    }
}

export class Exception408 extends Exception {
    // The request took longer than the server was prepared to wait.
    constructor(message: string, error?: any) {
        super(408, "Request Timeout", message, error ? error : {});
    }
}

export class Exception409 extends Exception {
    // The request could not be completed because of a conflict.
    constructor(message: string, error?: any) {
        super(409, "Conflict", message, error ? error : {});
    }
}

export class Exception410 extends Exception {
    // The requested page is no longer available .
    constructor(message: string, error?: any) {
        super(410, "Gone", message, error ? error : {});
    }
}

export class Exception411 extends Exception {
    // The "Content-Length" is not defined. The server will not accept the request without it .
    constructor(message: string, error?: any) {
        super(411, "Length Required", message, error ? error : {});
    }
}

export class Exception412 extends Exception {
    // The pre condition given in the request evaluated to false by the server.
    constructor(message: string, error?: any) {
        super(412, "Precondition Failed", message, error ? error : {});
    }
}

export class Exception413 extends Exception {
    // The server will not accept the request, because the request entity is too large.
    constructor(message: string, error?: any) {
        super(413, "Request Entity Too Large", message, error ? error : {});
    }
}

export class Exception414 extends Exception {
    // The server will not accept the request, because the url is too long.
    // Occurs when you convert a "post" request to a "get" request with a long query information .
    constructor(message: string, error?: any) {
        super(414, "Request-url Too Long", message, error ? error : {});
    }
}

export class Exception415 extends Exception {
    // The server will not accept the request, because the mediatype is not supported .
    constructor(message: string, error?: any) {
        super(415, "Unsupported Media Type", message, error ? error : {});
    }
}

export class Exception416 extends Exception {
    // The requested byte range is not available and is out of bounds.
    constructor(message: string, error?: any) {
        super(416, "Requested Range Not Satisfiable", message, error ? error : {});
    }
}

export class Exception417 extends Exception {
    // The expectation given in an Expect request-header field could not be met by this server.
    constructor(message: string, error?: any) {
        super(417, "Expectation Failed", message, error ? error : {});
    }
}

export class Exception500 extends Exception {
    // The request was not completed. The server met an unexpected condition.
    constructor(message: string, error?: any) {
        super(500, "Internal Server Error", message, error = {});
    }
}

export class Exception501 extends Exception {
    // The request was not completed. The server met an unexpected condition.
    constructor(message: string, error?: any) {
        super(501, "Not Implemented", message, error = {});
    }
}

export class Exception502 extends Exception {
    // The request was not completed. The server received an invalid response from the upstream server.
    constructor(message: string, error?: any) {
        super(502, "Bad Gateway", message, error = {});
    }
}

export class Exception503 extends Exception {
    // The request was not completed. The server is temporarily overloading or down.
    constructor(message: string, error?: any) {
        super(503, "Service Unavailable", message, error = {});
    }
}

export class Exception504 extends Exception {
    // The gateway has timed out.
    constructor(message: string, error?: any) {
        super(504, "The gateway has timed out.", message, error = {});
    }
}

export class Exception505 extends Exception {
    // The server does not support the "http protocol" version.
    constructor(message: string, error?: any) {
        super(505, "HTTP Version Not Supported", message, error = {});
    }
}
