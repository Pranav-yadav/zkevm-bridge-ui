import { createUseStyles } from "react-jss";

import { Theme } from "src/styles/theme";

const useInfiniteScrollStyles = createUseStyles((theme: Theme) => ({
  root: {
    width: "100%",
  },
  spinnerWrapper: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    paddingTop: theme.spacing(3),
    width: "100%",
  },
}));

export default useInfiniteScrollStyles;
