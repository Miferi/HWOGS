const quizData = [
    {
        question: "Em qual geração ocorreu a transição de 2D para 3D nos videogames?",
        options: ["4ª Geração", "5ª Geração", "6ª Geração", "7ª Geração"],
        correct: 1,
        explanation: "A 5ª geração marcou a revolução 3D com o PlayStation original!"
    },
    {
        question: "Qual console foi o mais vendido de todos os tempos?",
        options: ["PlayStation 1", "PlayStation 2", "Nintendo DS", "Game Boy"],
        correct: 1,
        explanation: "O PlayStation 2 vendeu mais de 155 milhões de unidades!"
    },
    {
        question: "Em que geração surgiu o Xbox Live?",
        options: ["5ª Geração", "6ª Geração", "7ª Geração", "8ª Geração"],
        correct: 1,
        explanation: "O Xbox Live foi introduzido na 6ª geração, revolucionando o online!"
    },
    {
        question: "Qual console revolucionou o formato híbrido na 8ª geração?",
        options: ["PlayStation 4", "Xbox One", "Nintendo Switch", "Wii U"],
        correct: 2,
        explanation: "O Nintendo Switch inovou com seu formato híbrido portátil/console!"
    },
    {
        question: "Qual é a característica principal da 9ª geração?",
        options: ["Jogos em 4K", "SSDs ultrarrápidos", "Ray tracing em tempo real", "Todas as acima"],
        correct: 3,
        explanation: "PS5 e Xbox Series X/S trouxeram todas essas tecnologias!"
    },
    {
        question: "Qual foi o meio de armazenamento dominante na 6ª geração?",
        options: ["Cartucho", "CD-ROM", "DVD", "Blu-ray"],
        correct: 2,
        explanation: "O DVD era o padrão na 6ª geração com grande capacidade!"
    },
    {
        question: "Qual console conquistou o público casual na 7ª geração?",
        options: ["PlayStation 3", "Xbox 360", "Wii", "PC Gaming"],
        correct: 2,
        explanation: "O Wii revolucionou com controles por movimento!"
    },
    {
        question: "Qual é a resolução máxima suportada pela 9ª geração?",
        options: ["2K", "4K", "8K", "16K"],
        correct: 2,
        explanation: "PS5 e Xbox Series X/S suportam até 8K!"
    }
];

let currentQuestion = 0;
let score = 0;
let selectedAnswers = [];

function initQuiz() {
    loadQuestion();
}

function loadQuestion() {
    const quizContent = document.getElementById('quizContent');
    quizContent.innerHTML = '';

    const question = quizData[currentQuestion];
    
    const questionDiv = document.createElement('div');
    questionDiv.className = 'quiz-question-box';
    
    const progress = `<div class="quiz-progress">
        <div class="progress-bar">
            <div class="progress-fill" style="width: ${((currentQuestion + 1) / quizData.length) * 100}%"></div>
        </div>
        <span class="progress-text">${currentQuestion + 1} de ${quizData.length}</span>
    </div>`;
    
    const questionText = `<h3 class="question-text">${question.question}</h3>`;
    
    let optionsHTML = '<div class="options-container">';
    question.options.forEach((option, index) => {
        optionsHTML += `
            <button class="option-btn" onclick="selectAnswer(${index})">
                <span class="option-letter">${String.fromCharCode(65 + index)}</span>
                <span class="option-text">${option}</span>
            </button>
        `;
    });
    optionsHTML += '</div>';
    
    questionDiv.innerHTML = progress + questionText + optionsHTML;
    quizContent.appendChild(questionDiv);
}

function selectAnswer(index) {
    selectedAnswers[currentQuestion] = index;
    
    const question = quizData[currentQuestion];
    const buttons = document.querySelectorAll('.option-btn');
    
    buttons.forEach((btn, i) => {
        btn.classList.remove('correct', 'incorrect', 'selected');
        if (i === index) {
            btn.classList.add('selected');
        }
    });
    
    // Verificar resposta após 500ms
    setTimeout(() => {
        if (index === question.correct) {
            score++;
            buttons[index].classList.add('correct');
            showExplanation(question.explanation, true);
        } else {
            buttons[index].classList.add('incorrect');
            buttons[question.correct].classList.add('correct');
            showExplanation(question.explanation, false);
        }
        
        // Próxima pergunta após 2s
        setTimeout(() => {
            nextQuestion();
        }, 2000);
    }, 500);
}

function showExplanation(text, isCorrect) {
    const quizContent = document.getElementById('quizContent');
    const explanation = document.createElement('div');
    explanation.className = `explanation ${isCorrect ? 'correct' : 'incorrect'}`;
    explanation.textContent = text;
    quizContent.appendChild(explanation);
}

