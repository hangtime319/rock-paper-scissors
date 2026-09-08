# Pedra, Papel, Tesoura, Lagarto e Spock

Projeto desenvolvido como desafio de frontend para recriar a dinâmica de um jogo clássico de estratégia com uma experiência visual moderna, responsiva e funcional. A aplicação inclui a versão tradicional e o modo bônus com cinco opções, mantendo a lógica de pontuação e a proposta visual fiel ao design original.

## Sobre o projeto

Este projeto foi construído em React com Vite e estilizado com Tailwind CSS, com foco em entregar uma interface fluida para desktop e mobile. A experiência inclui seleção de jogada, escolha aleatória da máquina, validação do vencedor e manutenção da pontuação ao longo das partidas.

## Funcionalidades

- modo clássico: pedra, papel e tesoura
- modo bônus: pedra, papel, tesoura, lagarto e spock
- alternância entre modos em tempo real
- pontuação persistente com localStorage
- modal de regras adaptado para cada modo
- estado de jogo dividido em fases: escolha, revelação e resultado
- botão de jogar novamente para reiniciar a rodada
- layout responsivo com foco em mobile-first

## Stack tecnológica

- React 19
- Vite
- JavaScript
- Tailwind CSS
- Barlow Semi Condensed
- localStorage

## Arquitetura e organização

A estrutura do projeto foi organizada para separar claramente regras de negócio, dados e interface:

- `App.jsx`: controla o fluxo principal da aplicação e o estado global
- `components/game`: componentes relacionados à seleção, resultado e exibição das jogadas
- `components/layout`: header e score card
- `components/rules`: modal de regras
- `constants/choices.js`: regras da versão clássica
- `constants/choicesBonus.js`: regras da versão bônus
- `utils/getHouseChoice.js`: escolha aleatória da máquina
- `utils/getWinner.js`: lógica de vencedor do modo clássico
- `utils/getWinnerBonus.js`: lógica de vencedor do modo bônus

## Fluxo da aplicação

1. O usuário seleciona uma opção.
2. O sistema registra a escolha e entra na fase de revelação.
3. A máquina faz uma escolha aleatória.
4. A lógica compara as opções e define o resultado.
5. A pontuação é atualizada conforme a regra de vitória, derrota ou empate.
6. O usuário pode reiniciar a partida ou alternar entre os modos disponíveis.

## Design e responsividade

O projeto foi pensado para manter a identidade visual do desafio Frontend Mentor, com atenção especial a proporção dos elementos, espaçamento e contraste. A interface foi adaptada para diferentes tamanhos de tela, preservando legibilidade e hierarquia visual tanto em mobile quanto em desktop.

## Aprendizado

Esse projeto foi importante para consolidar conceitos de frontend e desenvolvimento de interfaces interativas, especialmente em:

- gerenciamento de estado em React
- organização de componentes reutilizáveis
- separação entre lógica de negócio e apresentação
- criação de experiências responsivas e consistentes
- persistência de dados simples no navegador
- refinamento de UX por meio de feedback visual e transição de estados

Além disso, o projeto reforçou a importância de construir soluções com manutenção em mente, mantendo a lógica centralizada e reduzindo duplicação de código.

## Como executar localmente

```bash
npm install
npm run dev
```

## Scripts disponíveis

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

## Conclusão

Este projeto representa uma aplicação completa de um jogo interativo, com foco em lógica, interface e responsividade. Além de cumprir o desafio técnico, ele também serve como uma demonstração prática de organização de componentes, manipulação de estado e construção de experiências de usuário bem estruturadas.
