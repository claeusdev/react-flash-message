export type Type = "warning" | "default" | "success" | "error";

export type Width = "small" | "default" | "medium" | "large" | "full";

export type Position =
  | "tleft"
  | "default"
  | "tright"
  | "tcenter"
  | "bleft"
  | "bright"
  | "bcenter";

export type Timer = 1000 | 2000 | 3000;

export interface ToastProps {
  message: string;
  width: Width;
  type: Type;
  duration: Timer;
  position: Position;
  active: boolean;
  setActive: (active: boolean) => void;
}
