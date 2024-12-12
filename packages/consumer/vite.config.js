console.log('No discovery:', !!process.env.NO_DEP_OPTIMIZER);
export default {
  optimizeDeps: {
    noDiscovery: !!process.env.NO_DEP_OPTIMIZER,
    // One possible workaround:
    // exclude: ['common-library'],
  },
};
