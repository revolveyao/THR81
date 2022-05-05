export declare const checkGit: (cwd: string) => boolean;
export declare const getGitCreatedTime: (filepath: string) => Promise<number>;
export declare const isGitIndex: (filepath: string) => Promise<boolean>;
