import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import type { AnyAction } from '@reduxjs/toolkit';

export function handleApiError<StateType>(
  state: StateType & { messageError: string | null; loading: boolean },
  action: AnyAction
) {
  const err = action.payload as FetchBaseQueryError & {
    data?: { message?: string };
  };

  state.messageError = err?.data?.message ?? "Unknown error";
  state.loading = false;
}
