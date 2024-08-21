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

    // Sort answers by count in descending order
    const sortedAnswers = Object.entries(answers).sort((a, b) => b[1] - a[1]);

    // Get the top two answers
    const topTwo = sortedAnswers.slice(0, 2);

    // Map the result to the corresponding area
    const resultMap = {
        a: 'Cibersegurança. <br> DESCRIÇÃO: Protege sistemas, redes e dados contra ataques digitais, garantindo a segurança das informações.',
        b: 'Criptomoedas.<br>  DESCRIÇÃO: Estudo e aplicação de moedas digitais descentralizadas, como Bitcoin, incluindo tecnologias como blockchain.',
        c: 'Gestão de TI.  <br>  DESCRIÇÃO: Administração de recursos de tecnologia da informação em uma organização, focando em infraestrutura, suporte e estratégias de TI.',
        d: 'Dados.<br>  DESCRIÇÃO: Envolve a análise e gestão de grandes volumes de dados para extrair insights e apoiar a tomada de decisões.',
        e: 'Programação.<br>  DESCRIÇÃO: Criação de software e aplicativos por meio de linguagens de programação, desenvolvendo soluções tecnológicas.',
        f: 'Design/Jogos Digitais.<br>  DESCRIÇÃO: Desenvolvimento de interfaces e experiências visuais para jogos e aplicativos, focando em usabilidade e estética.'
    };

    // Display the result
    const resultDiv = document.getElementById('result');
    if (topTwo.length > 0) {
        resultDiv.innerHTML = `<h2>Você tem o perfil perfeito para as áreas de:</h2>
                               <ul>
                                   <li>${resultMap[topTwo[0][0]]}</li><br> 
                                   <li>${resultMap[topTwo[1][0]]}</li>
                               </ul>`;
    } else {
        resultDiv.innerHTML = '<h2>Não foi possível determinar seu perfil.</h2>';
    }
    resultDiv.scrollIntoView({ behavior: 'smooth' });
}






