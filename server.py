import socket
s = socket.socket()
host = socket.gethostbyname("localhost") #localhost ini akan diconvert menjadi ip
port = 80 #port yang akan digunakan untuk server
s.bind((host, port))
s.listen(5)
while True:
    con, addr = s.accept()
    con.send("halo selamat datang di server kami".encode())
    con.close()
s.close()