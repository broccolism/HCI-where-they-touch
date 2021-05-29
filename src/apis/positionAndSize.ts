import { Ref } from "react";
import { RefObject } from "react";
import { Pos, PosAndSize } from "../models/posAndSizeTypes";

const getPositionAndSize = (
  e: React.RefObject<HTMLDivElement>,
  name: string
): PosAndSize => {
  const rect: DOMRect = e!.current!.getBoundingClientRect();
  const left: number = rect.left;
  const right: number = rect.right;
  const top: number = rect.top;
  const bottom: number = rect.bottom;

  const centerX: number = (left + right) / 2;
  const centerY: number = (top + bottom) / 2;
  const center: Pos = { x: centerX, y: centerY };

  const width: number = right - left;
  const height: number = bottom - top;

  const posAndSize: PosAndSize = {
    name: name,
    left: left,
    right: right,
    top: top,
    bottom: bottom,
    center: center,
    width: width,
    height: height,
  };

  return posAndSize;
};

export default getPositionAndSize;
