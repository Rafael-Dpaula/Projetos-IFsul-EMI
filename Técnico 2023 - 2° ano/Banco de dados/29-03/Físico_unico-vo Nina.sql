/* Lógico_unico-vo Nina : */

CREATE TABLE PRODUTOS (
    PRO_codigo INTEGER PRIMARY KEY UNIQUE,
    PRO_uni VARCHAR(2) NOT NULL,
    PRO_valor NUMERIC(10,2) NOT NULL,
    PRO_nome VARCHAR(100) NOT NULL,
    REC_codigo INTEGER NOT NULL,
);

CREATE TABLE RECEITAS (
    REC_rendimento VARCHAR(100) NOT NULL,
    REC_preparo TEXT NOT NULL,
    REC_codigo SERIAL PRIMARY KEY UNIQUE NOT NULL
);

CREATE TABLE FORNECEDORES (
    FOR_nome VARCHAR(100) NOT NULL,
    FOR_cnpj VARCHAR(14) NOT NULL,
    FOR_razao_social VARCHAR(100) NOT NULL,
    FOR_fone VARCHAR(11) NOT NULL,
    FOR_nome_fantasia VARCHAR(100) NULL,
    FOR_endereco VARCHAR(100) NULL,
    FOR_contato VARCHAR(100) NULL,
    FOR_codigo SERIAL PRIMARY KEY UNIQUE NOT NULL
);

CREATE TABLE CLIENTES (
    CLI_nome VARCHAR(100) NOT NULL,
    CLI_codigo SERIAL PRIMARY KEY UNIQUE NOT NULL,
    CLI_email VARCHAR(50) NULL,
    CLI_celular VARCHAR(11) NOT NULL,
    CLI_cpf VARCHAR(11) NOT NULL,
    CLI_endereco VARCHAR(100) NULL
);

CREATE TABLE PEDIDIOS (
    PED_forma_pgto CHAR(1) NOT NULL,
    PED_codigo SERIAL PRIMARY KEY UNIQUE NOT NULL,
    PED_data DATE NOT NULL,
    PED_hora TIME NOT NULL,
    PED_valor NUMERIC(10,2) NOT NULL DEFAULT 0,
    PED_status CHAR(1) NOT NULL,
    CLI_codigo INTEGER NOT NULL,
    CHECK(PED_forma_pgto = '1' OR PED_forma_pgto = '2' OR PED_forma_pgto = '3'),
    CHECK(PED_status = 'C' OR PED_status = 'P' OR PED_status = 'E')
);

CREATE TABLE INGREDIENTES (
    ING_nome VARCHAR(100) NOT NULL,
    ING_custo DECIMAL(10,2) NOT NULL,
    ING_codigo SERIAL PRIMARY KEY NOT NULL,
    ING_uni NUMERIC(1) NOT NULL 
);

CREATE TABLE EMBALAGENS (
    EMB_tipo VARCHAR(50) NOT NULL,
    EMB_codigo SERIAL PRIMARY KEY UNIQUE NOT NULL,
    EMB_capacidade VARCHAR(5),
    EMB_tamanho CHAR(1) NOT NULL,
    CHECK(EMB_tamanho = "P" OR EMB_tamanho = "M" OR EMB_tamanho = "G")
);

CREATE TABLE ENTREGAS (
    ENT_endereco VARCHAR(100) NOT NULL,
    ENT_codigo INTEGER UNIQUE,
    ENT_data DATE NOT NULL,
    ENT_hora TIME NOT NULL,
    ENT_responsavel VARCHAR(100) NOT NULL,
    ENT_status CHAR(1) NOT NULL,
    ENT_valor NUMERIC(10,2) NOT NULL,
    PED_codigo INTEGER NOT NULL,
    CHECK(ENT_status = "P" OR ENT_status = "C" OR ENT_status = "E")
);

