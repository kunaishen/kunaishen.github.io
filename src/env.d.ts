interface ImportMetaEnv {
  readonly PUBLIC_API_WEATHER_KEY: string;
  readonly PUBLIC_CITY: string; 
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}