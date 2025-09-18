/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, type ReactNode } from "react";
import { Box } from "@mui/material";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import AppIcon from "../AppIcon/AppIcon";

interface AppHorizontalScrollerProps {
  children: ReactNode;
  step?: number;      // how much to scroll on each arrow click (px)
  gap?: number;       // gap between items
  containerSx?: any;  // override for the scroll container
  itemSx?: any;       // override applied to each child wrapper
}

export default function AppHorizontalScroller({
  children,
  step = 280,
  gap = 16,
  containerSx,
  itemSx,
}: AppHorizontalScrollerProps) {
  // REF must point to the scrollable element (the element with overflowX)
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const scrollBy = (amount: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollTo({ left: el.scrollLeft + amount, behavior: "smooth" });
  };

  return (
    <Box
        sx={{
            width: "100%",             // take all available space
            maxWidth: { xs: 300, md: 500, lg: 900 }, // limit max width per breakpoint
            position: "relative",
            mx: "auto",                // center horizontally
        }}
    >
      {/* Scrollable container — attach the ref here */}
      <Box
        ref={scrollerRef}
        sx={{
          overflowX: "auto",
          WebkitOverflowScrolling: "touch",
          display: "flex",
          gap: `${gap}px`,
          scrollSnapType: "x mandatory",
          scrollBehavior: "smooth",
          // make sure children do not shrink so overflow happens
          "& > *": {
            flex: "0 0 auto",
            scrollSnapAlign: "start",
            ...itemSx,
          },
          // hide native scrollbar if you want:
          "&::-webkit-scrollbar": { height: 8, display: "none" },
          scrollbarWidth: "none",
          ...containerSx,
        }}
      >
        {children}
      </Box>

      {/* Controls — you can style/position these differently (overlay, center, etc.) */}
      <Box sx={{ display: "flex", gap: 3, justifyContent: "center", mt: 2, direction: "ltr" }}>
        <AppIcon 
        onClick={() => scrollBy(-step)}
        tooltip="Previous"
        icon={<IoMdArrowRoundBack />}
        />
        <AppIcon 
        onClick={() => scrollBy(step)}
        tooltip="Next"
        icon={<IoMdArrowRoundForward />}
        />
      </Box>
    </Box>
  );
}