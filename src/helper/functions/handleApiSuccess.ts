
export function handleApiSuccess(
  state: { loading: boolean; messageError?: string | null },
) {
  state.loading = false;
  if (typeof state.messageError !== "undefined") {
    state.messageError = null; // optional: reset error on success
  }
}
