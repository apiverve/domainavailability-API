declare module '@apiverve/domainavailability' {
  export interface domainavailabilityOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface domainavailabilityResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
  }

  export default class domainavailabilityWrapper {
    constructor(options: domainavailabilityOptions);

    execute(callback: (error: any, data: domainavailabilityResponse | null) => void): Promise<domainavailabilityResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: domainavailabilityResponse | null) => void): Promise<domainavailabilityResponse>;
    execute(query?: Record<string, any>): Promise<domainavailabilityResponse>;
  }
}
