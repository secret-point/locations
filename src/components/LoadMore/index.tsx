import React, { Dispatch, SetStateAction } from "react";
import { Box, CircularProgress } from "@mui/material";
import useIntersectionObserver from "../../hook/useIntersectionObserver";

interface LoadMoreProps {
  onLoad: () => void;
  setStart: Dispatch<SetStateAction<number>>;
  isLoading: boolean;
}

export const LoadMore: React.FC<LoadMoreProps> = ({
  onLoad,
  setStart,
  isLoading,
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  useIntersectionObserver({
    target: ref,
    onIntersect: () => {
      if (!isLoading) {
        setStart((start) => start + 10);
        onLoad();
      }
    },
  });

  return (
    <Box
      ref={ref}
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        visibility: isLoading ? "visible" : "hidden",
        height: "30px",
        marginBottom: "0.5rem",
      }}
    >
      <CircularProgress size="30px" sx={{ mt: 3 }} />
    </Box>
  );
};
