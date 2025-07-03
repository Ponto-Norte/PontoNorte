
	CREATE DATABASE IF NOT EXISTS PontoNorte;
	USE PontoNorte;

	CREATE TABLE Trilheiro (
	  id_trilheiro INT PRIMARY KEY AUTO_INCREMENT,
	  nome_trilheiro VARCHAR(100) NOT NULL,
	  cpf_trilheiro VARCHAR(14) NOT NULL,
	  email_trilheiro VARCHAR(100) NOT NULL,
	  telefoneTrilheiro VARCHAR(15),
	  senha_trilheiro VARCHAR(100) NOT NULL,
	  /*fk_emailTrilheiro_emailTrilheiro_PK INT,
	  fk_telefoneTrilheiro_telefoneTrilheiro_PK INT,*/
	  apelidoTrilheiro VARCHAR(50),
	  descricaoTrilheiro VARCHAR(500),
	  generoTrilheiro VARCHAR(20),
	  pronomeTrilheiro VARCHAR(20),
	  informacoesMedicasTrilheiro VARCHAR(500),
	  fk_enderecoTrilheiro_enderecoTrilheiro_PK INT,
	  fk_dadosBancariosTrilheiro_dadosBancariosTrilheiro_PK INT,
	  dataNascimentoTrilheiro DATE
	);

CREATE TABLE guia (
  id_guia INT PRIMARY KEY AUTO_INCREMENT,
  nome_guia VARCHAR(100) NOT NULL,
  sobrenome_guia VARCHAR(100) NOT NULL,
  cpf_guia VARCHAR(14) NOT NULL,
  email_guia VARCHAR(100),
  telefone_guia VARCHAR(15),
  senha_guia VARCHAR(100) NOT NULL,
  pronome_guia VARCHAR(20),
  regiao_guia VARCHAR(100),
  experiencia_ponto_norte_guia VARCHAR(500),
  descricao_guia VARCHAR(500),
  numero_registro_guia INT,
  principais_trilhas_guia VARCHAR(300),
  nivel_conta_guia INT,
  fk_dados_bancarios_guia_pk INT,
  fk_endereco_guia_pk INT
);


CREATE TABLE ProximaTrilhaTrilheiro (
  idProximoTrilhaTrilheiro INT PRIMARY KEY AUTO_INCREMENT,
  contatoGuiaProximaTrilhaTrilheiro VARCHAR(15),
  dataProximaTrilhaTrilheiro DATE,
  horaProximaTrilhaTrilheiro TIME,
  pontoReferenciaProximaTrilhaTrilheiro VARCHAR(200)
);

CREATE TABLE PagamentoPlano (
  idPagamentoPlano INT PRIMARY KEY AUTO_INCREMENT,
  formaPagamentoPlano VARCHAR(50),
  comprovantePagamentoPlano BLOB,
  tipoPlanoSelecionado VARCHAR(50),
  valorPagamentoPlano DECIMAL(10,2),
  dataPagamentoPlano DATE,
  horaPagamentoPlano TIME,
  fk_enderecoPagamentoPlano_enderecoPagamentoPlano_PK INT,
  fk_infoPessoaisPagamentoPlano_infoPessoaisPagamentoPlano_PK INT
);

CREATE TABLE HistoricoTrilhaFeitaTrilheiro (
  idHistoricoTrilhaFeita INT PRIMARY KEY AUTO_INCREMENT,
  guiaHistoricoTrilhaTrilheiro VARCHAR(100),
  dataHistoricoTrilhaTrilheiro DATE
);

CREATE TABLE ScoreTrilheiro (
  idScoreTrilheiro INT PRIMARY KEY AUTO_INCREMENT,
  pontuacaoScoreTrilheiro INT
);

CREATE TABLE AvaliacaoTrilheiroParaGuia (
  idAvaliacaoTrilheiro INT PRIMARY KEY AUTO_INCREMENT,
  comentarioAvaliacaoTrilheiro VARCHAR(500),
  indiceAvaliacaoTrilheiro TINYINT
);

CREATE TABLE Plano (
  idPlano INT PRIMARY KEY AUTO_INCREMENT,
  nomePlano VARCHAR(50),
  descricaoPlano VARCHAR(200)
);

CREATE TABLE PagamentoGuia (
  idPagamentoGuia INT PRIMARY KEY AUTO_INCREMENT,
  formaPagamentoGuia VARCHAR(50),
  horaPagamentoGuia TIME,
  dataPagamentoGuia DATE,
  comprovantePagamentoGuia BLOB,
  tipoPagamentoGuia VARCHAR(50),
  valor DECIMAL(10,2)
);

