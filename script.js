alert("GAME TEBAK ANGKA \n Pilih Angka 1-10 \n Kamu Punya 3 Kesempatan");

const angkaBenar = Math.floor(Math.random() * 10) + 1;

for(let nyawa = 3; nyawa >= 1; nyawa--) {

  const tebakanUser = prompt("Masukkan Tebakkan Angka");

  if(tebakanUser == angkaBenar) {
    alert(`Tebakan Anda Benar! \n Angka Yang Benar Adalah ${angkaBenar}`);
     break; 

  } else if (tebakanUser > angkaBenar) {
    alert(`Tebakan Anda Terlalu TINGGI \n Anda masih punya ${nyawa - 1} kesempatan`);
  } else if (tebakanUser < angkaBenar) {
    alert(`Tebakan Anda Terlalu RENDAH \n Anda masih punya ${nyawa - 1} kesempatan`);
  }

  if(nyawa == 1) {
    alert(`dongo lu! \n Angka Yang Benar Adalah ${angkaBenar}`);
  }
}

