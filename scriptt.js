// declaração de variáveis
const questionEl = document.querySelector('#question');
const answerBox = document.querySelector('#answers-box');
const quizzContainer = document.querySelector('#quizz-container');
const scoreContainer = document.querySelector('#score-container');
const restartButton = document.querySelector('#restart');
const letters = ['a', 'b', 'c', 'd', 'e', 'f'];
let answerCounts = {};
let currentQuestionIndex = 0;

// perguntas
const questions = [
        {
            question: 'Você está organizando uma festa e precisa criar um guia com os horários de todas as atrações e atividades. Como você faria isso?',
            answers: [
                { answer: 'Montaria um plano flexível, com atividades principais, adaptando-o conforme o ritmo e interesse dos convidados.', letter: 'a' },
                { answer: 'Desenharia um mapa da festa, mostrando como os convidados e atividades se organizam.', letter: 'b' },
                { answer: 'Criaria um cronograma de projeto utilizando técnicas de gestão para garantir que tudo ocorra conforme o planejado.', letter: 'c' },
                { answer: 'Utilizaria um aplicativo de produtividade, configurando lembretes automáticos e monitorando o progresso das atividades.', letter: 'd' },
                { answer: 'Criaria uma programação detalhada, semelhante a um roteiro de filme, definindo cenas e horários específicos para cada atividade.', letter: 'e' },
                { answer: 'Planejaria uma experiência temática, desenhando convites e decorações para envolver os convidados.', letter: 'f' },
                { answer: 'Desenvolveria uma forma de ajustar as atividades da festa em tempo real, com base nas atrações que os convidados mais estão curtindo.', letter: 'g' }
            ],
            interactionType: 'click'
        },
        {
            question: 'Você está planejando uma viagem e precisa pesquisar diferentes destinos, levando em consideração clima, preço, atrações e avaliações. Como organizaria e compararia essas informações?',
            answers: [
                { answer: 'Pesquisaria em blogs de viagem e fóruns, criando um diário de viagem virtual com opiniões e experiências coletadas.', letter: 'a' },
                { answer: 'Consultaria guias e pacotes turísticos para formar uma visão abrangente de cada destino.', letter: 'b' },
                { answer: 'Criaria um plano de viagem utilizando uma ferramenta de gestão, com cronograma e orçamento detalhados.', letter: 'c' },
                { answer: 'Criaria uma lista com notas para cada destino, destacando vantagens e desvantagens.', letter: 'd' },
                { answer: 'Desenvolveria um mapa interativo onde cada destino pode ser clicado para obter informações detalhadas.', letter: 'e' },
                { answer: 'Desenvolveria uma apresentação visual dos destinos, com fotos, vídeos e descrições envolventes.', letter: 'f' },
                { answer: 'Usaria a inteligência artificial para otimizar esse processo.', letter: 'g' }
            ],
            interactionType: 'click'
        },
        {
            question: 'Você está em um local desconhecido e encontra uma caixa cheia de moedas antigas de diferentes países. Como descobriria o valor dessas moedas e se elas valem algo atualmente?',
            answers: [
                { answer: 'Utilizaria um aplicativo de reconhecimento de moedas com inteligência artificial para obter uma identificação e avaliação rápida.', letter: 'a' },
                { answer: 'Pesquisaria a história e o contexto das moedas utilizando livros antigos, visitas a museus e sites especializados.', letter: 'b' },
                { answer: 'Organizaria um projeto de pesquisa detalhado para catalogar e avaliar as moedas.', letter: 'c' },
                { answer: 'Levaria as moedas a um especialista em numismática para uma avaliação detalhada e precisa de seu valor no mercado atual.', letter: 'd' },
                { answer: 'Participaria de fóruns e comunidades online de colecionadores de moedas, comparando suas descobertas.', letter: 'e' },
                { answer: 'Desenvolveria uma aplicação interativa que permite explorar as moedas e suas histórias.', letter: 'f' },
                { answer: 'Usaria a inteligência artificial para reconhecer cada uma das moedas por meio de reconhecimento de imagens.', letter: 'g' }
            ],
            interactionType: 'click'
        },
        {
            question: 'Você é um detetive e precisa resolver um crime. Como organizaria as pistas e deduziria o que aconteceu?',
            answers: [
                { answer: 'Entrevistaria testemunhas e compararia seus depoimentos minuciosamente, buscando inconsistências e informações cruciais.', letter: 'a' },
                { answer: 'Recriaria a linha do tempo dos eventos usando gráficos e recursos visuais, para entender a sequência e o contexto do crime.', letter: 'b' },
                { answer: 'Gerenciaria as pistas e a investigação utilizando um software de organização.', letter: 'c' },
                { answer: 'Criaria um sistema de classificação para organizar as pistas por tipo, data e local de coleta, facilitando a análise.', letter: 'd' },
                { answer: 'Desenvolveria um diagrama interativo com todas as pistas, conectando-as e destacando padrões e possíveis suspeitos.', letter: 'e' },
                { answer: 'Escreveria um relato detalhado dos eventos, ilustrando cada etapa da investigação com imagens e diagramas.', letter: 'f' },
                { answer: 'Utilizaria um sistema de inteligência artificial para analisar as pistas e sugerir possíveis soluções com base em padrões e probabilidades.', letter: 'g' }
            ],
            interactionType: 'drag'
        },
        {
            question: 'Você é um chef de cozinha e precisa criar um novo prato para o cardápio do seu restaurante. Como pesquisaria ingredientes, combinaria sabores e testaria diferentes receitas?',
            answers: [
                { answer: 'Organizaria sessões de degustação com um grupo de clientes selecionados, coletando feedback detalhado para aperfeiçoar a receita.', letter: 'a' },
                { answer: 'Criaria um mapa de sabores, destacando como diferentes ingredientes se complementam ou contrastam, para guiar suas combinações.', letter: 'b' },
                { answer: 'Usaria técnicas de gestão de projetos para planejar, testar e aperfeiçoar a receita, assegurando a eficiência no processo.', letter: 'c' },
                { answer: 'Consultaria uma ampla gama de livros de culinária, blogs e vídeos de chefs renomados para inspiração e novas ideias.', letter: 'd' },
                { answer: 'Experimentaria diversas combinações de ingredientes, documentando cada teste em um diário de receitas, ajustando até alcançar a perfeição.', letter: 'e' },
                { answer: 'Desenvolveria uma apresentação visual do prato, incluindo detalhes para torná-lo mais bonito e interessante.', letter: 'f' },
                { answer: 'Usaria um modelo de inteligência artificial para sugerir combinações de ingredientes e prever o sucesso do prato com base em dados anteriores.', letter: 'g' }
            ],
            interactionType: 'click'
        },
        {
            question: 'Você está liderando uma equipe em um projeto importante. Como coordenaria a equipe e garantiria que todos estejam alinhados e contribuindo para o sucesso do projeto?',
            answers: [
                { answer: 'Realizaria reuniões regulares para compartilhar atualizações e resolver problemas em equipe, incentivando a comunicação aberta.', letter: 'a' },
                { answer: 'Estabeleceria um sistema de recompensas para incentivar a produtividade e a inovação, reconhecendo as contribuições individuais.', letter: 'b' },
                { answer: 'Utilizaria uma ferramenta de gestão de projetos para definir tarefas, prazos e acompanhar o progresso.', letter: 'c' },
                { answer: 'Criaria um dashboard para monitorar o desempenho da equipe, identificando áreas de melhoria e ajustando estratégias conforme necessário.', letter: 'd' },
                { answer: 'Desenvolveria uma plataforma colaborativa onde todos podem compartilhar ideias, arquivos e feedbacks em tempo real.', letter: 'e' },
                { answer: 'Produziria materiais visuais e gráficos para ilustrar o progresso do projeto e motivar a equipe.', letter: 'f' },
                { answer: 'Utilizaria um sistema de inteligência artificial para prever e alertar sobre possíveis atrasos, sugerindo ajustes para manter o cronograma em dia.', letter: 'g' }
            ],
            interactionType: 'click'
        },
        {
            question: 'Como arquiteto, qual recurso tecnológico implementaria para garantir segurança e eficiência no projeto de uma casa moderna?',
            answers: [
                { answer: 'Avaliação dos pontos de vulnerabilidade na estrutura e implementação de medidas de segurança como sistemas de alarme e câmeras.', letter: 'a' },
                { answer: 'Análise das tendências e integração de eletrodomésticos inteligentes para segurança e transparência.', letter: 'b' },
                { answer: 'Aplicação de padrões de design para criar uma arquitetura modular e escalável.', letter: 'c' },
                { answer: 'Implementação de um sistema de monitoramento contínuo para analisar e corrigir problemas das instalações.', letter: 'd' },
                { answer: 'Uso de um sistema de gestão de projeto digital para coordenar todas as fases da construção.', letter: 'e' },
                { answer: 'Criação de um modelo 3D detalhado da casa para ajustar o design e otimizar o ambiente.', letter: 'f' },
                { answer: 'Implementação de IA para otimizar o planejamento e design, ajustando automaticamente o layout para eficiência energética e segurança.', letter: 'g' }
            ],
            interactionType: 'drag'
        },
        {
            question: 'Você está participando de um hackathon e precisa criar uma solução inovadora que ajude a resolver o problema de mobilidade urbana. Como abordaria esse desafio?',
            answers: [
                { answer: 'Entrevistaria moradores da cidade para entender suas necessidades e desafios em relação à mobilidade, buscando soluções que atendam diretamente suas demandas.', letter: 'a' },
                { answer: 'Analisaria dados de trânsito e transporte público para identificar padrões e pontos críticos que possam ser melhorados.', letter: 'b' },
                { answer: 'Criaria um plano de projeto detalhado com etapas, cronograma e entregáveis para garantir que a solução seja desenvolvida de forma eficiente.', letter: 'c' },
                { answer: 'Desenvolveria um aplicativo ou ferramenta tecnológica que ajude as pessoas a navegar melhor pela cidade, oferecendo alternativas de transporte e rotas mais rápidas.', letter: 'd' },
                { answer: 'Utilizaria tecnologias de inteligência artificial e big data para prever padrões de tráfego e propor soluções automáticas para otimizar o fluxo.', letter: 'e' },
                { answer: 'Criaria uma campanha de conscientização sobre o uso de transportes alternativos e soluções sustentáveis para melhorar a mobilidade urbana.', letter: 'f' },
                { answer: 'Desenvolveria um sistema de transporte autônomo, como veículos sem motorista ou drones, para aliviar o trânsito nas áreas mais congestionadas.', letter: 'g' }
            ],
            interactionType: 'click'
        },
        {
            question: 'Você e seus amigos decidem criar um novo jogo de tabuleiro. Como você abordaria o processo de desenvolvimento do jogo, desde a concepção até a produção final?',
            answers: [
                { answer: 'Organizaria sessões de teste com amigos e familiares para coletar feedback e ajustar as regras.', letter: 'a', category: 'Cibersegurança' },
                { answer: 'Desenvolveria um sistema de recompensas e desafios dentro do jogo para torná-lo mais envolvente.', letter: 'b', category: 'Criptomoedas' },
                { answer: 'Usaria técnicas de gestão de projetos para planejar e coordenar todas as etapas do desenvolvimento do jogo.', letter: 'c', category: 'Gestão de TI' },
                { answer: 'Faria uma pesquisa detalhada sobre outros jogos de tabuleiro para entender o que funciona bem e o que pode ser melhorado.', letter: 'd', category: 'Dados' },
                { answer: 'Criaria uma lista de regras e mecânicas do jogo, testando diferentes versões até encontrar a melhor.', letter: 'e', category: 'Programação' },
                { answer: 'Desenharia componentes visuais atraentes, incluindo o tabuleiro, cartas e peças, para melhorar a experiência do jogador.', letter: 'f', category: 'Design/Jogos Digitais' },
                { answer: 'Utilizaria técnicas de IA para simular partidas e ajustar o equilíbrio do jogo antes do lançamento.', letter: 'g', category: 'Inteligência Artificial' }
            ],
            interactionType: 'click'
        },
        {
            question: 'Você está montando uma playlist para uma festa, mas quer que as músicas sejam reproduzidas em uma ordem específica para criar a melhor atmosfera possível ao longo da noite. Como você organizaria a sequência das músicas?',
            answers: [
                { answer: 'Montaria a playlist com base em sugestões de amigos e familiares, organizando-a manualmente para garantir que todos aproveitem.', letter: 'a', category: 'Cibersegurança' },
                { answer: 'Desenharia a playlist como uma história musical, guiando a festa através de diferentes emoções e climas.', letter: 'b', category: 'Criptomoedas' },
                { answer: 'Utilizaria técnicas de gestão para planejar o fluxo da festa e organizar a playlist em blocos temáticos.', letter: 'c', category: 'Gestão de TI' },
                { answer: 'Analisaria as preferências musicais dos convidados e criaria gráficos para entender quais gêneros e estilos agradam mais.', letter: 'd', category: 'Dados' },
                { answer: 'Criaria uma lista de reprodução automatizada, utilizando um algoritmo para determinar a ordem das músicas com base no ritmo e popularidade.', letter: 'e', category: 'Programação' },
                { answer: 'Criaria uma apresentação visual sincronizada com as músicas, com efeitos e animações que acompanham o ritmo.', letter: 'f', category: 'Design/Jogos Digitais' },
                { answer: 'Utilizaria IA para analisar as características das músicas e criar uma sequência que maximize a energia da festa.', letter: 'g', category: 'Inteligência Artificial' }
            ],
            interactionType: 'click'
        },
        {
            question: 'Você precisa organizar uma mudança para uma nova casa e quer garantir que tudo seja embalado e transportado de forma eficiente. Como você faria isso?',
            answers: [
                { answer: 'Planejaria um cronograma detalhado da mudança, com um dia específico para cada etapa.', letter: 'a', category: 'Cibersegurança' },
                { answer: 'Organizaria as caixas por cômodo e marcaria cada uma, criando um sistema de cores para facilitar o desempacotamento.', letter: 'b', category: 'Criptomoedas' },
                { answer: 'Criaria uma lista detalhada de todos os itens a serem embalados, organizando-os por categoria e prioridade.', letter: 'c', category: 'Gestão de TI' },
                { answer: 'Faria uma pesquisa sobre empresas de mudança, comparando preços e serviços para escolher a melhor opção.', letter: 'd', category: 'Dados' },
                { answer: 'Desenvolveria um aplicativo que ajudaria a rastrear o progresso da mudança e a localização de cada item.', letter: 'e', category: 'Programação' },
                { answer: 'Utilizaria um software de visualização para planejar a nova disposição dos móveis e itens na nova casa.', letter: 'f', category: 'Design/Jogos Digitais' },
                { answer: 'Utilizaria um modelo de IA para prever problemas potenciais durante a mudança e sugerir soluções antecipadamente.', letter: 'g', category: 'Inteligência Artificial' }
            ],
            interactionType: 'click'
        },
        {
            question: 'Você precisa criar uma apresentação para um projeto importante e deseja que ela seja envolvente e fácil de entender. Como você abordaria a criação da apresentação?',
            answers: [
                { answer: 'Realizaria sessões de prática com colegas para garantir que a apresentação seja clara, envolvente e sem falhas.', letter: 'a', category: 'Cibersegurança' },
                { answer: 'Desenvolveria uma narrativa envolvente que guia a audiência através da apresentação com começo, meio e fim claros.', letter: 'b', category: 'Criptomoedas' },
                { answer: 'Organizaria os tópicos em um plano de projeto, criando uma estrutura lógica e cronológica para a apresentação.', letter: 'c', category: 'Gestão de TI' },
                { answer: 'Faria uma análise detalhada dos dados do projeto e apresentaria os resultados com gráficos e tabelas.', letter: 'd', category: 'Dados' },
                { answer: 'Criaria um protótipo interativo do projeto, permitindo que a audiência explore diferentes aspectos em tempo real.', letter: 'e', category: 'Programação' },
                { answer: 'Utilizaria um software de criação gráfica para projetar slides visualmente atraentes e interativos.', letter: 'f', category: 'Design/Jogos Digitais' },
                { answer: 'Utilizaria IA para ajustar a apresentação com base no feedback em tempo real, personalizando-a para diferentes tipos de audiência.', letter: 'g', category: 'Inteligência Artificial' }
            ],
            interactionType: 'click'
        }
    ];

    // Adicione mais perguntas aqui

    
