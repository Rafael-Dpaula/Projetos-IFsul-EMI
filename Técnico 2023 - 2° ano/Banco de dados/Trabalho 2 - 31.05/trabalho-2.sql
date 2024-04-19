CREATE TABLE CIDADE
(
cid_codigo serial NOT NULL unique,
cid_nome varchar(100) NOT NULL,
cid_uf char(2) NOT NULL,
CONSTRAINT CIDADE_PK primary key(cid_codigo)
);
CREATE TABLE PESSOA
(
pes_codigo serial NOT NULL unique,
pes_nome varchar(50) NOT NULL,
pes_cpf char(11) NOT NULL,
pes_ap char(4) NOT NULL,
pes_sexo char(1) NULL,
pes_nascimento date NULL,
fk_cid_codigo integer NOT NULL,
CONSTRAINT tblpessoa_pes_sexo_check CHECK (pes_sexo = 'M' OR pes_sexo = 'F'),
CONSTRAINT PESSOA_PK primary key(pes_codigo)
);
CREATE TABLE LINHA
(
lin_codigo serial NOT NULL unique,
lin_numero char(4) NOT NULL unique,
lin_saldo numeric(15,2) default 0,
fk_pes_codigo integer NOT NULL,
CONSTRAINT LINHA_PK primary key(lin_codigo)
);
CREATE TABLE TARIFA
(
tar_codigo serial NOT NULL unique,
tar_valor numeric(15,2) NOT NULL,
tar_descricao char(1) NOT NULL,
CONSTRAINT tbltarifa_tar_descricao_check CHECK (tar_descricao = 'N' OR tar_descricao =
'R' OR tar_descricao = 'S'),
CONSTRAINT TARIFA_PK primary key(tar_codigo)
);
CREATE TABLE CHAMADA
(
cha_codigo serial NOT NULL unique,
cha_data date NOT NULL,
cha_hora time NOT NULL,
cha_duracao time NOT NULL,
cha_numero varchar(20) NOT NULL,
fk_tar_codigo integer NOT NULL,
fk_lin_codigo integer NOT NULL,
fk_pes_codigo integer NOT NULL,
CONSTRAINT CHAMADA_PK primary key(cha_codigo)
);
ALTER TABLE CHAMADA ADD
CONSTRAINT fk_chamada_linha FOREIGN KEY (fk_lin_codigo) REFERENCES
linha(lin_codigo)
on delete cascade;
ALTER TABLE CHAMADA ADD
CONSTRAINT fk_chamada_tarifa FOREIGN KEY (fk_tar_codigo) REFERENCES
tarifa(tar_codigo)
on delete restrict;
ALTER TABLE LINHA ADD
CONSTRAINT fk_linha_pessoa FOREIGN KEY (fk_pes_codigo) REFERENCES
pessoa(pes_codigo)
on delete cascade;
INSERT INTO CIDADE (cid_nome, cid_uf)
VALUES ('Sarandi', 'RS'), ('Passo Fundo', 'RS'), ('Nonoai', 'RS'), ('Chapecó', 'SC'),
('Sarandi', 'MT'), ('Nova Petrópolis', 'RJ'), ('Bajé', 'RS'), ('Carazinho', 'RS'),
('Marau do Sul', 'RS'), ('Palmeira das Missões', 'BA'), ('Vacaria', 'RS');
INSERT INTO tarifa (tar_valor, tar_descricao) VALUES (0.46, 'N');
INSERT INTO tarifa (tar_valor, tar_descricao) VALUES (0.36, 'R');
INSERT INTO tarifa (tar_valor, tar_descricao) VALUES (0.29, 'S');
INSERT INTO pessoa (pes_nome, pes_cpf, pes_ap, pes_sexo, pes_nascimento,
fk_cid_codigo) VALUES ('Margarete Ribeiro', '56424709812', '302', 'F', NULL, 5);
INSERT INTO pessoa (pes_nome, pes_cpf, pes_ap, pes_sexo, pes_nascimento,
fk_cid_codigo)
VALUES ('Pedro Salles', '7654310982 ', '108', 'M', NULL, 6);
INSERT INTO pessoa (pes_nome, pes_cpf, pes_ap, pes_sexo, pes_nascimento,
fk_cid_codigo) VALUES ('César Amende Leal', '65428971632', '220', 'M', NULL, 8);
INSERT INTO pessoa (pes_nome, pes_cpf, pes_ap, pes_sexo, pes_nascimento,
fk_cid_codigo) VALUES ('Marco Aurélio dos Santos', '27365418907', '102', 'M', '1973-08-25', 1);
INSERT INTO pessoa (pes_nome, pes_cpf, pes_ap, pes_sexo, pes_nascimento,
fk_cid_codigo) VALUES ('Elys Regina', '27398418909', '105', 'F', '1984-04-12', 4);
INSERT INTO pessoa (pes_nome, pes_cpf, pes_ap, pes_sexo, pes_nascimento,
fk_cid_codigo) VALUES ('Fernando Pessoa', '78965432190', '210', 'M', '1976-09-26', 3);
INSERT INTO pessoa (pes_nome, pes_cpf, pes_ap, pes_sexo, pes_nascimento,
fk_cid_codigo) VALUES ('Fernanda Saldanha', '90845313206', '208', 'F', '1979-08-12', 4);
INSERT INTO pessoa (pes_nome, pes_cpf, pes_ap, pes_sexo, pes_nascimento,
fk_cid_codigo) VALUES ('Renato Wissmann', '98704537219', '303', 'M', '1981-12-12', 7);
INSERT INTO linha (lin_numero, lin_saldo, fk_pes_codigo) VALUES ('8356', 0.00, 1);
INSERT INTO linha (lin_numero, lin_saldo, fk_pes_codigo) VALUES ('8355', 0.00, 2);
INSERT INTO linha (lin_numero, lin_saldo, fk_pes_codigo) VALUES ('8344', 6.86, 3);
INSERT INTO linha (lin_numero, lin_saldo, fk_pes_codigo) VALUES ('8345', 2.76, 4);
INSERT INTO linha (lin_numero, lin_saldo, fk_pes_codigo) VALUES ('8376', 0.00, 1);
INSERT INTO linha (lin_numero, lin_saldo, fk_pes_codigo) VALUES ('8383', 0.72, 5);
INSERT INTO linha (lin_numero, lin_saldo, fk_pes_codigo) VALUES ('8325', 0.00, 6);
INSERT INTO linha (lin_numero, lin_saldo, fk_pes_codigo) VALUES ('8378', 0.00, 7);
INSERT INTO linha (lin_numero, lin_saldo, fk_pes_codigo) VALUES ('8322', 0.46, 2);
INSERT INTO linha (lin_numero, lin_saldo, fk_pes_codigo) VALUES ('8326', 2.36, 7);