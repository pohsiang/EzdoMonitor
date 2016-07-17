
USE ezdo;

CREATE TABLE `meters` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT '',
  `ph` varchar(20) NOT NULL DEFAULT '0',
  `ph_unit` varchar(20) NOT NULL DEFAULT '0',
  `orp` varchar(20) NOT NULL DEFAULT '0',
  `orp_unit` varchar(20) NOT NULL DEFAULT '0',
  `do` varchar(20) NOT NULL DEFAULT '0',
  `do_unit` varchar(20) NOT NULL DEFAULT '0',
  `cond` varchar(20) NOT NULL DEFAULT '0',
  `cond_unit` varchar(20) NOT NULL DEFAULT '0',
  `salt` varchar(20) NOT NULL DEFAULT '0',
  `salt_unit` varchar(20) NOT NULL DEFAULT '0',
  `temp` varchar(20) NOT NULL DEFAULT '0',
  `temp_unit` varchar(20) NOT NULL DEFAULT '0',
  `datetime` varchar(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
INSERT INTO `meters` (`name`, `ph`, `ph_unit`) VALUES 
  ('Kepler', '7', '');