// inicialização do quiz
function init() {
    answerCounts = { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0 };
    currentQuestionIndex = 0;
    showQuestion(currentQuestionIndex);
}

// função para mostrar a pergunta e definir o tipo de interação
function showQuestion(index) {
    answerBox.innerHTML = '';
    questionEl.querySelector('#question-text').textContent = questions[index].question;
   // questionEl.querySelector('#question-number').textContent = `Pergunta ${index + 1}`;

    // Obtém o tipo de interação da pergunta atual
    const interactionType = questions[index].interactionType;

    if (interactionType === 'click') {
        questions[index].answers.forEach(({ answer, letter }) => {
            const btn = document.createElement('button');
            btn.classList.add('btn-letter');
            btn.textContent = letter;
            btn.innerHTML += `<span class="question-answer">${answer}</span>`;
            btn.setAttribute('data-letter', letter);
            btn.addEventListener('click', () => handleAnswer(letter));
            answerBox.appendChild(btn);
        });
    } else if (interactionType === 'image-click') {
        questions[index].answers.forEach(({ answer, letter }) => {
            const img = document.createElement('img');
            img.src = answer;
            img.classList.add('img-option');
            img.setAttribute('data-letter', letter);
            img.addEventListener('click', () => handleAnswer(letter));
            answerBox.appendChild(img);
        });
    } else if (interactionType === 'slider') {
        const slider = document.createElement('input');
        slider.type = 'range';
        slider.min = 1;
        slider.max = 100;
        slider.classList.add('slider');
        slider.addEventListener('input', (e) => {
            handleAnswer(Math.round(e.target.value / 10));
        });
        answerBox.appendChild(slider);
    } else if (interactionType === 'text-input') {
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Digite sua resposta';
        input.addEventListener('change', () => handleAnswer(input.value));
        answerBox.appendChild(input);
    } else if (interactionType === 'checkbox') {
        questions[index].answers.forEach(({ answer, letter }) => {
            const label = document.createElement('label');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.value = letter;
            label.appendChild(checkbox);
            label.innerHTML += answer;
            checkbox.addEventListener('change', () => handleAnswer(letter));
            answerBox.appendChild(label);
        });
    } else if (interactionType === 'rating') {
        const ratingContainer = document.createElement('div');
        ratingContainer.classList.add('rating');
        for (let i = 1; i <= 5; i++) {
            const star = document.createElement('span');
            star.textContent = '★';
            star.classList.add('star');
            star.addEventListener('click', () => handleAnswer(i));
            ratingContainer.appendChild(star);
        }
        answerBox.appendChild(ratingContainer);
    } else if (interactionType === 'drag') {
        questions[index].answers.forEach(({ answer, letter }) => {
            const dragItem = document.createElement('div');
            dragItem.classList.add('draggable-item');
            dragItem.setAttribute('draggable', 'true');
            dragItem.textContent = answer;
            dragItem.setAttribute('data-letter', letter);
            
            dragItem.addEventListener('dragstart', dragStart);
            answerBox.appendChild(dragItem);
        });

        const dropZone = document.createElement('div');
        dropZone.classList.add('drop-zone');
        dropZone.textContent = 'Arraste a resposta aqui';
        dropZone.addEventListener('dragover', dragOver);
        dropZone.addEventListener('drop', (event) => handleDrop(event));
        answerBox.appendChild(dropZone);
    } else if (interactionType === 'move') {
        const ul = document.createElement('ul');
        ul.classList.add('sortable-list');
        
        questions[index].answers.forEach(({ answer, letter }) => {
            const li = document.createElement('li');
            li.textContent = answer;
            li.setAttribute('data-letter', letter);
            ul.appendChild(li);
        });

        makeSortable(ul);
        answerBox.appendChild(ul);
    }

    updateProgress();
}


