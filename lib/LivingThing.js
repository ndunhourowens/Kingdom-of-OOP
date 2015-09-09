export default class LivingThing{
  constructor( name, uniCellular, trueNucleus, anaerobic, asexual, mobile){
    this._name = name;
    this._uniCellular = uniCellular;
    this._trueNucleus = trueNucleus;
    this._anaerobic = anaerobic;
    this._asexual = asexual;
    this._mobile = mobile;
  }
  get name() {
    return this._name;
  }
  set name(n) {
    this._name = n;
  }

  get uniCellular() {
    return this._uniCellular;
  }
  set uniCellular(uC) {
    this._uniCellular = uC;
  }

  get multiCellular() {
    return !this._uniCellular;
  }
  set multiCellular(mC) {
    this._uniCellular = !mC;
  }

  get eukaryote() {
    return this._trueNucleus;
  }
  set eukaryote(euk) {
    this._trueNucleus = euk;
  }

  get prokaryote() {
    return !this._trueNucleus;
  }
  set prokaryote(pro) {
    this._trueNucleus = !pro;
  }

  get anaerobic() {
    return this._anaerobic;
  }
  set anaerobic(ana) {
    this._anaerobic = ana;
  }

  get aerobic() {
    return !this._anaerobic;
  }
  set aerobic(aer) {
    this._anaerobic = !aer;
  }

  get asexual() {
    return this._asexual;
  }
  set asexual(asex) {
    this._asexual = asex;
  }

  get sexual() {
    return !this._asexual;
  }
  set sexual(sex) {
    this._asexual = !sex;
  }

  get mobile() {
    return this._mobile;
  }
  set mobile(mob) {
    this._mobile = mob;
  }
}