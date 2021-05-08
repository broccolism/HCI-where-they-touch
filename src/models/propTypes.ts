export interface SizeProps {
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
}

type AxisType = "start" | "center" | "end" | "flex-end" | "space-between";

export interface AxisProps {
  mainAxisAlignment?: AxisType;
  crossAxisAlignment?: AxisType;
}
