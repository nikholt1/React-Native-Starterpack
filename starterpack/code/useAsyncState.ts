import { useCallback, useState } from "react";

type AsyncRunner<T> = () => Promise<T>;

type UseAsyncStateResult<T> = {
  value: T | null;
  loading: boolean;
  error: Error | null;
  run: () => Promise<T>;
};

export const useAsyncState = <T>(runner: AsyncRunner<T>): UseAsyncStateResult<T> => {
  const [value, setValue] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const run = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const nextValue = await runner();
      setValue(nextValue);
      return nextValue;
    } catch (caughtError) {
      const normalizedError = caughtError instanceof Error ? caughtError : new Error("Unknown async error");
      setError(normalizedError);
      throw normalizedError;
    } finally {
      setLoading(false);
    }
  }, [runner]);

  return { value, loading, error, run };
};
