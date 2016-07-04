
USE ezdo;

CREATE TABLE `meters` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(10) DEFAULT '',
  `ph` varchar(10) NOT NULL DEFAULT '0',
  `orp` varchar(10) NOT NULL DEFAULT '0',
  `o` varchar(10) NOT NULL DEFAULT '0',
  `ec` varchar(10) NOT NULL DEFAULT '0',
  `cond` varchar(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
INSERT INTO `meters` (`name`, `ph`, `orp`, `o`, `ec`, `cond`) VALUES 
  ('Kepler', '7', '5.0','90','10','10');
