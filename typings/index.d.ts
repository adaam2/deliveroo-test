declare namespace NodeJS {
  export interface Process {
    browser: boolean;
  }

  export interface ProcessEnv {
    RAZZLE_ASSETS_MANIFEST: string;
    RAZZLE_PUBLIC_DIR: string;
    NODE_ENV: 'development' | 'production';
    PORT?: string;
  }
}
