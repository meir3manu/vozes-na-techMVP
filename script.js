// script.js
function calculateResult() {
    const form = document.getElementById('quizForm');
    const formData = new FormData(form);
    const answers = {};

    // Initialize counters for each answer
    formData.forEach((value) => {
        if (!answers[value]) {
            answers[value] = 0;
        }
        answers[value]++;
    });

    // Determine the most selected answer
    let maxCount = 0;
    let result = '';
    for (const answer in answers) {
        if (answers[answer] > maxCount) {
            maxCount = answers[answer];
            result = answer;
        }
    }

    // Map the result to the corresponding area
    const resultMap = {
        a: 'Cibersegurança. DESCRIÇÃO: Protege sistemas, redes e dados contra ataques digitais, garantindo a segurança das informações.',
        b: 'Criptomoedas. DESCRIÇÃO: Estudo e aplicação de moedas digitais descentralizadas, como Bitcoin, incluindo tecnologias como blockchain.',
        c: 'Gestão de TI.   DESCRIÇÃO: Administração de recursos de tecnologia da informação em uma organização, focando em infraestrutura, suporte e estratégias de TI.',
        d: 'Dados. DESCRIÇÃO: Envolve a análise e gestão de grandes volumes de dados para extrair insights e apoiar a tomada de decisões.',
        e: 'Programação. DESCRIÇÃO: Criação de software e aplicativos por meio de linguagens de programação, desenvolvendo soluções tecnológicas.',
        f: 'Design/Jogos Digitais. DESCRIÇÃO: Desenvolvimento de interfaces e experiências visuais para jogos e aplicativos, focando em usabilidade e estética.'
    };

    // Display the result
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<h2>Você tem o perfil perfeito para a área de ${resultMap[result]}</h2>`;
    resultDiv.scrollIntoView({ behavior: 'smooth' });
}





