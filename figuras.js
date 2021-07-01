// Código cuadrado
console.group("Cuadrado")
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");
const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado mide: " + perimetroCuadrado + "cm");
const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado mide: " + areaCuadrado + "cm²");
console.groupEnd();
// Código triángulo
console.group("Triángulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log(
  "Los lados del triángulo miden: "
  + ladoTriangulo1
  + "cm, " 
  + ladoTriangulo2 
  + "cm, " 
  + baseTriangulo 
  + "cm."
);
console.log("La altura del triángulo mide: " + alturaTriangulo + "cm");
console.log("El perímetro del triángulo mide: " + perimetroTriangulo + "cm");
console.log("El área del triángulo mide: " + areaTriangulo + "cm²");
console.groupEnd();
// Código circulo
console.group("Círculo");
const radioCirculo = 4;
const diametroCirculo = radioCirculo * 2;
const PI = Math.PI;
const circunferencia = diametroCirculo * PI;
const circulo = (radioCirculo * radioCirculo) * PI;
console.log("El radio del circulo mide: " + radioCirculo + "cm");
console.log("El diámetro del circulo mide: " + diametroCirculo + "cm");
console.log("Pi es: " + PI);
console.log("El perímetro del circulo mide: " + circunferencia + "cm");
console.log("El área del círculo mide: " + circulo + "cm²");
console.groupEnd();
