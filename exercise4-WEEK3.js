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
      splitTanggal[1]=('Januari');
      break;
    }
     case '02': {
      splitTanggal[1]=('Febuari');
      break;
    }
    case '03': {
      splitTanggal[1]=('Maret');
      break;
    }
    case '04': {
      splitTanggal[1]=('April');
      break;
    }
    case '05': {
      splitTanggal[1]=('Mei');
      break;
    }
    case '06': {
      splitTanggal[1]=('Junii');
      break;
    }
    case '07': {
      splitTanggal[1]=('Juli');
      break;
    }
    case '08': {
      splitTanggal[1]=('Agustus');
      break;
    }
    case '09': {
      splitTanggal[1]=('September');
      break;
    }
    case '10': {
      splitTanggal[1]=('Oktober');
      break;
    }
    case '11': {
      splitTanggal[1]=('November');
      break;
    }
    case '12': {
      splitTanggal[1]=('Desember');
      break;
    }
    default: splitTanggal[1]=('salah bulan');
  } 
  console.log(splitTanggal[1]);
  
 var splitTanggal1=input[3].split('/');
 var sort=splitTanggal1.sort(function(a,b){return(b-a)});
 console.log(sort);
 var join=input[3].split('/').join('-');
 console.log(join);
 console.log(input[1].slice(0,14))
 
  
}

var input=["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

dataHandling2(input);


/*
var splitInteger=[];
   splitInteger.push(parseInt(splitTanggal[0]));
   splitInteger.push(parseInt(splitTanggal[1]));
   splitInteger.push(parseInt(splitTanggal[2]));
 console.log(splitInteger); */