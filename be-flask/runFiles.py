#This is the main script, ensures that flask server is run before tester
import subprocess

subprocess.run("python flaskAPI.py & python dataTest.py", shell=True)