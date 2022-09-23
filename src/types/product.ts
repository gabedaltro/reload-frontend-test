import { HealthGoals } from "./healthGoals";
import { Symptoms } from "./symptoms";

export interface Product {
  id: number;
  name: string;
  brand: string;
  score: number;
  price: number;
  capsuleAmount: number;
  isInPack: boolean;
  hasPrecaution: boolean;
  hasSynergy?: boolean;
  healthGoals: HealthGoals[];
  symptoms: Symptoms[];
}
