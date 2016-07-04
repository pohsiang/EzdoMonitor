import MySQLdb
import random
import time

db = MySQLdb.connect(host="localhost", user="root", passwd="root", db="ezdo")
cursor = db.cursor()
querySql = "SELECT name FROM `meters`"
cursor.execute(querySql)

for (name) in cursor:
    print "name:" + str(name)
    for i in range(10):
        phNum = random.randint(1, 100)
        oNum = random.randint(1, 100)
        orpNum = random.randint(1, 100)
        eNum = random.randint(1, 100)
        condNum = random.randint(1, 100)
        sql_string = "UPDATE `meters` SET `ph`='" +str(phNum)+ "',`o`='" +str(oNum)+"',`orp`='" +str(orpNum)+ "',`ec`='"+str(eNum)+"',`cond`='"+str(condNum)+"' WHERE `name`= '" + str(name[0])  + "'";
        cursor.execute(sql_string)
        db.commit()
        time.sleep(0.5)

cursor.close()
db.close()
