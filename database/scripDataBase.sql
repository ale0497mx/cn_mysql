create database credencialesdb;
use credencialesdb;

create table user(
    username varchar(50) not null,
    password varchar(50) not null,
    primary key(username, password)
);

INSERT INTO user (username, password) values
('user1', 'admin'),
('pepe', '1111');