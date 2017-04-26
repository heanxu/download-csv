const btn = document.getElementsByClassName('btn')[0]
let fields = ['第一列', '第二列', '第三列'];
let myData = [
  {
    "第一列": "1，1",
    "第二列": "2, 1",
    "第三列": "3, 1"
  }, {
    "第一列": "1，2",
    "第二列": "2, 2",
    "第三列": "3, 2"
  }, {
    "第一列": "1，3",
    "第二列": "2, 3",
    "第三列": "3, 3"
  }
];
let csvData = json2csv({ data: myData, fields: fields });

function downloadCsvData () {
  document.getElementById("myId").href = 'data:text/csv;charset=utf-8,\ufeff' + encodeURIComponent(csvData); 
}