export class ExceptionFactory {
  static create(errorType: string, errorMessage: string) {
    let Exception = EXCEPTION_TYPES.find(exception => exception.code === errorType);
    if (!Exception) {
      Exception = StandardException;
    }
    return new Exception(errorMessage);
  }
}

class StandardException extends Error {
  static code = 'STANDARD_EXCEPTION'
  constructor(message: string) {
    super(message);
  }
}

export class UnauthorizedException extends StandardException {
  static code = 'UNAUTHORIZED'
  constructor(message: string) {
    super(message);
  }
}

export class BadRequestException extends StandardException {
  static code = 'BAD_REQUEST';
  constructor(message: string) {
    super(message);
  }
}

const EXCEPTION_TYPES = [
  StandardException,
  UnauthorizedException,
  BadRequestException,
];