function nextQuestion() {
    currentQuestion++;
    
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    const quizContent = document.getElementById('quizContent');
    const quizResult = document.getElementById('quizResult');
    const resultTitle = document.getElementById('resultTitle');
    const resultMessage = document.getElementById('resultMessage');
    
    quizContent.style.display = 'none';
    quizResult.style.display = 'block';
    
    const percentage = (score / quizData.length) * 100;
    
    let title, message, emoji;
    
    if (percentage === 100) {
        title = "🏆 Perfeito! 🏆";
        message = `Você é um verdadeiro mestre da história dos videogames! Acertou ${score}/${quizData.length} questões!`;
        emoji = "🎮";
    } else if (percentage >= 75) {
        title = "🌟 Excelente! 🌟";
        message = `Você conhece muito bem a história dos videogames! Acertou ${score}/${quizData.length} questões (${Math.round(percentage)}%)`;
        emoji = "🎯";
    } else if (percentage >= 50) {
        title = "👍 Bom! 👍";
        message = `Você tem um bom conhecimento sobre videogames! Acertou ${score}/${quizData.length} questões (${Math.round(percentage)}%)`;
        emoji = "📚";
    } else {
        title = "🎓 Continue Estudando! 🎓";
        message = `Você ainda tem muito a aprender sobre a história dos videogames! Acertou ${score}/${quizData.length} questões (${Math.round(percentage)}%)`;
        emoji = "💪";
    }
    
    resultTitle.textContent = title;
    resultMessage.innerHTML = `
        <p>${message}</p>
        <div class="score-circle">
            <span class="score-number">${Math.round(percentage)}%</span>
        </div>
        <p style="margin-top: 1.5rem; font-size: 2rem;">${emoji}</p>
    `;
    
    // Mostrar input de nome para salvar score
    const playerNameInput = document.getElementById('playerName');
    playerNameInput.style.display = 'block';
}

function saveScore() {
    const playerName = document.getElementById('playerName').value.trim();
    
    if (!playerName) {
        alert('Por favor, digite seu nome!');
        return;
    }
    
    const percentage = (score / quizData.length) * 100;
    const newScore = {
        name: playerName,
        score: score,
        percentage: Math.round(percentage),
        date: new Date().toLocaleDateString('pt-BR')
    };
    
    // Carregar scores existentes
    let scores = JSON.parse(localStorage.getItem('quizScores')) || [];
    
    // Adicionar novo score
    scores.push(newScore);
    
    // Ordenar por score (descendente)
    scores.sort((a, b) => b.score - a.score);
    
    // Manter apenas os top 10
    scores = scores.slice(0, 10);
    
    // Salvar no localStorage
    localStorage.setItem('quizScores', JSON.stringify(scores));
    
    // Esconder input
    document.getElementById('playerName').style.display = 'none';
    document.querySelector('.btn-save').style.display = 'none';
    
    // Atualizar ranking
    loadRanking();
    
    // Mostrar mensagem de sucesso
    const resultMessage = document.getElementById('resultMessage');
    resultMessage.innerHTML += '<p style="color: #00ff00; margin-top: 1rem; font-weight: bold;">✓ Pontuação salva com sucesso!</p>';
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    selectedAnswers = [];
    
    document.getElementById('quizContent').style.display = 'block';
    document.getElementById('quizResult').style.display = 'none';
    document.getElementById('playerName').style.display = 'none';
    document.getElementById('playerName').value = '';
    
    loadQuestion();
}

function loadRanking() {
    const rankingContent = document.getElementById('rankingContent');
    const scores = JSON.parse(localStorage.getItem('quizScores')) || [];
    
    rankingContent.innerHTML = '';
    
    if (scores.length === 0) {
        rankingContent.innerHTML = '<div class="ranking-empty">Nenhuma pontuação registrada ainda. Faça o quiz para aparecer no ranking!</div>';
        return;
    }
    
    const medals = ['🥇', '🥈', '🥉'];
    
    scores.forEach((scoreObj, index) => {
        const rankingItem = document.createElement('div');
        rankingItem.className = 'ranking-item';
        
        if (index < 3) {
            rankingItem.classList.add(`top-${index + 1}`);
        }
        
        const medal = medals[index] || '🎮';
        
        rankingItem.innerHTML = `
            <div class="ranking-position">
                <span class="ranking-medal">${medal}</span>
                <span class="ranking-rank">#${index + 1}</span>
                <div>
                    <div class="ranking-name">${scoreObj.name}</div>
                    <div style="font-size: 0.85rem; color: var(--text-secondary);">${scoreObj.date}</div>
                </div>
            </div>
            <div class="ranking-score">
                <span>${scoreObj.score}/${quizData.length}</span>
                <span style="font-size: 0.9rem; color: var(--text-secondary);">(${scoreObj.percentage}%)</span>
            </div>
        `;
        
        rankingContent.appendChild(rankingItem);
    });
    
    // Mostrar botão de limpar se houver scores
    const clearButton = document.querySelector('.btn-clear-ranking');
    if (clearButton && scores.length > 0) {
        clearButton.style.display = 'block';
    }
}

function clearRanking() {
    if (confirm('Tem certeza que deseja limpar todo o ranking? Esta ação não pode ser desfeita!')) {
        localStorage.removeItem('quizScores');
        loadRanking();
        document.querySelector('.btn-clear-ranking').style.display = 'none';
    }
}

// Inicializar quiz quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    initQuiz();
    loadRanking();
});
