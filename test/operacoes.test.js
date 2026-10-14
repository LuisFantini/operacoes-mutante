// test/operacoes.test.js
const {
  soma, subtracao, multiplicacao, divisao, potencia, raizQuadrada, restoDivisao,
  fatorial, mediaArray, somaArray, maximoArray, minimoArray, valorAbsoluto,
  arredondar, isPar, isImpar, calcularPorcentagem, aumentarPorcentagem,
  diminuirPorcentagem, inverterSinal, seno, cosseno, tangente, logaritmoNatural,
  logaritmoBase10, arredondarParaBaixo, arredondarParaCima, hipotenusa,
  grausParaRadianos, radianosParaGraus, mdc, mmc, isPrimo, fibonacci,
  produtoArray, clamp, isDivisivel, celsiusParaFahrenheit, fahrenheitParaCelsius,
  inverso, areaCirculo, areaRetangulo, perimetroRetangulo, isMaiorQue,
  isMenorQue, isEqual, medianaArray, dobro, triplo, metade
} = require('../src/operacoes');

describe('Operações Mutante - Cobertura Máxima (Stryker)', () => {

  describe('Bloco 1: Operações Básicas', () => {
    test('soma', () => {
      expect(soma(2, 3)).toBe(5);
      expect(soma(-2, -3)).toBe(-5);
    });
    test('subtracao', () => {
      expect(subtracao(5, 2)).toBe(3);
      expect(subtracao(2, 5)).toBe(-3);
    });
    test('multiplicacao', () => {
      expect(multiplicacao(3, 4)).toBe(12);
      expect(multiplicacao(5, 0)).toBe(0);
      expect(multiplicacao(-3, -4)).toBe(12);
    });
    test('divisao', () => {
      expect(divisao(10, 2)).toBe(5);
      expect(divisao(-10, 2)).toBe(-5);
      expect(divisao(0, 5)).toBe(0);
      expect(() => divisao(10, 0)).toThrow('Divisão por zero não é permitida.');
    });
    test('potencia', () => {
      expect(potencia(2, 3)).toBe(8);
      expect(potencia(5, 0)).toBe(1);
      expect(potencia(7, 1)).toBe(7);
    });
    test('raizQuadrada', () => {
      expect(raizQuadrada(16)).toBe(4);
      expect(raizQuadrada(0)).toBe(0);
      expect(raizQuadrada(1)).toBe(1);
      expect(() => raizQuadrada(-1)).toThrow('Não é possível calcular a raiz quadrada de um número negativo.');
    });
    test('restoDivisao', () => {
      expect(restoDivisao(10, 3)).toBe(1);
      expect(restoDivisao(-10, 3)).toBe(-1);
    });
    test('fatorial', () => {
      expect(fatorial(0)).toBe(1);
      expect(fatorial(1)).toBe(1);
      expect(fatorial(2)).toBe(2);
      expect(fatorial(3)).toBe(6);
      expect(fatorial(4)).toBe(24);
      expect(fatorial(5)).toBe(120);
      expect(() => fatorial(-1)).toThrow('Fatorial não é definido para números negativos.');
    });
    test('mediaArray', () => {
      expect(mediaArray([10, 20, 30])).toBe(20);
      expect(mediaArray([8])).toBe(8);
      expect(mediaArray([])).toBe(0);
    });
    test('somaArray', () => {
      expect(somaArray([1, 2, 3])).toBe(6);
      expect(somaArray([])).toBe(0);
    });
  });

  describe('Bloco 2: Operações em Arrays e Checagens', () => {
    test('maximoArray e minimoArray', () => {
      expect(maximoArray([1, 50, 10])).toBe(50);
      expect(minimoArray([10, 2, 100])).toBe(2);
      expect(maximoArray([8])).toBe(8);
      expect(minimoArray([8])).toBe(8);
      expect(() => maximoArray([])).toThrow('Array vazio не possui valor máximo.');
      expect(() => minimoArray([])).toThrow('Array vazio не possui valor mínimo.');
    });
    test('valorAbsoluto e arredondamentos', () => {
      expect(valorAbsoluto(-5)).toBe(5);
      expect(valorAbsoluto(5)).toBe(5);
      expect(arredondar(9.8)).toBe(10);
      expect(arredondar(2.5)).toBe(3);
    });
    test('isPar e isImpar', () => {
      expect(isPar(100)).toBe(true);
      expect(isPar(3)).toBe(false);
      expect(isPar(0)).toBe(true);
      expect(isPar(-4)).toBe(true);
      
      expect(isImpar(7)).toBe(true);
      expect(isImpar(4)).toBe(false);
      expect(isImpar(0)).toBe(false);
      expect(isImpar(-3)).toBe(true);
    });
    test('porcentagens', () => {
      expect(calcularPorcentagem(50, 200)).toBe(100);
      expect(calcularPorcentagem(0, 200)).toBe(0);
      expect(aumentarPorcentagem(100, 10)).toBeCloseTo(110);
      expect(aumentarPorcentagem(100, 0)).toBe(100);
      expect(diminuirPorcentagem(100, 10)).toBeCloseTo(90);
      expect(diminuirPorcentagem(100, 100)).toBe(0);
    });
    test('inverterSinal', () => {
      expect(inverterSinal(42)).toBe(-42);
      expect(inverterSinal(-42)).toBe(42);
    });
  });

  describe('Bloco 3: Funções Trigonométricas e Logarítmicas', () => {
    test('trigonometria', () => {
      expect(seno(0)).toBe(0);
      expect(seno(Math.PI / 2)).toBeCloseTo(1);
      expect(cosseno(0)).toBe(1);
      expect(cosseno(Math.PI)).toBeCloseTo(-1);
      expect(tangente(0)).toBe(0);
      expect(tangente(Math.PI / 4)).toBeCloseTo(1);
    });
    test('logaritmos', () => {
      expect(logaritmoNatural(Math.E)).toBe(1);
      expect(logaritmoNatural(1)).toBe(0);
      expect(logaritmoBase10(100)).toBe(2);
      expect(logaritmoBase10(1)).toBe(0);
    });
    test('arredondamentos específicos', () => {
      expect(arredondarParaBaixo(5.9)).toBe(5);
      expect(arredondarParaBaixo(-1.2)).toBe(-2);
      expect(arredondarParaCima(5.1)).toBe(6);
      expect(arredondarParaCima(-1.2)).toBe(-1);
    });
    test('geometria e conversoes angulares', () => {
      expect(hipotenusa(3, 4)).toBe(5);
      expect(hipotenusa(0, 5)).toBe(5);
      expect(grausParaRadianos(180)).toBeCloseTo(Math.PI);
      expect(grausParaRadianos(0)).toBe(0);
      expect(radianosParaGraus(Math.PI)).toBeCloseTo(180);
      expect(radianosParaGraus(0)).toBe(0);
    });
  });

  describe('Bloco 4: Teoria dos Números e Sequências', () => {
    test('MDC e MMC', () => {
      expect(mdc(10, 5)).toBe(5);
      expect(mdc(18, 12)).toBe(6);
      expect(mmc(10, 5)).toBe(10);
      expect(mmc(3, 7)).toBe(21);
    });
    test('isPrimo', () => {
      expect(isPrimo(7)).toBe(true);
      expect(isPrimo(1)).toBe(false);
      expect(isPrimo(0)).toBe(false);
      expect(isPrimo(9)).toBe(false);
    });
    test('fibonacci', () => {
      expect(fibonacci(10)).toBe(55);
      expect(fibonacci(0)).toBe(0);
      expect(fibonacci(1)).toBe(1);
    });
    test('produtoArray', () => {
      expect(produtoArray([2, 3, 4])).toBe(24);
      expect(produtoArray([])).toBe(1);
      expect(produtoArray([7])).toBe(7);
      expect(produtoArray([-2, 3])).toBe(-6);
      expect(produtoArray([2, 0, 4])).toBe(0);
    });
    test('clamp', () => {
      expect(clamp(5, 0, 10)).toBe(5);
      expect(clamp(-1, 0, 10)).toBe(0);
      expect(clamp(11, 0, 10)).toBe(10);
      expect(clamp(0, 0, 10)).toBe(0);
      expect(clamp(10, 0, 10)).toBe(10);
      expect(clamp(0.1, 0, 10)).toBe(0.1);
      expect(clamp(-5, -10, -2)).toBe(-5);
    });
    test('isDivisivel', () => {
      expect(isDivisivel(10, 2)).toBe(true);
      expect(isDivisivel(10, 3)).toBe(false);
      expect(isDivisivel(-10, 2)).toBe(true);
    });
    test('temperatura', () => {
      expect(celsiusParaFahrenheit(0)).toBe(32);
      expect(celsiusParaFahrenheit(100)).toBe(212);
      expect(celsiusParaFahrenheit(-40)).toBe(-40);
      expect(fahrenheitParaCelsius(32)).toBe(0);
      expect(fahrenheitParaCelsius(212)).toBe(100);
      expect(fahrenheitParaCelsius(-40)).toBe(-40);
    });
    test('inverso', () => {
      expect(inverso(4)).toBe(0.25);
      expect(inverso(-2)).toBe(-0.5);
      expect(() => inverso(0)).toThrow('Não é possível inverter o número zero.');
    });
  });

  describe('Bloco 5: Geometria e Lógica de Comparação', () => {
    test('area e perimetro', () => {
      expect(areaCirculo(10)).toBeCloseTo(314.159);
      expect(areaCirculo(0)).toBe(0);
      expect(areaRetangulo(5, 4)).toBe(20);
      expect(areaRetangulo(5, 0)).toBe(0);
      expect(perimetroRetangulo(5, 4)).toBe(18);
      expect(perimetroRetangulo(0, 0)).toBe(0);
    });
    test('comparações', () => {
      expect(isMaiorQue(10, 5)).toBe(true);
      expect(isMaiorQue(5, 5)).toBe(false);
      expect(isMaiorQue(3, 8)).toBe(false);
      
      expect(isMenorQue(5, 10)).toBe(true);
      expect(isMenorQue(5, 5)).toBe(false);
      expect(isMenorQue(8, 3)).toBe(false);
      
      expect(isEqual(7, 7)).toBe(true);
      expect(isEqual(5, 6)).toBe(false);
      expect(isEqual(5, '5')).toBe(false);
    });
    test('medianaArray', () => {
      expect(medianaArray([1, 2, 3, 4, 5])).toBe(3);
      expect(medianaArray([1, 2, 3, 4])).toBe(2.5);
      expect(medianaArray([5, 1, 3])).toBe(3);
      expect(medianaArray([2, 2, 8, 8])).toBe(5);
      
      const arr = [5, 1, 3];
      medianaArray(arr);
      expect(arr).toEqual([5, 1, 3]);
      
      expect(() => medianaArray([])).toThrow('Array vazio не possui mediana.');
    });
    test('dobro, triplo, metade', () => {
      expect(dobro(10)).toBe(20);
      expect(dobro(0)).toBe(0);
      expect(triplo(10)).toBe(30);
      expect(triplo(-2)).toBe(-6);
      expect(metade(20)).toBe(10);
      expect(metade(5)).toBe(2.5);
    });
  });
});