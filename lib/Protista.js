import Eukaryota from './Eukaryota'
export default class Protista extends Eukaryota{
  constructor( name, uniCellular, mobile, hetrotroph){
    super(name, uniCellular, true, false, true, mobile, hetrotroph);
    this._name = name;
    this._uniCellular = uniCellular;
    this._mobile = mobile;
    this._hetrotroph = hetrotroph;
  }
}