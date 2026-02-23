type HeardFrom = "INSTAGRAM" | "FACEBOOK" | "TELEGRAM" | "YOUTUBE" | "OTHER";

export interface IRequests {
  id: number;
  name: string;
  number: string;
  about: string;
  heardFrom: HeardFrom;
  createdAt: string;
}