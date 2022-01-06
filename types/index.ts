export enum Align {
  Left = "left",
  Center = "center",
  Right = "right"
}

export interface Column {
  key: string;
  scopedSlots: boolean;
  title: string;
  align?: Align;
}