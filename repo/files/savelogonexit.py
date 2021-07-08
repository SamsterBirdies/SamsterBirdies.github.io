import psutil, time, datetime

#Run this script at system startup.
'''
Howto with windows:
1. Edit the path constant to your correct Forts user path.
2. Install python 3.
3. Install psutil with pip.
4. Create a batch file in your startup folder. example: "C:\Users\SamsterBirdies\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup".
	Write and save: pythonw "<path to this script file>"
'''

#constants
path = "D:/Steam_Games/steamapps/common/Forts/users/76561198163519264/"

#functions
def checkIfProcessRunning(processName):
	'''Returns true if a process is running'''
	for proc in psutil.process_iter():
		try:
			if processName.lower() in proc.name().lower():
				return True
		except (psutil.NoSuchProcess, psutil.AccessDenied, psutil.ZombieProcess):
			pass
	return False;
def currentDate():
	'''gets the date in a file friendly format'''
	txt = str(datetime.datetime.now())
	txt = txt.replace(" ", "_")
	txt = txt.replace(":", "-")
	return txt
	
def saveLog():
	'''copies forts log from ./ to ./logs/ with date'''
	file = open(path + "log.txt", "rt")
	data = file.read()
	file2 = open(path + "logs/log_" + currentDate() + ".txt", "wt")
	file2.write(data)
	file2.close()
	file.close()

lastRunHadForts = False

#main
while True:
	if checkIfProcessRunning("Forts.exe"):
		lastRunHadForts = True
		#print("condition 1")
		time.sleep(2)
	elif lastRunHadForts == True:
		#print("condition 2")
		time.sleep(1)
		saveLog()
		lastRunHadForts = False
		time.sleep(20)
	else:
		#print("condition 3")
		time.sleep(60)