CREATE TABLE Trilha (
  idTrilha INT PRIMARY KEY AUTO_INCREMENT,
  nomeTrilha VARCHAR(100),
  imagensTrilha BLOB,
  comentarioTrilha VARCHAR(500),
  trajetoTrilha BLOB,
  descricaoTrilha VARCHAR(1000),
  fk_infoTecnicaTrilha_infoTecnicaTrilha_PK INT,
  fk_equipamentoRecomendado_equipamentoRecomendado_PK INT
);

CREATE TABLE AgendaGuia (
  idAgendaGuia INT PRIMARY KEY AUTO_INCREMENT,
  quantidadePessoasAgendaGuia INT,
  valorAgendaGuia DECIMAL(10,2),
  horaPartidaAgendaGuia TIME,
  dataAgendaGuia DATE,
  horaRetornoAgendaGuia TIME,
  localEncontroAgendaGuia VARCHAR(200),
  fk_convidadoAgendaGuia_convidadoAgendaGuia_PK INT,
  fk_responsavelMenorAgenda_responsavelMenorAgenda_PK INT
);

CREATE TABLE UltimaTrilhaFeitaGuia (
  idUltimaTrilhaFeitaGuia INT PRIMARY KEY AUTO_INCREMENT,
  horaUltimaTrilhaGuia TIME,
  dataUltimaTrilhaGuia DATE,
  localUltimaTrilhaGuia VARCHAR(200)
);

CREATE TABLE AvalliacaoGuiaParaTrilheiro (
  idAvaliacaoGuia INT PRIMARY KEY AUTO_INCREMENT,
  descricaoAvaliacaoGuia VARCHAR(500),
  indiceAvaliacaoGuia TINYINT
);

-- Tabelas auxiliares
/*CREATE TABLE emailTrilheiro (
  emailTrilheiro_PK INT PRIMARY KEY AUTO_INCREMENT,
  emailTrilheiro VARCHAR(100)
);

CREATE TABLE telefoneTrilheiro (
  telefoneTrilheiro_PK INT PRIMARY KEY AUTO_INCREMENT,
  telefoneTrilheiro VARCHAR(15)
);*/

CREATE TABLE enderecoTrilheiro (
  enderecoTrilheiro_PK INT PRIMARY KEY AUTO_INCREMENT,
  ruaEnderecoTrilheiro VARCHAR(100),
  numeroEnderecoTrilheiro INT,
  bairroEnderecoTrilheiro VARCHAR(100),
  cidadeEnderecoTrilheiro VARCHAR(100),
  estadoEnderecoTrilheiro VARCHAR(50),
  cepEnderecoTrilheiro VARCHAR(10)
);

CREATE TABLE dadosBancariosTrilheiro (
  dadosBancariosTrilheiro_PK INT PRIMARY KEY AUTO_INCREMENT,
  instituicaoBancaria VARCHAR(100),
  numeroConta VARCHAR(20),
  agenciaBancaria VARCHAR(10),
  codigoBanco VARCHAR(10)
);

CREATE TABLE dados_bancarios_guia (
  dados_bancarios_guia_pk INT PRIMARY KEY AUTO_INCREMENT,
  instituicao_bancaria VARCHAR(100),
  numero_conta_guia VARCHAR(20),
  agencia_bancaria_guia VARCHAR(10),
  codigo_banco_guia VARCHAR(10)
);


CREATE TABLE endereco_guia (
  endereco_guia_pk INT PRIMARY KEY AUTO_INCREMENT,
  rua_endereco_guia VARCHAR(100),
  numero_endereco_guia INT,
  bairro_endereco_guia VARCHAR(100),
  cidade_endereco_guia VARCHAR(100),
  estado_endereco_guia VARCHAR(50),
  cep_endereco_guia VARCHAR(10),
  pontoref_endereco_guia VARCHAR(100)
);


CREATE TABLE enderecoPagamentoPlano (
  enderecoPagamentoPlano_PK INT PRIMARY KEY AUTO_INCREMENT,
  ruaEnderecoPagamentoPlano VARCHAR(100),
  numeroEnderecoPagamentoPlano INT,
  bairroEnderecoPagamentoPlano VARCHAR(100),
  estadoEnderecoPagamentoPlano VARCHAR(50),
  cidadeEnderecoPagamentoPlano VARCHAR(100)
);