// Funções de drag and drop
function dragStart(event) {
    event.dataTransfer.setData('text', event.target.getAttribute('data-letter'));
}

function dragOver(event) {
    event.preventDefault();
}

function handleDrop(event) {
    event.preventDefault();
    const letter = event.dataTransfer.getData('text');
    handleAnswer(letter);
}

// Função para tornar lista ordenável (move)
function makeSortable(ul) {
    let dragging;
    ul.querySelectorAll('li').forEach((li) => {
        li.draggable = true;

        li.addEventListener('dragstart', function () {
            dragging = li;
        });

        li.addEventListener('dragover', function (event) {
            event.preventDefault();
            if (li !== dragging) {
                const rect = li.getBoundingClientRect();
                const next = (event.clientY - rect.top) / (rect.bottom - rect.top) > 0.5;
                ul.insertBefore(dragging, next && li.nextSibling || li);
            }
        });

        li.addEventListener('drop', function () {
            handleAnswer(li.getAttribute('data-letter'));
        });
    });
}

// Atualiza a barra de progresso
function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    document.querySelector('#progress-bar').style.width = `${progress}%`;
    document.querySelector('#progress-text').textContent = `Pergunta ${currentQuestionIndex + 1} de ${questions.length}`;
}

// Lida com a resposta do usuário
function handleAnswer(letter) {
    answerCounts[letter] = (answerCounts[letter] || 0) + 1;
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        setTimeout(() => showQuestion(currentQuestionIndex), 1200);
    } else {
        showResult();
    }
}

