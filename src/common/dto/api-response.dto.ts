export class ApiResponse<T> {
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
