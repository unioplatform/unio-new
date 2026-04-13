import { AxiosInstance, AxiosError } from "axios";
import { toast } from "sonner";

export class AppError extends Error {
  status?: number;
  errorCode?: string;

  constructor(message: string, meta: any = {}) {
    super(message);
    this.name = "AppError";
    this.status = meta.status;
    this.errorCode = meta.errorCode;
  }
}

export function setupInterceptors(instance: AxiosInstance, onUnauthorized?: () => void) {
  instance.interceptors.response.use(
    (res) => res,
    (error: AxiosError) => {
      const status = error.response?.status;
      const data = error.response?.data as any;

      const appErr = new AppError(data?.message || "Something went wrong", {
        status,
        errorCode: data?.errorCode,
      });

      // Handle 401s (but ignore if we are already trying to refresh)
      const isRefreshPath = error.config?.url?.includes("/auth/refresh");
      if (status === 401 && !isRefreshPath && onUnauthorized) {
        onUnauthorized();
      }

      // Handle 500s globally
      if (status && status >= 500) {
        toast.error("Unio Server Error. We're on it!");
      }

      return Promise.reject(appErr);
    }
  );
}