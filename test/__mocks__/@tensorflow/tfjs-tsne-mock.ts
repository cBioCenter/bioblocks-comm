const tensorFlowTSNEMock = Promise.resolve({
  tsne: (data: any[]) => ({
    compute: async (iterations: number) => Promise.resolve(),
    coordsArray: async () => Promise.resolve(data),
    iterate: async () => Promise.resolve(),
  }),
});

export default tensorFlowTSNEMock;
