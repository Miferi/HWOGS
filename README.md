# HWOGS - História dos Videogames 🎮

Um site interativo sobre a evolução dos videogames através de 5 gerações de inovação tecnológica, com um quiz para testar seu conhecimento!

## 📋 Características

- **Design Moderno**: Interface com cubos 3D animados e gradientes
- **5 Gerações de Videogames**: Histórico detalhado de cada geração
- **Quiz Interativo**: Teste seus conhecimentos com 8 perguntas
- **Ranking Persistente**: Suas pontuações são salvas no navegador
- **Responsivo**: Funciona perfeitamente em desktop e mobile
- **Temas Escuros**: Design moderno com tema escuro elegante

## 🚀 Como Publicar no GitHub Pages

### Passo 1: Preparar o Repositório Git
```bash
# Certifique-se de que você está na pasta do projeto
cd HWOGS

# Inicialize o repositório git (se ainda não fez)
git init

# Adicione todos os arquivos
git add .

# Faça o primeiro commit
git commit -m "Initial commit: Site sobre história dos videogames"
```

### Passo 2: Criar Repositório no GitHub
1. Vá para [github.com/new](https://github.com/new)
2. Nome do repositório: `seu-username.github.io` (IMPORTANTE!)
   - Substitua `seu-username` pelo seu username do GitHub
   - Exemplo: `Miferi.github.io`
3. Deixe "Public" selecionado
4. Clique em "Create repository"

### Passo 3: Conectar seu Repositório Local
```bash
# Adicione o repositório remoto (copie o comando do GitHub)
git remote add origin https://github.com/seu-username/seu-username.github.io.git

# Faça o push para a branch main
git branch -M main
git push -u origin main
```

### Passo 4: Habilitar GitHub Pages
1. Vá para o repositório no GitHub
2. Clique em **Settings** (Configurações)
3. Na barra lateral esquerda, clique em **Pages**
4. Em "Source", selecione "Deploy from a branch"
5. Em "Branch", selecione "main" e pasta "root"
6. Clique em "Save"

### Passo 5: Aguarde Publicação
- O GitHub Pages levará alguns minutos para publicar seu site
- Você verá uma mensagem verde quando estiver pronto
- Seu site estará disponível em: `https://seu-username.github.io`

## 📁 Estrutura do Projeto

```
HWOGS/
├── index.html           # Página principal
├── quiz.js              # Lógica do quiz
├── CSS/
│   └── style.css        # Estilos CSS
├── images/              # Imagens dos consoles
├── .gitignore           # Arquivos ignorados pelo Git
└── README.md            # Este arquivo
```

## 🔧 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Animações 3D, gradientes, e design responsivo
- **JavaScript**: Interatividade do quiz e persistência de dados
- **LocalStorage**: Armazenamento de pontuações

## 📝 Conteúdo

O site contém informações sobre:

1. **5ª Geração**: Transição para 3D - Nintendo 64, PlayStation 1
2. **6ª Geração**: Era do PlayStation 2 e Xbox - mais de 155 milhões de unidades vendidas
3. **7ª Geração**: HD e realidade virtual - PlayStation 3, Xbox 360, Wii
4. **8ª Geração**: Gráficos 4K e indie games - PlayStation 4, Xbox One, Nintendo Switch
5. **9ª Geração**: Pico da tecnologia - PlayStation 5, Xbox Series X/S

## 🎮 Quiz

O quiz contém 8 perguntas sobre a história dos videogames com:
- Feedback imediato (correto/incorrecio)
- Explicações para cada resposta
- Sistema de ranking com top 10
- Salva suas pontuações no navegador

## 💡 Dicas para Usar o Git

```bash
# Ver status dos arquivos
git status

# Ver histórico de commits
git log

# Fazer alterações e publicar
git add .
git commit -m "Descrição da mudança"
git push
```

## 📞 Suporte

Se tiver dúvidas sobre GitHub Pages, visite:
- [Documentação GitHub Pages](https://pages.github.com/)
- [Guia GitHub Pages do GitHub](https://docs.github.com/en/pages)

---

**Criado com ❤️ para fãs de videogames!**
