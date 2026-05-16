export class ApiResponse<T> {
  readonly _isApiResponse = true;

  data: T;
  message?: string;
  meta?: any;

  constructor(data: T, message?: string, meta?: any) {
    this.data = data;
    this.message = message;
    if (meta) {
      this.meta = meta;
    }
  }
}
