import MySQLdb
import random
import time
import datetime

db = MySQLdb.connect(host="localhost", user="root", passwd="root", db="ezdo")
cursor = db.cursor()

clear_history_data_sql = "DELETE FROM `historydata`"
cursor.execute(clear_history_data_sql)
db.commit()

for x in range(1000):
    phNum = round(random.uniform(8.0, 9.2), 1)
    tempNum = random.randint(20, 30)
    ts = time.time() + x * 1000
    timeNum = datetime.datetime.fromtimestamp(ts).strftime('%Y-%m-%d %H:%M:%S')
    sql_string = "INSERT INTO `historydata` (`name`, `type`, `value`, `unit`, `temp`, `tempunit`, `exetime`) VALUES" 
    sql_string += "('Kepler','pH','"+str(phNum)+"','pH','"+str(tempNum)+"','C','"+str(timeNum)+"')"
    print str(sql_string)
    cursor.execute(sql_string)
    db.commit()

cursor.close()
db.close()
