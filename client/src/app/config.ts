export class Config {
  chartService: string = 'primeng';

  dataSource: string = 'data/data.json';
  sources = [
    {
      name: 'source1',
      label: 'Datasource 1',
      url: 'data/data.json'
    },
    {
      name: 'source2',
      label: 'Datasource 2',
      url: 'data/data2.json'
    },
    {
      name: 'source3',
      label: 'Datasource 3',
      url: 'data/data3.json'
    }
  ];
  
  constructor() {
    this.dataSource = localStorage.getItem('dataSource') || 'data/data.json';
  }
}