# Eventify - Mobile Event Management and Networking App

**Eventify** é um aplicativo de gestão de eventos e networking que permite aos usuários criar, participar e interagir em eventos de forma fácil e eficiente. Organize eventos, faça networking com outros participantes e mantenha-se informado com notificações em tempo real.

## Índice

- [Visão Geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Arquitetura](#arquitetura)
- [Configuração do Ambiente de Desenvolvimento](#configuração-do-ambiente-de-desenvolvimento)
- [Como Usar](#como-usar)
- [Estrutura do Banco de Dados](#estrutura-do-banco-de-dados)
- [Contribuindo](#contribuindo)
- [Licença](#licença)

## Visão Geral

O **Eventify** é um aplicativo mobile completo para gestão de eventos, permitindo que os usuários criem eventos, inscrevam-se, façam check-in usando QR Codes e interajam com outros participantes através de chat em tempo real. O backend gerencia a autenticação, a lógica de eventos e a comunicação em tempo real, enquanto o frontend, desenvolvido em React Native, oferece uma interface amigável e responsiva.

## Funcionalidades

### Usuários
- Registro, login e gerenciamento de perfis.
- Diferentes roles: usuário comum ou organizador.
- Autenticação via JWT.

### Eventos
- Criação, edição e exclusão de eventos por organizadores.
- Inscrição em eventos e confirmação de presença.
- Detalhes do evento, incluindo palestrantes, local e categoria.
- Geração e leitura de QR Codes para check-in no evento.

### Networking
- Chat em grupo para cada evento.
- Mensagens privadas entre participantes.
- Notificações push sobre eventos, mensagens e atualizações.

## Tecnologias Utilizadas

### Mobile
- **Angular com Ionic**: Framework para desenvolvimento mobile cross-platform.
- **Tailwind.css**: Framework CSS para estilização inline-css.
- **Firebase**: Notificações push e autenticação social (opcional).

### Backend
- **Node.js com Nest.js**: Framework para desenvolvimento de API REST.
- **PostgresSQL**: Banco de dados SQL para armazenamento de dados.
- **Socket.io**: Implementação de WebSockets para chat em tempo real.
- **JWT (JSON Web Token)**: Autenticação e autorização de usuários.
- **AWS S3**: Armazenamento de imagens.

## Arquitetura

O projeto segue uma arquitetura client-server:

1. **Mobile**: Desenvolvido em Angular + Ionic, responsável por fornecer a interface do usuário e interagir com a API backend.
2. **Backend**: Implementado em Node.js com Nest.js, gerencia a lógica de negócios, autenticação, persistência de dados e comunicação em tempo real.
3. **Banco de Dados**: PostgresSQL é usado para armazenar dados estruturados como usuários, eventos, e mensagens.




## Configuração do Ambiente de Desenvolvimento

### Pré-requisitos

- **Node.js**
- **Angular**
- **Ionic**
- **Nest.js**
- **PostgresSQL**

### Instruções

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/eventify.git
    cd eventify
    ```

2. Instale as dependências do backend:
    ```bash
    cd backend
    npm install
    ```

3. Configure as variáveis de ambiente no arquivo `.env`:
    ```bash
    PORT=3000
    DATABASE_URL=mongodb://localhost:27017/eventify
    JWT_SECRET=sua_chave_secreta
    ```

4. Execute o servidor backend:
    ```bash
    npm run start:dev
    ```

5. Instale as dependências do frontend:
    ```bash
    cd ../eventNet
    npm install
    ```

6. Execute o aplicativo mobile:
    ```bash
    ionic serve
    ```

## Como Usar

- **Criar Conta**: Registre-se como usuário ou organizador.
- **Navegar por Eventos**: Explore eventos disponíveis na página principal.
- **Criar Evento**: Como organizador, crie um novo evento.
- **Participar e Interagir**: Inscreva-se em eventos, participe de chats e faça check-in usando QR Codes.
- **Receber Notificações**: Fique atualizado com notificações push sobre seus eventos e mensagens.

## Estrutura do Banco de Dados

![image](https://github.com/user-attachments/assets/4065d223-ef36-4573-87f3-f764138d6cdd)

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

Esse README fornece uma visão clara do projeto, suas funcionalidades, como configurá-lo e contribuir para ele. Ajuste conforme necessário para refletir as especificidades do seu projeto.
