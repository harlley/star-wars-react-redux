export function resourceEndpoint(url) {
  return new URL(url)['pathname'].replace('/api', '');
}

export function format(population) { 
  if (population !== 'unknown') {
    return parseInt(population, 10).toLocaleString();
  }
  return `${population} number`;
}