CREATE TABLE infoPessoaisPagamentoPlano (
  infoPessoaisPagamentoPlano_PK INT PRIMARY KEY AUTO_INCREMENT,
  nomeInfoPessoaisTrilheiro VARCHAR(100),
  cpfInfoPessoaisTrilheiro VARCHAR(14),
  emailInfoPessoaisTrilheiro VARCHAR(100)
);

CREATE TABLE infoTecnicaTrilha (
  infoTecnicaTrilha_PK INT PRIMARY KEY AUTO_INCREMENT,
  distanciaInfoTecnicaTrilha INT,
  elevacaoMaximaInfoTecnicaTrilha INT
);

CREATE TABLE equipamentoRecomendado (
  equipamentoRecomendado_PK INT PRIMARY KEY AUTO_INCREMENT,
  tipoEquipamentoRecomendado VARCHAR(100),
  descricaoEquipamentoRecomendado VARCHAR(500)
);

CREATE TABLE convidadoAgendaGuia (
  convidadoAgendaGuia_PK INT PRIMARY KEY AUTO_INCREMENT,
  cpfConvidadoAgendaGuia VARCHAR(14),
  nomeConvidadoAgendaGuia VARCHAR(100),
  dataNascimentoConvidadoAgendaGuia DATE
);

CREATE TABLE ResponsavelMenorAgenda (
  responsavelMenorAgenda_PK INT PRIMARY KEY AUTO_INCREMENT,
  nomeResponsavelMenorAgenda VARCHAR(100),
  cpfResponsavelMenorAgenda VARCHAR(14),
  dataNascimentoResponsavelMenorAgenda DATE,
  telefoneResponsavelMenorAgenda VARCHAR(15)
);

CREATE TABLE Aderir (
  idAderir INT PRIMARY KEY AUTO_INCREMENT,
  fk_HistoricoTrilhaFeitaTrilheiro_idHistoricoTrilhaFeita INT,
  fk_ScoreTrilheiro_idScoreTrilheiro INT
);

CREATE TABLE Definir (
  idDefinir INT PRIMARY KEY AUTO_INCREMENT,
  fk_Trilheiro_idTrilheiro INT,
  fk_ProximaTrilhaTrilheiro_idProximoTrilhaTrilheiro INT
);

CREATE TABLE Efetuar (
  idEfetuar INT PRIMARY KEY AUTO_INCREMENT,
  fk_PagamentoPlano_idPagamentoPlano INT,
  fk_Trilheiro_idTrilheiro INT,
  CONSTRAINT FK_Efetuar_1 FOREIGN KEY (fk_PagamentoPlano_idPagamentoPlano)
    REFERENCES PagamentoPlano(idPagamentoPlano),
  CONSTRAINT FK_Efetuar_2 FOREIGN KEY (fk_Trilheiro_idTrilheiro)
    REFERENCES Trilheiro(id_trilheiro)
);

CREATE TABLE Adquirir (
  idAdquirir INT PRIMARY KEY AUTO_INCREMENT,
  fk_Trilheiro_idTrilheiro INT,
  fk_Plano_idPlano INT
);


ALTER TABLE Trilheiro
  ADD CONSTRAINT FK_Trilheiro_4 FOREIGN KEY (fk_enderecoTrilheiro_enderecoTrilheiro_PK)
  REFERENCES enderecoTrilheiro(enderecoTrilheiro_PK) ON DELETE SET NULL,
  ADD CONSTRAINT FK_Trilheiro_5 FOREIGN KEY (fk_dadosBancariosTrilheiro_dadosBancariosTrilheiro_PK)
  REFERENCES dadosBancariosTrilheiro(dadosBancariosTrilheiro_PK) ON DELETE SET NULL;

ALTER TABLE guia
  ADD CONSTRAINT fk_guia_dados_bancarios FOREIGN KEY (fk_dados_bancarios_guia_pk)
  REFERENCES dados_bancarios_guia(dados_bancarios_guia_pk) ON DELETE SET NULL,

  ADD CONSTRAINT fk_guia_endereco FOREIGN KEY (fk_endereco_guia_pk)
  REFERENCES endereco_guia(endereco_guia_pk) ON DELETE SET NULL;


ALTER TABLE PagamentoPlano
  ADD CONSTRAINT FK_PagamentoPlano_2 FOREIGN KEY (fk_enderecoPagamentoPlano_enderecoPagamentoPlano_PK)
  REFERENCES enderecoPagamentoPlano(enderecoPagamentoPlano_PK) ON DELETE SET NULL,
  ADD CONSTRAINT FK_PagamentoPlano_3 FOREIGN KEY (fk_infoPessoaisPagamentoPlano_infoPessoaisPagamentoPlano_PK)
  REFERENCES infoPessoaisPagamentoPlano(infoPessoaisPagamentoPlano_PK) ON DELETE SET NULL;

