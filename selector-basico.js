const selectPagesOfResults = appState => {
  const { results } = appState;
  if (!results || !results.length) {
    return 0;
  }
  return Math.ceil(results.length / 20);
};
