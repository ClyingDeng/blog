CREATE TABLE `blog` (
`Id` int(20) NOT NULL AUTO_INCREMENT COMMENT '博客编号',
`title` varchar(255) NOT NULL COMMENT '标题',
`content` varchar(300) NOT NULL COMMENT '博客内容',
`type` int(1) NOT NULL COMMENT '类型：0代表vue,1代表Node，2代表React,3代表Angular',
`author` varchar(20) NULL COMMENT '作者',
PRIMARY KEY (`Id`) 
);

select title,content,type,author from blog;

insert blog(title,content,type,author) values ('SUNT AUT FACERE REPELLAT PROVIDENT OCCAECATI EXCEPTURI OPTIO REPREHENDERIT','quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas',2,'deng');

delete from blog where ID = ;
update blog set title = 'hh' ,content = 'hh',type = 1,author = 'hh' where Id = 11;