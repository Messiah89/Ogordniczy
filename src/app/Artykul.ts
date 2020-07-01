export class Artykul {
  kolejny: number;
  name: string;
  price: string;
  vat: string;
  amount: number;

constructor(kolejny: number, name: string, price: string, vat: string, amount: number){
  this.kolejny = kolejny;
  this.name = name;
  this.price = price;
  this.vat = vat;
  this.amount = amount;
}
}

