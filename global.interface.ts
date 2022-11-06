export interface AppData {
  id: string;
  name: string;
  url: string;
  region: string;
  created: string;
  environment: string;
}

export interface AppReducer {
  app: AppData;
}