// Exibe o resultado final
function showResult() {
    quizzContainer.classList.add('hide');
    scoreContainer.classList.remove('hide');

    const totalAnswers = Object.values(answerCounts).reduce((sum, count) => sum + count, 0);
    const sortedAnswers = Object.entries(answerCounts).sort((a, b) => b[1] - a[1]);
    
    const resultMap = {
        a: 'Cibersegurança. <br> DESCRIÇÃO: Protege sistemas, redes e dados...',
        b: 'Criptomoedas. <br> DESCRIÇÃO: Estudo e aplicação de moedas digitais...',
        c: 'Gestão de TI. <br> DESCRIÇÃO: Administração de recursos de TI...',
        d: 'Dados. <br> DESCRIÇÃO: Análise e gestão de grandes volumes de dados...',
        e: 'Programação. <br> DESCRIÇÃO: Criação de software e aplicativos...',
        f: 'Design/Jogos Digitais. <br> DESCRIÇÃO: Desenvolvimento de interfaces e experiências visuais...',
    };

    // cálculo da porcentagem 
    const resultHtml = sortedAnswers.slice(0, 2).map(([letter, count]) => {
        const percentage = Math.round((count / totalAnswers) * 100); // Arredonda para o inteiro mais próximo
        return `<li>${resultMap[letter]} <br> Sua pontuação é de ${percentage} de compatibilidade para esta área.</li>`;
    }).join('<br>');

    document.querySelector('#display-score').innerHTML = `
        <h3>Você tem o perfil ideal para as áreas de:</h3>
        <ul>${resultHtml}</ul>
    `;
    document.querySelector('#display-score').scrollIntoView({ behavior: 'smooth' });
}


// reiniciar o quiz
restartButton.addEventListener('click', () => {
    quizzContainer.classList.remove('hide');
    scoreContainer.classList.add('hide');
    init();
});

// Inicia o quiz
init();

