function sieveOfEratosthenes(n) {
  let primes = Array(n).fill(true);
  let result = [];

  primes[0] = false; // 0 is not prime
  primes[1] = false; // 1 is not prime
  
  for (let i = 2; i <= Math.sqrt(n); i++) {
    for (j = 2; i * j <= n; j++) {
      primes[i * j] = false;
    }
  }
  
  for (let i = 0; i < primes.length; i++) {
    if (primes[i]) result.push(i);
  }
  
  return result;
}

module.exports = {
  sieveOfEratosthenes
}
