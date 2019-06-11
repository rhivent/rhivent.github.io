import socket
s = socket.socket()
host = socket.gethostbyname("localhost") # untuk mendapatkan alamat ip dari localhost
port = 80 # port dari server
s.connect((host, port))
print(s.recv(1024).decode())
s.close()

"""import _socket
#manverskh.blogspot.co.id
server= input("masukan=''") #contoh www.google.com
addr=_socket.gethostbyname(server)
print("ip {} = {}".format(server, addr))"""

# kata _socket utk python versi 3 sedangkan socket utk versi python 2.x
"""import socket
#manverskh.blogspot.co.id
server= input("masukan=''")
addr=socket.gethostbyname(server)
print("ip {} = {}".format(server, addr))"""

"""
import socket = berfungsi untuk mengimport socket supaya bisa menjalankan script .
server= input("masukan=''")  =berfungsi untuk memasukan nama web yang akan di lihat ipnya.
addr=_socket.gethostbyname(server)   = berfungsi untuk mendapatkan ip web yang dimasukan tadi.
print("ip {} = {}".format(server, addr)) =berfungsi untuk menampilkan ip server ."""