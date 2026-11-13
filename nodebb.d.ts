declare module 'express-serve-static-core' {
  interface Request {
    // nodebb adds uid
    uid: number;
  }
}

declare global {
  namespace NodeBB {
    interface Nodebb {
      require<T>(module: string): T;
    }

    interface App {
      require<T>(module: string): T;
    }

    interface Config {
      relative_path: string,
    }
  }

  const nodebb: NodeBB.Nodebb;
  const app: NodeBB.App;
  const config: NodeBB.Config;
}

export {};
