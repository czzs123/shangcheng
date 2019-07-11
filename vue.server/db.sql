#创建用户登录表
#1:xz_login id name pwd
CREATE TABLE xz_login(
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(25),
  pwd  VARCHAR(32)
);
#2:添加二条测试数据
INSERT INTO xz_login VALUES(null,'tom',md5('123'));
INSERT INTO xz_login VALUES(null,'jerry',md5('123'));

#创建xz_news新闻表
create table xz_news(
  id INT PRIMARY KEY AUTO_INCREMENT,
  img_url VARCHAR(255),
  title   VARCHAR(255),
  content VARCHAR(2000),
  ctime   datetime,
  point   INT
);
INSERT INTO xz_news VALUES(null,'2.png','1','1',now(),0);
INSERT INTO xz_news VALUES(null,'2.png','12','1',now(),0);
INSERT INTO xz_news VALUES(null,'2.png','13','1',now(),0);
INSERT INTO xz_news VALUES(null,'2.png','14','1',now(),0);
INSERT INTO xz_news VALUES(null,'2.png','15','1',now(),0);
INSERT INTO xz_news VALUES(null,'2.png','16','1',now(),0);
INSERT INTO xz_news VALUES(null,'2.png','17','1',now(),0);
INSERT INTO xz_news VALUES(null,'2.png','18','1',now(),0);
INSERT INTO xz_news VALUES(null,'2.png','19','1',now(),0);
INSERT INTO xz_news VALUES(null,'2.png','10','1',now(),0);
INSERT INTO xz_news VALUES(null,'2.png','111','1',now(),0);
INSERT INTO xz_news VALUES(null,'2.png','112','1',now(),0);
INSERT INTO xz_news VALUES(null,'2.png','113','1',now(),0);
INSERT INTO xz_news VALUES(null,'2.png','114','1',now(),0);
INSERT INTO xz_news VALUES(null,'2.png','115','1',now(),0);

#创建购物车表 40~49 #INT PRIMARY KEY AUTO_INCREMENT,
CREATE TABLE xz_cart(
  id    INT,
  lname VARCHAR(25),
  price DECIMAL(10,2),
  count INT,
  uid   INT
);
INSERT INTO xz_cart VALUES(1,'mac',7999.99,1,19);
INSERT INTO xz_cart VALUES(null,'华为',9999.99,1,19);
INSERT INTO xz_cart VALUES(null,'小辣椒',2999.99,9,19);
INSERT INTO xz_cart VALUES(null,'中辣椒',2999.99,9,19);
INSERT INTO xz_cart VALUES(null,'大辣椒',2999.99,9,19;
INSERT INTO xz_cart VALUES(null,'超大辣椒',2999.99,9,19);
INSERT INTO xz_cart VALUES(null,'小辣椒',2999.99,19,19);
INSERT INTO xz_cart VALUES(null,'中辣椒',2999.99,19,19);
INSERT INTO xz_cart VALUES(null,'大辣椒',2999.99,19,19);
INSERT INTO xz_cart VALUES(null,'超大辣椒',2999.99,1,19);
#删除单行的语法
delete from xz_cart where id=12;
#删除多行的语法
delete from xz_cart where id In (17,18);