ALTER TABLE Trilha
  ADD CONSTRAINT FK_Trilha_2 FOREIGN KEY (fk_infoTecnicaTrilha_infoTecnicaTrilha_PK)
  REFERENCES infoTecnicaTrilha(infoTecnicaTrilha_PK) ON DELETE SET NULL,
  ADD CONSTRAINT FK_Trilha_3 FOREIGN KEY (fk_equipamentoRecomendado_equipamentoRecomendado_PK)
  REFERENCES equipamentoRecomendado(equipamentoRecomendado_PK) ON DELETE SET NULL;

ALTER TABLE AgendaGuia
  ADD CONSTRAINT fk_convidadoAgenda FOREIGN KEY (fk_convidadoAgendaGuia_convidadoAgendaGuia_PK)
    REFERENCES convidadoAgendaGuia(convidadoAgendaGuia_PK)
    ON DELETE SET NULL,
  ADD CONSTRAINT fk_responsavelMenorAgenda FOREIGN KEY (fk_ResponsavelMenorAgenda_ResponsavelMenorAgenda_PK)
    REFERENCES ResponsavelMenorAgenda(ResponsavelMenorAgenda_PK)
    ON DELETE SET NULL;


ALTER TABLE Definir
  ADD CONSTRAINT FK_Definir_1 FOREIGN KEY (fk_Trilheiro_idTrilheiro)
    REFERENCES Trilheiro(id_trilheiro),
  ADD CONSTRAINT FK_Definir_2 FOREIGN KEY (fk_ProximaTrilhaTrilheiro_idProximoTrilhaTrilheiro)
    REFERENCES ProximaTrilhaTrilheiro(idProximoTrilhaTrilheiro);
/*
ALTER TABLE Efetuar
  ADD CONSTRAINT FK_Efetuar_1 FOREIGN KEY (fk_PagamentoPlano_idPagamentoPlano)
  REFERENCES PagamentoPlano(idPagamentoPlano),
  ADD CONSTRAINT FK_Efetuar_2 FOREIGN KEY (fk_Trilheiro_idTrilheiro)
  REFERENCES Trilheiro(idTrilheiro);
*/

ALTER TABLE Aderir
  ADD CONSTRAINT FK_Aderir_1 FOREIGN KEY (fk_HistoricoTrilhaFeitaTrilheiro_idHistoricoTrilhaFeita)
  REFERENCES HistoricoTrilhaFeitaTrilheiro(idHistoricoTrilhaFeita),
  ADD CONSTRAINT FK_Aderir_2 FOREIGN KEY (fk_ScoreTrilheiro_idScoreTrilheiro)
  REFERENCES ScoreTrilheiro(idScoreTrilheiro);

ALTER TABLE Adquirir
  ADD CONSTRAINT FK_Adquirir_1 FOREIGN KEY (fk_Trilheiro_idTrilheiro)
  REFERENCES Trilheiro(id_trilheiro),
  ADD CONSTRAINT FK_Adquirir_2 FOREIGN KEY (fk_Plano_idPlano)
  REFERENCES Plano(idPlano);

ALTER TABLE dados_bancarios_guia
ADD COLUMN guia_id INT,
ADD CONSTRAINT fk_dados_bancarios_guia_guia
FOREIGN KEY (guia_id) REFERENCES guia(id_guia) ON DELETE CASCADE;

SELECT * FROM Trilheiro;
SELECT * FROM Guia;
SELECT * FROM endereco_guia;
SELect * from dados_bancarios_guia;
INSERT INTO Trilheiro(nomeTrilheiro, cpfTrilheiro, generoTrilheiro)
VALUES ('Enzo', '12345678900', 'Masculino'),
       ('Jailson', '12342278900', 'Masculino');
	
INSERT INTO Trilheiro(nomeTrilheiro, emailTrilheiro, senhaTrilheiro)
VALUES ('Enzo', 'enzosiqueira22@gmail.com', '1234'),
       ('Jailson', 'jaja@gmail.com', '1234');
       INSERT INTO Trilheiro(nomeTrilheiro, emailTrilheiro, senhaTrilheiro)
VALUES ('Enzossss', 'enzosiqueira22@gmail.com', '1234'),
       ('Jailsonnm', 'jaja@gmail.com', '1234');