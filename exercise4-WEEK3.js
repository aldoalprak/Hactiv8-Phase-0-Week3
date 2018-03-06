//contoh input
//["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]  

/*contoh output
["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]  */

function dataHandling2(input) {
  input.splice(1,5,"Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro");
  
  
  
  
  
  var splitTanggal=input[3].split('/');
  console.log(input);
  switch(splitTanggal[1]) {
    case '01': {
      console.log('Januari');
      break;
    }
     case '02': {
      console.log('Febuari');
      break;
    }
    case '03': {
      console.log('Maret');
      break;
    }
    case '04': {
      console.log('April');
      break;
    }
    case '05': {
      console.log('Mei');
      break;
    }
    case '06': {
      console.log('Junii');
      break;
    }
    case '07': {
      console.log('Juli');
      break;
    }
    case '08': {
      console.log('Agustus');
      break;
    }
    case '09': {
      console.log('September');
      break;
    }
    case '10': {
      console.log('Oktober');
      break;
    }
    case '11': {
      console.log('November');
      break;
    }
    case '12': {
      console.log('Desember');
      break;
    }
    default: console.log('salah bulan');
  } 
  
var splitInteger=[];
   splitInteger.push(parseInt(splitTanggal[0]));
   splitInteger.push(parseInt(splitTanggal[1]));
   splitInteger.push(parseInt(splitTanggal[2]));
 console.log(splitInteger); 
 var sort=splitTanggal.sort(function(a,b){return(b-a)});
 console.log(sort);
 var join=splitTanggal.join('-');
  console.log(join);
  console.log(input[1].slice(0,14))
 
  
}

var input=["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

dataHandling2(input);