# Temperamentum - Documentação Técnica

## Sobre o Projeto

Temperamentum é uma aplicação web dedicada ao autoconhecimento através da teoria dos temperamentos e inteligências múltiplas. O projeto oferece testes interativos, meditações espirituais e conteúdo educativo sobre desenvolvimento pessoal.

## Tecnologias Utilizadas

- **React**: Framework JavaScript para construção da interface
- **TypeScript**: Superset tipado de JavaScript
- **Tailwind CSS**: Framework CSS utilitário
- **shadcn/ui**: Componentes de UI reutilizáveis
- **React Router**: Roteamento client-side
- **React Query**: Gerenciamento de estado e cache
- **Vite**: Build tool e servidor de desenvolvimento

## Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── ui/             # Componentes de interface (shadcn)
│   ├── features/       # Componentes específicos de features
│   └── [outros]        # Componentes gerais (Header, Footer, etc.)
├── contexts/           # Contextos React para gerenciamento de estado
├── hooks/              # Hooks personalizados
├── lib/                # Funções utilitárias gerais
├── pages/              # Componentes de página
│   ├── Index.tsx       # Página inicial
│   ├── Meditacoes.tsx  # Lista de meditações
│   └── [outras]        # Demais páginas
├── types/              # Definições de tipos TypeScript
└── utils/              # Funções utilitárias específicas
    ├── quiz.ts         # Lógica do teste de temperamento
    ├── intelligences.ts # Lógica do teste de inteligências
    └── [outros]        # Outras utilidades
```

## Funcionalidades Principais

### 1. Sistema de Testes de Temperamento e Inteligências

- **Teste Rápido**: Avaliação simplificada dos quatro temperamentos
- **Teste Pe. Hock**: Avaliação detalhada baseada no questionário do Pe. Hock
- **Teste de Inteligências Múltiplas**: Baseado na teoria de Howard Gardner
- **Teste Combinado**: Integração de temperamentos e inteligências

### 2. Sistema de Meditações

- Meditações sobre temas espirituais e de autoconhecimento
- Conteúdo enriquecido com citações em latim e referências
- Imagens ilustrativas para cada meditação

### 3. Educação Familiar

- Artigos sobre família e educação
- Fundamentação em doutrina católica
- Exemplos de famílias santas e virtudes

## Rotas Principais

- `/`: Página inicial
- `/quiz`: Teste rápido de temperamento
- `/results`: Resultados do teste rápido
- `/temperamentos`: Informações sobre os quatro temperamentos
- `/meditacoes`: Lista de meditações disponíveis
- `/meditacao-*`: Páginas individuais de meditação
- `/testes`: Seleção de testes disponíveis
- `/pe-hock-*`: Teste e resultados do Pe. Hock
- `/inteligencias-*`: Testes e resultados de inteligências múltiplas
- `/teste-completo`: Teste completo (temperamento + inteligências)
- `/educacao-familiar`: Artigos sobre educação familiar
- `/privacidade`: Política de privacidade

## Paleta de Cores

- **Dourado**: `#D4AF37` (títulos e destaques)
- **Preto**: `#000000` (fundo principal)
- **Branco**: `#FFFFFF` (texto principal)
- **Cinza**: `#121212` (cards e elementos secundários)
- **Verde**: `#2E7D32` (botões primários)

## Instalação e Execução

```bash
# Instalar dependências
npm install

# Executar em modo de desenvolvimento
npm run dev

# Construir para produção
npm run build

# Visualizar build de produção
npm run preview
```

## Contribuição

Para contribuir com o projeto:

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova feature'`)
4. Faça push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença [MIT](LICENSE).