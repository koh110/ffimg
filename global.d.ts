/// <reference types="@types/fabric" />

declare module fabric {
  interface Object {
    id?: string;
  }
  interface IAllFilters {
    Blur: {
        new (options?: { blur: number }): Blur;
    };
  }
}
