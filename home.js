let student = JSON.parse(localStorage.getItem('currentStudent'));
console.log(student);



const infoBox = document.getElementById('studentInfo');
const boxDaraja = document.getElementById('boxDaraja');

infoBox.innerHTML = `
<p class="text-[#0E0D5D] text-[24px] leading-[120%] flex justify-center"> ${student.stydentName}</p>
<p class="font-semibold text-[16px] flex justify-center leading-[140%] text-[#BDBDBD]">${student.stydentGroup} | ${student.teacherName}</p>
<p class="flex items-center justify-center gap-[80px] w-[380px] h-[75px] rounded-[16px] text-white font-bold text-[32px] "  style="background: linear-gradient(286.17deg, #E33D0E 0%, #FF7D58 100%);"><span class="flex items-center gap-1"><img src="img/Rectangle 2162.png" alt=""> ${student.stydentCoin}</span><span class="flex gap-1"> <img src="img/exp.png" alt=""> ${student.stydentEnergy}</span></p>
`;

for (let i = 0; i < student.stydentGrading; i++) {
  const star = document.createElement('img');
  star.src = "img/Rectangle 2163.png";
  star.alt = "Grading star";
  star.classList.add('w-[26px]', 'h-[26px]');
  boxDaraja.appendChild(star);
}
