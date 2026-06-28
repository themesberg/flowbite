declare interface PluginOptions {
  datatables?: boolean;
  charts?: boolean;
  forms?: boolean;
  tooltips?: boolean;
}
declare function plugin(options?: PluginOptions): { handler: () => void };
declare namespace plugin {
  function handler(): void;
}
export = plugin;
