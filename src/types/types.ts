export interface Ship {
    title: string;
    description: string;
    icons: {
      large: string;
    };
    level: number;
    type: {
      name: string;
      title: string;
    };
    nation: {
      name: string;
      title: string;
      color: string;
    };
  }
  