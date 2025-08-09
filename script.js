const inputName = document.getElementById('name');
const inputPassword = document.getElementById('password');
const sentBtn = document.getElementById('sentBtn');

let accauntStydent = [
    {
        stydentId: 1110,
        stydentPassword: 2021,
        stydentName: 'Cristiano Ronaldo',
        stydentGroup: 'NF-2074',
        stydentGrading: 4,
        teacherName: 'Dior Rahmatullayev',
        stydentCoin: 428,
        stydentEnergy: 428
    },
    {
        stydentId: 1107,
        stydentPassword: 2017,
        stydentName: 'Saymurotov Odilbek',
        stydentGroup: 'NF-2074',
        stydentGrading: 5,
        teacherName: 'Dior Rahmatullayev',
        stydentCoin: 9876,
        stydentEnergy: 32012
    },
];

sentBtn.addEventListener('click', () => {
    const userId = Number(inputName.value);
    const userPassword = Number(inputPassword.value);

    const foundStudent = accauntStydent.find(student =>
        student.stydentId === userId && student.stydentPassword === userPassword
    );

    if (foundStudent) {
        localStorage.setItem('currentStudent', JSON.stringify(foundStudent));

        window.location.href = "home.html";
    } else {
        alert('Login yoki parol noto‘g‘ri!');
    }
});