CREATE TABLE EMB_FOR (
    EMB_codigo INTEGER NOT NULL,
    FOR_codigo INTEGER NOT NULL,
    EMB_FOR_valor NUMERIC(10,2) NOT NULL,
    EMB_FOR_data DATE NOT NULL,
    EMB_FOR_qtd INTEGER NOT NULL,
    PRIMARY KEY (FOR_codigo, EMB_codigo)
);

CREATE TABLE ING_FOR (
    FOR_codigo INTEGER NOT NULL,
    ING_codigo INTEGER NOT NULL,
    ING_FOR_valor NUMERIC(10,2) NOT NULL,
    ING_FOR_qtd INTEGER NOT NULL,
    ING_FOR_data DATE NOT NULL,
    PRIMARY KEY (ING_codigo, FOR_codigo)
);

CREATE TABLE REC_ING (
    INGREDIENTES_ING_codigo INTEGER NOT NULL,
    RECEITAS_REC_codigo INTEGER NOT NULL,
    REC_ING_qtd NUMERIC(10,2) NOT NULL
);

CREATE TABLE ITENS_PEDIDO (
    PRO_codigo INTEGER NOT NULL,
    PEDIDIOS_PED_codigo INTEGER NOT NULL,
    ITE_qtd INTEGER NOT NULL,
    PRIMARY KEY (PRO_codigo, PEDIDIOS_PED_codigo)
);
 
ALTER TABLE PRODUTOS ADD CONSTRAINT PRODUTOS_2
    FOREIGN KEY (REC_codigo)
    REFERENCES RECEITAS (REC_codigo)
    ON DELETE RESTRICT;
 
ALTER TABLE PEDIDIOS ADD CONSTRAINT PEDIDIOS_2
    FOREIGN KEY (CLI_codigo)
    REFERENCES CLIENTES (CLI_codigo)
    ON DELETE RESTRICT;
 
ALTER TABLE ENTREGAS ADD CONSTRAINT ENTREGAS_1
    FOREIGN KEY (PED_codigo)
    REFERENCES PEDIDIOS (PED_codigo)
    ON DELETE CASCADE;
 
ALTER TABLE EMB_FOR ADD CONSTRAINT EMB_FOR_1
    FOREIGN KEY (FOR_codigo)
    REFERENCES FORNECEDORES (FOR_codigo)
    ON DELETE RESTRICT;
 
ALTER TABLE EMB_FOR ADD CONSTRAINT EMB_FOR_2
    FOREIGN KEY (EMB_codigo)
    REFERENCES EMBALAGENS (EMB_codigo)
    ON DELETE RESTRICT;
 
ALTER TABLE ING_FOR ADD CONSTRAINT ING_FOR_1
    FOREIGN KEY (FOR_codigo)
    REFERENCES FORNECEDORES (FOR_codigo)
    ON DELETE RESTRICT;
 
ALTER TABLE ING_FOR ADD CONSTRAINT ING_FOR_2
    FOREIGN KEY (ING_codigo)
    REFERENCES INGREDIENTES (ING_codigo)
    ON DELETE RESTRICT;
 
ALTER TABLE REC_ING ADD CONSTRAINT REC_ING_1
    FOREIGN KEY (ING_codigo)
    REFERENCES INGREDIENTES (ING_codigo)
    ON DELETE RESTRICT;
 
ALTER TABLE REC_ING ADD CONSTRAINT REC_ING_2
    FOREIGN KEY (REC_codigo)
    REFERENCES RECEITAS (REC_codigo)
    ON DELETE CASCADE;
 
ALTER TABLE ITENS_PEDIDO ADD CONSTRAINT ITENS_PEDIDO_1
    FOREIGN KEY (PRO_codigo)
    REFERENCES PRODUTOS (PRO_codigo)
    ON DELETE RESTRICT;
 
ALTER TABLE ITENS_PEDIDO ADD CONSTRAINT ITENS_PEDIDO_2
    FOREIGN KEY (PED_codigo)
    REFERENCES PEDIDIOS (PED_codigo)
    ON DELETE CASCADE;


