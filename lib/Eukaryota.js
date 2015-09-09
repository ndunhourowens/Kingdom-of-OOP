import LivingThing from './LivingThing';
export default class Eukaryota extends LivingThing{
  constructor(name, uniCellular, asexual, mobile, heterotroph){
    super(name, uniCellular, true, false, asexual, mobile);
    this._name = name;
    this._uniCellular = uniCellular;
    this._asexual = asexual;
    this._mobile = mobile;
    this._heterotroph = heterotroph;
  }

  get heterotroph() {
    return this._heterotroph;
  }
  set heterotroph(het) {
    this._heterotroph = het;
  }
  get autotroph() {
    return !this._heterotroph;
  }
  set autotroph(auto) {
    this._heterotroph = !auto;
  }
}