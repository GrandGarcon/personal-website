const isClientSide = () => !!(
  (typeof window !== 'undefined' &&
  window.document && window.document.createElement)
)

export { isClientSide }
