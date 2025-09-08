import { Snackbar, Alert } from "@mui/material";
import type { AppToasterProps } from "./AppToaster.types";
import i18n from "i18next";

const AppToast = ({ open, message, severity = "info", onClose, duration = 2000 }: AppToasterProps) => {
    const lang = i18n.language;
    console.log("lang", lang);

    return (
    <Snackbar
      open={open}
      autoHideDuration={duration}
      onClose={onClose}
      anchorOrigin={{
        vertical: "top",
        horizontal: lang === "ar" ? "left" : "right",
      }}
    >
      <Alert onClose={onClose} severity={severity} variant="filled"
      sx={{
        direction: "ltr",
      }}
      >
        {message}
      </Alert>
    </Snackbar>
    );
};

export default AppToast;