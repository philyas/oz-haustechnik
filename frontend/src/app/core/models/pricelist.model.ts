export interface PricelistOption {
  value: string;
  label: string;
  priceModifier: number;
}

export interface PricelistParameterSelect {
  id: string;
  label: string;
  type: 'select';
  required: boolean;
  options: PricelistOption[];
}

export interface PricelistParameterRange {
  id: string;
  label: string;
  type: 'range';
  unit?: string;
  required: boolean;
  min: number;
  max: number;
  step: number;
  default: number;
  pricePerUnit: number;
}

export type PricelistParameter = PricelistParameterSelect | PricelistParameterRange;

export interface PricelistService {
  id: string;
  label: string;
  description: string;
  basePrice: number;
  parameters: PricelistParameter[];
  note?: string;
}

export interface Pricelist {
  currency: string;
  validFrom: string;
  services: PricelistService[];
}

export type ParameterValues = Record<string, string | number>;
